import './App.css';
import { Greeting, UserList, UserProfile } from './propsFund';
import { Card, Footer, Header } from './StaticComps';
import React from 'react';

const user = { name: "Ramya", age:29 };

const usersData = [
  { name: 2, age: 30 },   // number 2 is assinged to name prop
  { name: "Bob", age: 25 },
  { name: "Charlie", age: "Alice" }  // string "Alice" is assigned to age
];

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {/* Props */}
        <Greeting />
        <Greeting name="Alice" />
        {/* <Greeting name={30} /> */}
        <UserProfile user={user} />
        <UserList users={usersData} />
        <Card/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
