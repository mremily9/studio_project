let ball1; 

let xvel = [0, 13, 15, 10, 15, -20, 17, -18, 5]; 
let yvel = [15, 20, 14, 10, 8, -18, 0, -4, -23]; 

let balls = []; 

let count= 0; 
let velos; 


window.setup = function() {
  createCanvas(windowWidth , windowHeight);
  // ball1 = new ball(width / 2, height / 2, 70, int(random(xvel.length )));
  
  //generate balls 
  velos = int(random(xvel.length ))
  for(i = 0; i < random(1, 6); i++){
    balls[i] = new ball(random(width), random(height), 70, velos); 
  }

  
}


class ball{
    constructor(xpos, ypos, dia, ind){
      this.x = xpos; 
      this.y = ypos; 
      this.diameter = dia; 
      this.xv = random(xvel[ind] - 5, xvel[ind]);
      this.yv = random(yvel[ind] - 5, yvel[ind]);
      this.i = ind; 
  
    }
  
    render(){
      fill(255);
      circle(this.x, this.y, this.diameter);
    }
  
    move(){
      this.x += this.xv; 
      this.y += this.yv; 
      
      if (this.x > width || this.x < 0) {
        this.xv *= -1;
      }
      if (this.y > height || this.y < 0) {
        this.yv *= -1;
      }
    }
  }
  