
import './App.css';
import PersonBirthday from './components/PersonBirthday';
function App() {
  var user = [
    {"firstName": "Jane", "lastName":"Doe","age":45,"hairColor":"Black"},
  {"firstName": "John", "lastName":"Smith","age":88,"hairColor":"Brown"},]
  return (
    <div className="App">
   { user.map(person =>{
    return<PersonBirthday firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>})}
  </div>
  );
}

export default App;
