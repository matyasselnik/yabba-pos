import "./Sidebar.css"
import { OrderItem } from "./OrderItem"

export function Sidebar({ items = [], onRemoveItem, onClearOrder }) {

  const totalSum = items.reduce((sum, item) => sum + item.price * item.count, 0);

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
        <div className="btn-row">
          <p className="cash-btn">Hotovost</p>
          <p className="QR-btn">QR platba</p>
        </div>
        <p className="done-btn" onClick={onClearOrder}>Zaplaceno</p>
      </div>
    </div>
  );
}