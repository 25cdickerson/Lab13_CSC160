import * as d3 from "d3"; //comment for github

var athletePromise = d3.json("../part1.5/nwsl.json");

var successFCN = function (athlete) {
  console.log(athlete);

  var emp = d3
    .select("body")
    .selectAll("div")
    .data(athlete)
    .enter()
    .append("div")
    .classed("Athlete", true);

  emp
    .append("span")
    .classed("Player", true)
    .text(function (athletes) {
      return athletes.player;
    });

  emp
    .append("img")
    .attr("src", function (athletes) {
      return athletes.image;
    })
    .append("br");

  emp.append("br");

  emp
    .append("span")
    .classed("number", true)
    .text(function (athletes) {
      return athletes.number;
    })
    .append("br");

  emp
    .append("span")
    .classed("position", true)
    .text(function (athletes) {
      return athletes.position;
    })
    .append("br");

  emp
    .append("span")
    .classed("country", true)
    .text(function (athletes) {
      return athletes.country;
    })
    .append("br");

  emp
    .append("span")
    .classed("team", true)
    .text(function (athletes) {
      return athletes.team;
    })
    .append("br");
};

var failFCN = function (error) {
  console.log(error);
};

athletePromise.then(successFCN, failFCN);
