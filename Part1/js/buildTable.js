import * as d3 from "d3"; //comment for github

var employeePromise = d3.json("data/employee.json");

var successFCN = function (employee) {
  console.log(employee);

  var rows = d3
    .select("#empTable")
    .selectAll("tr")
    .data(employee)
    .enter()
    .append("tr");

  rows.append("td").text(function (employees) {
    return employees.firstName;
  });

  rows.append("td").text(function (employees) {
    return employees.lastName;
  });

  rows
    .append("td")
    .append("img")
    .attr("src", function (employees) {
      return employees.photo;
    });

  rows.append("td").text(function (employees) {
    return employees.title;
  });

  rows.append("td").text(function (employees) {
    return employees.unit;
  });

  rows.append("td").text(function (employees) {
    return employees.email;
  });

  rows.append("td").text(function (employees) {
    return employees.bio;
  });

  rows.append("td").text(function (employees) {
    return employees.phone;
  });
};

var failFCN = function (error) {
  console.log("", error);
};

employeePromise.then(successFCN, failFCN);
