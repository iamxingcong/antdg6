

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import G6 from '@antv/g6';

function Graph() {
  const ref = React.useRef(null);
  let graph = null;


  const [treeData, setItems] = useState({});

  useEffect(() => {

    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
      setItems(postdata)
 

      console.log(treeData)
      
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: window.screen.width,
        height: 800,
        modes: {
          default: [
            'drag-combo',
            'drag-node',
            'drag-canvas',
            {
              type: 'collapse-expand-combo',
              relayout: false,
            },
          ],
        },
        layout: {
          type: 'dagre',
          sortByCombo: false,
          ranksep: 30,
          nodesep: 40,
        },
      
        
      });


      graph.data(postdata);
      graph.render();
    }


   
      getRates();
    }, []);
   


  return <div ref={ref}></div>;
}
 



export default Graph;
