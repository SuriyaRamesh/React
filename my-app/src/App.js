import './App.css';
import { Card, Footer, Header } from './StaticComps';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Card/>
        <Card/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
