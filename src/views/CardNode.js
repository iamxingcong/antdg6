import React from "react";
import G6 from "@antv/g6";

class CardNode extends React.Component {


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
                        // title text
                        group.addShape('text', {
                            attrs: {
                                textBaseline: 'top',
                                y: 22,
                                x: 216,
                                lineHeight: 60,
                                text: cfg.platform,
                                fill: '#000',
                            },
                            name: 'title',
                        });

                        group.addShape('text', {
                            attrs: {
                                textBaseline: 'top',
                                y: 22,
                                x: 316,
                                lineHeight: 60,
                                text: cfg.avgName + ":" + cfg.avgTime,
                                fill: '#000',
                            },
                            name: 'title',
                        });


                        if (cfg.nodeLevel > 0) {
                            group.addShape('marker', {
                                attrs: {
                                    x: 184,
                                    y: 70,
                                    r: 26,
                                    cursor: 'pointer',
                                    symbol: cfg.collapse ? G6.Marker.expand : G6.Marker.collapse,
                                    stroke: '#666',
                                    lineWidth: 1,
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
                                    text: item.zoneName + "--?1--",
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
                                    x: 34 + index * 190,
                                    lineHeight: 40,
                                    text: item.cpu + "--?2--" + item.zone,
                                    fill: '#595959',
                                },
                                name: item.zoneName,
                            });


                            // value text
                            group.addShape('text', {
                                attrs: {
                                    textBaseline: 'top',
                                    y: 172,
                                    x: 44 + index * 160,
                                    lineHeight: 40,
                                    text: item.judge + "--?3--" + item.value,
                                    fill: '#595959',
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
                // translate the graph to align the canvas's center, support by v3.5.1
                fitCenter: true,
                modes: {
                    default: ['drag-canvas', 'drag-node'],
                },
                defaultNode: {
                    type: 'card-node',
                },
                fitView: true,
            });





            graph.data(this.state.items);
            graph.render();

        }

        getRates();

    }

    render() {
        return <div id="cdn" className="content"> cardNode </div>
    }


}

export default CardNode