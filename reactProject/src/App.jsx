import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx";
import Food from "./components/food.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/button.jsx";
import Student from "./components/Student.jsx";
function App() {

  return(
    <>
    <Student name="NorPeK" age={30} isStudent={false}/>
    <Student name="Rami" age={21} isStudent={true}/>
    <Student/>
    </>
  );
}

export default App
