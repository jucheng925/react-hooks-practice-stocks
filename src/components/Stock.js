import React from "react";

function Stock({stock, removePortfolio, addPortfolio}) {
  

  return (
    <div>
      <div className="card" onClick={() => stock.inPortfolio ? removePortfolio(stock): addPortfolio(stock)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
