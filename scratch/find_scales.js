const fs = require('fs');

const content = fs.readFileSync('src/components/Speakers.jsx', 'utf-8');

const regex = /name:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const name = match[1];
    const start = Math.max(0, match.index - 300);
    const end = Math.min(content.length, match.index + 300);
    const context = content.slice(start, end);
    
    const scaleMatch = /imgScale:\s*["']([^"']+)["']/.exec(context);
    const posMatch = /imgPosition:\s*["']([^"']+)["']/.exec(context);
    const scale = scaleMatch ? scaleMatch[1] : "None";
    const pos = posMatch ? posMatch[1] : "None";
    
    console.log(`Speaker: ${name} | imgScale: ${scale} | imgPosition: ${pos}`);
}
