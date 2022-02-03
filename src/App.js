import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';

function App() {
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = (e) =>{
    setCity(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response =>response.json()
    ).then(data=>{
      const Kelvin = data.main.temp;
      const celsius = Kelvin - 273.15
      setResult("Temperature at"+" " +city+ " \n " +Math.round(celsius)+"C")
    })
  }
  return (
    <div className="App">
      <center>
        <h4>Weather App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" name="city" value={city} onChange={changeHandler}/><br/>
          <input type="submit" value="Get temperature"/>
        </form>
        <h1>{result}</h1>
      </center>
    </div>
  );
}

export default App;
