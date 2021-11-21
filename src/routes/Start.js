import Logo from '../components/Logo.js';
import SelectButton from '../components/SelectButton';
import styles from '../assets/styles/Home.module.css';

function Start() {
  return (
    <div>
      <div>
        <Logo />
        <blockquote>
          <p>
            “Perfume<br/>
            is the<br/>
            mirror of<br/>
            your soul.”
          </p>
          <cite>
            — Frédéric Malle
          </cite>
          <p>당신에게 어울리는 향수를 찾을 수 있도록 알려주세요.</p>
        </blockquote>
        <SelectButton />
      </div>
  </div>
  );
  
}

export default Start