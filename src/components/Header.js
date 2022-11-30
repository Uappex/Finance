import React from 'react'
import img from './../img/imga.png'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'


function App() {

  return (
    <>
    <section>
      <div className="container-fluid px-lg-5" data-aos="zoom-in-down"  data-aos-duration="1000">  
        <div className="row px-lg-5" style={{ display: 'flex', alignItems: 'center'}}>
          <div className="col-12 col-lg-5 text-center">
            <img src={img} alt='' className="img-header"/>
          </div>
          <div className="col-12 col-lg-7 text-center">
            <h1 className="h1 text-orange">FINANCE TOOL</h1>
            <p className="p text-light p-lg-5 mx-5">Conoce la herramienta ideal para manejar tus finanzas y calcular tu rentabilidad en cualquier tipo de inversión.</p>
            <div className='row'>
              <div className='col-6 ps-5 hover px-3'>
                <div className='bg-dark text-white p-3 pt-0 rounded h4'>
                  <i className="h2 d-block mb-3"><AiFillApple/></i>
                  Descargar para Iphone
                </div>
              </div>
              <div className='col-6 pe-5 hover px-3'>
                <div className='bg-dark text-white p-3 pt-0 rounded h4'>
                  <i className="h2 d-block mb-3"><AiFillAndroid/></i>
                  Descargar para Android
                </div>
              </div>
            </div>
            <a href="#info" className="text-white h1 mt-5 hover ">
              <BiChevronDown/>
            </a>
     
          </div>
        </div>                   
      </div>
    </section>
    </>
  )
}

export default App