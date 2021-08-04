// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Project Title: ${data.title}

  ## Description: ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  -- What technologies did the application require in order to run smoothly and effectively?--

  The following dependencies were installed to run the application properly: ${data.dependencies}

  ## Usage
  -- How do you use this application? --

  In order to use this app, you will need: ${data.use}

  ## License
  -- Are there any license the application has? --

  The project is under the ${data.license} license

  ## Contributors
  -- Where there any contributors to the application/project --

  Contributors that help create this application are: ${data.contributor}

  ## Tests
  -- How can we test the application --

  The following is needed in order to run tests: ${data.test}

  ## Questions
  -- Do you have any questions? --

  If you do, contact me at: ${data.email}

  -- Want to see the repo of the project --

  The repository can be accessed here: ${data.github}
  `;
}

module.exports = generateMarkdown;
