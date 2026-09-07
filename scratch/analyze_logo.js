const fs = require('fs');

const svg2 = fs.readFileSync('public/images/logo/logo-2.svg', 'utf8');
const lines2 = svg2.split(/\r?\n/);
console.log('logo-2.svg lines:', lines2.length);
lines2.forEach((l, i) => {
  if (l.trim().startsWith('<path')) {
    const fill = (l.match(/fill="([^"]+)"/) || [])[1];
    const trans = (l.match(/transform="([^"]+)"/) || [])[1];
    console.log(`Line ${i+1}: fill=${fill} | ${trans}`);
  }
});
