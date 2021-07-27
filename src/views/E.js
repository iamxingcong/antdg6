import React from 'react';

import G6 from '@antv/g6';


class E extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      items: []


    };
  }


  componentDidMount() {

    const getRates = async () => {

      const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')

      const postdata = await response.json()

      this.setState({
        isLoaded: true,
        items: postdata
      });


      let graph = new G6.Graph({
        container: document.getElementById('axt'),
        width: 1300,
        height: 1300,
        modes: {
          default: ["drag-canvas", "zoom-canvas", "drag-node"]
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


      graph.data(this.state.items);
      graph.render();

      console.log("d")

    }

    getRates();


  }


  render() {
    return (


      <div id='axt'></div>

    );
  }


}

export default E