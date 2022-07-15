import { useState } from 'react'
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<div>
    <ToastContainer />
    <Header></Header>
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard></SalesCard>
        </div>
      </section>
    </main>
  </div>

  )
}

export default App
