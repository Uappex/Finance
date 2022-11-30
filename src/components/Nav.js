import React from 'react'
import { BsMenuUp } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

let start = 'animate__fadeIn'
let end = 'animate__fadeOut'

function on() {
  let menuplus = document.getElementsByClassName('menuplus-dropdown')[0]
  menuplus.style.display = 'inline-block'
  menuplus.classList.remove('animate__animated', end, 'animate__faster')
  menuplus.classList.add('animate__animated', start, 'animate__faster')
}

function off() {
  let menuplus = document.getElementsByClassName('menuplus-dropdown')[0]
  menuplus.classList.remove('animate__animated', start, 'animate__faster')
  menuplus.classList.add('animate__animated', end, 'animate__faster')
  setTimeout(function() {
    menuplus.style.display = 'none'
  }, 300)
}

function Nav() {

  return (

    <div className='fixed-top'>        
      <div className="menuplus">
        <div  className="menuplus-button" onClick={() => on()}><BsMenuUp className='text-white'/></div>

        <div className="menuplus-dropdown container-fluid bg-dark  py-5 ">
          <div className='close' onClick={() => off()}><VscClose/></div>                 
            <div className="row pt-3">
      
                
              <div className="col-12  p-3">
                <h1 className='text-light h4'>Contacto</h1>  
                <div className='h4'>
                  <a className='text-green d-block' href="" target="_blank" rel="noreferrer">ejemplo@mail.com</a>
                </div>
              </div>  

               
              <div className="col-12 p-3">
                <a href="#info"><h1 className='text-light h4'>Herramientas financieras</h1>  </a>
              </div>     
              <div className="col-12  p-3">
                <Link to='/register'><h1 className='text-white h4'>Registrarme</h1>  </Link>
              </div>        
            </div>         
        </div>    

      </div>
    </div>
  )
}

export default Nav