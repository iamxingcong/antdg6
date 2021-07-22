import React  from 'react';
 

import G6 from '@antv/g6';

class C extends React.Component {
 
  
  componentDidMount() {
  
    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
       
 

        
     var graph = new G6.Graph({
        container: document.getElementById('axt'),
        width: 1000,
        height: 600,
        fitView: true,
        fitViewPadding: [20, 40, 50, 20],
      
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