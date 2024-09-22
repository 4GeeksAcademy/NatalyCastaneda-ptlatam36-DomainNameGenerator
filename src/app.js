/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["I", "you", "he", "she", "it", "we", "they", "what", "who"];
  let adj = [
    "attractive",
    "bald",
    "beautiful",
    "chubby",
    "clean",
    "dazzling",
    "drab",
    "elegant",
    "fancy",
    "fit",
    "flabby",
    "glamorous",
    "gorgeous",
    "handsome",
    "long",
    "magnificent",
    "muscular",
    "plain",
    "plump",
    "quaint",
    "scruffy",
    "shapely",
    "short",
    "skinny",
    "stocky",
    "ugly",
    "unkempt",
    "unsightly"
  ];
  let noun = [
    "area",
    "business",
    "case",
    "company",
    "course",
    "day",
    "development",
    "example",
    "fact",
    "family",
    "government",
    "group",
    "hand",
    "head",
    "home",
    "information",
    "money",
    "night",
    "part",
    "party",
    "place",
    "point",
    "school",
    "state",
    "system",
    "thing",
    "time",
    "way",
    "week",
    "work",
    "world",
    "year"
  ];
  let domainExtensions = [
    ".com",
    ".org",
    ".net",
    ".info",
    ".biz",
    ".co",
    ".us",
    ".io",
    ".me",
    ".app",
    ".dev",
    ".edu",
    ".gov",
    ".mil",
    ".tv",
    ".name",
    ".pro"
  ];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(
          pronoun[i] +
            adj[j] +
            adj[k] +
            domainExtensions[
              Math.floor(Math.random() * domainExtensions.length)
            ]
        );
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
