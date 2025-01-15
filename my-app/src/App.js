import './App.css';
import { Greeting } from './Greeting';
import { Card, Footer, Header } from './StaticComps';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {/* Props */}
        <Greeting name={"Suriya"}></Greeting>
        <Card/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
