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

  ## Description: 
  
  ## Table of Contents
      * [Installation]
      * [Usage]
      * [Credits]
      * [License]
      * [Contributors](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
  
  ## Installation
  -- What technologies did the application require in order to run smoothly and effectively?--

  The following dependencies were installed to run the application properly: 

  ## Usage
  -- How do you use this application? --

  In order to use this app, you will need: 

  ## License
  -- Are there any license the application has? --

  The project is under the ____ license

  ## Contributors
  -- Where there any contributors to the application/project --

  Contributors that help create this application are:

  ## Tests
  -- How can we test the application --

  The following is needed in order to run tests:

  ## Questions
  -- Do you have any questions? --

  If you do, contact me at:

  -- Want to see the repo of the project__

  The repository can be accessed here: 
  `;
}

module.exports = generateMarkdown;
