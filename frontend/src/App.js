
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Payment from "./Components/Payment";
import Home from "./Components/Home";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/SignUp';
import PaymentRes from './Components/PaymentRes';
function App() {
  const [obj,setObj]=useState({});
  return (
    <div className="App">
      
      <Routes>
        <Route path="/payment" element={<Payment obj={obj}/>}/>
        <Route path="/login" element={<Login setObj={setObj}/>} />
        <Route path="/paymentres" element={<PaymentRes/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Signup />} />

        
      </Routes>
    </div>
  );
}

export default App;
