import './App.css';
import { Greeting, UserProfile } from './propsFund';
import { Card, Footer, Header } from './StaticComps';

const user = { name: "Ramya", age:29 }

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {/* Props */}
        <Greeting />  {/* default props apply here */}
        <Greeting name={23} />
        <UserProfile user={user} />
        <Card/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
