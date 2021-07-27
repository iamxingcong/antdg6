import React  from 'react';
 

import G6 from '@antv/g6';

class C extends React.Component {
 
  
  componentDidMount() {
  



    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
       
 


        const graph = new G6.Graph({
          container:document.getElementById('axt'),
                width: window.screen.width,
                height: 1600,
          
          controlPoints: false,
          modes: {
            default: ['drag-canvas', 'drag-node'],
          },
          layout: {
            type: 'dagre',
            nodeSize: [40, 20],
            nodesep: 15,
            direction: "TB",
            ranksep: 20,
            center: [ 1700, 700 ], 
          },
          animate: true,
          defaultNode: {
            size: [40, 20],
            type: 'rect',
            style: {
              lineWidth: 2,
              stroke: '#5B8FF9',
              fill: '#C6E5FF',
            },
          },
          defaultEdge: {
            size: 1,
            color: '#e2e2e2',
            style: {
              endArrow: {
                path: 'M 0,0 L 8,4 L 8,-4 Z',
                fill: '#e2e2e2',
              },
            },
          },
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