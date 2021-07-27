
import React from 'react';
import G6 from '@antv/g6';
 


class B extends React.Component {

 
 
 

  componentDidMount() {

     async function getRates() {
      const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
      const postdata = await response.json()
        
      
      
       
      const graph = new G6.TreeGraph({
        container:document.getElementById('axt'),
        width: window.screen.width,
        height: 1600,
  
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
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: 'cubic-vertical',
        },
        layout: {
          type: 'compactBox',
          direction: 'TB',
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
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
          rotate = Math.PI / 2;
        }
        return {
          label: node.id,
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
  
     
  

    if(postdata){
      graph.data(postdata);
      graph.render();
    } else {
      return
    }



      
    
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