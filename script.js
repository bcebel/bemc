var request = require("request");
var { DOMParser } = require("xmldom");
var http = require("http");
var fs = require("fs");
const { resolve } = require("path");
const { stringify } = require("querystring");


const samplefile = fs.readFileSync("title-2.html", "utf8");
const parser = new DOMParser();
const doc = parser.parseFromString(samplefile, "text/html");
//console.log(doc.childNodes[1]);
let title = doc.getElementsByClassName("title");
for (var i = 0; i < title.length; i++) {
   // console.log(title[i].textContent);
}
//console.log(title);
const subtitle = doc.getElementsByClassName("subtitle");
for (var i = 0; i < subtitle.length; i++) {
//  console.log(subtitle[i].textContent);
}

const part = doc.getElementsByClassName("part");
for (var i = 0; i < part.length; i++) {
//  console.log(part[i].textContent);
}  

const authority = doc.getElementsByClassName("authority");
for (var i = 0; i < authority.length; i++) {
 // console.log(authority[i].textContent);
}

const source = doc.getElementsByClassName("source")
for (var i = 0; i < source.length; i++) {
  //  console.log(source[i].textContent);
} 

const subpart = doc.getElementsByClassName("subpart");
for (var i = 0; i < subpart.length; i++) {
//  console.log(subpart[i].textContent);
}

const section = doc.getElementsByClassName("section");
for (var i = 0; i < section.length; i++) {
//  console.log(section[i].textContent);
}

const tableWrapper = doc.getElementsByClassName("table-wrapper");
for (var i = 0; i < tableWrapper.length; i++) {
 // console.log(tableWrapper[i].textContent);
}
  
const chapter = doc.getElementsByClassName("chapter");
for (var i = 0; i < chapter.length; i++) {
//  console.log(chapter[i].textContent);
}

const editorialNote = doc.getElementsByClassName("editorial-note");
for (var i = 0; i < editorialNote.length; i++) {
  console.log(editorialNote[i].textContent);
}
