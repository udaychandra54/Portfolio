
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Particles from 'react-particles-js'

function App() {
  return (
    <BrowserRouter>
    <Particles
     params={{
      particles: {
          numbers:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
           
          },
          shape:{
            type:'square',
            stroke:{
              width:6,
              color:'orange'
            }
          }
      }
  }} 
     />
    <Navbar />
    <Header />
    </BrowserRouter>
  );
}

export default App;
