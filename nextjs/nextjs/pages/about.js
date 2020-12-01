import Header from '../components/Header';

export default function About() {
  return (
  	<div 
  	  style={{ 
  	    margin: "auto auto", 
  	    width: "1000px", 
  	    textAlign: "center", 
  	    background: "#daf6db",
  	    border: "groove",
  	  }}>
	  <div>
	    <Header />
		  <h1>Camping New Mexico</h1>
		  <img src="/static/campingNM2.png" className="App-logo" />
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
        .App-logo {
          height: 400px;
          width: 700px;
        }
      `}</style>
    </div>
  );
}
