import React from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'




function App() {

  return (
    <>
      <Link to='/' className='previous'><GrFormPrevious/></Link>    
    <section>
      <div className="container px-lg-5" data-aos="zoom-in-down"  data-aos-duration="1000">  
        <div className="row mx-3 mx-lg-5  p-3 p-lg-5 bg-dark rounded py-5" >
        <div className="col-12 text-center">
          <h1 className="h3 text-orange">FINANCE TOOL</h1>
          <h2 className="h4 text-light  mx-5">Regisro y membresía</h2>
        </div>

          <div className="col-12  text-center">

              <div className='row pt-5'>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">Nombre de usuario</label>
                    <input type="text" class="form-control " placeholder="Ingrese su nombre"/>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">País</label>
                    <input type="text" class="form-control " placeholder="Colombia"/>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">Correo</label>
                    <input type="email" class="form-control " placeholder="name@example.com"/>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">Contraseña</label>
                    <input type="password" class="form-control " placeholder="Ingrese una contraseña"/>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">Paquete de membresía</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>1 MES - 3 USD - 40% dto</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>   
  
            
          </div>

          <div className="col-12 text-center">
            <p className="text-green h6 text-start pt-5">*Envíe el valor correspondiente a su suscripción a la siguiente dirección y copie el hash de la transacción realizada.</p>
              <div className='row pt-3'>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">Dirección USDT TRX</label>
                    <input type="text" class="form-control " placeholder="Ingrese Dirección USDT"/>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div class="mb-3 text-start">
                    <label class="form-label text-orange">Hash de transaccion</label>
                    <input type="text" class="form-control " placeholder="Ingrese hash de transacción"/>
                  </div>
                </div>
              </div>   
              <button className='btn btn-warning h4 mt-5  px-5' >Registrarme</button>        
   
            
          </div>
        </div>                   
      </div>
    </section>
    </>
  )
}

export default App