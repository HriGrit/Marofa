import React from 'react';
import logo from "../../../assets/marofa-whitebg.svg";
import Navbar from '../../Navbar/navbar';

const DescriptionH = ({ prevStep, values, submit, handleChange }) => {
  console.log(values);

  const handlePrevStep = () => {
    prevStep();
  };

  const handleSubmit = () => {
    submit();
  };

  return (
    <section className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <div className="w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
        <section>
            <div className="flex items-center justify-center space-x-2 pb-0">
            <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
            <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
            </div>
            <hr className="h-1 bg-theme" />

            <div className="my-4 mx-4">
                <div>
                    <label className="text-lg font-semibold text-[#14415a]">
                    Draft Your Cover Letter for the Employer to See and Hire You
                    </label>
                    <textarea
                    className="w-full h-32 border-2 border-theme rounded-md p-4 bg-[#D8DADC]"
                    name="Text"
                    value={values?.Text}
                    onChange={handleChange("aboutHelper", "Text")}
                    placeholder="Tell us about yourself"
                    />
                </div>
            </div>
        </section>

        <div className="flex flex-row justify-between mt-6">
            <button onClick={handlePrevStep} className="bg-theme text-white rounded-full px-4 py-2" aria-label="Back">
            Back
            </button>
            <button onClick={handleSubmit} className="bg-theme text-white rounded-full px-4 py-2" aria-label="Submit">
            Submit
            </button>
        </div>
      </div>
    </section>
  );
};

export default DescriptionH;
