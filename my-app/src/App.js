import './App.css';
import { Greeting, UserList, UserProfile, Card } from './propsFund';
import { Footer, Header } from './StaticComps';
import React from 'react';
import { Dropdown, DropdownContent, DropdownOption, DropdownTrigger } from './dropdown';

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

        <Dropdown>
          <DropdownTrigger>Options</DropdownTrigger>
          <DropdownContent>
            <DropdownOption onClick={() => alert('Profile clicked')}>Profile</DropdownOption>
            <DropdownOption onClick={() => alert('Settings clicked')}>Settings</DropdownOption>
            <DropdownOption onClick={() => alert('Logout clicked')}>Logout</DropdownOption>
          </DropdownContent>
        </Dropdown>;
        {/* Props */}
        <Greeting />
        <Greeting name="Alice" />
        {/* <Greeting name={30} /> */}
        <UserProfile user={user} />
        <UserList users={usersData} />
        {/* <Card/> */}
        {/* <Card>
          <h2>Title</h2>
          <p>Content goes here</p>
        </Card> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
