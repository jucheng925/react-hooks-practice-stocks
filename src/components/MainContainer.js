import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([])
  const [filterStocks, setFilterStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => setAllStocks(data))
  }, [])

  function addPortfolio(stock) {
    setPortfolioStocks([...portfolioStocks, stock])
  }

  function removePortfolio(deletedStock) {
    const updatedArrayofStocks = portfolioStocks.filter(stock => stock.id !== deletedStock.id)
    setPortfolioStocks(updatedArrayofStocks)
  }

  function sortByName() {
    const sortedArray = ((filterStocks.length === 0) ? allStocks: filterStocks).sort((a,b) => {
      if (a.ticker < b.ticker) {
        return -1;
      }
      if (a.ticker > b.ticker) {
        return 1;
      }
      else return 0;
    });
    if (filterStocks.length === 0) {
      setAllStocks([...sortedArray]) 
    }
    else setFilterStocks([...sortedArray])
  }

  function sortByPrice() {
    const sortedArray = ((filterStocks.length === 0) ? allStocks: filterStocks).sort((a,b) => a.price - b.price)
    if (filterStocks.length === 0) {
      setAllStocks([...sortedArray]) 
    }
    else setFilterStocks([...sortedArray])
  }

  function filterCategory(category) {
    const filterArray = allStocks.filter((stock) => stock.type === category)
    setFilterStocks(filterArray)
  }

  return (
    <div>
      <SearchBar sortByName={sortByName} sortByPrice={sortByPrice} filterCategory={filterCategory} />
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks={(filterStocks.length === 0) ? allStocks: filterStocks} addPortfolio={addPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={portfolioStocks} removePortfolio={removePortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
