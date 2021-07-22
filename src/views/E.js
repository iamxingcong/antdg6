import React  from 'react';
 
import { data } from './data';
import G6 from '@antv/g6';


class E extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      
      
      
     
    };
  }
   
 
  componentDidMount() {
    
     let   graph = new G6.Graph({
            container: document.getElementById('axt'),
            width: 300,
            height: 300,
            modes: {
              default: ["drag-canvas", "zoom-canvas", "drag-node"]
            }
          });
      graph.data(data);
      graph.render();
   
      
    } 
    render(){
      return (
      
    
        <div  id='axt'></div>
    
    );
    }
 
    
}

export default E