// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
   return `# ${data.title}
           

`;
}

function generateLicense(data){
  console.log(data)
 return `# ${data.license}`;
}

module.exports = generateMarkdown;


// ${data.Description}
// ${data.Installation}
// ${data.Usage}
// ${data.Contributing}
// ${data.Tests}
// ${data.License}
// ${data.Github}
// ${data.Email}