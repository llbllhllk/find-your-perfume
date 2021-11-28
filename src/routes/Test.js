import Question from '../components/Question.js';
import Start from '../components/Start.js';
import StepOne from '../components/StepOne.js';
import StepTwo from '../components/StepTwo';
import PrevNextBtn from '../components/PrevNextBtn.js';
import { useState } from 'react';

function Test() {
  const [step, setStep] = useState(0);
  const [url, setUrl] = useState([]);
  
  const prevStep = () => {
    setStep(step - 1);
  }

  const nextStep = () => {
    setStep(step + 1);
  }

  return (
    <>
      {/* Question */}
      {step === 1 
      ? <Question 
          step={step}
          gauge={500 / 3}
          question={"선호하는 계절을 선택하세요."}
      /> : null}
      {step === 2 
      ? <Question 
          step={step}
          gauge={(500 / 3) * 2}
          question={"향수의 목적을 선택하세요."}
      /> : null}

      {/* Step */}
      {step === 0 ? <Start nextStep={nextStep} /> : null}
      {step === 1 
      ? <StepOne 
          prevStep={prevStep} 
          nextStep={nextStep}
        /> : null}
      {step === 2 
      ? <StepTwo 
          prevStep={prevStep} 
          nextStep={nextStep}
        /> : null}

      {/* PrevNextBtn */}
      {step >= 1 
      ? <PrevNextBtn 
        prevStep={prevStep}
        nextStep={nextStep}
      /> : null}
      
    </>
  );
}


export default Test;