// Accessing props in function component
export function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// default props 
Greeting.defaultProps = {
    name: 'Guest'
}


// Accessing props in class component
// export class GreetingClass extends React.Componet {
//     render() {
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }