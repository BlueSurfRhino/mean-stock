{"changed":true,"filter":false,"title":"dcring.js","tooltip":"/client/js/dcring.js","value":"// Events\nwindow.onload = function() {\n    dcjsdemo();\n}; //Render chart first thing\n\n// Globals\nvar dcReset; //Connect to \"Reset\" button with onclick=\"dcReset()\" call\n\nfunction foobar() {\n    d3.select('#foobartext').append(\"p\").text(\"FOO!!!\");\n}\n\nfunction dcjsdemo() {\n\n    // Debug output routine from Data Visualization with D3.js Cookbook \n    function printFilter(filter) {\n        var f = eval(filter);\n        if (typeof(f.length) != \"undefined\") {}\n        else {}\n        if (typeof(f.top) != \"undefined\") {\n            f = f.top(Infinity);\n        }\n        else {}\n        if (typeof(f.dimension) != \"undefined\") {\n            f = f.dimension(function(d) {\n                return \"\";\n            }).top(Infinity);\n        }\n        else {}\n        console.log(filter + \"(\" + f.length + \") = \" + JSON.stringify(f).replace(\"[\", \"[\\n\\t\").replace(/}\\,/g, \"},\\n\\t\").replace(\"]\", \"\\n]\"));\n    }\n\n    // Make things pretty\n    var format = d3.format(\",\");\n    var timeFormat = d3.time.format.iso;\n\n    // load csv file that contains the data\n    // pathing asssume things are run from public\n    // for where files are located\n\n    // pretty colors, no thoughtful assignment\n    var chartcolors = d3.scale.category20b();\n\n\n    var w = 400;\n    var h = 400;\n    var r = h / 2;\n\n\n    var color = d3.scale.category20c();\n\n    var data = [{\n        \"label\": \"News\",\n        \"value\": 30\n    }, {\n        \"label\": \"Chart\",\n        \"value\": 30\n    }, {\n        \"label\": \"Events\",\n        \"value\": 30\n    }];\n\n    var bigbuy = [{\n        \"label\": \"BUY!\",\n        \"value\": 1\n    }];\n\n\n    var vis = d3.select('#navring').append(\"svg:svg\").data([data]).attr(\"width\", w).attr(\"height\", h).append(\"svg:g\").attr(\"transform\", \"translate(\" + r + \",\" + r + \")\");\n    var pie = d3.layout.pie().value(function(d) {\n        return d.value;\n    });\n\n    // declare an arc generator function\n    var arc = d3.svg.arc().outerRadius(r);\n\n\n    // select paths, use arc generator to draw\n    var arcs = vis.selectAll(\"g.slice\").data(pie).enter().append(\"svg:g\").attr(\"class\", \"slice\");\n    arcs.append(\"svg:path\")\n        .attr(\"fill\", function(d, i) {\n            return color(i);\n        })\n\n    .attr(\"d\", function(d, i, j) {\n        return arc.innerRadius(100 + r * j).outerRadius(r * (j + 1))(d);\n    });\n\n    // add the text\n    arcs.append(\"svg:text\").attr(\"transform\", function(d) {\n        d.innerRadius = 0;\n        d.outerRadius = r;\n        return \"translate(\" + arc.centroid(d) + \")\";\n    }).attr(\"text-anchor\", \"middle\").text(function(d, i) {\n        return data[i].label;\n    });\n\n\n    var circle = vis.append(\"circle\")\n        .attr(\"cx\", 0)\n        .attr(\"cy\", 0)\n        .attr(\"r\", 99)\n        .style(\"fill\", \"steelblue\");\n\n    var circletxt = vis.selectAll(\"text\")\n        .data(\"bigbuy\")\n        .enter()\n        .append(\"text\")\n        .text(\"BUY\")\n        .attr(\"font-family\", \"sans-serif\")\n        .attr(\"font-size\", \"29px\")\n        .attr(\"fill\", \"Black\")\n        .attr(\"text-anchor\", \"middle\");\n\n\n}\n","undoManager":{"mark":98,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":87,"column":20},"end":{"row":87,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":87,"column":20},"end":{"row":87,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":87,"column":20},"end":{"row":87,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":87,"column":19},"end":{"row":87,"column":20}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":85,"column":4},"end":{"row":85,"column":19}},"text":"               "},{"action":"removeText","range":{"start":{"row":86,"column":4},"end":{"row":86,"column":19}},"text":"               "},{"action":"removeText","range":{"start":{"row":87,"column":4},"end":{"row":87,"column":19}},"text":"               "},{"action":"removeText","range":{"start":{"row":88,"column":0},"end":{"row":88,"column":3}},"text":"\t\t\t"},{"action":"insertText","range":{"start":{"row":88,"column":0},"end":{"row":88,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":89,"column":0},"end":{"row":89,"column":3}},"text":"\t\t\t"},{"action":"insertText","range":{"start":{"row":89,"column":0},"end":{"row":89,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":84,"column":37},"end":{"row":85,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":0},"end":{"row":85,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":4},"end":{"row":85,"column":5}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":85,"column":4},"end":{"row":85,"column":5}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":85,"column":0},"end":{"row":85,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":0},"end":{"row":85,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":4},"end":{"row":85,"column":5}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":5},"end":{"row":85,"column":11}},"text":"data()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":10},"end":{"row":85,"column":12}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":11},"end":{"row":85,"column":12}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":12},"end":{"row":85,"column":13}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":13},"end":{"row":85,"column":14}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":14},"end":{"row":85,"column":15}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":15},"end":{"row":85,"column":16}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":16},"end":{"row":85,"column":17}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":85,"column":16},"end":{"row":85,"column":17}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":85,"column":15},"end":{"row":85,"column":16}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":15},"end":{"row":85,"column":16}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":16},"end":{"row":85,"column":17}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":19},"end":{"row":86,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":86,"column":0},"end":{"row":86,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":86,"column":4},"end":{"row":86,"column":5}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":86,"column":5},"end":{"row":86,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":86,"column":5},"end":{"row":86,"column":6}},"text":"e"},{"action":"insertText","range":{"start":{"row":86,"column":5},"end":{"row":86,"column":12}},"text":"enter()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":19},"end":{"row":88,"column":20}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":18},"end":{"row":88,"column":19}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":17},"end":{"row":88,"column":18}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":16},"end":{"row":88,"column":17}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":15},"end":{"row":88,"column":16}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":14},"end":{"row":88,"column":15}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":13},"end":{"row":88,"column":14}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":12},"end":{"row":88,"column":13}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":88,"column":11},"end":{"row":88,"column":12}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":88,"column":11},"end":{"row":88,"column":12}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":88,"column":12},"end":{"row":88,"column":13}},"text":"U"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":88,"column":13},"end":{"row":88,"column":14}},"text":"Y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":25},"end":{"row":90,"column":26}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":24},"end":{"row":90,"column":25}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":24},"end":{"row":90,"column":25}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":25},"end":{"row":90,"column":26}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":91,"column":21},"end":{"row":91,"column":22}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":91,"column":20},"end":{"row":91,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":91,"column":19},"end":{"row":91,"column":20}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":19},"end":{"row":91,"column":20}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":20},"end":{"row":91,"column":21}},"text":"L"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":91,"column":20},"end":{"row":91,"column":21}},"text":"L"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":20},"end":{"row":91,"column":21}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":91,"column":20},"end":{"row":91,"column":21}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":20},"end":{"row":91,"column":21}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":21},"end":{"row":91,"column":22}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":22},"end":{"row":91,"column":23}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":23},"end":{"row":91,"column":24}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":26},"end":{"row":92,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":92,"column":0},"end":{"row":92,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":4},"end":{"row":92,"column":5}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":5},"end":{"row":92,"column":6}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":6},"end":{"row":92,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":7},"end":{"row":92,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":8},"end":{"row":92,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":9},"end":{"row":92,"column":11}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":10},"end":{"row":92,"column":12}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":11},"end":{"row":92,"column":22}},"text":"text-anchor"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":23},"end":{"row":92,"column":24}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":24},"end":{"row":92,"column":25}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":25},"end":{"row":92,"column":27}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":26},"end":{"row":92,"column":27}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":27},"end":{"row":92,"column":28}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":28},"end":{"row":92,"column":29}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":29},"end":{"row":92,"column":30}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":26},"end":{"row":92,"column":30}},"text":"midd"},{"action":"insertText","range":{"start":{"row":92,"column":26},"end":{"row":92,"column":32}},"text":"middle"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":91,"column":26},"end":{"row":92,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":92,"column":0},"end":{"row":92,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":4},"end":{"row":92,"column":5}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":5},"end":{"row":92,"column":6}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":6},"end":{"row":92,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":7},"end":{"row":92,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":5},"end":{"row":92,"column":8}},"text":"att"},{"action":"insertText","range":{"start":{"row":92,"column":5},"end":{"row":92,"column":9}},"text":"attr"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":9},"end":{"row":92,"column":11}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":10},"end":{"row":92,"column":25}},"text":" vertical-align"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":10},"end":{"row":92,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":10},"end":{"row":92,"column":11}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":26},"end":{"row":93,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":25},"end":{"row":92,"column":26}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":25},"end":{"row":92,"column":26}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":26},"end":{"row":92,"column":27}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":27},"end":{"row":92,"column":31}},"text":"    "},{"action":"insertText","range":{"start":{"row":92,"column":27},"end":{"row":93,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":93,"column":0},"end":{"row":93,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":27},"end":{"row":92,"column":28}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":28},"end":{"row":92,"column":30}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":29},"end":{"row":92,"column":30}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":30},"end":{"row":92,"column":31}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":31},"end":{"row":92,"column":32}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":32},"end":{"row":92,"column":33}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":33},"end":{"row":92,"column":34}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":34},"end":{"row":92,"column":35}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":36},"end":{"row":92,"column":37}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":0},"end":{"row":92,"column":37}},"text":"    .attr(\"vertical-align\", \"middle\")"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":92,"column":0},"end":{"row":93,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":24}},"text":"        return arc(d);*/"},{"action":"removeLines","range":{"start":{"row":61,"column":0},"end":{"row":64,"column":0}},"nl":"\n","lines":["/*    .attr(\"d\", function (d) {","        // log the result of the arc generator to show how cool it is :)","        console.log(arc(d));"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":24},"end":{"row":1,"column":25}},"text":" "},{"action":"insertText","range":{"start":{"row":1,"column":28},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":3}},"text":"   "},{"action":"removeText","range":{"start":{"row":2,"column":15},"end":{"row":2,"column":16}},"text":" "},{"action":"insertText","range":{"start":{"row":2,"column":15},"end":{"row":3,"column":0}},"text":"\n"},{"action":"removeText","range":{"start":{"row":6,"column":12},"end":{"row":6,"column":13}},"text":" "},{"action":"removeText","range":{"start":{"row":8,"column":17},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":17},"end":{"row":8,"column":18}},"text":" "},{"action":"removeText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":" "},{"action":"insertText","range":{"start":{"row":17,"column":46},"end":{"row":17,"column":47}},"text":"}"},{"action":"insertText","range":{"start":{"row":17,"column":47},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":18,"column":5},"end":{"row":18,"column":6}},"text":"}"},{"action":"insertText","range":{"start":{"row":18,"column":5},"end":{"row":18,"column":7}},"text":"  "},{"action":"removeText","range":{"start":{"row":18,"column":14},"end":{"row":18,"column":15}},"text":" "},{"action":"removeText","range":{"start":{"row":19,"column":18},"end":{"row":19,"column":19}},"text":" "},{"action":"insertText","range":{"start":{"row":19,"column":43},"end":{"row":20,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":11}},"text":"           "},{"action":"insertText","range":{"start":{"row":20,"column":32},"end":{"row":21,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":21,"column":9},"end":{"row":22,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":7}},"text":"       "},{"action":"removeText","range":{"start":{"row":22,"column":14},"end":{"row":22,"column":15}},"text":" "},{"action":"removeText","range":{"start":{"row":23,"column":18},"end":{"row":23,"column":19}},"text":" "},{"action":"insertText","range":{"start":{"row":23,"column":49},"end":{"row":24,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":11}},"text":"           "},{"action":"removeText","range":{"start":{"row":24,"column":36},"end":{"row":24,"column":37}},"text":" "},{"action":"insertText","range":{"start":{"row":24,"column":41},"end":{"row":25,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":15}},"text":"               "},{"action":"insertText","range":{"start":{"row":25,"column":26},"end":{"row":26,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":11}},"text":"           "},{"action":"insertText","range":{"start":{"row":26,"column":29},"end":{"row":27,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":27,"column":9},"end":{"row":28,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":7}},"text":"       "},{"action":"removeText","range":{"start":{"row":28,"column":14},"end":{"row":28,"column":15}},"text":" "},{"action":"removeText","range":{"start":{"row":40,"column":4},"end":{"row":40,"column":8}},"text":"    "},{"action":"removeText","range":{"start":{"row":41,"column":0},"end":{"row":41,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":41,"column":4},"end":{"row":41,"column":6}},"text":"  "},{"action":"insertText","range":{"start":{"row":44,"column":0},"end":{"row":44,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":45,"column":0},"end":{"row":45,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":46,"column":0},"end":{"row":46,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":46,"column":13},"end":{"row":46,"column":14}},"text":" "},{"action":"insertText","range":{"start":{"row":46,"column":15},"end":{"row":46,"column":16}},"text":" "},{"action":"insertText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":51,"column":0},"end":{"row":51,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":51,"column":17},"end":{"row":52,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":52,"column":0},"end":{"row":52,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":52,"column":16},"end":{"row":52,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":52,"column":24},"end":{"row":53,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":53,"column":16},"end":{"row":53,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":53,"column":19},"end":{"row":54,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":54,"column":7},"end":{"row":54,"column":8}},"text":"{"},{"action":"removeText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":4}},"text":"\t\t  "},{"action":"removeText","range":{"start":{"row":55,"column":8},"end":{"row":55,"column":9}},"text":"{"},{"action":"insertText","range":{"start":{"row":55,"column":16},"end":{"row":55,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":55,"column":25},"end":{"row":56,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":56,"column":0},"end":{"row":56,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":56,"column":16},"end":{"row":56,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":56,"column":19},"end":{"row":57,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":57,"column":0},"end":{"row":57,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":57,"column":7},"end":{"row":57,"column":8}},"text":"{"},{"action":"removeText","range":{"start":{"row":58,"column":0},"end":{"row":58,"column":4}},"text":"\t\t  "},{"action":"removeText","range":{"start":{"row":58,"column":8},"end":{"row":58,"column":9}},"text":"{"},{"action":"insertText","range":{"start":{"row":58,"column":16},"end":{"row":58,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":58,"column":26},"end":{"row":59,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":59,"column":16},"end":{"row":59,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":59,"column":19},"end":{"row":60,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":60,"column":0},"end":{"row":60,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":62,"column":17},"end":{"row":62,"column":18}},"text":" "},{"action":"insertText","range":{"start":{"row":62,"column":19},"end":{"row":63,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":63,"column":0},"end":{"row":63,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":63,"column":16},"end":{"row":63,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":63,"column":24},"end":{"row":64,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":7}},"text":"       "},{"action":"insertText","range":{"start":{"row":64,"column":16},"end":{"row":64,"column":17}},"text":" "},{"action":"insertText","range":{"start":{"row":64,"column":18},"end":{"row":65,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":68,"column":0},"end":{"row":68,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":69,"column":0},"end":{"row":69,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":69,"column":47},"end":{"row":69,"column":48}},"text":" "},{"action":"insertText","range":{"start":{"row":69,"column":49},"end":{"row":70,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":70,"column":23},"end":{"row":71,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":73,"column":0},"end":{"row":73,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":74,"column":0},"end":{"row":74,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":77,"column":0},"end":{"row":77,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":78,"column":0},"end":{"row":78,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":79,"column":0},"end":{"row":79,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":80,"column":0},"end":{"row":80,"column":1}},"text":" "},{"action":"insertText","range":{"start":{"row":80,"column":5},"end":{"row":80,"column":8}},"text":"   "},{"action":"insertText","range":{"start":{"row":80,"column":36},"end":{"row":80,"column":37}},"text":" "},{"action":"insertText","range":{"start":{"row":81,"column":0},"end":{"row":81,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":81,"column":10},"end":{"row":81,"column":12}},"text":"  "},{"action":"insertText","range":{"start":{"row":82,"column":0},"end":{"row":82,"column":3}},"text":"   "},{"action":"insertText","range":{"start":{"row":82,"column":7},"end":{"row":82,"column":8}},"text":" "},{"action":"removeText","range":{"start":{"row":84,"column":0},"end":{"row":84,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":85,"column":4},"end":{"row":85,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":85,"column":34},"end":{"row":85,"column":35}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":36},"end":{"row":85,"column":37}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":38},"end":{"row":85,"column":39}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":40},"end":{"row":85,"column":41}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":57},"end":{"row":85,"column":58}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":59},"end":{"row":85,"column":60}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":62},"end":{"row":85,"column":63}},"text":" "},{"action":"insertText","range":{"start":{"row":85,"column":64},"end":{"row":85,"column":65}},"text":" "},{"action":"insertText","range":{"start":{"row":88,"column":0},"end":{"row":88,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":89,"column":0},"end":{"row":89,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":89,"column":57},"end":{"row":89,"column":58}},"text":" "},{"action":"removeText","range":{"start":{"row":90,"column":0},"end":{"row":90,"column":3}},"text":"\t\t\t"},{"action":"insertText","range":{"start":{"row":90,"column":0},"end":{"row":90,"column":8}},"text":"        "},{"action":"removeText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":3}},"text":"\t\t\t"},{"action":"insertText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":8}},"text":"        "},{"action":"insertText","range":{"start":{"row":92,"column":0},"end":{"row":92,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":92,"column":52},"end":{"row":93,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":93,"column":0},"end":{"row":93,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":93,"column":42},"end":{"row":93,"column":43}},"text":" "},{"action":"insertText","range":{"start":{"row":94,"column":4},"end":{"row":94,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":94,"column":29},"end":{"row":95,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":95,"column":0},"end":{"row":95,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":96,"column":0},"end":{"row":96,"column":2}},"text":"\t\t"},{"action":"removeText","range":{"start":{"row":95,"column":5},"end":{"row":96,"column":0}},"text":"\n"},{"action":"removeText","range":{"start":{"row":95,"column":7},"end":{"row":95,"column":9}},"text":"  "},{"action":"insertText","range":{"start":{"row":98,"column":0},"end":{"row":98,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":99,"column":8},"end":{"row":99,"column":19}},"text":"           "},{"action":"removeText","range":{"start":{"row":100,"column":0},"end":{"row":100,"column":7}},"text":"       "},{"action":"removeText","range":{"start":{"row":100,"column":8},"end":{"row":100,"column":12}},"text":"    "},{"action":"removeText","range":{"start":{"row":101,"column":0},"end":{"row":101,"column":7}},"text":"       "},{"action":"removeText","range":{"start":{"row":101,"column":8},"end":{"row":101,"column":12}},"text":"    "},{"action":"removeText","range":{"start":{"row":102,"column":0},"end":{"row":102,"column":6}},"text":"      "},{"action":"removeText","range":{"start":{"row":102,"column":8},"end":{"row":102,"column":13}},"text":"     "},{"action":"insertText","range":{"start":{"row":104,"column":0},"end":{"row":104,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":105,"column":0},"end":{"row":105,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":105,"column":6},"end":{"row":105,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":106,"column":4},"end":{"row":106,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":107,"column":0},"end":{"row":107,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":108,"column":4},"end":{"row":108,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":109,"column":0},"end":{"row":109,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":110,"column":0},"end":{"row":110,"column":3}},"text":"   "},{"action":"insertText","range":{"start":{"row":110,"column":7},"end":{"row":110,"column":8}},"text":" "},{"action":"insertText","range":{"start":{"row":111,"column":0},"end":{"row":111,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":112,"column":4},"end":{"row":112,"column":8}},"text":"    "},{"action":"removeLines","range":{"start":{"row":116,"column":0},"end":{"row":117,"column":0}},"nl":"\n","lines":[""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":56},"end":{"row":9,"column":56},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415913986916}