import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

//components for user input
import GetStartedContent from './GetStartedContent';
import UploadImage from './UploadImage.jsx';
import ContactDetailsH from './Helper/ContactDetailsH.jsx';
import PersonalInfoH from './Helper/PersonalInfoH.jsx';
import ProfessionalInfoH from './Helper/ProfessionalInfoH.jsx';
import SkillsByH from './Helper/SkillsByH.jsx';
import JobPreferencesH from './Helper/JobPreferencesH.jsx';
import ContactDetailsE from './Employer/ContactDetailsE.jsx';
import JobOfferedE from './Employer/JobOfferedE.jsx';
import RequiredSkillsE from './Employer/RequiredSkillsE.jsx';
import CandidatePreferenceE from './Employer/CandidatePreferenceE.jsx';
import AboutEmployer from './Employer/AboutEmployer.jsx';


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
        personalInfoHelper: {
            firstName: '',
            lastName: '',
            religion: '',
            gender: '',
            nationality: '',
            dob: '',
            educationLvl: '',
        },
        professionalInfoHelper: {
            yearsOfExperience: '',
            jobType: '',
            jobStartDate: '',
            currentWorkStatus: '',
        },
        skillsRequiredEmployer: {
            languages: [],
            cookingSkills: [],
            mainSkills: [],
            otherSkills: [],
        },
        candidatePreferenceEmployer: {
            Location: [],
            Religion: [],
            Nationality: [],
            Contract: [],
            Gender: [],
            Age: [],
            Education: [],
            Experience: []
        },
        aboutEmployer: {
            EmployerType: "",
            FamilySize: "",
            Nationality: "",
            AlertViaEmail: "",
            Holidays: "",
            Accomodation: "",
            Salary: "",
        },
        jobPreferenceHelper: {
            accomodationPreference: '',
            dayOffPreference: '',
            expectedSalary: '',
            preferredJobLocation: '',
        },
        skillsSelectedByHelper: {
            Languages: [],

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

    const handleChangeMultiSelect = (section, field) => (selectedOptions) => {
        setFormData(prevFormData => {
            const safeSelectedOptions = Array.isArray(selectedOptions) ? selectedOptions : [];

            const values = safeSelectedOptions.map(option => option.value);

            return {
                ...prevFormData,
                [section]: {
                    ...prevFormData[section],
                    [field]: values
                }
            };
        });
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
                        values={formData.skillsRequiredEmployer}
                        handleChange={handleChangeMultiSelect}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }
            else if (formData.role === 'helper') {
                return (
                    <ProfessionalInfoH
                        values={formData.professionalInfoHelper}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }

        case 6:
            if (formData.role === 'employer') {
                return (
                    <CandidatePreferenceE
                        values={formData.candidatePreferenceEmployer}
                        handleChange={handleChangeMultiSelect}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }
            else if (formData.role === 'helper') {
                return (
                    <JobPreferencesH
                        values={formData.jobPreferenceHelper}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }

        case 7:
            if (formData.role === 'employer') {
                return (
                    <AboutEmployer
                        values={formData.aboutEmployer}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            }
            else if (formData.role === 'helper') {
                return (
                    <SkillsByH
                        values={formData.skillsSelectedByHelper}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />

                );
            }
        case 8:
            {
                return (
                    <Review
                        formData={formData}
                        prevStep={prevStep}
                        handleSubmit={handleSubmit}
                    />
                );
            }
        default:
            return <div>Unknown step</div>;
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