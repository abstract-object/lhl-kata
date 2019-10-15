const organizeInstructors = function(instructors) {
  var instructorsByCourse = {};

  for (var i = 0; i < instructors.length; i++) {
    if (!(instructors[i]["course"] in instructorsByCourse)) {
      instructorsByCourse[instructors[i]["course"]] = [];
    }
    instructorsByCourse[instructors[i]["course"]].push(instructors[i]["name"]);
  }
  return instructorsByCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));