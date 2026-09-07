const fs = require('fs');

const baseSvg = fs.readFileSync('public/images/logo/logo-2.svg', 'utf8');
const lines = baseSvg.split(/\r?\n/).filter(l => l.trim().length > 0);

// Extract paths:
// We look for all paths inside <g id="gt-brand-icon"> or the original lines
let spinePath = '';
let letterPaths = [];
let iconFacetPaths = [];

// Re-read clean lines from original logo-2.svg backup or the lines
lines.forEach(l => {
  const line = l.trim();
  if (!line.startsWith('<path')) return;
  const trans = (line.match(/transform="([^"]+)"/) || [])[1] || '';
  const xMatch = trans.match(/translate\(([^,]+),/);
  if (!xMatch) return;
  const x = parseFloat(xMatch[1]);
  if (x > 300) {
    letterPaths.push(line);
  } else if (trans.includes('117.125,49.6875')) {
    spinePath = line;
  } else {
    iconFacetPaths.push(line);
  }
});

console.log(`Extracted: 1 spine, ${iconFacetPaths.length} icon facets, ${letterPaths.length} letters.`);

function buildSvg({ iconGradId, iconStops, textFill }) {
  const gradDef = `  <defs>
    <linearGradient id="${iconGradId}" gradientUnits="userSpaceOnUse" x1="25" y1="195" x2="275" y2="45">
${iconStops.map(s => `      <stop offset="${s.offset}" stop-color="${s.color}" />`).join('\n')}
    </linearGradient>
  </defs>`;

  // Replace fill on spine and facets
  const updatedSpine = spinePath.replace(/fill="[^"]+"/, `fill="url(#${iconGradId})"`);
  const updatedFacets = iconFacetPaths.map(p => p.replace(/fill="[^"]+"/, `fill="url(#${iconGradId})"`));
  const updatedLetters = letterPaths.map(p => p.replace(/fill="[^"]+"/, `fill="${textFill}"`));

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 264" width="945" height="264">
${gradDef}
  <!-- GeneTind Life-Science DNA Mountain Peak Icon -->
  <g id="gt-brand-icon">
    ${updatedSpine}
${updatedFacets.map(f => '    ' + f).join('\n')}
  </g>
  <!-- GeneTind Modern Geometric Wordmark -->
  <g id="gt-brand-text">
${updatedLetters.map(l => '    ' + l).join('\n')}
  </g>
</svg>
`;
}

// 1. Light Mode (logo-2.svg): Vibrant Emerald 600 -> Cyan 500 gradient icon + Deep Titanium Zinc 950 Typography
const lightSvg = buildSvg({
  iconGradId: 'gtIconGradLight',
  iconStops: [
    { offset: '0%', color: '#059669' },    // Deep bio-emerald
    { offset: '45%', color: '#10b981' },   // Vibrant emerald
    { offset: '100%', color: '#06b6d4' }   // Cyan 500
  ],
  textFill: '#09090b', // Ultra-clean deep titanium zinc
});

// 2. Dark Mode (logo.svg & logo2.svg): Bioluminescent Emerald 500 -> Mint 400 -> Electric Cyan 400 + Pure White Typography
const darkSvg = buildSvg({
  iconGradId: 'gtIconGradDark',
  iconStops: [
    { offset: '0%', color: '#10b981' },    // Bioluminescent emerald
    { offset: '45%', color: '#34d399' },   // Crisp mint glow
    { offset: '100%', color: '#22d3ee' }   // Electric cyan
  ],
  textFill: '#ffffff', // Crisp brilliant white
});

fs.writeFileSync('public/images/logo/logo-2.svg', lightSvg, 'utf8');
fs.writeFileSync('public/images/logo/logo.svg', darkSvg, 'utf8');
fs.writeFileSync('public/images/logo/logo2.svg', darkSvg, 'utf8');

console.log('Successfully written logo-2.svg, logo.svg, and logo2.svg with userSpaceOnUse gradients!');
