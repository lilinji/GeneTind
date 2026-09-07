const fs = require('fs');

const svg2 = fs.readFileSync('public/images/logo/logo-2.svg', 'utf8');
const lines = svg2.split(/\r?\n/).filter(l => l.trim().length > 0);

console.log('Total non-empty lines:', lines.length);
// Line 0 is <?xml
// Line 1 is <svg
// Line 2 is path 1 (index 2) -> translate(117.125,49.6875) (icon)
// Lines 3-11 are paths 2-10 -> letters G(327), d(899), e(590), e(429), T(643), n(537), n(833), i(736), i(756)
// Lines 12-43 are paths 11-42 -> icon facets (transforms all x <= 260)
for (let i = 12; i <= 43; i++) {
  const line = lines[i];
  const trans = (line.match(/transform="([^"]+)"/) || [])[1];
  console.log(`Path ${i-1} (Line ${i+1}): ${trans}`);
}
