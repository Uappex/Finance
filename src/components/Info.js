import React from 'react'
import img from './../img/imgb.png'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <section id="info">
      <div className="container-fluid px-lg-5" data-aos="zoom-in-down"  data-aos-duration="1000">  
        <div className="row px-lg-5" style={{ display: 'flex', alignItems: 'center'}}>
        
          <div className="col-12 col-lg-7 text-center">
            <h1 className="h2 mb-5 text-orange">Herramientas financieras</h1>

            <div class="bg-dark text-white p-lg-5 p-3 rounded" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button h4 p-3 text-green" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Calculadora Interés compuesto <i className="ms-2"><BiChevronDown/></i>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start ps-5 text-sm p">
                    Conoce la herramienta ideal para manejar tus finanzas y calcular tu rentabilidad en cualquier tipo de inversión.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button h4 p-3 text-green collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                    Simulador retiros <i className="ms-2"><BiChevronDown/></i>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start ps-5 text-sm p">
                    Conoce la herramienta ideal para manejar tus finanzas y calcular tu rentabilidad en cualquier tipo de inversión.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button h4 p-3 text-green collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                    Conversor monedas <i className="ms-2"><BiChevronDown/></i>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start ps-5 text-sm p">
                    Conoce la herramienta ideal para manejar tus finanzas y calcular tu rentabilidad en cualquier tipo de inversión.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" >
                  <button class="accordion-button h4 p-3 text-green collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                    Sistemas binarios <i className="ms-2"><BiChevronDown/></i>
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" >
                  <button class="accordion-button h4 p-3 text-green collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false">
                    Cuadros comparativos <i className="ms-2"><BiChevronDown/></i>
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" >
                  <button class="accordion-button h4 p-3 text-green collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false">
                    Señales traidig <i className="ms-2"><BiChevronDown/></i>
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>    

            <Link className='btn btn-warning h3 mt-5 rounded px-5' to='/register'>
              Registrarme
            </Link>
          </div>

          <div className="col-5 text-center d-none d-lg-block">
            <img src={img} alt='' className="img-info"/>
          </div>
        </div>                   
      </div>
    </section>
    </>
  )
}

export default App