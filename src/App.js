import React, {useState} from 'react'
import './styles/App.scss';
import {Calculator, Result} from './components';

function App() {
  const [step, setStep] = useState('calculator');
  const [imc, setImc] = useState(0);

  return (
      step === 'calculator' ? <Calculator setStep={setStep} setImc={setImc}/> : <Result setStep={setStep} imc={imc} setImc={setImc}/>
  );
}

export default App;
