// Accessing props in function component
export function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}


// Accessing props in class component
// export class GreetingClass extends React.Componet {
//     render() {
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }