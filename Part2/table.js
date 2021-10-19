import * as d3 from "d3"; //comment for github

var employeePromise = d3.json("../Part1/data/employee.json");

var successFCN = function (employee) {
  console.log(employee);

  var emp = d3
    .select("body")
    .selectAll("div")
    .data(employee)
    .enter()
    .append("div")
    .classed("employee", true);

  emp
    .append("span")
    .classed("ename", true)
    .text(function (employees) {
      return employees.firstName + employees.lastName;
    });

  emp.append("img").attr("src", function (employees) {
    return employees.photo;
  });

  emp
    .append("span")
    .classed("email", true)
    .text(function (employees) {
      return employees.email;
    })
    .append("br");

  emp
    .append("span")
    .classed("phonenumber", true)
    .text(function (employees) {
      return employees.phone;
    });
};

var failFCN = function (error) {
  console.log(error);
};

employeePromise.then(successFCN, failFCN);
