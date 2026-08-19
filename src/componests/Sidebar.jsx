import { useState } from "react";
import "./Sidebar.css"
import { OrderItem } from "./OrderItem"

export function Sidebar({ items = [], onRemoveItem, onClearOrder }) {
  const [cashGiven, setCashGiven] = useState("");

  const totalSum = items.reduce((sum, item) => sum + item.price * item.count, 0);

  const numericCash = Number(cashGiven) || 0;
  const change = numericCash > totalSum ? numericCash - totalSum : 0;

  return (
    <div id="sidebar-body">
      <h1>Objednávka</h1>

      <div className="order-list">
        {items.map((item) => (
          <OrderItem
            key={item.id}
            title={item.title}
            price={`${item.price * item.count} Kč`}
            count={item.count}
            onDelete={() => onRemoveItem(item.id)}
          />
        ))}
      </div>

      <div className="bot">
        <p className="sum">Celkem: <span className="price">{totalSum} Kč</span></p>
        <p className="return">K vrácení: <span className="return-price">{change} Kč</span></p>
        <div className="btn-row">
          <input className="cash-btn" type="number" placeholder="Hotovost" value={cashGiven} onChange={(e) => setCashGiven(e.target.value)} />
          <p className="QR-btn">QR platba</p>
        </div>
        <p className="done-btn" onClick={onClearOrder}>Zaplaceno</p>
      </div>
    </div>
  );
}