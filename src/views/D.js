import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import G6 from '@antv/g6';


const D = () => {
  const refs = React.useRef(null)
  let graph = null

  const [treeData, setItems] = useState({});

  useEffect(() => {

    async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
      const postdata = await response.json()
      setItems(postdata)



      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(refs.current),
        width: 1000,
        height: 600,
        fitView: true,
        fitViewPadding: [20, 40, 50, 20],

      });
      graph.data(postdata)
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