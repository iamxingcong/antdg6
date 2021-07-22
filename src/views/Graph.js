import React  from "react";
import G6 from "@antv/g6";

class Graph extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      
      
      data: {
        nodes: [
          { id: "node1", label: "1" },
          { id: "node2", label: "2" }
        ],
        edges: []
      }
     
    };
  }
   
  
  componentDidMount() {

 
   var graph = new G6.Graph({
      container: document.getElementById('axt'),
      width: 300,
      height: 300,
      modes: {
        default: ["drag-canvas", "zoom-canvas", "drag-node"]
      }
    });
    graph.data(this.state.data);
    graph.render();

     
  }

   render(){
    return (
    
        
        <div id="axt"></div>
 
    );
   }
 
};

export default Graph;
