import PropTypes from 'prop-types';

// Accessing props in function component
export function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// default props 
Greeting.defaultProps = {
    name: 'Guest'
}

// Prop types
Greeting.propTypes = {
    name: PropTypes.string.isRequired
}


// Accessing props in class component
// export class GreetingClass extends React.Componet {
//     render() {
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }


export function UserProfile(props) {
    return (
        <div>
            <h2>Name: {props.user.name}</h2>
            <h2>Age: {props.user.age}</h2>
        </div>
    )
}

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name} - {user.age} years old</li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    })
  ).isRequired
};


export function Card({ children }) {
  console.log("children :", children);
  return (
    <div className="card">
      {children[0]}
    </div>
  );
}

export function Wrapper({ children }) {
    return <div className="wrapper">{children}</div>;
}