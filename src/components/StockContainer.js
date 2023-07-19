import React from "react";
import Stock from "./Stock";

function StockContainer({allStocks, addPortfolio}) {
  const updatedStocks = allStocks.map(stock => ({...stock, inPortfolio: false}))
  const renderStocks = updatedStocks.map(stock => <Stock key={stock.id} stock={stock} addPortfolio={addPortfolio} />)
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
  
}

export default StockContainer;
