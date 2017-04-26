var current = "numbers_row"; // div with id="numbers_row" is currently displayed
function show_or_hide(id) {
    "use strict";
    if (current) { //if something is displayed
        document.getElementById(current).style.display = "none";
        if (current === id) { //if <div> is already displayed
            current = 0;
        } else {
            document.getElementById(id).style.display = "block";
            current = id;
        }
    } else { //if nothing is displayed
        document.getElementById(id).style.display = "block";
        current = id;
    }
}

function draw_the_numbers(data) {
    "use strict";
    //Define chart boundary
    var svg = d3.select("#the_numbers")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "635px");

    //Define chart type for the initial visualization
    var chartType = "Total Handedness";

    function chartUpdate(chartType) {

        var chart = new dimple.chart(svg, data);

        //Define x-axis variable and title
        var x = chart.addCategoryAxis("x", "handedness");
        x.addOrderRule(["R", "L", "B"]);
        x.title = "Handedness";
        x.fontSize = "14px";

        //Define y-axis scales and title that update when chart is updated by clicking the button
        if (chartType === "Total Handedness") {
            var y = chart.addMeasureAxis("y", "name");
            y.title = "Total";
            y.fontSize = "14px";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.tooltipFontSize = "14px";
        } else if (chartType === "Average Homeruns") {
            var y = chart.addMeasureAxis("y", "HR");
            y.title = "Average Homeruns";
            y.fontSize = "14px";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.aggregate = dimple.aggregateMethod.avg;
            series.tooltipFontSize = "14px";
        } else if (chartType === "Average Batting Average") {
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Average Batting Average";
            y.fontSize = "14px";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.aggregate = dimple.aggregateMethod.avg;
            series.tooltipFontSize = "14px";
        }

        chart.draw(1000);
    }

    //Call chart update function for the first plot using "Total Handedness"
    chartUpdate(chartType);

    //Define options for buttons
    var stat = ["Total Handedness", "Average Homeruns", "Average Batting Average"];

    //Define buttons
    var buttons = d3.select("#numbers_buttons")
        .append("div")
        .attr("class", "nb_stat_buttons")
        .selectAll("div")
        .data(stat)
        .enter()
        .append("div")
        .text(function (d) {
            return d;
        });

    //Define button click behavior and chart update sequence by first removing the previous plot and then updating with the new plot
    buttons.on("click", function (d) {
        d3.select(".nb_stat_buttons")
            .selectAll("div")
            .transition()
            .duration(1000)
            .style("color", "black")
            .style("background", "rgb(251, 201, 127)");

        d3.select(this)
            .transition()
            .duration(1000)
            .style("background", "lightBlue")
            .style("color", "white");
        svg.selectAll("*").remove();
        chartUpdate(d);
    });
}

