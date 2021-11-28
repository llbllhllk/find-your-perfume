import Question from '../components/Question.js';
import StepOne from '../components/StepOne.js';
import PrevNextBtn from '../components/PrevNextBtn.js';
import { useState } from 'react';

function Step() {
  
  const [step, setStep] = useState(1);
  
  const nextStep = () => {
    setStep(step + 1);
  }

  return (
    <>
      <Question 
        step={step}
        gauge={500 / 3}
      />
      {step === 1 ? <StepOne nextStep={nextStep} /> : null}
      {/* {step === 2 ? <StepTwo nextStep={nextStep} /> : null} */}
      <PrevNextBtn />
    </>
  );
}


export default Step