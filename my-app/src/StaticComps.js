// simple static header component
export const Header = () => {
    return (
        <header>
            <h1>My Static React APP</h1>
            <p>A pratice project for learning React</p>
        </header>
    )
}


// simple static footer component
export const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 My Website. All Rights Reserved.</p>
        </footer>
    )
}

// simple static card component
export const Card = () => {
    return (
        <div className="card">
            <img src="https://picsum.photos/400/180" alt="Random" />
            <h3>Card Titile</h3>
            <p>This is a simple card component for pratice</p>
        </div>
    )
}