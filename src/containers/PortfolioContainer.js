import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} removeAStock={this.props.removeAStock}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
