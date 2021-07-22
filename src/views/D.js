import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import G6 from '@antv/g6';


const D = () => {

  let graph = null
  const ref = React.useRef(null);

  const [treeData, setItems] = useState({});

 

  useEffect(() => {

  async function getRates() {
      
   const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
  
   const postdata = await response.json()
   setItems(postdata)

  
    
     
      
 


       graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1600,
        height: 600,
        layout: {
          type: 'random',
        },
        
        animate: true,
        modes: 
            
            'zoom-canvas',
        
      
        defaultEdge: {
          type: 'cubic-horizontal',
        },


      });
      graph.node(function (node) {
        return {
          label: node.id,
          labelCfg: {
            offset: 10,
            position: node.children && node.children.length > 0 ? 'left' : 'right',
          },
        };
      });
      graph.data(postdata);
    graph.render();
   
  }
 
    getRates();

 
  }, [])


  return <div className='canvas' ref={ref}></div>;
}

export default D