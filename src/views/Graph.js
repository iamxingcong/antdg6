import React from "react";
import G6 from "@antv/g6";

class Graph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      items:[]
       

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
        modes: {
          default: ["drag-canvas", "zoom-canvas", "drag-node"]
        }
      });

      graph.node(function (node) {
        return {
          label: node.avgName,
          labelCfg: {
            offset: 10,
            position: node.children && node.children.length > 0 ? 'left' : 'right',
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
