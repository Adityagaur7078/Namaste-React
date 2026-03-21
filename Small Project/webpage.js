import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div className="navbar">
        <img src="https://imgs.search.brave.com/Z5Q-Bjeb6aYMFDG-R6kiNQKirzDwDG34YBK9x0fqh9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFdHdr/b09oc0EvMS8wLzE2/MDB3L2NhbnZhLXll/bGxvdy1hbmQtYmxh/Y2stZnVuLW1vZGVy/bi1yZXN0YXVyYW50/LWZvb2QtbG9nby1W/RUFveUpQMHU3QS5q/cGc"></img>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Sign In</li>
        </ul>
    </div>
);

const Main = () => (
    <main>
        <div className="card">
            <img src="pizza.jpg" alt="Pizza Hut" className="card-img" />

            <div className="card-content">
                <h2 className="title">Pizza Hut</h2>

                <div className="rating-row">
                    <span className="rating">★ 4.3</span>
                    <span className="time">• 45–50 mins</span>
                </div>

                <p className="category">Pizzas</p>
                <p className="location">Chhindwara City</p>
            </div>
        </div>
    </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

root.render(<App />)