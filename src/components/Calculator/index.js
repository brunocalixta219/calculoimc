import React, {useState} from 'react';
import './style.scss';

const Calculator = (props) => {

const {setStep, setImc} = props;

const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');

const onlyNumbersRegex = /^[0-9]*$/;

const handleInputChange = (event, setValue) => {
  const value = event.target.value;

  if (onlyNumbersRegex.test(value)) {
    setValue(value ? parseInt(value) : value);
  }
}

const handleClearButtonClick = () => {
  setWeight('');
  setHeight('');
}

const handleCalculateButtonClick = () => {
  const imc = weight / (height/100) ** 2;

  setImc(imc.toFixed(1))
  setStep('result')
}

const disableCalculateButton = () => {
  return weight === '' || height === ''
}

  return (
    <div className="Calculator">
      <header className="Calculator-header">
       Calculadora de IMC
      </header>
      <main className="Calculator-content">
        <div className="content-form">
          <label htmlFor='weight'>
            <span>Peso:</span> 
            <input 
              type="text" 
              id='weight' 
              value={weight}  
              maxLength={3}
              onChange={event => handleInputChange(event, setWeight)}/>
            kg
          </label>
          <label htmlFor='height'>
            <span>Altura:</span>
            <input 
              type="text" 
              id='height' 
              value={height} 
              maxLength={3}
              onChange={event => handleInputChange(event, setHeight)}/>
            m
          </label>
        </div>
        <div className="buttons">
          <button onClick={handleClearButtonClick}>
            Limpar
          </button>
          <button onClick={handleCalculateButtonClick} disabled={disableCalculateButton()}>
            Calcular
          </button>
        </div>
      </main>
    </div>
  );}


export default Calculator;
