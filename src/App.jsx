import "./App.css"
import {Sidebar} from "./componests/Sidebar.jsx"
import { ProductCard } from "./componests/ProductCard.jsx";

const PRODUCTS = [
  { id: 1, title: "Pivo", price: "50 Kč", img: "/img/beer.png" },
  { id: 2, title: "Guláš", price: "180 Kč", img: "/img/beer.png" },
  { id: 3, title: "Kofola", price: "40 Kč", img: "/img/beer.png" },
  { id: 4, title: "Kofola", price: "40 Kč", img: "/img/beer.png" },
  { id: 5, title: "Kofola", price: "40 Kč", img: "/img/beer.png" },
  { id: 6, title: "Pivo", price: "50 Kč", img: "/img/beer.png" },
  { id: 7, title: "Guláš", price: "180 Kč", img: "/img/beer.png" },
  { id: 8, title: "Kofola", price: "40 Kč", img: "/img/beer.png" },
  { id: 9, title: "Kofola", price: "40 Kč", img: "/img/beer.png" },
  { id: 10, title: "Kofola", price: "40 Kč", img: "/img/beer.png" }
];

export default function App() {
  return (
    <div className="container">
        <main className="main">
            <h1>Yabba Dabba Dooo</h1>
                <div className="cards-menu">
                    {PRODUCTS.map(item =>(
                        <ProductCard
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        />
                    ))}
                </div>   
        </main>
    <Sidebar/>
    </div>
  );
}