// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function that creates the content for the README
function generateMarkdown(data) {
  return `

# ${data.title}

## Description 
  ${data.description}

## Installation
  ${data.install}

## Questions
  GitHub User: ${data.username}
  github.com/${data.username} 
  Email: ${data.email}
`;}

module.exports = generateMarkdown