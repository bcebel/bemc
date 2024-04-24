//this one generically parses the html baed on parent child relationships

const fs = require("fs");
const { DOMParser } = require("xmldom");

function parseHtml(filePath) {
  const sampleFile = fs.readFileSync(filePath, "utf8");
  const parser = new DOMParser();
  const doc = parser.parseFromString(sampleFile, "text/html");
  const rootNode = doc.documentElement;

  const data = {};

  // Function to recursively traverse the DOM tree and format data by nodes
  function traverse(node, parentNode) {
    if (node.nodeType === 1) {
      // Element node
      const tagName = node.tagName.toLowerCase();
      const nodeData = {
        tagName: tagName,
        textContent: node.textContent.trim(),
        parentNode: parentNode ? parentNode.tagName.toLowerCase() : null,
        children: [],
      };
      // Recursively traverse child nodes
      for (
        let childNode = node.firstChild;
        childNode;
        childNode = childNode.nextSibling
      ) {
        traverse(childNode, node);
      }
      // Append node data to parent node's children array
      if (parentNode) {
        parentNode.children.push(nodeData);
      } else {
        // Root node
        data.root = nodeData;
      }
    }
  }

  // Start traversal from the root node
  traverse(rootNode, null);

  return data;
}

const jsonOutput = parseHtml("title-2.html");
console.log(JSON.stringify(jsonOutput, null, 2));
