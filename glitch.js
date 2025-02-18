

let count = 0 ; 
let balls; 

let ip_api = 'https://speed.cloudflare.com/meta'; 

let ip; 
let time; 
var date = new Date(0);
let postalCode, city, region;

let bg = [0, 255];

let fontlight, fontmed, fontbold; 

let glitches;

let loc = 100; 



const cloudflareFallbackURLs = ['https://one.one.one.one/cdn-cgi/trace',
    'https://1.0.0.1/cdn-cgi/trace',
    'https://cloudflare-dns.com/cdn-cgi/trace',
    'https://cloudflare-eth.com/cdn-cgi/trace',
    'https://workers.dev/cdn-cgi/trace',
    'https://pages.dev/cdn-cgi/trace',
    'https://cloudflare.tv/cdn-cgi/trace',
    'https://icanhazip.com/cdn-cgi/trace'
    ]
    
  async function getCloudflareJSON(){
    let data = await fetchWithFallback(cloudflareFallbackURLs).then(res=>res.text())
    let arr = data.trim().split('\n').map(e=>e.split('='))
    return Object.fromEntries(arr)
  }
    
  async function fetchWithFallback(links, obj) {
    let response;
    for (let link of links) {
        try {
            response = await fetch(link, obj)
            if (response.ok)
                return response
        } catch (e) { }
    }
    return response
  }
  
  async function getapi(){
    let data = await fetch(ip_api);
    let jdata = await data.json();
  
    ip = jdata.clientIp; 
    city = jdata.city; 
    region = jdata.region; 
    postalCode = jdata.postalCode; 
  
    let mdata = await getCloudflareJSON();
    time = mdata.ts;
    
  
  
}

function preload(){
    fontlight = loadFont("assets/SourceCodePro-VariableFont_wght.ttf");
    fontmed = loadFont("assets/SourceCodePro-Medium.ttf");
    fontbold = loadFont("assets/SourceCodePro-Bold.ttf");

}
    

function setup() {
    createCanvas(windowWidth , windowHeight* 2);
    background(255);

    getapi();

    frameRate(60);
    // chosen = glitches[int (random(glitches.length))];
    glitches = int(random(0, 12));


}

function draw() {
    background(255);
    // background(bg[int(random(0, 2))]);
    // bgflash();

    fill(0);
    // text('test',  random(20, 300),  random(20, 300))

    date = new Date(0);
    date.setUTCSeconds(time);



    switch(glitches) {
        case 0:
            glitch0();
          break;
        case 1:
            glitch1();
          break;
        case 2:
            glitch2();
          break;
        case 3:
            glitch2();
            glitch1();
          break;
        case 4:
            glitch0();
            glitch2();
          break;
        case 5:
            glitch1();
            glitch0();
          break;
        case 6:
            glitch3();
          break;
        case 7:
            glitch4();
            glitch1();
          break;
        case 8:
            glitch4();
          break;
        case 9:
            glitch2();
            glitch3();
          break;
        case 10:
            glitch0();
            glitch4();
            glitch1();
          break;
        case 11:
            glitch3();
            glitch1();
          break;
        default:
            glitch0();
    }

    // glitch4();


    count++; 
    if( count % 360 == 0 )  {
        switchsite();
        // refresh();
    }

}

function refresh(){
    location.replace(location.href);
}
  
function switchsite(){
    location.replace('balls.html');
}

function scrollbug(loc = 100){
    window.scrollTo(0,random(loc, loc + windowHeight));
}

function bgflash(col = 2){
    background(bg[int(random(0, col))]);
}

function glitch0(){
    scrollbug(220);

    for(i = 0; i < 14; i++){
        rect(0, 60 + (i * 80), windowWidth, 40 + random (50));
    }
    
    textFont(fontbold);
    textSize(50);
    fill(255); 
    text("xpos of ball no. " + int(random(0,8)) + " = " + random(0, windowWidth), 70, 400)

    for(i = 0; i < 30; i++){
        text("ip address: "+ip, 0, 600 + i );
    }
    text("ip address: "+ip, 0, 800);

    textSize(20);
    fill(0); 
    for(i = 0; i < 30; i++){
        if( i % 5 == 0){
            fill(255); 
        } else {
            fill(0);
        }
        text(ip, 0 + i * 6 , 700 + (i * 20));
    }
}

function glitch1(){
    textFont(fontmed);
    bgflash();
    scrollbug(50);
    textSize(12);
    // textStyle(BOLD);
    for(i = 0; i < 30; i++){
        if( i % 3 == 0){
            fill(255); 
        } else {
            fill(0);
        }
        text(date, 200 + i +  random(i) * 2 , 370 + (i * 20));
    }
    text(date, 200, 370);

    textFont(fontlight);
    for(i = 0; i < 30; i++){
        if( i % 5 == 0){
            fill(255); 
        } else {
            fill(0);
        }

        textSize(20);
        text(ip, windowWidth - 110 + i +  random(i) * 2 , 70 + (i * 20));
    }
}


function glitch2() {
    scrollbug(10);
    bgflash();


    for(i = 0; i < 30; i++){
        rect(0, 20 + i * 45, windowWidth, 20 + random ( i * 4));
    }

    textFont(fontmed);
    textSize(40);
    fill(255); 

    for(i = 0; i < 50; i++){
        text("postal code = " +  postalCode, 0 + i , 9 + (i * 20));
    }
    textSize(20);
    for(i = 0; i < 20; i++){
        if( i % 2 == 0){
            fill(255); 
        } else {
            fill(0);
        }
        text( "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">", 110 + i , 400 + i * 10 );
    }
    
}


function glitch3() {
    window.scrollTo(0+ random(0+ windowWidth), 300 + random(30 + windowHeight));
    fill(0);
    rect(20, windowHeight, 60, 40); 

    for(i = 0; i < 50; i++){
        rect(20 + i * 30, 50, 60 + i * 10, windowHeight); 
    }

    textSize(12);
    for(i = 0; i < 20; i++){
        if( i % 2 == 0){
            fill(255); 
        } else {
            fill(0);
        }
        text( "render(){\nfill(255);\ncircle(this.x, this.y, this.diameter);\n}", 110 + i , 400 + i * 10 );
    }

    for(i = 0; i < 50; i++){
        if( i % 2 == 0){
            fill(255); 
        } else {
            fill(0);
        }
        text( "render(){\nfill(255);\ncircle(this.x, this.y, this.diameter);\n}", windowWidth- random(200, 250) + i , 700 + i * 10 );
    }

    for(i = 0; i < 50; i++){
        fill(255);
        text(city, 20 + i*100, 560); 
    }

    for(i = 0; i < 50; i++){
        fill(0);
        text(city, 20 + i*50, 960); 
    }

}

function glitch4(){
    // bgflash();
    scrollbug(70);
    fill(0);
    rect(20, windowHeight, 60, 40); 

    for(i = 0; i < 50; i++){
        rect(20 + i * 200, 800 + random(150, 500) , 60, 40); 

    }

    for(i = 0; i < 50; i++){
        fill(0);
        text(city + postalCode + ip, 20 + i*50, 960); 
    }
    for(i = 0; i < 50; i++){
        fill(0);
        text(city + postalCode + ip, 0 + i*90, 980); 
    }

    for(i = 0; i < 50; i++){
        fill(255);
        text(city + postalCode + ip, 0 + i*90, 970); 
    }
}