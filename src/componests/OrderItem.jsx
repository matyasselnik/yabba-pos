import "./OrderItem.css"

export function OrderItem({title, price, count, onDelete}) {
  return (
    <div className="item-row">
        <p className="item-count">{count}x</p>
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className="item-delete" onClick={onDelete}>X</p>
    </div>
  );
}