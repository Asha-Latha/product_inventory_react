import React from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';
import '../Dashboard/dashboard.css'
import Logout from '../../logout/logout';
import { Link } from 'react-router-dom';


class StockDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allproducts: []
    }
  }

  componentDidMount() {


  }

  componentWillMount() {
    this.getProducts()
  }

  getProducts() {
    axios.get('http://localhost:3000/addproduct')
      .then((response) => {


        this.setState({ allproducts: response.data })
        this.state.allproducts.map(p => {
          this.stock.push([p.category, parseInt(p.quantity)])
        })
        console.log(response)
      }, (error) => {
        console.log(error)

      })
  }
  stock = [
    ["category", "quantity"]
  ]
  render() {
    return (
      <div><Logout></Logout>

        <div>
          <h2>Stock Details</h2>
          <div id="chart">
            <Chart
              width={'600px'}
              height={'400px'}
              backgroundColor={'#F8F0EE'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.stock}
              options={{
                is3D: true,
                title: 'Stock availability',

              }}
            /></div>
          <div id="column">
            <Chart
              width={'600px'}
              height={'400px'}
              style={{ background: '#F8F0EE' }}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={this.stock}
              options={{
                is3D: true,
                title: 'Stock availability',
                background: '#F8F0EE'

              }}
            /></div>

        </div>
      </div>
    );
  }
}
export default StockDisplay;