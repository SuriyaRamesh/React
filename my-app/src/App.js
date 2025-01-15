import './App.css';
import { Greeting } from './Greeting';
import { Card, Footer, Header } from './StaticComps';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {/* Props */}
        <Greeting />  {/* default props apply here */}
        <Greeting name="Suriya" />
        <Card/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
