import { HIGH_IMC_LIMIT, LOW_IMC_LIMIT, NORMAL_IMC_LIMIT } from '../../constants';
import './style.scss';

const Result = (props) => {

const {setStep, imc, setImc} = props;

const handleGobackButtonClick = () => {
    setStep('calculator')
    setImc(0);
}

const getImcResult = () => {
    switch (true){
        case imc < LOW_IMC_LIMIT:
            return 'Magreza';
        case imc < NORMAL_IMC_LIMIT:
            return "Normal";
        case imc < HIGH_IMC_LIMIT:
            return "Sobrepeso";
        case imc >= HIGH_IMC_LIMIT:
            return "Obesidade";
        default:
            return "Erro ao calcular";
    }
}


  return (
    <div className="Result">
        <div className="Result-Header">
            {getImcResult()}: {imc} kg/m²
        </div>
        <div className="Result-Content">
            <p>Seu imc é de <b>{imc}kg/m²</b>, segundo a Organização Mundial da Saúde (OMS) seu estado atual é <b>{getImcResult()}</b>.</p>
            <p>Para entender melhor, clique no <a href="https://bvsms.saude.gov.br/bvs/dicas/215_obesidade.html" target='_blank' rel="noreferrer">link</a></p>
            <button onClick={handleGobackButtonClick}>Calcular Novamente</button>
        </div>
    </div>
  );}


export default Result;
