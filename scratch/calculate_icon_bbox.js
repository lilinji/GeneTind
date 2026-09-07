const fs = require('fs');

const svg = fs.readFileSync('public/images/logo/logo-2.svg', 'utf8');
const lines = svg.split(/\r?\n/).filter(l => l.trim().length > 0);

let inIcon = false;
const iconTransforms = [];
const iconRegex = /transform="translate\(([^,]+),([^)]+)\)"/;

lines.forEach((l) => {
  if (l.includes('<g id="gt-brand-icon">')) { inIcon = true; return; }
  if (l.includes('</g>')) { inIcon = false; return; }
  if (inIcon) {
    const match = l.match(iconRegex);
    if (match) {
      iconTransforms.push({ x: parseFloat(match[1]), y: parseFloat(match[2]) });
    }
  }
});

console.log('Icon components inside group:', iconTransforms.length);
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
iconTransforms.forEach(t => {
  if (t.x < minX) minX = t.x;
  if (t.x > maxX) maxX = t.x;
  if (t.y < minY) minY = t.y;
  if (t.y > maxY) maxY = t.y;
});
console.log(`Translate bounds: X from ${minX} to ${maxX}, Y from ${minY} to ${maxY}`);
