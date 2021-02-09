function validateForm() {
    let submit = true;
    let input = d3.select("#input").node().value;
    let output = d3.select("#output").node().value;

    if (input == "") {
        d3.select("#inputError").classed("hidden", false);
        submit = false;
    } else {
        d3.select("#inputError").classed("hidden", true);
    }

    if (output == "") {
        d3.select("#outputError").classed("hidden", false);
        submit = false;
    } else {
        d3.select("#outputError").classed("hidden", true);
    }

    if (submit) {
        d3.selectAll("svg > *").remove();
        d3.selectAll("#legend > *").remove();
        createPlot(input, output);
    }
}

var xAxisLabel = { 
    "polymer" : "Polymer", 
    "carbon" : "Carbon Black",
    "silica" : "Silica Filler",
    "plasticizer" : "Plasticizer",
    "antioxidant" : "Antioxidant",
    "pigment" : "Coloring Pigment",
    "co_agent" : "Co-Agent",
    "curing_agent" : "Curing Agent",
    "oven_temp" : "Oven Temperature"
}

var inputTypes = {
    "polymer" : ["Polymer 1", "Polymer 2", "Polymer 3", "Polymer 4"],
    "carbon" : ["Carbon Black High Grade", "Carbon Black Low Grade"],
    "silica" : ["Silica Filler 1", "Silica Filler 2"],
    "plasticizer" : ["Plasticizer 1", "Plasticizer 2", "Plasticizer 3"],
    "antioxidant" : ["Antioxidant"],
    "pigment" : ["Coloring Pigment"],
    "co_agent" : ["Co-Agent 1", "Co-Agent 2", "Co-Agent 3"],
    "curing_agent" : ["Curing Agent 1", "Curing Agent 2"],
    "oven_temp" : ["Oven Temperature"]
 };

 var outputTypes = {
     "viscosity" : "Viscosity",
     "cure_time" : "Cure Time",
     "elongation" : "Elongation",
     "tensile" : "Tensile Strength",
     "compression" : "Compression Set"
 }

 var colors = { 
    "Polymer 1": "#ff1a1a", "Polymer 2": "#fe7a19", "Polymer 3": "#fab043", "Polymer 4": "#f8de7e",
    "Carbon Black High Grade": "#000066", "Carbon Black Low Grade": "#b2b2ff",
    "Silica Filler 1": "#b20000", "Silica Filler 2": "#e4746b",
    "Plasticizer 1": "#3cb371", "Plasticizer 2": "#8fd59e", "Plasticizer 3": "#d2f8d2",
    "Antioxidant": "#325EE3",
    "Coloring Pigment": "#9B2242",
    "Co-Agent 1": "#4b0082", "Co-Agent 2": "#cf71af", "Co-Agent 3": "#af9fc9",
    "Curing Agent 1": "#e1ad01", "Curing Agent 2": "#F7E594",
    "Oven Temperature": "#FC8F32"
 }

