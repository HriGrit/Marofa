import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

//components for user input
import GetStartedContent from './GetStartedContent';
import UploadImage from './UploadImage.jsx';
import ContactDetailsH from './ContactDetailsH.jsx';
import JobOfferedE from './JobOfferedE.jsx';
import PersonalInfoH from './PersonalInfoH.jsx';
import ContactDetailsE from './ContactDetailsE.jsx';
import RequiredSkillsE from './RequiredSkillsE.jsx';
import CandidatePreferenceE from './CandidatePreferenceE.jsx';

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
        contactDetailsEmployer: {
            mobileNo: '',
            email: '',
            altMobileNo: '',
            waMobileNo: '',
        },
        jobOfferedEmployer: {
            jobLocationCountry: '',
            jobLocationCity: '',
            jobStartDate: '',
            jobFlexibility: '',
            jobType: '',
            jobPosition: '',
        },
        requiredSkillsEmloyer: {
            language: [],
            cookingSkills: '',
            mainSkills: '',
            otherSkills: '',
        },
        personalInfoHelper: {
            firstName: '',
            lastName: '',
            religion: '',
            gender: '',
            nationality: '',
            dob: '',
            altMobileNo: '',
            waMobileNo: '',

        },
        candidatePreferenceEmployer: {
            nationality: '',
            gender: '',
            age: '',
            experience: '',
            educationLevel: '',
            religion: '',
            currentContractStatus: '',
        },
        aboutEmployer: {
            employerType: '',
            nationality: '',
            familySize: '',
            monthlySalary: '',
            daysOffOffered: '',
            accomodation: '',
            recieveEmails: '',
        },
        education: {
            school: '',
            degree: '',
        },
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
            if (formData.role === 'helper') {
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
            }
            else if (formData.role === 'employer') {
                return (
                    <ContactDetailsE
                        setFormData={setFormData}
                        formData={formData}
                        values={formData.contactDetailsEmployer}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }
            return <div>Unknown role</div>;
        case 4:
            if (formData.role === 'employer') {
                return (<JobOfferedE
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={formData.jobOfferedEmployer}
                    handleChange={handleChange}
                />);
            }
            else if (formData.role === 'helper') {
                return (
                    <PersonalInfoH
                        values={formData.personalInfoHelper}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }
        case 5:
            if (formData.role === 'employer') {
                return (
                    <RequiredSkillsE
                        values={formData.requiredSkillsEmloyer}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                    />
                );
            }
        case 6:
            if (formData.role === 'employer') {
                return (
                    <CandidatePreferenceE
                        nextStep={nextStep}
                        prevStep={prevStep}
                        values={formData.candidatePreferenceEmployer}
                        handleChange={handleChange}
                    />
                )
            }
        default:
            return (
                <Review
                    formData={formData}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
            );
    }
};

const Review = ({ formData, prevStep, handleSubmit }) => (
    <div>
        <h2>Review Your Information</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
);

export default MultiStepForm;