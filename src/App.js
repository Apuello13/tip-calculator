import './App.css';
import logo from './assests/img/logo.svg';
import bill from './assests/img/icon-dollar.svg';
import people from './assests/img/icon-person.svg';
import {useState} from "react";

function App() {
  const [bills, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const defineTip = (e) => setTip(e.target.value);
  const [peoples, setPeople] = useState('');

  return (
    <div className="App">
      <div className="head">
        <img src={logo}/>
      </div>
      <div>
        <div className="container">
          <div style={{marginBottom: 30}}>
            <label className="text">Bill</label>
            <div className="container-i">
              <img src={bill}/>
              <input type="number" className="quantity"
                onChange={e => setBill(e.target.value)}/>
            </div>
          </div>
          <div style={{marginBottom: 30}}>
            <label className="text">Select Tip %</label>
            <div className="container-b" style={{ marginTop: 10 }}>
              <button onClick={defineTip} value={5} className="btn">5%</button>
              <button onClick={defineTip} value={10} className="btn">10%</button>
            </div>
            <div className="container-b">
              <button onClick={defineTip} value={15} className="btn">15%</button>
              <button onClick={defineTip} value={25} className="btn">25%</button>
            </div>
            <div className="container-b">
              <button onClick={defineTip} value={50} className="btn">50%</button>
              <input onChange={defineTip} type="number"
                     className="btn custom active" placeholder="Custom"/>
            </div>
          </div>
          <div style={{marginBottom: 30}}>
            <label className="text">Number of People</label>
            <label className="error-t" style={peoples == '0' ? {display: "block"} : {display: "none"}}>
              Can’t be zero
            </label>
            <div className={peoples == '0' ? "container-i error" : "container-i"}>
              <img src={people}/>
              <input type="number" style={{width: "96%"}} className="quantity"
                onChange={e => setPeople(e.target.value)}/>
            </div>
          </div>
          <div className="container-r">
            <div className="container-b" style={{marginBottom: 20}}>
              <p className="digit-t">Tip Amount <br/>
                <span>/ person</span>
              </p>
              <p className="digit">${(((bills / peoples) * tip) /100).toFixed(2) == 'NaN' ?
                  (0).toFixed(2) : (((bills / peoples) * tip) /100).toFixed(2)}</p>
            </div>
            <div className="container-b" style={{marginBottom: 40}}>
              <p className="digit-t">Total<br/>
                <span>/ person</span>
              </p>
              <p className="digit">${peoples == '0' ?
                  0.00 :
                  ((((bills / peoples) * tip) /100) + bills / peoples).toFixed(2)}</p>
            </div>
            <button className="reset">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
