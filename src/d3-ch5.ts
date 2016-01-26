import * as d3 from 'd3';

let dataset = [5, 10, 27, 10, 11, 12, 13];
/*d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(d => d)
    .style("color", d => (d > 15) ? "red" : "purple");*/
    
/*d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", d => d * 10 + "px");*/


const svg = d3.select("body").append("svg");

svg
    .attr("width", 300)
    .attr("height", 100);

function drawCircles(svg) {
    let circles = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle");

    circles.attr("cx", (d, i) => (i * 50) + 25)
        .attr("cy", 35)
        .attr("r", d => d)
        .attr("fill", "yellow")
        .attr("stroke", "orange")
        .attr("stroke-width", d => d / 2);

}

function drawBars() {

    let w = 600;
    let h = 250;
    let padding = 1;

    let svg2 = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);


    svg2.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
            x: (d, i) => i * (w / dataset.length),
            y: d => (h - d * 3),
            width: (w / dataset.length - 1),
            height: d => d * 3,
            fill: d => "rgb(0, 0, " + (d * 10) + ")",
        });

    svg2.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(d => d)
        .attr({
            x: (d, i) => i * (w / dataset.length) + (w / dataset.length - 1) / 2,
            y: d => (h - d * 3) + 14,
            fill: "white",
            "font-family": "sans-serif",
            "font-size": "11px",
            "text-anchor": "middle"
        });


    dataset = [5, 10, 15, 27, 30, 22, 44];
    svg2.selectAll("rect").on("click", () => [svg2.selectAll("rect")
        .data(dataset)
        .transition()
        .duration(2500)
        .ease("elastic")
        .attr({
            x: (d, i) => i * (w / dataset.length),
            y: d => (h - d * 3),
            width: (w / dataset.length - 1),
            height: d => d * 3,
            fill: d => "rgb(" + (d * 10) + ", 0, 0)"
        }),
        svg2.selectAll("text")
            .data(dataset)
            .transition()
            .duration(5000)
            .text(d => d)
            .attr({
                x: (d, i) => i * (w / dataset.length) + (w / dataset.length - 1) / 2,
                y: d => (h - d * 3) + 14,
                fill: "white",
                "text-anchor": "middle"
            })
    ]
    );
}

function drawScatter(w: number, h: number) {
    let newDataset = [
        [480, 90],
        [250, 50],
        [100, 33],
        [330, 95],
        [410, 12],
        [475, 44],
        [25, 67],
        [85, 21],
        [220, 88],
        [600, 150]
    ];

    let svg3 = d3.select("body")
        .append("svg")
        .attr("width", w + 300)
        .attr("height", h + 250);

    let xScale = d3.scale.linear()
        .domain([0, d3.max(newDataset, d => d[0])])
        .range([20, w + 150]);

    let yScale = d3.scale.linear()
        .domain([0, d3.max(newDataset, d => d[1])])
        .range([h + 150, 20]);

    let rScale = d3.scale.linear()
        .domain([0, d3.max(newDataset, d => d[1])])
        .range([2, 5]);

    svg3.selectAll("circle")
        .data(newDataset)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d[0]))
        .attr("cy", d => yScale(d[1]))
        .attr("r", d => rScale(d[1]));

    svg3.selectAll("text")
        .data(newDataset)
        .enter()
        .append("text")
        .text(d => d[0] + ", " + d[1])
        .attr("x", d => xScale(d[0]))
        .attr("y", d => yScale(d[1]))
        .attr("fill", "red");

    let xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(5);

    svg3.append("g")
        .call(xAxis)
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h + 180) + ")");

    let yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(5);

    svg3.append("g")
        .call(yAxis)
        .attr("class", "axis")
        .attr("transform", "translate(" + 35 + ",0)");

}

drawScatter(350, 350);
