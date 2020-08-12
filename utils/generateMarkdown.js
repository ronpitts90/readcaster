// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
   return `#Title: ${data.title}
           #Description:
            ${data.Description}
           #Installation:
            ${data.Installation}
            #Usage:
             ${data.Usage}
            #Contributions:
             ${data.Contributing}
            #Testing:
             ${data.Tests}
            #License:
             ${data.License}
            #Questions?:
             ${data.Github} , ${data.Email}
`;
}

function generateLicense(data){
  console.log(data)
 return `# ${data.license}`;
}

module.exports = generateMarkdown;


