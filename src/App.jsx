import { useState } from "react";
import "./App.css"
import {Sidebar} from "./componests/Sidebar.jsx"
import { ProductCard } from "./componests/ProductCard.jsx";

const PRODUCTS = [
  { id: 0, title: "Kelímek", price: 50, img: "/img/Kelimek.png" },
  { id: 1, title: "Plzeň", price: 50, img: "/img/Plzen.png" },
  { id: 2, title: "Kofola 0,5", price: 40, img: "/img/Kofola05.png" },
  { id: 3, title: "Kofola 0,3", price: 25, img: "/img/Kofola03.png" },
  { id: 4, title: "Birell Pomelo", price: 25, img: "/img/Birell.png" },
  { id: 5, title: "Rajec perlivý", price: 30, img: "/img/RajecPerlivy.png" },
  { id: 6, title: "Jupík Sparky", price: 25, img: "/img/Jupik_fun.png" },
  { id: 7, title: "Jupík", price: 30, img: "/img/Jupik.png" },
  { id: 8, title: "Koruní", price: 25, img: "/img/Koruni.png" },
  { id: 9, title: "Guláš", price: 100, img: "/img/Gulas.png" },
  { id: 10, title: "Halušky", price: 60, img: "/img/Halusky.png" },
  { id: 11, title: "Gin & Tonic", price: 80, img: "/img/GinTonic.png" },
  { id: 12, title: "Skinny Bitch", price: 80, img: "/img/SkinnyBitch.png" },
  { id: 13, title: "CubaLibre", price: 80, img: "/img/CubaLibre.png" },
  { id: 14, title: "Bumbu", price: 70, img: "/img/Bumbu.png" },
  { id: 15, title: "Rum", price: 40, img: "/img/Rum.png" },
  { id: 16, title: "Vodka", price: 40, img: "/img/Vodka.png" },
  { id: 17, title: "Zelená", price: 30, img: "/img/Zelena.png" },
  { id: 18, title: "Víno bíle 0,2", price: 40, img: "/img/VinoBile.png" },
  { id: 19, title: "Víno bíle 0,7", price: 140, img: "/img/Vino_Flaska.png" },
  { id: 20, title: "Proseco 0,2", price: 40, img: "/img/Prosecco.png" },
  { id: 21, title: "Proseco 0,7", price: 140, img: "/img/Prosecco_flaska.png" }
];

export default function App() {
  const [orderItems, setOrderItems] = useState([])
  const [showQR, setShowQR] = useState(false)

  const totalSum = orderItems.reduce((sum, item) => sum + item.price * item.count, 0);

  const IBAN = "CZ8930300000002513287018"; 

  const spaydData = `SPD*1.0*ACC:${IBAN}*AM:${totalSum.toFixed(2)}*CC:CZK*MSG:Strassenfest 2026 Flinstones*`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(spaydData)}`;

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
      setShowQR(false)
    };

    const toggleQR = () =>{
      setShowQR((prev) => !prev)
      console.log(showQR)
    }

  return (
    <div className="container">
      <main className="main">
        <h1>Yabba Dabba Dooo</h1>

        {showQR ? (
          <div className="QR-menu">
            <h2>Částka k úhradě: <span className="QR-price">{totalSum} Kč</span></h2>
            {totalSum > 0 ? (
              <img src={qrCodeUrl} alt="Platba QR kódem" className="qr-img" />
            ) : (
              <p>Objednávka je prázdná</p>
            )}
          </div>
        ) : (
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
        )}
      </main>
      <Sidebar 
        items={orderItems} 
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
        onToggleQR={toggleQR}
      />
    </div>
  );
}