import React from 'react';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
export const About = () => {

    const navigate = useNavigate();
    const goToHome = () =>{
        navigate('/');
    }
    const goToBack = () => {
        navigate(-1);
    }
  return (
    <div>
        <section>
            <p>About Page </p>
            <button onClick={ () => goToHome()}>Go Back Home </button>
            <button onClick={ () => goToBack()}>Go Back </button>

        </section>
    </div>
  )
}
