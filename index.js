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

const dataOutput = "-Expecto Patronum\n-Lily?\n-After all this time?\n-Always";

if (options.output && options.display ) {
  fs.writeFileSync(options.output, dataOutput);
  console.log(dataOutput);
      return;
  };

