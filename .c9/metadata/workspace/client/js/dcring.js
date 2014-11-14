{"changed":true,"filter":false,"title":"dcring.js","tooltip":"/client/js/dcring.js","value":"// Events\nwindow.onload = function() {\n    dcjsdemo();\n}; //Render chart first thing\n\n// Globals\nvar dcReset; //Connect to \"Reset\" button with onclick=\"dcReset()\" call\n\nfunction foobar() {\n    d3.select('#foobartext').append(\"p\").text(\"FOO!!!\");\n}\n\nfunction dcjsdemo() {\n\n    // Debug output routine from Data Visualization with D3.js Cookbook \n    function printFilter(filter) {\n        var f = eval(filter);\n        if (typeof(f.length) != \"undefined\") {}\n        else {}\n        if (typeof(f.top) != \"undefined\") {\n            f = f.top(Infinity);\n        }\n        else {}\n        if (typeof(f.dimension) != \"undefined\") {\n            f = f.dimension(function(d) {\n                return \"\";\n            }).top(Infinity);\n        }\n        else {}\n        console.log(filter + \"(\" + f.length + \") = \" + JSON.stringify(f).replace(\"[\", \"[\\n\\t\").replace(/}\\,/g, \"},\\n\\t\").replace(\"]\", \"\\n]\"));\n    }\n\n    // Make things pretty\n    var format = d3.format(\",\");\n    var timeFormat = d3.time.format.iso;\n\n    // load csv file that contains the data\n    // pathing asssume things are run from public\n    // for where files are located\n\n    // pretty colors, no thoughtful assignment\n    var chartcolors = d3.scale.category20b();\n\n\n    var w = 400;\n    var h = 400;\n    var r = h / 2;\n\n\n    var color = d3.scale.category20c();\n\n    var data = [{\n        \"label\": \"News\",\n        \"value\": 30\n    }, {\n        \"label\": \"Chart\",\n        \"value\": 30\n    }, {\n        \"label\": \"Events\",\n        \"value\": 30\n    }];\n\n    var bigbuy = [{\n        \"label\": \"BUY!\",\n        \"value\": 1\n    }];\n\n\n    var vis = d3.select('#navring')\n        .append(\"svg:svg\")\n        .data([data])\n        .attr(\"width\", w)\n        .attr(\"height\", h)\n        .append(\"svg:g\")\n        .attr(\"transform\", \"translate(\" + r + \",\" + r + \")\");\n    var pie = d3.layout.pie().value(function(d) {\n        return d.value;\n    });\n    \n    // declare an arc generator function\n    var arc = d3.svg.arc().outerRadius(r);\n    \n    \n    // select paths, use arc generator to draw\n    var arcs = vis.selectAll(\"g.slice\")\n        .data(pie)\n        .enter()\n        .append(\"svg:g\")\n        .attr(\"class\", \"slice\");\n    arcs.append(\"svg:path\")\n        .attr(\"fill\", function(d, i) {\n            return color(i);\n        })\n        .attr(\"d\", function(d, i, j) {\n            return arc.innerRadius(100 + r * j).outerRadius(r * (j + 1))(d);\n        });\n\n    // add the text\n    arcs.append(\"svg:text\").attr(\"transform\", function(d) {\n        d.innerRadius = 0;\n        d.outerRadius = r;\n        return \"translate(\" + arc.centroid(d) + \")\";\n    }).attr(\"text-anchor\", \"middle\").text(function(d, i) {\n        return data[i].label;\n    });\n\n\n    var circle = vis.append(\"circle\")\n        .attr(\"cx\", 0)\n        .attr(\"cy\", 0)\n        .attr(\"r\", 99)\n        .attr(\"data-id\", \"divId1\")\n        .style(\"fill\", \"steelblue\")\n        .on(\"click\", function(d) {\n            var hello = $(this).attr('data-id');\n            $('.hideDivs').hide();\n            $('#' + hello).show();\n        })\n        .on(\"mouseover\", function() {\n            d3.select(this)\n                .style(\"fill\", \"orange\");\n\n        })\n        .on(\"mouseout\", function() {\n            d3.select(this)\n                .style(\"fill\", \"steelblue\");\n\n        });\n\n\n\n    var circletxt = vis.selectAll(\"text\")\n        .data(\"bigbuy\")\n        .enter()\n        .append(\"text\")\n        .text(\"BUY\")\n        .attr(\"font-family\", \"sans-serif\")\n        .attr(\"font-size\", \"29px\")\n        .attr(\"fill\", \"Black\")\n        .attr(\"text-anchor\", \"middle\");\n\n\n}\n","undoManager":{"mark":82,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":113,"column":23},"end":{"row":113,"column":24}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":113,"column":24},"end":{"row":113,"column":25}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":113,"column":25},"end":{"row":113,"column":26}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":113,"column":27},"end":{"row":114,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":114,"column":0},"end":{"row":114,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":12},"end":{"row":114,"column":13}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":12},"end":{"row":114,"column":13}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":12},"end":{"row":114,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":16},"end":{"row":114,"column":17}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":17},"end":{"row":114,"column":18}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":18},"end":{"row":114,"column":19}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":19},"end":{"row":114,"column":20}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":20},"end":{"row":114,"column":21}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":21},"end":{"row":114,"column":23}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":22},"end":{"row":114,"column":24}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":24},"end":{"row":114,"column":25}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":25},"end":{"row":114,"column":26}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":26},"end":{"row":114,"column":27}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":27},"end":{"row":114,"column":28}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":27},"end":{"row":114,"column":28}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":26},"end":{"row":114,"column":27}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":25},"end":{"row":114,"column":26}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":24},"end":{"row":114,"column":25}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":23},"end":{"row":114,"column":24}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":22},"end":{"row":114,"column":23}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":22},"end":{"row":114,"column":24}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":23},"end":{"row":114,"column":24}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":24},"end":{"row":114,"column":25}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":25},"end":{"row":114,"column":26}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":26},"end":{"row":114,"column":27}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":28},"end":{"row":114,"column":29}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":29},"end":{"row":114,"column":30}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":30},"end":{"row":114,"column":32}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":31},"end":{"row":114,"column":32}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":32},"end":{"row":114,"column":33}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":33},"end":{"row":114,"column":34}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":34},"end":{"row":114,"column":35}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":35},"end":{"row":114,"column":36}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":36},"end":{"row":114,"column":37}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":37},"end":{"row":114,"column":38}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":37},"end":{"row":114,"column":38}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":39},"end":{"row":114,"column":40}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":40},"end":{"row":115,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":115,"column":0},"end":{"row":115,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":115,"column":12},"end":{"row":115,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":115,"column":8},"end":{"row":115,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":115,"column":4},"end":{"row":115,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":115,"column":0},"end":{"row":115,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":40},"end":{"row":115,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":20},"end":{"row":114,"column":21}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":19},"end":{"row":114,"column":20}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":18},"end":{"row":114,"column":19}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":17},"end":{"row":114,"column":18}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":17},"end":{"row":114,"column":18}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":18},"end":{"row":114,"column":19}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":19},"end":{"row":114,"column":20}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":20},"end":{"row":114,"column":21}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":114,"column":21},"end":{"row":114,"column":22}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":116,"column":11},"end":{"row":117,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":117,"column":0},"end":{"row":117,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":117,"column":8},"end":{"row":117,"column":37}},"text":".on(\"mouseover\", function() {"},{"action":"insertText","range":{"start":{"row":117,"column":37},"end":{"row":118,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":118,"column":0},"end":{"row":121,"column":0}},"lines":["            d3.select(this)","                .style(\"fill\", \"orange\");",""]},{"action":"insertText","range":{"start":{"row":121,"column":0},"end":{"row":121,"column":11}},"text":"        });"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":117,"column":21},"end":{"row":117,"column":22}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":117,"column":20},"end":{"row":117,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":117,"column":19},"end":{"row":117,"column":20}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":117,"column":18},"end":{"row":117,"column":19}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":117,"column":18},"end":{"row":117,"column":19}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":117,"column":19},"end":{"row":117,"column":20}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":117,"column":20},"end":{"row":117,"column":21}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":37},"end":{"row":119,"column":38}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":36},"end":{"row":119,"column":37}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":35},"end":{"row":119,"column":36}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":34},"end":{"row":119,"column":35}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":33},"end":{"row":119,"column":34}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":32},"end":{"row":119,"column":33}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":32},"end":{"row":119,"column":33}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":119,"column":32},"end":{"row":119,"column":33}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":32},"end":{"row":119,"column":33}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":33},"end":{"row":119,"column":34}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":34},"end":{"row":119,"column":35}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":35},"end":{"row":119,"column":36}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":36},"end":{"row":119,"column":37}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":37},"end":{"row":119,"column":38}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":38},"end":{"row":119,"column":39}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":39},"end":{"row":119,"column":40}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":119,"column":40},"end":{"row":119,"column":41}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":116,"column":10},"end":{"row":116,"column":11}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":68,"column":35},"end":{"row":69,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":69,"column":0},"end":{"row":69,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":69,"column":22},"end":{"row":70,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":70,"column":17},"end":{"row":71,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":71,"column":21},"end":{"row":72,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":72,"column":0},"end":{"row":72,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":72,"column":22},"end":{"row":73,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":73,"column":0},"end":{"row":73,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":20},"end":{"row":74,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":74,"column":0},"end":{"row":74,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":69,"column":4},"end":{"row":69,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":70,"column":6},"end":{"row":70,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":72,"column":4},"end":{"row":72,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":73,"column":0},"end":{"row":73,"column":2}},"text":"  "},{"action":"insertText","range":{"start":{"row":73,"column":6},"end":{"row":73,"column":8}},"text":"  "},{"action":"insertText","range":{"start":{"row":74,"column":0},"end":{"row":74,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":78,"column":0},"end":{"row":78,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":81,"column":0},"end":{"row":81,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":82,"column":0},"end":{"row":82,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":84,"column":39},"end":{"row":85,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":85,"column":0},"end":{"row":85,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":14},"end":{"row":86,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":86,"column":0},"end":{"row":86,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":86,"column":12},"end":{"row":87,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":87,"column":0},"end":{"row":87,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":87,"column":20},"end":{"row":88,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":88,"column":0},"end":{"row":88,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":4},"end":{"row":90,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":96,"column":0},"end":{"row":96,"column":32}},"text":"                return arc(d);*/"},{"action":"removeLines","range":{"start":{"row":94,"column":0},"end":{"row":96,"column":0}},"nl":"\n","lines":["                // log the result of the arc generator to show how cool it is :)","                console.log(arc(d));"]},{"action":"removeText","range":{"start":{"row":93,"column":3},"end":{"row":93,"column":39}},"text":"     /*    .attr(\"d\", function (d) {"},{"action":"removeText","range":{"start":{"row":93,"column":3},"end":{"row":94,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":93,"column":2},"end":{"row":93,"column":3}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":93,"column":1},"end":{"row":93,"column":2}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":93,"column":0},"end":{"row":93,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":10},"end":{"row":93,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":85,"column":4},"end":{"row":85,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":86,"column":0},"end":{"row":86,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":87,"column":4},"end":{"row":87,"column":8}},"text":"    "},{"action":"insertText","range":{"start":{"row":88,"column":0},"end":{"row":88,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":90,"column":0},"end":{"row":90,"column":4}},"text":"    "}]}]]},"ace":{"folds":[],"scrolltop":727.5,"scrollleft":0,"selection":{"start":{"row":100,"column":18},"end":{"row":100,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":44,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1415925831939}