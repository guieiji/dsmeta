import { useState } from 'react'
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"


function App() {
  return (<div>
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
