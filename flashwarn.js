let count = 0; 


function setup(){
    createCanvas(windowWidth , windowHeight);
    background(0);
}

function draw(){
    count++; 
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("flash warning", windowWidth/2, windowHeight/2);

    count++; 
    if( count == 200 )  {
    // refresh();
    switchsite();
    }
}

// function refresh(){
//   location.replace(location.href);
// }

function switchsite(){
location.replace('balls.html');
}