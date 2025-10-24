import './App.css';
import ComponentA from './Components/Component 1/ComponentA';
import Text from './Components/Component 2/Text';
import Navbar from './NavigationBar/NavBar';
import ComponentC from './Components/Component 3/ComponentC';
import { useState } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);

  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className='grid-container'>
        <section className="component1-container">
          <Text />
        </section>

        <section className="component2-container">
          <ComponentA inputArray={inputArray} setInputArray={setInputArray} />
        </section>

        <section className="component3-container">
          <ComponentC inputArray={inputArray}/>
        </section>
      </main>
    </>
  );
}

export default App;
