import "./ProductCard.css"

export function ProductCard({title, img, price, onSelect}) {
  return (
    <div className="card" onClick={onSelect}>
        <img src={img} alt={title} className="card-img" />
        <p className="card-text">{title} {price} Kč</p>
    </div>
  );
}