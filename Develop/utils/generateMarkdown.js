// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache License 2.0") {

    return "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)](https://opensource.org/license/apache-2-0/)";

  } else if (license === "GNU General Public License (GPL)") {
    return "[![License: GNU General Public License (GPL)](https://img.shields.io/badge/License-GNU_General_Public-yellow.svg)](https://opensource.org/license/gpl-1-0/)";

  } else if (license === "GNU Lesser General Public License (LGPL)") {
    return "[![License: GNU Lesser General Public License (LGPL)](https://img.shields.io/badge/License-GNU_Lesser_General_Public-yellow.svg)](https://opensource.org/license/lgpl-2-1/)";

  } else if (license === "BSD 2-Clause License") {
    return "[![License: BSD 2-Clause License](https://img.shields.io/badge/License-BSD_2_Clause-yellow.svg)](https://opensource.org/license/bsdpluspatent/)";

  } else if (license === "BSD 3-Clause License") {
    return "[![License: BSD 3-Clause License)](https://img.shields.io/badge/License-BSD_3_Clause-yellow.svg)](HEY YOU FIX ME)";

  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_2.0-yellow.svg)](https://opensource.org/license/mpl-2-0/)";

  } else if (license === "Creative Commons Attribution License") {
    return "[![License: Creative Commons Attribution License](https://img.shields.io/badge/License-Creative_Commons_Attribution-yellow.svg)](HEY YOU FIX ME)";

  } else if (license === "The Unlicense") {
    return "[![License: The Unlicense](https://img.shields.io/badge/License-Unlicense-yellow.svg)](https://opensource.org/license/unlicense/)";

  } else if (license === "ISC License") {
    return "[![License: ISC License](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/license/isc-license-txt/)";

  } else if (license === "Boost Software License 1.0") {
    return "[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_Software_1.0-yellow.svg)](https://opensource.org/license/bsl-1-0/)";

  } else if (license === "Eclipse Public License 2.0") {
    return "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse_Public_2.0-yellow.svg)](https://opensource.org/license/epl-2-0/)";

  } else {
    return "";
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "[MIT License](https://opensource.org/licenses/MIT)";

  } else if (license === "Apache License 2.0") {
    return "[Apache License 2.0](https://opensource.org/license/apache-2-0/)";

  } else if (license === "GNU General Public License (GPL)") {
    return "[GNU General Public License (GPL)](https://opensource.org/license/gpl-1-0/)";

  } else if (license === "GNU Lesser General Public License (LGPL)") {
    return "[GNU Lesser General Public License (LGPL)](https://opensource.org/license/lgpl-2-1/)";

  } else if (license === "BSD 2-Clause License") {
    return "[BSD 2-Clause License](https://opensource.org/license/bsdpluspatent/)";

  } else if (license === "BSD 3-Clause License") {
    return "[BSD 3-Clause License](HEY YOU FIX ME)";

  } else if (license === "Mozilla Public License 2.0") {
    return "[Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0/)";

  } else if (license === "Creative Commons Attribution License") {
    return "[Creative Commons Attribution License](HEY YOU FIX ME)";

  } else if (license === "The Unlicense") {
    return "[The Unlicense](https://opensource.org/license/unlicense/)";

  } else if (license === "ISC License") {
    return "[ISC License](https://opensource.org/license/isc-license-txt/)";

  } else if (license === "Boost Software License 1.0") {
    return "[Boost Software License 1.0](https://opensource.org/license/bsl-1-0/)";

  } else if (license === "Eclipse Public License 2.0") {
    return "[Eclipse Public License 2.0](https://opensource.org/license/epl-2-0/)";

  } else {
    return ""
  }
}
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT License":
      return `## License

      This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    case "Apache License 2.0":
      return `## License

      This project is licensed under the [Apache License 2.0](https://opensource.org/license/apache-2-0/).`;
    case "GNU General Public License (GPL)":
      return `## License

      This project is licensed under the [GNU General Public License (GPL)](https://opensource.org/license/gpl-1-0/).`;
    case "GNU Lesser General Public License (LGPL)":
      return `## License

      This project is licensed under the [GNU Lesser General Public License (LGPL)](https://opensource.org/license/lgpl-2-1/).`;
    case "BSD 2-Clause License":
      return `## License

      This project is licensed under the [BSD 2-Clause License](https://opensource.org/license/bsdpluspatent/).`;
    case "BSD 3-Clause License":
      return `## License

      This project is licensed under the [BSD 3-Clause License)](HEY YOU FIX ME).`;
    case "Mozilla Public License 2.0":
      return `## License

      This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0/).`;
    case "Creative Commons Attribution License":
      return `## License

      This project is licensed under the [Creative Commons Attribution License](HEY YOU FIX ME).`;
    case "The Unlicense":
      return `## License

      This project is licensed under the [The Unlicense](https://opensource.org/license/unlicense/).`;
    case "ISC License":
      return `## License

      This project is licensed under the [ISC License](https://opensource.org/license/isc-license-txt/).`;
    case "Boost Software License 1.0":
      return `## License

      This project is licensed under the [Boost Software License 1.0](https://opensource.org/license/bsl-1-0/).`;
    case "Eclipse Public License 2.0":
      return `## License

      This project is licensed under the [Eclipse Public License 2.0](https://opensource.org/license/epl-2-0/).`;
    case "None":
    return ` `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ projectTitle, description, installation, usage, license, contributing, tests, email, github }) {
  return () =>
    generateREADME({ projectTitle, description, installation, usage, license, contributing, tests, email, github });
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}