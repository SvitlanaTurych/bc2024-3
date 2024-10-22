const { program } = require('commander');
const fs = require('node:fs');

program
    .option('-i, --input <char>', 'path to file, which need to read')
    .option('-o, --output <char>', 'path to file, where result will be written')
    .option('-d, --display', 'show result in console');

program.parse();

const options = program.opts();

if (!options.input) {
  console.error("Please, specify input file");
  return console.log;
}

if (!fs.existsSync(options.input)) {
  console.error("Cannot find input file");
  return console.log;
}

const filedata = fs.readFileSync(options.input, 'utf-8');
const inputData = JSON.parse(filedata);

let minAsset = null;
let minValue = Infinity;

inputData.forEach(asset => {
  const value = asset.value; 
  const txt = asset.txt; 

  if (value < minValue) {
    minValue = value;
    minAsset = { txt, value }; 
  }
});

if (minAsset) {
    const outputResult = `${minAsset.txt}:${minAsset.value};`

  if (options.display) {
    console.log(outputResult);
  }

  if (options.output) {
    fs.writeFileSync(options.output, outputResult);
  }
}