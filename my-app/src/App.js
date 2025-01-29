import './App.css';
import { Greeting, UserList, UserProfile, Wrapper } from './propsFund';
import { Footer, Header } from './StaticComps';
import React from 'react';
import { Dropdown, DropdownContent, DropdownOption, DropdownTrigger } from './dropdown';
import { Modal, Button, Card } from './childrenProps';

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

        <Modal onClose={() => alert('Modal closed!')}>
            <h2>Modal Title</h2>
            <p>This is the modal body content.</p>
        </Modal>

        <div>
            <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
            <Button onClick={() => alert('Another button clicked!')}>
                <span role="img" aria-label="star">⭐</span> Star
            </Button>
        </div>

        <Card showContent={true}>
          <h2>This is card titile</h2>
        </Card>

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
        <Wrapper>
            <h1>Hello, World!</h1>
            <p>This is a simple example of children props.</p>
        </Wrapper>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