function draw_relationships(data) {
    "use strict";
    //Define chart boundary
    var svg = d3.select("#relationships")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "635px");

    //Define chart type for the initial visualization
    var chartType = "Average Batting Average - Height";

    function chartUpdate(chartType) {

        var chart = new dimple.chart(svg, data);
        var legend = chart.addLegend(150, 40, "top");
        legend.fontSize = "14px";

        //Define x-axis and y-axis variables, scales and titles that update when chart is updated by clicking the button
        if (chartType === "Average Batting Average - Height") {
            var x = chart.addCategoryAxis("x", "height");
            x.title = "Height (inches)";
            x.fontSize = "14px";
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Batting Average";
            y.fontSize = "14px";
        } else if (chartType === "Average Batting Average - Weight") {
            var x = chart.addCategoryAxis("x", "weight");
            x.title = "Weight (pounds)";
            x.fontSize = "12px";
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Batting Average";
            y.fontSize = "12px";
        } else if (chartType === "Average Homeruns - Height") {
            var x = chart.addCategoryAxis("x", "height");
            x.title = "Height (inches)";
            x.fontSize = "14px";
            var y = chart.addMeasureAxis("y", "HR");
            y.title = "Homeruns";
            y.fontSize = "14px";
        } else if (chartType === "Average Homeruns - Weight") {
            var x = chart.addCategoryAxis("x", "weight");
            x.title = "Weight (pounds)";
            x.fontSize = "12px";
            var y = chart.addMeasureAxis("y", "HR");
            y.title = "Homeruns";
            y.fontSize = "12px";
        }

        var series = chart.addSeries("handedness", dimple.plot.line);
        series.lineMarkers = true;
        series.aggregate = dimple.aggregateMethod.avg;
        series.tooltipFontSize = "14px";

        legend._getEntries = function() {
            var orderedValues = ["R", "L","B"];
            var entries = [];
            orderedValues.forEach(function(v) {
                entries.push({
                    key : v,
                    fill : chart.getColor(v).fill,
                    stroke : chart.getColor(v).stroke,
                    opacity : chart.getColor(v).opacity,
                    series : [series],
                    aggField : [v]
                });
            }, this);
            return entries;
        };

        chart.draw(1000);
        x.shapes.selectAll("text").attr("transform", function (d) {
            if (chartType === "Average Batting Average - Weight") {
                return d3.select(this).attr("transform") + "translate(0, 10) rotate(-45)";
            } else if (chartType === "Average Homeruns - Weight") {
                return d3.select(this).attr("transform") + "translate(0, 10) rotate(-45)";
            }
        });

        // This is a critical step.  By doing this we orphan the legend. This
        // means it will not respond to graph updates.  Without this the legend
        // will redraw when the chart refreshes removing the unchecked item and
        // also dropping the events we define below.
        chart.legends = [];

        // This block simply adds the legend title. I put it into a d3 data
        // object to split it onto 2 lines.  This technique works with any
        // number of lines, it isn't dimple specific.
        svg.selectAll("title_text")
            .data(["Click legend to show/hide handedness:"])
            .enter()
            .append("text")
            .attr("x", 100)
            .attr("y", function (d, i) {
                return 30 + i * 14;
            })
            .style("font-family", "sans-serif")
            .style("font-size", "14px")
            .style("color", "Black")
            .text(function (d) {
                return d;
            });

        // Get a unique list of Owner values to use when filtering
        var filterValues = dimple.getUniqueValues(data, "handedness");
        // Get all the rectangles from our now orphaned legend
        legend.shapes.selectAll("rect")
            // Add a click event to each rectangle
            .on("click", function (e) {
                // This indicates whether the item is already visible or not
                var hide = false;
                var newFilters = [];
                // If the filters contain the clicked shape hide it
                filterValues.forEach(function (f) {
                    if (f === e.aggField.slice(-1)[0]) {
                        hide = true;
                    } else {
                        newFilters.push(f);
                    }
                });
                // Hide the shape or show it
                if (hide) {
                  d3.select(this).style("opacity", 0.2);
                } else {
                  newFilters.push(e.aggField.slice(-1)[0]);
                  d3.select(this).style("opacity", 0.8);
                }
                // Update the filters
                filterValues = newFilters;
                // Filter the data
                chart.data = dimple.filterData(data, "handedness", filterValues);
                // Passing a duration parameter makes the chart animate. Without
                // it there is no transition
                chart.draw(1000);
                x.shapes.selectAll("text").attr("transform", function (d) {
                    if (chartType === "Average Batting Average - Weight") {
                        return d3.select(this).attr("transform") + "translate(0, 10) rotate(-45)";
                    } else if (chartType === "Average Homeruns - Weight") {
                        return d3.select(this).attr("transform") + "translate(0, 10) rotate(-45)";
                    }
                });
            });
    }

    //Call chart update function for the first plot using "Homeruns - Batting Average"
    chartUpdate(chartType);

    //Define options for buttons
    var stat = ["Average Batting Average - Height", "Average Batting Average - Weight", "Average Homeruns - Height", "Average Homeruns - Weight"];

    //Define buttons
    var buttons = d3.select("#relationships_buttons")
        .append("div")
        .attr("class", "rb_stat_buttons")
        .selectAll("div")
        .data(stat)
        .enter()
        .append("div")
        .text(function (d) {
            return d;
        });

    //Define button click behavior and chart update sequence by first removing the previous plot and then updating with the new plot
    buttons.on("click", function (d) {
        d3.select(".rb_stat_buttons")
            .selectAll("div")
            .transition()
            .duration(1000)
            .style("color", "black")
            .style("background", "rgb(251, 201, 127)");

        d3.select(this)
            .transition()
            .duration(1000)
            .style("background", "lightBlue")
            .style("color", "white");
        svg.selectAll("*").remove();
        chartUpdate(d);
    });

    //Hide the rendered chart by setting style.display = "none"
    document.getElementById("relationships_row").style.display = "none";
}
