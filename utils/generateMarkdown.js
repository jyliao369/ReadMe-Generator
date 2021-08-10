// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `## Project Title: ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  -- What technologies did the application require in order to run smoothly and effectively?--

  ${data.dependencies}

  ## Usage
  -- What is the application used for? --

  ${data.use}

  ## License
  -- Are there any license the application has? --

  This Application is covered by the ${data.license} license.

  [License Information](https://opensource.org/licenses/${data.license})

  ![badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=success)


  ## Contributors
  -- Were there any contributors to the application/project --

  Contributors: ${data.contributor}

  ## Tests
  -- How can we test the application --

 ${data.test}

  ## Questions
  -- Have any questions? --

  Please reach out to me if you have any questions. Contact me at: ${data.email}

  -- Want to see the repo of the project --

  Interested in seeing other projects I have worked on? My repository can be accessed here: 
  https://github.com/${data.github}



  ## Demonstration
  -- Demonstration of the application in VS Code --
  ![Demonstration](screenshots/Demo-VS.gif)


  ## Screenshots
  -- Basic Code of Questions --
  ![Questions](screenshots/screenshot1.jpg)


  -- First Test on VS --
  ![First Test](screenshots/screenshot2.jpg)


  -- ReadMe Template --
  ![Template of the markdown File](screenshots/screenshot3.jpg)


  -- Preview of ReadMe --
  ![Preview in VS](screenshots/screenshot4.jpg)



  ## Live Links

  Github Repo: https://github.com/jyliao369/ReadMe-Generator#installation

  Deployed Link: https://jyliao369.github.io/ReadMe-Generator/

  `;
}

module.exports = generateMarkdown;
