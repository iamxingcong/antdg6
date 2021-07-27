import React from 'react';


import G6 from '@antv/g6';

class D extends React.Component {




  componentDidMount() {

    async function getRates() {

      const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')

      const postdata = await response.json()



      var graph = new G6.Graph({
        container: document.getElementById('oxt'),
        width: window.screen.width,
        height: 1900,


        layout: {
          type: 'concentric',
          center: [600, 700],     // 可选，
          linkDistance: 30,         // 可选，边长
          preventOverlap: true,     // 可选，必须配合 nodeSize
          nodeSize: 7,             // 可选
          sweep: 6,                // 可选
          equidistant: false,       // 可选
          startAngle: 0,            // 可选
          clockwise: false,         // 可选
          maxLevelDiff: 10,         // 可选
          sortBy: 'degree',         // 可选
          workerEnabled: true

        },

        animate: true,
        modes:  {
          default: [
          'drag-combo',
          'drag-node',
          'drag-canvas',
          
          'zoom-canvas',
          {
            type: 'collapse-expand-combo',
            relayout: false,
          },
        ]
      },
        defaultNode: {
          size: 56,
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

      console.log("d")

    }

    getRates();


  }

  render() {
    return <div className='canvas' id="oxt"></div>
  }

}

export default D