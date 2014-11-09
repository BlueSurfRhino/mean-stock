// Events
window.onload = function () { dcjsdemo(); }; //Render chart first thing

// Globals
var dcReset;  //Connect to "Reset" button with onclick="dcReset()" call

function dcjsdemo() {

    // Debug output routine from Data Visualization with D3.js Cookbook 
    function printFilter(filter) {
        var f = eval(filter);
        if (typeof (f.length) != "undefined") { } else { }
        if (typeof (f.top) != "undefined") { f = f.top(Infinity); } else { }
        if (typeof (f.dimension) != "undefined") { f = f.dimension(function (d) { return ""; }).top(Infinity); } else { }
        console.log(filter + "(" + f.length + ") = " + JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]"));
    }

    // Make things pretty
    var format = d3.format(",");
    var timeFormat = d3.time.format.iso;

    // load csv file that contains the data
    // pathing asssume things are run from public
    // for where files are located

        // pretty colors, no thoughtful assignment
        var chartcolors = d3.scale.category20b();


var w = 400;
var h = 400;
var r = h/2;
var color = d3.scale.category20c();

var data = [{"label":"News", "value":30}, 
		          {"label":"Chart", "value":30}, 
		          {"label":"Events", "value":30}];


var vis = d3.select('#navring').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);


// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
/*    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);*/
        .attr("d", function(d, i, j) {
    return arc.innerRadius(100+r*j).outerRadius(r*(j+1))(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
			d.innerRadius = 0;
			d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label;}
		);



}
