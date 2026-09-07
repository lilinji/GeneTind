const fs = require('fs');

console.log('logo.png size:', fs.statSync('public/images/logo/logo.png').size);
console.log('white-logo.png size:', fs.statSync('public/images/logo/white-logo.png').size);
