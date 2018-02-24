var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
      r: random(10, 20),
      s: 0,
      c: color(random(360), 60, 100)
    }
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];
		if (circle.s > 0) {
      circle.s -= 5;
    }
    // draw it
    fill(circle.c);
    stroke(circle.s);
    ellipse(circle.x, circle.y, circle.r);

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
      circle.r -= 3;
      circle.s = 255;
      
    }
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
      circle.r -= 3;
      circle.s = 255;
    }
    if (circle.r <= 0) {
      circle.x = width / 2;
      circle.y = height / 2;
      circle.xd = random(-2, 2);
      circle.yd = random(-2, 2);
      circle.r = random(10, 20);
      circle.s = 0;
      circle.c = color(random(360), 60, 100);
    }
  }
} 
