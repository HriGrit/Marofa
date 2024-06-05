import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { firestore, auth } from '../../utils/firebase';

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
import JobDescription from './Employer/JobDescription.jsx';
import WorkExperienceH from './Helper/WorkExperienceH.jsx';
import EducationH from './Helper/EducationH.jsx';
import DescriptionH from './Helper/DescriptionH.jsx';

// import isLoggedInUserDocExists from '../../utils/isLoggedInUserDocExists.js';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [currentUser, setCurrentUser] = useState(null);

    const [accountExist, setAccountExist] = useState(false);
    const [roleExist, setRoleExist] = useState("");

    const checkAccount = async () => {
        if (!currentUser) {
            return;
        }
    
        const userId = currentUser.uid;
        const helperDocRef = doc(firestore, 'documents', `${userId}_helper`);
        
        const helperDocSnap = await getDoc(helperDocRef);
    
        if (helperDocSnap.exists()) {
            setAccountExist(true);
            setRoleExist("helper");
            return;
        } else {
            const employerDocRef = doc(firestore, 'documents', `${userId}_employer`);
            const employerDocSnap = await getDoc(employerDocRef);
            
            if (employerDocSnap.exists()) {
                setAccountExist(true);
                setRoleExist("employer");
                return;
            }
        }
    }
    checkAccount();

    const [formData, setFormData] = useState({
        role: '',
        image: null,
        contactDetailsHelper: {
            mobileNo: '',
            email: '',
            altMobileNo: '',
            waMobileNo: '',
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
        aboutJobEmployer: {
            jobTitle: "",
            jobDescription: "",
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
        aboutHelper:{
            Text: "",
        },
        jobPreferenceHelper: {
            accomodationPreference: "",
            dayOffPreference: "",
            expectedSalary: "",
            preferredJobLocation: "",
        },
        skillsSelectedByHelper: {
            languages: [],
            cookingSkills: [],
            mainSkills: [],
            otherSkills: [],
        },
        workExperienceHelper: {
            Experience: "",
            Skills: "",
            Country: "",
            StartDate: "",
            ReferenceLetter: "",
        },
        educationHelper: {
            LevelofEducation: "",
            Completed: "",
            Duration: "",
            Country: ""
        },
        Applications: {
            Id: "",
        }
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
            toast.error('No user is signed in.', {
                duration: 4000,
                position: 'top-right',
            });
            return;
        }

        const roleSpecificData = formData.role === 'helper' ?
            Object.keys(formData).reduce((acc, key) => {
                if (key.endsWith('Helper') || key === 'role' || key === 'image') {
                    acc[key] = formData[key];
                }
                return acc;
            }, {}) :
            Object.keys(formData).reduce((acc, key) => {
                if (key.endsWith('Employer') || key === 'role' || key === 'image') {
                    acc[key] = formData[key];
                }
                return acc;
            }, {});
        try {
            if (accountExist) {
                const documentRef = doc (firestore, "documents", `${currentUser?.uid}_${roleExist}`);
                await deleteDoc(documentRef);
                console.log('Document deleted successfully!');
            }
            const docId = `${currentUser?.uid}_${formData.role}`;

            const docRef = doc(firestore, 'documents', docId);
            
            await setDoc(docRef, {
            ...roleSpecificData,
            createdAt: Timestamp.now(),
            role: formData.role,
            userId: currentUser?.uid,
            });

            toast.success('Data saved successfully!', {
                duration: 4000,
                position: 'top-right',
            });

            console.log('Data saved successfully!');
            window.location.href = '/';
        } catch (error) {
            console.error('Error writing document: ', error);
            toast.error('Error writing document: ', {
                duration: 4000,
                position: 'top-right',
            });
        }
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    switch (step) {
        case 1:
            return (
                <GetStartedContent
                    setRole={handleSetRole}
                    accountExist={accountExist}
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
                        handleChange={handleChangeMultiSelect}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />

                );
            }
        case 8:
            if (formData.role === 'employer') {
                return (
                    <JobDescription
                        values={formData.aboutJobEmployer}
                        handleChange={handleChange}
                        prevStep={prevStep}
                        submit={handleSubmit}
                    />
                );
            } else if (formData.role === 'helper') {
                return(
                    <WorkExperienceH
                        values={formData.workExperienceHelper}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        handleChanges={handleChangeMultiSelect}
                        nextStep={nextStep}
                    />
                )
            } 
        case 9: 
            if (formData.role === 'helper') {
                return (
                    <EducationH
                        values={formData.educationHelper}
                        handleChange={handleChange}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        />
                )
            }
        case 10:
            if (formData.role === 'helper') {
                return (
                    <DescriptionH
                        values={formData.aboutHelper}
                        handleChange={handleChange}
                        prevStep={prevStep}
                        submit={handleSubmit}
                        />
                )
            }
        default:
            return <div>Unknown step</div>;
    }
};


const Review = ({ formData, prevStep, handleSubmit }) => (
    <div>
        <Toaster />
        <h2>Review Your Information</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
);

export default MultiStepForm;