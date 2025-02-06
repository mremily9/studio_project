

function setup() {
    canvasWidth = windowWidth
    canvasHeight = windowHeight * 2
    createCanvas(canvasWidth, canvasHeight)
  }

function draw() {
  background(40);

  setInterval(function(){ window.scrollBy(0,-10); }, 2000); 

  // window.scrollTo(0,100);

  fill(225);
  text("currently testing: window.scrollBy(0,-10)", 60, 300);
}
