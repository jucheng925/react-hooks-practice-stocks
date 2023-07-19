import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, removePortfolio}) {
  const updatedStocks = myStocks.map(stock => ({...stock, inPortfolio: true}))
  const renderStocks = updatedStocks.map(stock => <Stock key={stock.id} stock={stock} removePortfolio={removePortfolio}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStocks}
    </div>
  );
}

export default PortfolioContainer;
