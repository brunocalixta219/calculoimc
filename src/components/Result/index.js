import './style.scss';

const Result = (props) => {

const {setStep, imc, setImc} = props;

const handleGobackButtonClick = () => {
    setStep('calculator')
    setImc(0);
}


  return (
    <div className="Result">
        Resultado {imc}
        <button onClick={handleGobackButtonClick}>Voltar</button>
    </div>
  );}


export default Result;
