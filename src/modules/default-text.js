
// default text loaded into preview and editor on load

let defaultText = '';
defaultText += '# This is a header\n\n';
defaultText += '## This is a sub-header\n\n';
defaultText += '[a link](https://www.google.com)\n\n';
defaultText += 'some code `<div></div>`\n\n';
defaultText += '```\n';
defaultText += 'a code block\n';
defaultText += '<div><p></p></div>\n';
defaultText += '```\n\n';
defaultText += '- one...\n';
defaultText += ' - two...\n';
defaultText += '   - three list items!\n\n'
defaultText += '> a block quote\n\n';
defaultText += 'and of course an image ![an image](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)\n\n';
defaultText += 'plus some **bolded** text!';

export default defaultText;