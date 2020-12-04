import React from "react";
import {getInfo} from '../lib/utils.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={search: ""};
  }

  async handleSearch(evt){
    await this.setState({search: evt.target.value});
    const food = await getInfo(this.state.search);
    await this.setState({food});
  }

  render() {
    return (
      <div 
        style={{ 
          margin: "auto auto", 
          width: "1200px",
          textAlign: "center", 
        }}>
        <div 
          style={{
            backgroundImage: `url("https://media.npr.org/assets/img/2011/08/19/produce_wide-f42f14a919e3b416cbbc08da9d06ddb2e165dcba.jpg?s=1400")`, 
            backgroundPosition: "center", 
            backgroundSize:"cover",
            textAlign: "center", 
            height: "250px"
          }}>
          <br />
          <br />
          <br />
          <br />

          <h1>Nutrition Information About Food</h1>
        </div>
        <h2>Food Search</h2>
        <p>
          <input
            type='text' 
            value={this.state.search} 
            onChange={this.handleSearch.bind(this)}
          />
        </p>

        {this.state.food && this.state.search != "" ? <div>
          <br />
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Kcal</th> 
                <th>Protein (g)</th>
                <th>Fat (g)</th>
                <th>Carbs (g)</th>
              </tr>
            </thead>

            <tbody>
              {this.state.food.rows.map((f, key) =>
                <tr key={f.description}>
                  <td>{f.description}</td>
                  <td>{f.kcal}</td>
                  <td>{f.protein_g}</td>
                  <td>{(f.fa_sat_g + f.fa_mono_g + f.fa_poly_g).toFixed(2)}</td>
                  <td>{f.carbohydrate_g}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div> : null}

        <style jsx>{`
          h1{
            font-size: 3.0rem;
            font-family: "Arial";
            color: white; 
          }
          h2{
            font-size: 1.8rem;
            font-family: "Arial";
            color: black;
          }
          p{
            font-family: "Arial";
            textAlign: center;
            color: black;
          }
          .button-style{
            margin: auto auto;
            cursor: pointer;
            background-color: #166d17;
            color: #ffffff;
            width: 100px;
            font-family: "Arial";
          }
          .description {
            font-family: "Arial";
            font-size: "10px";
          }        
          a {
            text-decoration: underline;
            color: black;
          }
          a:hover {
            opacity: 0.6;
          }
          table {
            font-family: arial;
            border-collapse: collapse;
            width: 1200px;
          }
          td, th {
            border: 1px solid black;
            text-align: left;
          }
          tr:nth-child(odd) {
            background-color: green;
          }
          tr:nth-child(even) {
            background-color: orange;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
