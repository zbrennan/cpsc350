import React from "react";
import Header from '../components/Header';
import {getInfo} from '../lib/utils.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={search: ""};
  }

  handleUpdate(evt){
    this.setState({search: evt.target.value});
  }

  async handleSearch(evt){
    const campsite = await getInfo(this.state.search);
    this.setState({campsite});
  }

  render() {
    return (
      <div 
        style={{ 
          margin: "auto auto", 
          width: "1000px", 
          textAlign: "center", 
          background: "#daf6db",
          border: "groove",
        }}>
        <Header />
          <h1>New Mexico Campground Search</h1>
          <p>
            <input 
              type='text' 
              value={this.state.search} 
              onChange={this.handleUpdate.bind(this)}
            />
          </p>
          <div 
            style={{ 
              textAlign:"center", 
              marginBottom: "10px" 
            }} 
            className="button-style" 
            onClick={this.handleSearch.bind(this)}
            >
            Submit
          </div>

          {this.state.campsite ? <div>
            <br />
            <h2>{this.state.campsite.name}</h2>
              <img style={{maxWidth: '800px', maxHeight: '500px'}}
                src= {this.state.campsite.image_url} /> 
                <br />
                <h2>{this.state.campsite.closest_town}</h2>
                <p>{this.state.campsite.description}</p>
          </div> : null}

          {"campsite" in this.state && this.state.campsite == null ? <div>
            <br />
            <h2>{this.state.search} Not Found</h2>
          </div> : null}


        <style jsx>{`
          h1,
          h2,
          a,
          p{
            font-family: "Arial";
            textAlign: center;
            color: #125213;
          }
          .button-style{
            margin: auto auto;
            cursor: pointer;
            background-color: #125213;
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
            color: #125213;
          }
          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
