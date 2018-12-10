import React from 'react';
import { VictoryPie } from 'victory';

const UserChart = (props) =>  {
    const { data } = props;
    console.log('this.props ', props)
        return (
            <div className="chart">
                <VictoryPie
                    style={{ labels: { fill: "white" } }}
                    innerRadius={100}
                    labelRadius={120}
                    labels={(d) => d.y}
                    colorScale={["#ca607f", "#c58191", "#ecc78f"]}
                    data={[
                        { x: 1, y: data.countries, label: "Countries"},
                        { x: 2, y: data.flights, label: "Flights" },
                        { x: 3, y: data.tours, label: "Tours" },
                    ]}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onMouseOver: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        if(props.text === "Countries") return { text: data.countries }
                                        if(props.text === "Flights") return { text: data.flights }
                                        if(props.text === "Tours") return { text: data.tours }
                                    }
                                }];
                            },
                            onMouseOut: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        if(props.text === data.countries) return { text: "Countries" }
                                        if(props.text === data.flights) return { text: "Flights" }
                                        if(props.text === data.tours) return { text: "Tours" }
                                    }
                                }];
                            }
                        }
                    }]}
                />
            </div>
        );
}

export default UserChart;
