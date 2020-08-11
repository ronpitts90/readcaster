// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ${data.name}

`;
}

function generateLicense(){
 return `# ${data.license}`;
}

module.exports = generateMarkdown;


// to take in a license argument