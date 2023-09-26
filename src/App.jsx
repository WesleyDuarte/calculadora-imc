import { useState } from 'react'
import './app.css'

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calculaImc = () => {
    
    const imc = peso / (altura ** 2)
    console.log(imc)
    if(imc < 18.5){
      return(
      <p>O seu imc é {parseInt(imc)}, baixo peso</p>
      )
    }else if(imc > 18.6 && imc < 24.9){
      return(
        <p>O seu imc é {parseInt(imc)}, eutrofia(peso adequado)</p>
      )
    }else if(imc > 25 && imc < 29.9){
      return(
        <p>O seu imc é {parseInt(imc)}, sobre peso</p>
      )
    }else{
      return(
        <p>O seu imc é {parseInt(imc)}, obesidade</p>
      )
    }
  
  }
  

  return (
    <form className='container'>
      <h1>calculadora de IMC</h1>
      Peso:<input className='inputStyle' type="number" placeholder='insira o peso em kg' onChange={e => setPeso(parseFloat(e.target.value))}/>
      Altura:<input type="number" placeholder='insira a altura em metros' onChange={e => setAltura(parseFloat(e.target.value))}/><br/>
      {calculaImc()}
    </form>
  )
}

export default App
