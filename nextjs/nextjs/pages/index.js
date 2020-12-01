import React from "react";
import Header from "../components/Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        style={{ 
          margin: "auto auto",
          width: "1000px", 
          textAlign: "center", 
          background: "#daf6db",
          border: "groove"
        }}>
        <div>
          <Header />
          <br />
          <img src="/static/campingNM.jpg" className="App-logo" />
          <h1>Information on Campgrounds</h1>
        
          <p>Sometimes spending a day in the wilderness isn't quite enough to truly capture
          the feeling of a special place. Sure, you see some amazing views or go on an
          unforgettable hike. But to get the full experience, you yearn to see the dark,
          starry skies. To listen to the yips of coyotes. To watch to sun rise on a silent,
          dewy morning. Camping in the great outdoors transforms a regular old road trip
          into an epic experience. So pack up your tent or hitch up the fifth wheel -- 
          adventure awaits.</p>
        
        </div>
        <style jsx>{`
          h1,
          h2,
          a,
          p {
            font-family: "Arial";
            textAlign: center;
            color: #125213;
          }
          .description {
            font-family: "Arial";
            font-size: "10px";
          }
          .App-logo {
            height: 400px;
            width: 700px;
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
