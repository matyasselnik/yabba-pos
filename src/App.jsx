import { useState } from "react";
import "./App.css"
import {Sidebar} from "./componests/Sidebar.jsx"
import { ProductCard } from "./componests/ProductCard.jsx";

const PRODUCTS = [
  { id: 1, title: "Pivo", price: 50, img: "/img/beer.png" },
  { id: 2, title: "Guláš", price: 180, img: "/img/beer.png" },
  { id: 3, title: "Kofola", price: 40, img: "/img/beer.png" },
  { id: 4, title: "Birell", price: 45, img: "/img/beer.png" },
  { id: 5, title: "Voda", price: 30, img: "/img/beer.png" },
  { id: 6, title: "Gin & Tonic", price: 110, img: "/img/beer.png" }
];

export default function App() {
  const [orderItems, setOrderItems] = useState([])

  const handleAddToCart = (product) => {
      setOrderItems((prevItems) => {
        const existing = prevItems.find((item) => item.id === product.id);

        if (existing) {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          );
        }

        return [...prevItems, { ...product, count: 1 }];
      });
    };

    const handleRemoveItem = (id) => {
      setOrderItems((prevItems) => {
        return prevItems
          .map((item) => {
            if (item.id === id) {
              return { ...item, count: item.count - 1 };
            }
            return item;
          })
          .filter((item) => item.count > 0);
      });
    };

    const handleClearOrder = () => {
      setOrderItems([]);
    };

  return (
    <div className="container">
      <main className="main">
        <h1>Yabba Dabba Dooo</h1>
        <div className="cards-menu">
          {PRODUCTS.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              onSelect={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </main>
      <Sidebar 
        items={orderItems} 
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />
    </div>
  );
}