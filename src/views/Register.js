import React from 'react'
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css'
import Register from '../components/Register'
import Redes from '../components/Redes/Redes'


class Main extends React.Component {
    
    componentDidMount() {
      AOS.init()
    }   

  
    render() {

      return (
        <>
        <div className="bg"></div>          
        <Register/>
        <Redes/>
        </>
      )
    }
  }

export default Main