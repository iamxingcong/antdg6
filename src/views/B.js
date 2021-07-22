
import React from 'react';
import G6 from '@antv/g6';
 


class B extends React.Component {

 
 
  



  componentDidMount() {
 
    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
          

           
    var  graph = new G6.Graph({
        container:document.getElementById('axt'),
        width: 1600,
        height: 1600,
 
        layout: {
          type: 'dagre',
          rankdir: 'LR', // 可选，默认为图的中心
          align: 'DL', // 可选
          nodesep: 20, // 可选
          ranksep: 50, // 可选
          controlPoints: true, // 可选
        },
      
      });


     


      graph.data(postdata);
      graph.render();
    
    }
    
    getRates();
  } 

 render(){
  return (
    <div id="axt">
       
    </div>
    
  
  )
 }
   

    
 
}

export default B