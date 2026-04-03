import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement(
    "div",
    {className: "title"},
    [
      React.createElement("h1", { key: "h1" }, "Elem Heading 1"),      
      React.createElement("h2", { key: "h2" }, "Elem Heading 2"),      
      React.createElement("h3", { key: "h3" }, "Elem Heading 3"),
      React.createElement("h4", { key: "h4" }, "Elem Heading 4")  
    ]
   
     
);


const jsxHeading =(
    <div className="title" tabIndex={5}>
        
        <h1>jsx Heading 1</h1>
        <h2>jsx Heading 2</h2>
        <h3>jsx Heading 3</h3>
        <h4>jsx Heading 4</h4>
    </div>
);

const Title = (props) => (
  <div className="title">
    <h1>{props.text}</h1>
    <h2>Title check</h2>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    {heading}
    {jsxHeading}
    <Title text=" Props Title check" />
    <h1 className="heading">React Heading Check</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<HeadingComponent/>);

