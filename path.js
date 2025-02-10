const path = require('path');
console.log('Directory Name:', path.dirname('./path.js')); // Get directory
console.log('Base Name:', path.basename('./path.js')); // Get file name
console.log('File Extension:', path.extname('./path.js')); // Get file extension
console.log('Absolute Path:', path.resolve('text.txt')); // Get absolute path
