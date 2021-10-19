import * as d3 from "d3"; //comment for github

var NWSLPromise = d3.json("nwsl.json");

var successFCN = function (athlete) {
  console.log(athlete);

  var rows = d3
    .select("#NWSLTable")
    .selectAll("tr")
    .data(athlete)
    .enter()
    .append("tr");

  rows.append("td").text(function (athlete) {
    return athlete.number;
  });

  rows.append("td").text(function (athlete) {
    return athlete.position;
  });

  rows.append("td").text(function (athlete) {
    return athlete.player;
  });

  rows.append("td").text(function (athlete) {
    return athlete.country;
  });

  rows.append("td").text(function (athlete) {
    return athlete.team;
  });

  rows
    .append("td")
    .append("img")
    .attr("src", function (athlete) {
      return athlete.image;
    });
};

var failFCN = function (error) {
  console.log("", error);
};

NWSLPromise.then(successFCN, failFCN);
