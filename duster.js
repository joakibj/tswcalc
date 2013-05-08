// duster.js  
// Watch directory of dust.js templates and automatically compile them
// by Dan McGrady http://dmix.ca

var input_path = "./src/dusts/"; // directory of dust templates are stored with .dust file extension
var output_path = "./public/js/dusts/"; // directory where the compiled .js files should be saved to

var fs = require('fs');
var dust = require('dustjs-linkedin');
var watch = require('watch');
var path = require('path');

function compile_dust(filename, curr, prev) {
  fs.readFile(filename, function(err, data) {
    if (err) throw err;

    var basename = path.basename(filename, '.dust');
    var filepath = output_path + basename + ".js";
    var compiled = dust.compile(new String(data), basename);

    fs.writeFile(filepath, compiled, function(err) {
      if (err) throw err;
      console.log('Saved ' + filepath);
    });
  });
}

console.log("Recompiling dusts...");
files = fs.readdirSync(input_path);
for(var i = 0; i < files.length; i++) {
  filename = input_path + files[i];
  console.log("recompile: " + filename);
  compile_dust(filename, null, null);
}

watch.createMonitor(input_path, function (monitor) {
  console.log("Watching " + input_path);
  monitor.files['*.dust', '*/*'];
  monitor.on("created", compile_dust);
  monitor.on("changed", compile_dust);
})
