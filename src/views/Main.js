import React from 'react'
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Info from '../components/Info'
import Redes from '../components/Redes/Redes'


class Main extends React.Component {
    
    componentDidMount() {
      AOS.init()
    }   

  
    render() {

      return (
        <>
        <div className="bg"></div>
        <Nav/>           
        <Header/>
        <Info/>
        <Redes/>
        </>
      )
    }
  }

export default Main