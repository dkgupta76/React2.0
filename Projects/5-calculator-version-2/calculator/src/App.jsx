
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [calVal , setCalVal] = useState("");
  const onBUttonClick = (buttonText) => {
    console.log(buttonText);
    if(buttonText === 'C'){
      setCalVal("");
    }else if (buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

  }

  return (
    <div className={styles.calculator}>
      <Display displayValue = {calVal}></Display>
      <ButtonContainer onButtonClick = {onBUttonClick}></ButtonContainer>
    </div>
  );
}

export default App;
