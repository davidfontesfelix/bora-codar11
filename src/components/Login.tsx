import logo from '../assets/logo.svg'
import eye from '../assets/eye.svg'
import eyeActive from '../assets/eye-active.svg'
import './Login.css'

import { useState } from 'react'


export default function Login(){
  const [image, setImage] = useState(eye)
  const [clicked, setClicked] = useState('password')
  function handleClick(){
    if(clicked === 'password'){
      setClicked('text')
      setImage(eyeActive)
    } else {
      setClicked('password')
      setImage(eye)
    }
  }
  return(

    <div className="w-screen h-screen flex justify-center items-center">
      <section className="bg-gray-50" style={{ width: '704px', height: '900px'}}>
        <div className="screen-login pl-28">
          <img src={logo} alt="" className='mt-10' />
          <h1 className='text-4xl font-bold mt-28'>Acesse a plataforma</h1>
          <p className='text-base mt-4' style={{width: '351px'}}>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>

          <div className="form flex flex-col">
            <label className='mt-10 text-sm'><span className='text-gray-900 font-semibold'>E-mail</span> <br/>
              <input type="email" placeholder='Digite seu e-mail' className='Input mt-2 pl-3 w-96 rounded outline-none border-solid border-2 border-gray-200  hover:border-purple-800 focus:border-purple-800' style={{height:
            '53px'}} />
            </label>
            <label className='flex gap-56 mt-4 text-sm font-semibold'><span className='text-gray-900 font-semibold'>Senha</span> <h4 className='' style={{color: '#7C3AED'}}>Esqueceu a senha?</h4>
            </label>
            <input type={clicked} placeholder='Digite sua senha' className='Input mt-2 pl-3 w-96 rounded text-sm outline-none
            border-solid border-2 border-gray-200  hover:border-purple-800 focus:border-purple-800' style={{height:
            '53px'}} />
            <img src={image} alt="" onClick={handleClick} className='w-5 h-5 absolute'  style={{marginTop: '182px', marginLeft: '350px'}}/>
              
              <button className='w-96 h-14 mt-8 rounded text-base text-gray-50 font-bold bg-purple-700 hover:bg-purple-400'>
                Entrar
              </button>
          </div>

          <footer className='flex gap-2 font-bold mt-8'>
            <h4>Ainda não tem uma conta?</h4>
            <h3 style={{color: '#7C3AED'}} className="cursor-pointer hover:underline">inscreva-se</h3>
          </footer>
        </div>
      </section>
      <article className='background' style={{width: '736px', height: '900px'}}>
      </article>
    </div>
  )
}