// Format JSON files with consistent indentation
const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] || '.';

function formatJsonFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            formatJsonFiles(fullPath);
        } else if (entry.name.endsWith('.json')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const formatted = JSON.stringify(JSON.parse(content), null, 2);
            fs.writeFileSync(fullPath, formatted + '\n', 'utf8');
            console.log(`Formatted: ${fullPath}`);
        }
    }
}

formatJsonFiles(targetDir);
