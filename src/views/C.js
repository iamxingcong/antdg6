import React  from 'react';
 

import G6 from '@antv/g6';

class C extends React.Component {
 
  
  componentDidMount() {
  



    async function getRates() {
     
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
    //  const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
     
      const postdata = await response.json()
       
 


        const graph = new G6.Graph({
          container:document.getElementById('axt'),
                width: window.screen.width,
                height: 1600,
          
          controlPoints: false,
          modes: {
            default: [
              'drag-combo',
              'drag-node',
              'drag-canvas',
              
              'zoom-canvas',
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
 


   
  } 
  
  render(){
    return <div className='canvas' id="axt"></div>;
  }

    
  
}
export default C