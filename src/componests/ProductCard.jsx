import "./ProductCard.css"

export function ProductCard({title, img, price}) {
  return (
    <div className="card">
        <img src={img} alt={title} className="card-img" />
        <p className="card-text">{title} {price}</p>
    </div>
  );
}