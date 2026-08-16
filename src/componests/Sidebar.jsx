import "./Sidebar.css"

export function Sidebar() {
  return (
    <div id="sidebar-body">
      <h1>Objednávka</h1>
      <div className="bot">
        <p className="sum">Celkem: <span className="price">0Kč</span></p>
        <div className="btn-row">
          <p className="cash-btn">Hotovost</p>
          <p className="QR-btn">QR platba</p>
        </div>
        <p className="done-btn">Zaplaceno</p>
      </div>
    </div>
  );
}