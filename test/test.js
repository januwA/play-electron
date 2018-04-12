const fs = require('fs');
const vm = require('vm');
const util = require('util')
const format = console.log;

const data = {
  sc: ''
}

vm.createContext(data);

util.promisify(fs.readFile)('./test.db', 'utf8')
  .then(body => {
    vm.runInContext(`sc = ${body}`, data);
    format( data.sc)
    format(typeof data.sc)
  })