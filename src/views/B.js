
import React, { useEffect, useState } from 'react';
import G6 from '@antv/g6';
import ReactDOM from 'react-dom';

function B() {

 
  const ref = React.useRef(null);
  let graph = null;
  

  const [treeData, setItems] = useState({});
  




  useEffect(() => {
    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
        setItems(postdata)   

           
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1000,
        height: 600,
        fitView: true,
        fitViewPadding: [20, 40, 50, 20],
      
      });


      graph.data(postdata);
      graph.render();
    
    }
    
    getRates();
  }, []);


  console.log(treeData)
   
  return (
    <div className="content">
      <h1> b </h1>
      <div className='canvas' ref={ref}></div>
    </div>
    
  
  )
    
 
}

export default B