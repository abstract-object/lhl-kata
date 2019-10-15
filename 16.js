const blocksAway = function(directions) {
  var distance = {east: 0, north: 0};
  var facing;

  if (directions[0] === "left") {
    facing = 0;
  }
  else if (directions[0] === "right") {
    facing = 1;
  }

  for (var i = 1; i < directions.length; i++) {
    if (directions[i] === "right") {
      if (facing === 3) {
        facing = 0;
      }
      else {
        facing++;
      }
    }
    else if (directions[i] === "left") {
      if (facing === 0) {
        facing = 3;
      }
      else {
        facing--;
      }
    }
    else {
      if (facing === 0) {
        distance.north += directions[i];
      }
      else if (facing === 1) {
        distance.east += directions[i];
      }
      else if (facing === 2) {
        distance.north -= directions[i];
      }
      else if (facing === 3) {
        distance.east -= directions[i];
      }
    }
  }
  return distance;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));