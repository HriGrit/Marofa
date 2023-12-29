import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

//components for user input
import GetStartedContent from './GetStartedContent';
import UploadImage from './UploadImage.jsx';
import ContactDetailsH from './ContactDetailsH.jsx';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [currentUser, setCurrentUser] = useState(null);
    const [formData, setFormData] = useState({
        role: '',
        image: null,
        contactDetailsHelper: {
            mobileNo: '',
            email: '',
            altMobileNo: '',
            waMobileNo: '',
        },
        education: {
            school: '',
            degree: '',
            // Add other education fields
        },
        // Add other form sections as needed
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSetRole = (role) => {
        setFormData({ ...formData, role });
        nextStep();
    };

    const handleNextStep = async () => {
        if (formData.image) {
            // Implement Firebase Storage logic here to upload the image and update the formData
            // For now, let's assume you have uploaded the image and updated the formData
            // using setFormData({...formData, image: imageUrl});
            nextStep();
        } else {
            console.error('Please upload an image');
        }
    };

    const handleChange = (section, field) => (e) => {
        const updatedSection = { ...formData[section], [field]: e.target.value };
        setFormData({ ...formData, [section]: updatedSection });
    };

    const handleSubmit = async () => {
        if (!currentUser) {
            console.error('No user is signed in.');
            return;
        }

        try {
            await addDoc(collection(firestore, 'users', currentUser.uid, 'formData'), {
                ...formData,
            });
            console.log('Data saved successfully!');
        } catch (error) {
            console.error('Error writing document: ', error);
        }
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    switch (step) {
        case 1:
            return (
                <GetStartedContent
                    setRole={handleSetRole}
                />
            );
        case 2:
            return (
                <UploadImage
                    setFormData={setFormData}
                    formData={formData}
                    nextStep={handleNextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <ContactDetailsH
                    setFormData={setFormData}
                    formData={formData}
                    values={formData.contactDetailsHelper}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 4:
            return (
                <Education
                    values={formData.education}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 5:
            return (
                <Review
                    formData={formData}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
            );
        default:
            return <div>Unknown step</div>;
    }
};

const PersonalInfo = ({ values, handleChange, nextStep }) => (
    <form>
        <input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange('personalInfo', 'name')}
        />
        <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange('personalInfo', 'email')}
        />
        {/* Add other inputs as needed */}
        <button type="button" onClick={nextStep}>Next</button>
    </form>
);

const Education = ({ values, handleChange, nextStep, prevStep }) => (
    <form>
        <input
            type="text"
            placeholder="School"
            value={values.school}
            onChange={handleChange('education', 'school')}
        />
        <input
            type="text"
            placeholder="Degree"
            value={values.degree}
            onChange={handleChange('education', 'degree')}
        />
        {/* Add other inputs as needed */}
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
    </form>
);

const Review = ({ formData, prevStep, handleSubmit }) => (
    <div>
        <h2>Review Your Information</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
);

export default MultiStepForm;