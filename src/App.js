import './App.css';
import Question from './Question';

function App() {
  return (
    <div className="App">
      <h1>FAQ/Accordion</h1>
      <div>
        <h2>Frequently Asked Question</h2>
        {questions.map((question) => (
         <Question key={question.id} question={question}/> 
        ))}
      </div> 
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: "What is Formula 1?",
    info: "Formula One (more commonly known as Formula 1 or F1) is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile (FIA)."
  },
  {
    id: 2,
    title: "Who has won the most Fourmula 1 World Championsip?",
    info: "Currently Michael Schumacher and Lewis Hamilton jointly holds the records of winning 7 world championship title."
  },
  {
    id: 3,
    title: "Whos is the reigning champion?",
    info: "Current Formula world champion is Dutch driver Max Verstappen who drives for Red Bull Team"
  },

]

export default App;