function createPlot(input, output) {
    const plot = d3.select("svg#plot");
    const width = plot.attr("width") - 60;
    const height = plot.attr("height") - 40;

    const requestData = async function () {
        // filter out non-selected properties
        let allInputs = inputTypes[input];
        let inputs = {};
        let outputs = {};
        const data = await d3.json("data.json");
        let maxInput = 0;
        let minOutput = Number.MAX_SAFE_INTEGER;
        let maxOutput = 0;
        for (var d in data) {
            allInputs.forEach(i => {
                if (!inputs[d]) inputs[d] = {};
                inputs[d][i] = data[d].inputs[i];
                if (inputs[d][i] > maxInput) maxInput = inputs[d][i];
            })
            let val = data[d].outputs[outputTypes[output]];
            outputs[d] = val;
            if (val > maxOutput) maxOutput = val;
            if (val < minOutput) minOutput = val;
        }

        let inputScale = d3.scaleLinear()
                            .domain([0, maxInput])
                            .range([0, width - 60]);

        let outputScale = d3.scaleLinear()
                            .domain([minOutput, maxOutput])
                            .range([height - 40, 0]);

        // gridlines + axes
        plot.append("text")
            .attr("id", "title")
            .attr("x", width/2)
            .attr("y", 20)
            .style("text-anchor", "middle")
            .text(xAxisLabel[input] + " vs " + outputTypes[output]);

        let xAxis = d3.axisBottom(inputScale).ticks()
        plot.append("g")
            .attr("transform", "translate(60, " + height + ")")
            .call(xAxis);
        plot.append("text")
            .attr("class", "axisLabel")
            .attr("x", width/2)
            .style("text-anchor", "middle")
            .attr("y", height+35)
            .text(xAxisLabel[input]);

        let yAxis = d3.axisLeft(outputScale).ticks()
        plot.append("g")
            .attr("transform", "translate(60, 40)")
            .call(yAxis);
        plot.append("text")
            .attr("class", "axisLabel")
            .attr("y", 15)
            .attr("x", -height/2)
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "end")
            .text(outputTypes[output]);

        let verticalGridlines = d3.axisBottom(inputScale)
                                    .tickSize(height - 40)
                                    .tickFormat("");
        plot.append("g")
            .attr("id", "vLines")
            .call(verticalGridlines)
            .style("color", "#a9a9a9")
            .attr("transform", "translate(60, 40)");

        let horizontalGridlines = d3.axisLeft(outputScale)
                                    .tickSize(40 - width)
                                    .tickFormat("");
        plot.append("g")
            .attr("id", "hLines")
            .call(horizontalGridlines)
            .style("color", "#a9a9a9")
            .attr("transform", "translate(60, 40)");

        // points
        let points = plot.append("g")
                        .attr("id", "points")
                        .attr("transform", "translate(60.5, 40.5)");
        
        let count = 0;
        for (var i in inputs) {
            for (var point in inputs[i]) {
                let x = inputScale(inputs[i][point]);
                let y = outputScale(outputs[i]);
                points.append("circle")
                        .attr("id", "p" + count)
                        .attr("class", "e" + i)
                        .attr("r", 4)
                        .attr("cx", x)
                        .attr("cy", y)
                        .attr("fill", colors[point])
                        .style("stroke", "black")
                        .style("stroke-width", 0.5);
                let text = points.append("text") 
                        .attr("id", "p" + count)
                        .attr("class", "hoverText")
                        .attr("x", x+10)
                        .attr("y", y-10)
                        .style("display", "none"); 
                text.append("tspan")
                    .text(point + ": " + inputs[i][point])
                    .attr("x", x+10)
                    .attr("dy", "1em");
                text.append("tspan")
                    .text(outputTypes[output] + ": " + outputs[i])
                    .attr("x", x+10)
                    .attr("dy", "1em");
                count++;
            }
        }

        // legend 
        if (allInputs.length > 1) {
            let legend = d3.select("#legend");
            legend.append("p")
                    .html("Key: ")
                    .style("margin-right", 10)
                    .style("font-weight", "bold");
            allInputs.forEach( i => {
                let input = legend.append("div")
                                    .attr("class", "legendValue");
                input.append("div")
                    .attr("class", "colorIdentifier")
                    .style("border", "1px black solid")
                    .style("background-color", colors[i]);
                input.append("p")
                    .html(i);
            })
        }

        // hover effects
        d3.select("g#points").selectAll("circle")
            .on("mouseover", function() {
                d3.selectAll("circle").style("opacity", 0.5);
                d3.selectAll("circle." + d3.select(this).attr("class"))
                    .style("opacity", 1)
                    .attr("r", 6);
                d3.select("text#" + this.id)
                    .style("display", "block");
            })
            .on("mouseout", function() {
                let selected = document.getElementById("expName");
                if (selected == null || selected != null && !d3.select("#expName").html().includes(d3.select(this).attr("class").substring(1))) {
                    d3.selectAll("circle").style("opacity", 1);
                    d3.selectAll("circle." + d3.select(this).attr("class"))
                        .attr("r", 4);
                }
                d3.select("text#" + this.id)
                    .style("display", "none");
            })

        // display experiment
        d3.select("g#points").selectAll("circle")
            .on("click", function() {
                d3.selectAll("div#experiment > *").remove();

                let expId = d3.select(this).attr("class");
                let exp = d3.select("div#experiment");
                exp.append('h2')
                    .attr("id", "expName")
                    .text("Experiment: " + expId.substring(1))
                    .style("font-weight", "bold");
                exp.append("h3")
                    .text("Inputs:");
                for (d in data[expId.substring(1)].inputs) {
                    exp.append("p")
                        .text(d + ": " + data[expId.substring(1)].inputs[d])
                        .style("background-color", allInputs.includes(d) ? colors[d] : "white");
                }
                exp.append("h3")
                    .text("Outputs:");
                for (d in data[expId.substring(1)].outputs) {
                    exp.append("p")
                        .text(d + ": " + data[expId.substring(1)].outputs[d])
                        .style("font-weight", outputTypes[output] == d ? "bold" : "normal");
                }

                d3.selectAll("circle")
                    .style("opacity", 0.5)
                    .attr("r", 4);
                d3.selectAll("circle." + expId)
                    .style("opacity", 1)
                    .attr("r", 6);

                d3.select("#expContainer").classed("hidden", false);
            })
    }

    requestData();
}

function deselectExp() {
    d3.selectAll("circle")
        .style("opacity", 1)
        .attr("r", 4);
    d3.selectAll("div#experiment > *").remove();
    d3.select("#expContainer").classed("hidden", true);
}