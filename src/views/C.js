import React  from 'react';
 

import G6 from '@antv/g6';

class C extends React.Component {
 
  
  componentDidMount() {
  
    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
       
 

        
     var graph = new G6.Graph({
        container: document.getElementById('axt'),
        width: window.screen.width,
        height: 600,
        fitView: true,
        fitViewPadding: [20, 40, 50, 20],
        modes: {
          default: ["drag-canvas", "zoom-canvas", "drag-node"]
        },
        layout: {
          type: 'gForce',
          center: [ 300, 300 ],     // 可选，默认为图的中心
          linkDistance: 50,         // 可选，边长
          nodeStrength: 130,         // 可选
          edgeStrength: 0.1,        // 可选
          nodeSize: 130,             // 可选
          onTick: () => {           // 可选
            console.log('ticking');
          },
          onLayoutEnd: () => {      // 可选
            console.log('force layout done');
          },
          workerEnabled: true,      // 可选，开启 web-worker
          gpuEnabled: true          // 可选，开启 GPU 并行计算，G6 4.0 支持
          
        }
      
      });


      graph.data(postdata);
      graph.render();
      
    }

    getRates();
 
   
      
 
   
  } 
  
  render(){
    return <div className='canvas' id="axt"></div>;
  }

    
  
}
export default C