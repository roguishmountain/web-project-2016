import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Axis } from './axis';
import { ScatterPlot } from './scatterplot';


class Main extends React.Component<any, any> {
    render() {
        let data = [
            [480, 90, "1"],
            [250, 50, "1"],
            [100, 33, "2"],
            [330, 95, "1"],
            [410, 12, "1"],
            [475, 44, "2"],
            [25, 10, "2"],
            [85, 21, "2"],
            [220, 88, "1"],
            [600, 150, "2"],
            [0.1, 0.1, "2"],
            [607.4343, 190.787462, "1"]
        ];

        return (
            <ScatterPlot
                width={350}
                height={350}
                yLabel="yLabel"
                xLabel="xLabel"
                title="Title"
                data={data.map(([x, y, s], i) => ({ x, y, s }))}/>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('content'));