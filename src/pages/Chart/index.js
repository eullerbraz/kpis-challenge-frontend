import { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveBar } from '@nivo/bar';
import { useNavigate, useParams } from 'react-router-dom';

import getDataFormated from '../../helpers/getDataFormated';
import questions from '../../data/questions';
import logo from '../../images/logo.svg';
import Footer from '../../components/Footer';


const ENDPOINT = 'https://kpis-backend-eullerbraz.herokuapp.com/answers';

const Chart = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const question = questions.find((question) => question.id === Number(id));
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const getAnswers = async () => {
      const { data } = await axios.get(ENDPOINT);

      setAnswers(data);
    }

    getAnswers();
  }, []);

  useEffect(() => {
    if(question.id === questions.length) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [question]);

  const handleBack = () => {
    if (question.id === 1) {
      navigate("/thanks");
    } else {
      navigate(`/chart/${question.id - 1}`);
    }
  }

  const handleNext = () => {
    if(!isFinished) {
      navigate(`/chart/${question.id + 1}`);
    }
  }

  const data = getDataFormated(answers, question.field);

  return (
    <>
    <main>
      <img
        src={logo}
        alt="Company logo"
        className="chart-logo"
      />
      <div style={{ height: '400px', margin: '50px' }}>
        <h1>
          { question.title }
        </h1>
        <ResponsiveBar
          data={ data }
          indexBy={ question.field }
          keys={['count']}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.3}
          colors={['#F17918']}
          isInteractive={false}
          enableLabel={false}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            // https://github.com/plouc/nivo/issues/144
            format: e => Math.floor(e) === e && e,
            legend: 'Respostas',
            legendPosition: 'start',
            legendOffset: -40,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legend: question.field === 'satisfaction' ? 'Satisfação' : 'Quantidade de pessoas',
            legendPosition: 'start',
            legendOffset: 32,
          }}
        />
      </div>
      <div className="buttons-container">
        <button
          onClick={ handleBack }
          className="button back-button"
        >
          Voltar
        </button>
        <button
          onClick={ handleNext }
          className="button next-button"
          disabled={ isFinished }
        >
          Avançar
        </button>
      </div>
      <div className="completed-questions-container">
        <span
          className="completed-questions-text"
        >
          Gráficos Analisados
        </span>
        <div>
          {
            questions.map((_, index) => {
              const className = index + 1 <= question.id ?
              "chart-check completed" : "chart-check";
              return (
                <span key={ index } className={ className }></span>
              );
            })
          }
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
}

export default Chart;
