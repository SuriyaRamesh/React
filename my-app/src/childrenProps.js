export function Modal({ children, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
}

export function Card({ children, showContent }) {
    return <div className="card">{showContent ? children : null}</div>;
}