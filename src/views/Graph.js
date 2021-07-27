import React from "react";
import G6 from "@antv/g6";

class Graph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      items: []


    };
  }


  componentDidMount() {


    const getRates = async () => {

      const response = await fetch('http://test.api.big.pcg.com/capacity-model/relation-tree?type=news/Inews')

      const postdata = await response.json()

      this.setState({
        isLoaded: true,
        items: postdata.data
      });


      console.log(this.state.items)


      let graph = new G6.Graph({
        container: document.getElementById('axt'),
        width: window.screen.width,
        height: 1300,

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
        
       
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          nodesep: 30,
          ranksep: 100,
      
  
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 66;
          },
          getVGap: function getVGap() {
            return 80;
          },
          getHGap: function getHGap() {
            return 20;
          },
        },
      });

      graph.node(function (node) {
        let position = 'right';
        let rotate = 0;
        if (!node.children) {
          position = 'bottom';
          //rotate = Math.PI / 2;
        }
        return {
          label: node.name,
          labelCfg: {
            position,
            offset: 5,
            style: {
              rotate,
              textAlign: 'start',
            },
          },
        };
      });


      graph.data(this.state.items);
      graph.render();

    }

    getRates();
  }

  render() {
    return (


      <div id="axt"></div>

    );
  }

};

export default Graph;
