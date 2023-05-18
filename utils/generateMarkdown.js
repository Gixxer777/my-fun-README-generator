// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
      return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License

      This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
  ## Description
  ${data.description}
 
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}
 
  ## Contributing
  ${data.contributing}
 
  ## Tests
  ${data.tests}
 
  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at (https://github.com/${data.github}/).
 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
