import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const Header = () => {
    // modify css:
    // style={<object>}
    // example: style={{color: red}}
    return (
        <header className="header">
            <h1>Fast Reặc Pizza Co.</h1>
        </header>
    );
};

const Menu = () => {
    return (
        <div className="menu">
            <h2>This is our menu</h2>
            <Pizza
                name={pizzaData[0].name}
                ingredients={pizzaData[0].ingredients}
                price={pizzaData[0].price}
                photoName={pizzaData[0].photoName}
                soldOut={pizzaData[0].soldOut}
            />
        </div>
    );
};

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;

    // bussiness logic:
    // isOpen ? alert("Welcome") : alert("Dit me may, cut");

    return (
        <footer className="footer">
            {new Date().toLocaleDateString()}. We're still open.
        </footer>
    );
};

const Pizza = (props) => {
    return (
        <div className="pizza">
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <p>{props.price}</p>
            <img src={props.photoName} alt={"Pizza " + props.name} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];
