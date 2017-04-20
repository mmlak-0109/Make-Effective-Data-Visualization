current = "numbers_row"; // div with id="numbers_row" is currently diplayed
function show_or_hide (id) {
    if (current) { //if something is displayed
        document.getElementById (current).style.display = "none";
        if (current == id) { //if <div> is already diplayed
            current = 0;
        }
        else{
            document.getElementById (id).style.display = "block";
            current = id;
        }
    }
    else { //if nothing is displayed
        document.getElementById (id).style.display = "block";
        current = id;
    }
};

function draw_the_numbers(data) {
    //Define chart boundary
    var svg = d3.select("#the_numbers")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "635px");

    //Define chart type (y-axis type) for the initial visualization
    var chartType = "Total Handedness";

    function chartUpdate(chartType) {

        var chart = new dimple.chart(svg, data);

        //Define x-axis variable, title and bar-chart order
        var x = chart.addCategoryAxis("x", "handedness");
        x.title = "Handedness";

        //Define y-axis scales and title that update when chart is updated by clicking the button
        if(chartType == "Total Handedness") {
            var y = chart.addMeasureAxis("y", "name");
            y.title = "Total";
            var series = chart.addSeries(null, dimple.plot.bar);
        }
        else if(chartType == "Average Homeruns") {
            var y = chart.addMeasureAxis("y", "HR");
            y.title = "Average Homeruns";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.aggregate = dimple.aggregateMethod.avg;
        }
        else if(chartType == "Average Batting Average") {
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Average Batting Average";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.aggregate = dimple.aggregateMethod.avg;
        }
        else if(chartType == "Average Height") {
            var y = chart.addMeasureAxis("y", "height");
            y.title = "Average Height";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.aggregate = dimple.aggregateMethod.avg;
        }
        else if(chartType == "Average Weight") {
            var y = chart.addMeasureAxis("y", "weight");
            y.title = "Average Weight";
            var series = chart.addSeries(null, dimple.plot.bar);
            series.aggregate = dimple.aggregateMethod.avg;
        }

        chart.draw(1000);
    }

        //Call chart update function for the first plot using "Percentage"
        chartUpdate(chartType);

    //Define y-axis scale options for buttons
    var stat = ["Total Handedness", "Average Homeruns", "Average Batting Average", "Average Height", "Average Weight"]

    //Define buttons
    var buttons = d3.select("#numbers_buttons")
                    .append("div")
                    .attr("class", "stat_buttons")
                    .selectAll("div")
                    .data(stat)
                    .enter()
                    .append("div")
                    .text(function(d) {
                        return d;
                    })

    //Define button click behavior and chart update sequence by first removing the previous plot and then updating with the new plot
    buttons.on("click", function(d) {
        d3.select(".stat_buttons")
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
    })

};

function draw_relationships(data) {
    //Define chart boundary
    var svg = d3.select("#relationships")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "635px");

    //Define chart type (y-axis type) for the initial visualization
    var chartType = "Homeruns - Batting Average";

    function chartUpdate(chartType) {

        var chart = new dimple.chart(svg, data);
        chart.addLegend(150, 40, "top")

        //Define y-axis scales and title that update when chart is updated by clicking the button
        if(chartType == "Homeruns - Batting Average") {
            //Define x-axis variable, title and bar-chart order
            var x = chart.addMeasureAxis("x", "HR");
            x.title = "Homeruns";
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Batting Average";
            var series = chart.addSeries(["name", "handedness"], dimple.plot.bubble);
        }
        else if(chartType == "Height - Batting Average") {
            var x = chart.addCategoryAxis("x", "height");
            x.title = "Height";
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Batting Average";
            var series = chart.addSeries(["name", "handedness"], dimple.plot.bubble);
        }
        else if(chartType == "Weight - Batting Average") {
            var x = chart.addCategoryAxis("x", "weight");
            x.title = "Weight";
            var y = chart.addMeasureAxis("y", "avg");
            y.title = "Batting Average";
            var series = chart.addSeries(["name", "handedness"], dimple.plot.bubble);
        }
        else if(chartType == "Height - Homeruns") {
            var x = chart.addCategoryAxis("x", "height");
            x.title = "Height";
            var y = chart.addMeasureAxis("y", "HR");
            y.title = "Homeruns";
            var series = chart.addSeries(["name", "handedness"], dimple.plot.bubble);
        }
        else if(chartType == "Weight - Homeruns") {
            var x = chart.addCategoryAxis("x", "weight");
            x.title = "Weight";
            var y = chart.addMeasureAxis("y", "HR");
            y.title = "Homeruns";
            var series = chart.addSeries(["name", "handedness"], dimple.plot.bubble);
        }
        else if(chartType == "Height - Weight") {
            var x = chart.addCategoryAxis("x", "height");
            x.title = "Height";
            var y = chart.addCategoryAxis("y", "weight");
            y.title = "Weight";
            var series = chart.addSeries(["name", "handedness"], dimple.plot.bubble);
        }

        chart.draw(1000);
    }

        //Call chart update function for the first plot using "Percentage"
        chartUpdate(chartType);

    //Define y-axis scale options for buttons
    var stat = ["Homeruns - Batting Average", "Height - Batting Average", "Weight - Batting Average", "Height - Homeruns", "Weight - Homeruns", "Height - Weight"]

    //Define buttons
    var buttons = d3.select("#relationships_buttons")
                    .append("div")
                    .attr("class", "stat_buttons")
                    .selectAll("div")
                    .data(stat)
                    .enter()
                    .append("div")
                    .text(function(d) {
                        return d;
                    })

    //Define button click behavior and chart update sequence by first removing the previous plot and then updating with the new plot
    buttons.on("click", function(d) {
        d3.select(".stat_buttons")
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
    })

    //Hide the rendered chart by setting style.display = "none"
    document.getElementById ("relationships_row").style.display = "none";
};
