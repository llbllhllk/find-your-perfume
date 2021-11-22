import Question from '../components/Question.js';
import StepOne from '../components/StepOne.js';

function Step() {
  return (
    <>
      <Question 
        step={"1"}
        gauge={500 / 3}
      />
      <StepOne />
    </>
  );
}


export default Step