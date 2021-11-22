// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //License badge handling
  let licenseBadge = ''
  switch (license) {
    case 'Apache 2.0':
      licenseBadge = `![License BSD](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case 'BSD 3.0':
      licenseBadge = `![License BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
      break;
    case 'GPL 3.0':
      licenseBadge = `![License GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case 'MIT':
      licenseBadge = `![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    default:
      break;
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //License badge handling
  let licenseLink = ''
  switch (license) {
    case 'Apache 2.0':
      licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 3.0':
      licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GPL 3.0':
      licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      licenseLink = `(https://opensource.org/licenses/MIT)`;
      break;
    default:
      break;
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  // Generate Table of Contents conditionally based on responses
  let readmeDesc = []
  
  readmeDesc.push('Table of Contents \n\n');

  if (responses.description !== '') { 
    readmeDesc.push('* [Description](#description)\n')
  };

  if (responses.installation !== '') { 
    readmeDesc.push('* [Installation](#installation)\n')
  };

  if (responses.usage !== '') { 
    readmeDesc.push('* [Usage](#usage)\n')
  };

  if (responses.contrib !== '') { 
    readmeDesc.push('* [Contributing](#contrib)\n')
  };

  if (responses.contrib !== '') { 
    readmeDesc.push('* [Tests](#tests)\n')
  };

  if (responses.contrib !== '') { 
    readmeDesc.push('* [Licence](#license)\n')
  };

  if (responses.contrib !== '') { 
    readmeDesc.push('* [Questions](#questions)\n')
  };

  // Generate markdown for the top required portions of the README
  readmeDesc.push('# ' + responses.title + '\n')
  
  readmeDesc.push(renderLicenseBadge(responses.license) + renderLicenseLink(responses.license) + '\n\n---\n')
  
  readmeDesc.push('## Description\n' 
  
  + '*The what, why, and how:*\n' 
  
  + responses.description + '\n')

  // Add License section since License is required to Table of Contents
  readmeDesc.push('* [License](#license)\n')

  // Optional Installation section
  if (responses.installation !== '') {  
    readmeDesc.push('## Installation\n'
  
  + '*Steps required to install project and how to get the development environment running:*\n'
  
  + responses.installation + '\n')
  };
  

  // Optional Usage section
  if (responses.usage !== '') {
  
    readmeDesc.push('## Usage\n'
  
   + '*Instructions and examples for use:*\n'
  
   + responses.usage + '\n')
  };
  
  
  // Optional Contributing section
  if (responses.contributing !== '') {

    readmeDesc.push('## Contributing\n'
  
    + '*If you would like to contribute it, you can follow these guidelines for how to do so.*\n'
  
    + responses.contrib + '\n')
  };
  

  // Optional Tests section
  if (responses.tests !== '') {
  
    readmeDesc.push('## Tests\n'
  
    + '*Tests for application and how to run them:*\n'
  
    + responses.tests + '\n')
  };


  // License section is required
  readmeDesc.push('## License\n'
  
  + renderLicenseSection(responses.license) + '\n');

  // Questions
  readmeDesc.push('## Questions\n'

   + 'For any questions, please contact me with the information below:\n'
 
   + '* GitHub: [@' + responses.username + '](https://github.com/' + responses.username + ')\n')
 

  // If GitHub email is not null, add to Developer section
  if (responses.email !== "") {  
    readmeDesc.push('* Email: ' + responses.email)
};

  const README = readmeDesc.join('\n');

  // Return markdown
  return README;
}

module.exports = generateMarkdown;
