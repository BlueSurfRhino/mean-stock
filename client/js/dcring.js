// Events
window.onload = function() {
    d3NavRing();
}; //Render Navigation Ring (aka NavRing) on page load


//Implimentation of Navigation Ring
function d3NavRing() {

    //height & width & radius of navigation ring
    var w = 400;
    var h = 400;
    var r = h / 2;

    //get some nice colors via d3
    var color = d3.scale.category20c();

    //NavRing definition
    var data = [{
        "label": "News",
        "value": 30,
        "dataid": "divId1"
    }, {
        "label": "Chart",
        "value": 30,
        "dataid": "divId2"
    }, {
        "label": "Events",
        "value": 30,
        "dataid": "divId3"
    }];

    //Buy button/circle definition
    var bigbuy = [{
        "label": "BUY!",
        "value": 1
    }];

    //Use the div with an id of navring as location for the 
    //NavRing control
    var vis = d3.select('#navring')
        .append("svg:svg")
        .data([data])
        .attr("width", w)
        .attr("height", h)
        .append("svg:g")
        .attr("transform", "translate(" + r + "," + r + ")");

    //Declare a pie chart layout with values from our data
    //defined above
    var pie = d3.layout.pie()
        .value(function(d) {
            return d.value;
        });

    //declare an arc generator function
    var arc = d3.svg.arc().outerRadius(r);


    //select paths, use arc generator to draw
    var arcs = vis.selectAll("g.slice")
        .data(pie)
        .enter()
        .append("svg:g")
        .attr("class", "slice");

    //add functionality and event actions to the various arcs
    //as definite in the data above
    arcs.append("svg:path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .on("click", function(d) {
            var hello = d.data.dataid;
            $('.hideDivs').hide();
            $('#' + hello).show();
        })
        .attr("d", function(d, i, j) {
            return arc.innerRadius(100 + r * j).outerRadius(r * (j + 1))(d);
        });

    //add the text
    arcs.append("svg:text")
        .attr("transform", function(d) {
            d.innerRadius = 0;
            d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d, i) {
            return data[i].label;
        });

    //Center circle with "BUY", takes user to a broker 
    //so they can buy the stock
    var circle = vis.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 99)
        .attr("data-id", "divId1")
        .style("fill", "steelblue")
        .on("click", function(d) {
            var hello = $(this).attr('data-id');
            $('.hideDivs').hide();
            $('#' + hello).show();
        })
        .on("mouseover", function() {
            d3.select(this)
                .style("fill", "orange");
        })
        .on("mouseout", function() {
            d3.select(this)
                .style("fill", "steelblue");
        });

    //beautify the big buy button
    var circletxt = vis.selectAll("text")
        .data("bigbuy")
        .enter()
        .append("text")
        .text("BUY")
        .attr("font-family", "sans-serif")
        .attr("font-size", "29px")
        .attr("fill", "Black")
        .attr("text-anchor", "middle");
}
