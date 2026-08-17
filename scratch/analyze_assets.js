const fs = require('fs');
const path = require('path');

const srcDir = "c:\\Users\\miaje\\OneDrive\\Desktop\\EncuentroMundialDeValores\\src";
const speakersDir = "c:\\Users\\miaje\\OneDrive\\Desktop\\EncuentroMundialDeValores\\public\\speakers";
const sponsorsDir = "c:\\Users\\miaje\\OneDrive\\Desktop\\EncuentroMundialDeValores\\public\\Sponsors";
const imagesDir = "c:\\Users\\miaje\\OneDrive\\Desktop\\EncuentroMundialDeValores\\public\\images";
const indexHtmlPath = "c:\\Users\\miaje\\OneDrive\\Desktop\\EncuentroMundialDeValores\\index.html";

// Read all files recursively in srcDir and append contents
let srcContent = "";

function readFilesRecursively(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readFilesRecursively(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
            srcContent += fs.readFileSync(fullPath, 'utf8') + "\n";
        }
    }
}

if (fs.existsSync(srcDir)) {
    readFilesRecursively(srcDir);
}

if (fs.existsSync(indexHtmlPath)) {
    srcContent += fs.readFileSync(indexHtmlPath, 'utf8') + "\n";
}

function checkUnused(directory, name) {
    console.log(`\n--- Checking unused files in ${name} ---`);
    if (!fs.existsSync(directory)) {
        console.log(`Directory ${directory} does not exist.`);
        return [];
    }

    const unused = [];
    const files = fs.readdirSync(directory);
    for (const file of files) {
        if (file === ".DS_Store") continue;
        
        // Exact matching or finding substring in the source code
        if (!srcContent.includes(file)) {
            unused.push(file);
            console.log(`Unused: ${file}`);
        } else {
            console.log(`Used: ${file}`);
        }
    }
    return unused;
}

const unusedSpeakers = checkUnused(speakersDir, "speakers");
const unusedSponsors = checkUnused(sponsorsDir, "Sponsors");
const unusedImages = checkUnused(imagesDir, "images");

console.log("\nSummary of unused files:");
console.log(`Speakers unused count: ${unusedSpeakers.length}`);
console.log(`Sponsors unused count: ${unusedSponsors.length}`);
console.log(`Images unused count: ${unusedImages.length}`);
