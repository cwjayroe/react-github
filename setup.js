const fs = require('fs');
const path = require('path');

let file = path.resolve('./node_modules/babel-preset-react-app/index.js');
let text = fs.readFileSync(file, 'utf8');

if (!text.includes('babel-plugin-relay')) {
    if (text.includes('const plugins = [')) {
        text = text.replace(
            'const plugins = [',
            "const plugins = [\n  require.resolve('babel-plugin-relay'),"
        );
        fs.writeFileSync(file, text, 'utf8');
    } else {
        throw new Error(`Failed to inject babel-plugin-relay in ${file}.`);
    }
}
