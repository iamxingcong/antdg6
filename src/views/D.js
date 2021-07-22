import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import G6 from '@antv/g6';


const D = () => {
  const refs = React.useRef(null)
  let graph = null

  const [treeData, setItems] = useState({});

  useEffect(() => {

    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      const postdata = await response.json()
      setItems(postdata)



      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(refs.current),
        width: 1900,
        height: 1600,

        linkCenter: true,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                const data = item.getModel();
                data.collapsed = collapsed;
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: 'cubic-vertical',
        },
       
      });

      graph.data(postdata.children)
      graph.render()

      console.log('d')
      console.log(treeData)
 

    }
 
    getRates();

 
  }, [])



  return (
    <div ref={refs}></div>
  );
}

export default D