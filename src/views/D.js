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



      console.log(treeData)




      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1500,
        height: 900,


        layout: {
          type: 'concentric',
          center: [500, 400],     // 可选，
          linkDistance: 150,         // 可选，边长
          preventOverlap: true,     // 可选，必须配合 nodeSize
          nodeSize: 30,             // 可选
          sweep: 10,                // 可选
          equidistant: false,       // 可选
          startAngle: 0,            // 可选
          clockwise: false,         // 可选
          maxLevelDiff: 40,         // 可选
          sortBy: 'degree',         // 可选
          workerEnabled: true

        },

        animate: true,
        modes: 'zoom-canvas',
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },

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