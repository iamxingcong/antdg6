import React from "react";
import G6 from "@antv/g6";

class CardNode extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            items: [],
            alt: ''


        };
    }


    componentDidMount() {



        const getRates = async () => {

            const response = await fetch('http://test.api.big.pcg.com/capacity-model/relation-tree?type=news/Inews')

            const postdata = await response.json()

            this.setState({

                items: postdata.data
            });


            console.log(this.state.items)




            G6.registerNode(
                'card-node',
                {
                    drawShape: function drawShape(cfg, group) {
                        const color = cfg.error ? '#F4664A' : '#30BF78';
                        const r = 2;
                        const shape = group.addShape('rect', {
                            attrs: {
                                x: 0,
                                y: 0,
                                width: 500,
                                height: 320,
                                stroke: color,
                                radius: r,

                            },

                            name: 'main-box',
                            draggable: true,
                        });

                        group.addShape('rect', {
                            attrs: {
                                x: 0,
                                y: 0,
                                width: 500,
                                height: 50,
                                fill: color,
                                radius: [r, r, 0, 0],

                            },

                            name: 'title-box',
                            draggable: true,
                        });


                        // title text
                        group.addShape('text', {
                            attrs: {
                                textBaseline: 'top',
                                y: 12,
                                x: 16,
                                lineHeight: 60,
                                text: cfg.name,
                                fill: '#000',
                                fontSize: 30
                            },
                            name: 'title',
                        });


                        if (cfg.nodeLevel > 0) {
                            group.addShape('marker', {
                                attrs: {
                                    x: 84,
                                    y: 170,
                                    r: 126,
                                    cursor: 'pointer',
                                    symbol: cfg.collapse ? G6.Marker.expand : G6.Marker.collapse,
                                    stroke: '#666',
                                    lineWidth: 2,

                                },

                                name: 'collapse-icon',
                            });
                        }

                        // The content list
                        cfg.itilData.forEach((item, index) => {
                            // name text
                            group.addShape('text', {
                                attrs: {
                                    textBaseline: 'top',
                                    y: 85,
                                    x: 24 + index * 190,
                                    lineHeight: 40,
                                    text: item.zoneName + "--1--" + item.judge,
                                    fill: 'rgba(0,0,0, 0.4)',
                                    fontSize: 28
                                },
                                name: item.zone,
                            });

                            // value text
                            group.addShape('text', {
                                attrs: {
                                    textBaseline: 'top',
                                    y: 142,
                                    x: 24 + index * 190,
                                    lineHeight: 40,
                                    text: item.cpu + "--2--" + item.zone,
                                    fill: '#595959',
                                    fontSize: 28
                                },
                                name: item.zoneName,
                            });


                            // value text
                            group.addShape('text', {
                                attrs: {
                                    textBaseline: 'top',
                                    y: 182,
                                    x: 24 + index * 190,
                                    lineHeight: 40,
                                    text: item.judge + "--3--" + item.value,
                                    fill: '#595959',
                                    fontSize: 28
                                },
                                name: item.judge,
                            });

                        });
                        return shape;
                    },
                },
                'single-node',
            );



            const graph = new G6.Graph({
                container: document.getElementById('cdn'),
                width: window.screen.width,
                height: 1900,

                layout: {
                    type: 'force',
                    nodeSpacing: 30,
                    nodeSize: 500,
                    preventOverlap: true,
                    fontSize: 45,
                },

                modes: {
                    default: ['drag-canvas', 'drag-node'],
                },
                defaultNode: {
                    type: 'card-node',

                },
                defaultEdge: {
                    type: 'polyline',
                    style: {
                        radius: 20,
                        offset: 45,
                        endArrow: true,
                        lineWidth: 1,
                        stroke: '#C2C8D5',
                    },
                },
                fitView: true,
            });





            graph.data(this.state.items);
            graph.render();


            graph.on('node:click', (evt) => {
                const item = evt.item; // 被操作的节点 item


                this.setState({ alt: item._cfg.model });

            });

        }




        getRates();

    }

    render() {
        return (

            <div className="content">
                <h1>
                    {this.state.alt.name ? this.state.alt.name : "pls click node"}
                </h1>
                <div>
                    {this.state.alt !== '' ? JSON.stringify(this.state.alt) : "点击"}

                </div>

                <div id="cdn" className="content"> cardNode </div>
            </div>
        )
    }


}

export default CardNode