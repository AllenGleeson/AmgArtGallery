{"filter":false,"title":"server.js","tooltip":"/server.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":23},"end":{"row":22,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"hash":"57e5c54510d57ade9dd1c12e7ef2d359ea5d27fd","undoManager":{"mark":58,"position":58,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":104},"action":"insert","lines":["var http = require('http');","var fs = require('fs');","var url = require('url');","","http.createServer( function (request, response) {","  var pathname = url.parse(request.url).pathname;","  console.log(\"Trying to find '\" + pathname.substr(1) + \"'...\");","","  fs.readFile(pathname.substr(1), function (err, data) {","    if (err) {","      response.writeHead(404, {'Content-Type': 'text/html'});","      response.write(\"ERROR: Cannot find '\" + pathname.substr(1) + \"'.\");","      console.log(\"ERROR: Cannot find '\" + pathname.substr(1) + \"'.\");","    } else {","      console.log(\"Found '\" + pathname.substr(1) + \"'.\");","      response.writeHead(200, {'Content-Type': 'text/html'});","      response.write(data.toString());","    }","    response.end();","  });","}).listen(8080, 'localhost'); // Or 8081 or 8082 instead of 8080. Or '127.0.0.1' instead of 'localhost'."],"id":1}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "],"id":3}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "],"id":4}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "],"id":5},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"remove","lines":[" "],"id":6},{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"remove","lines":[" "]}],[{"start":{"row":12,"column":10},"end":{"row":12,"column":12},"action":"insert","lines":["  "],"id":7}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":12},"action":"insert","lines":["  "],"id":8}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":12},"action":"insert","lines":["  "],"id":9}],[{"start":{"row":16,"column":10},"end":{"row":16,"column":12},"action":"insert","lines":["  "],"id":10}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":12},"action":"insert","lines":["  "],"id":11}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":12},"action":"insert","lines":["  "],"id":12}],[{"start":{"row":21,"column":6},"end":{"row":21,"column":8},"action":"insert","lines":["  "],"id":13}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "],"id":14}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "],"id":15}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":16},{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "],"id":17}],[{"start":{"row":7,"column":4},"end":{"row":8,"column":4},"action":"remove","lines":["","    "],"id":18}],[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"remove","lines":[" "],"id":20},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"remove","lines":[" "]}],[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":[" "],"id":21},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"remove","lines":[" "]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["i"],"id":22},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":6},"action":"remove","lines":["if"],"id":23},{"start":{"row":8,"column":4},"end":{"row":8,"column":6},"action":"insert","lines":["if"]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":6},"action":"remove","lines":["if"],"id":24},{"start":{"row":8,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["if (true) {","        ","    }"]}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":12},"action":"remove","lines":["true"],"id":25},{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["p"]},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["a"]},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["t"]},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["h"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["n"]},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["a"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["m"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":26},"action":"insert","lines":[".substr(1)"],"id":26}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":[" "],"id":27},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["="]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["="]}],[{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":32},"action":"insert","lines":["\"\""],"id":29}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["p"],"id":30},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["a"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["t"]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["h"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["n"]},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["a"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["m"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":[" "],"id":31},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["="]}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":[" "],"id":32}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":21},"action":"insert","lines":["\"\""],"id":33}],[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["i"],"id":34},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["n"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["d"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["e"]},{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["x"]},{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["."]},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["h"]},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["m"],"id":35},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["l"]}],[{"start":{"row":11,"column":4},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["c"]},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["o"]},{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["n"]},{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":["s"]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["o"]},{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"insert","lines":["l"]},{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"insert","lines":["e"]},{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"insert","lines":["."]},{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["l"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["o"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":12,"column":15},"end":{"row":12,"column":17},"action":"insert","lines":["()"],"id":37}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":[";"],"id":38}],[{"start":{"row":12,"column":18},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":39},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["p"],"id":40},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["a"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["t"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["h"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["n"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["a"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["m"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["\""],"id":41},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["\""]}],[{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":[" "],"id":42},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["+"]}],[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":[" "],"id":43}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["P"],"id":44},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["a"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["t"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["h"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["N"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["a"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["m"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":[" "],"id":45}],[{"start":{"row":14,"column":26},"end":{"row":14,"column":34},"action":"remove","lines":["ubstr(1)"],"id":48},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":["s"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["."]}],[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["/"],"id":49}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["/"],"id":58},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["/"],"id":59},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["/"],"id":60},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"remove","lines":["/"],"id":61},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"remove","lines":["/"]}],[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"remove","lines":["/"],"id":62},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"remove","lines":["/"]}],[{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"remove","lines":["/"],"id":63},{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"remove","lines":["/"]}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["\""],"id":64},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["\""]}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["/"],"id":65}],[{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":[" "],"id":66},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["+"]}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"remove","lines":["+"],"id":71},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"remove","lines":[" "]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"remove","lines":["\""]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":["/"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"remove","lines":["\""]}],[{"start":{"row":14,"column":24},"end":{"row":14,"column":34},"action":"insert","lines":[".substr(1)"],"id":72}],[{"start":{"row":10,"column":5},"end":{"row":12,"column":40},"action":"remove","lines":["","    ","    console.log(\"PathName \" + pathname);"],"id":73}]]},"timestamp":1569176022333}