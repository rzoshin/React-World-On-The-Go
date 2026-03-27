import './App.css'
import Countries from './components/Countries/Countries'
import { Suspense } from 'react';

function App() {
  
  const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());

  return (
    <div>
      <h1>React World on the go</h1>

      <Suspense fallback={<p>Nadir vai loading</p>}>
        <Countries countriesPromise = {countriesPromise}>

        </Countries>
      </Suspense>

    </div>
  )
}

export default App
