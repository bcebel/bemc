const fs = require("fs");
const { DOMParser } = require("xmldom");

function parseHtml(filePath) {
  const sampleFile = fs.readFileSync(filePath, "utf8");
  const parser = new DOMParser();
  const doc = parser.parseFromString(sampleFile, "text/html");
  const classes = [
    "title",
    "subtitle",
    "part",
    "authority",
    "subpart",
    "section",
    "table-wrapper",
    "chapter",
    "editorial-note",
    "inline-paragraph",
    "indent-1",
    "indent-2",
    "indent-3",
    "citation",
  ];
  const tagsToInclude = ["h1", "h2", "h3", "p", "a", "table"];

  const data = {};
  classes.forEach((className) => {
    const elements = doc.getElementsByClassName(className);
    data[className] = Array.from(elements).map((element) => {
      // Extract text content for specified tags within each element
      return tagsToInclude
        .map((tag) => {
          const tagElements = Array.from(element.getElementsByTagName(tag));
          const filteredTextContent = tagElements
            .map((tagElement) => tagElement.textContent.trim())
            .filter((text) => text !== ""); // Exclude empty text content
          return {
            tagName: tag,
            textContent: filteredTextContent,
          };
        })
        .filter((tagData) => tagData.textContent.length > 0); // Exclude entries with empty textContent
    });
  });

  return data;
}

const jsonOutput = parseHtml("title-2.html");
console.log(JSON.stringify(jsonOutput, null, 2));
