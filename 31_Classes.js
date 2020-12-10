/*
    A more easily understood method to creating classes
*/

//The old clunky way
var OldShape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};

OldShape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

var oldShape = new OldShape("oldguy", 15, 20);
console.log(oldShape.x + " " + oldShape.y);

oldShape.move(20, 25);
console.log(oldShape.x + " " + oldShape.y);

//The new way
class Shape {
  constructor (id, x, y) {
      this.id = id
      this.move(x, y)
  }
  move (x, y) {
      this.x = x
      this.y = y
  }
}

let newShape = new Shape("newguy", 9000, 10000);
console.log(newShape.x + " " + newShape.y);

newShape.move(50, 100);
console.log(newShape.x + " " + newShape.y);
