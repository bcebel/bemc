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
  ];
  const tagsToInclude = ["h1", "h2", "h3", "p", "a"];

  const data = {};
  classes.forEach((className) => {
    const elements = doc.getElementsByClassName(className);
    data[className] = Array.from(elements).map((element) => {
      // Extract text content for specified tags within each element
      return tagsToInclude.map((tag) => ({
        tagName: tag,
        textContent: Array.from(element.getElementsByTagName(tag)).map(
          (tagElement) => tagElement.textContent
        ),
      }));
    });
  });

  return data;
}

const jsonOutput = parseHtml("title-2.html");
console.log(JSON.stringify(jsonOutput, null, 2));
