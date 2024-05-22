import React from 'react'
import { Header } from './Header'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const goToAbout = () =>{
    navigate('/about')
  }
  const goToBack = () => {
    navigate(-1);
  }
  
  return (
    <>
    <section>
      <p>Login page</p>
      <button onClick={ () => goToAbout() }>Go to About </button>
      <button onClick={ () => goToBack()}>Go Back </button>
    </section>
    </>
  )
}
