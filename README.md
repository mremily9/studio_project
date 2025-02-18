# Studio Project

Website link: https://mremily9.github.io/studio_project/

About the project: 
<br> This work looks to first showcase a basic animation of a ball bouncing around and off from the screens of the user's windows. This basic animation is a simple visual coding exercise that leads into a glitched phase, showcasing the backbones of this code and breaking the user's perspective of what is happening. Creating an unexpected moment of where the underlying code is revealed in a flash of unrecognisable text for the user, showcasing basic network information and variables that the user wouldnt see from the frontend side of things. 

# Table of contents
- [Overview](https://github.com/mremily9/studio_project?tab=readme-ov-file#overview)
- [Notes](https://github.com/mremily9/studio_project?tab=readme-ov-file#notescontextual-research)
- [Progress](https://github.com/mremily9/studio_project?tab=readme-ov-file#progress-problem-solvingcode)
  - [Themes](https://github.com/mremily9/studio_project?tab=readme-ov-file#themes)
  - [The idea and inspiration ](https://github.com/mremily9/studio_project?tab=readme-ov-file#the-idea-and-inspiration)
  - Experiments
    - [Scroll effect](https://github.com/mremily9/studio_project?tab=readme-ov-file#scroll-effect)
    - [API - getting the user IP address, locational information etc ](https://github.com/mremily9/studio_project?tab=readme-ov-file#api-implementation)
    - [Refreshing/Redirecting](https://github.com/mremily9/studio_project?tab=readme-ov-file#refreshing-and-redirecting)
    - [Ball bouncing](https://github.com/mremily9/studio_project?tab=readme-ov-file#ball-bouncing)
  - [Putting them all together](https://github.com/mremily9/studio_project?tab=readme-ov-file#putting-them-all-together)
  - [Glitch Effects](https://github.com/mremily9/studio_project?tab=readme-ov-file#glitch-effects)
- [Final Outcome](https://github.com/mremily9/studio_project?tab=readme-ov-file#final-outcome)
- [Future Development](https://github.com/mremily9/studio_project?tab=readme-ov-file#future-development)
- [Reflection](https://github.com/mremily9/studio_project?tab=readme-ov-file#reflection)

# Overview
- I first started off by figuring out my theme for this project - Glitches
- Looked into contextual research on the theme and medium, finding works I liked and enjoyed.
- Started working on my project by doing small experiments based on effects I wanted to emulate/create
  - this led to experimentation of glitch effects, random scrolling, flashing and refreshing the page
- I wanted to implement the user's data to give a sense of breaking where information that the user may be able to recognise is shown, data that the network uses like their IP address, location, time and date. 
- I created a basic ball-bouncing animation first
- I then implemented the redirection from  this basic ball animation into the glitches
- I then implemented a series of glitches to be produced in between

# Notes/contextual research 
I had done my research commentaries on the artwork ASDFG by JODI (1999) and on chapter 2. Avant-Garde Glitch: Red Noise, Purple Haze, Black Box for the text. 




# Progress (Problem Solving/Code)
### Themes
I first started off this studio project looking into my chosen theme, as this was the basis of my work and my research commentaries. 

![image](https://github.com/user-attachments/assets/7ea01565-5aa3-40c3-b498-cc78ef95ffbf)

I found myself most interested in these four themes: interactivity, non-linear stories, glitches, and images from data. This was due to the work I had done within my workshops, and the experiments I had linked back to these themes the most. Picking a theme that I enjoyed was the most important thing for me - as it would allow me to be heavily invested in the work from a personal standpoint. 

To help narrow down this list I had listed out the reasons and notes on each of them. 

![image](https://github.com/user-attachments/assets/0f8753d3-5ba8-4536-b607-3aeb45071112)

I then instead turned to looking at the given artist list and reading list - as I still wasn't too sure about what I wanted to do. From this, I found JODI and then found their work of [ASDFG](https://asdfg.jodi.org/-------------------------------/-------------------------------/-------------------------------/-----------------------102kd452/00bd6-61dt.html) (1999), which I found heavily fascinating and wanted to learn more about. And so my chosen theme was glitches.   

### The idea and inspiration

Some early ideas I had come up with were looking into the different types of glitches and effects I enjoyed and looking to emulate them. 

This was especially true for [ASDFG](https://asdfg.jodi.org) by JODI. Where I had watched this artwork for a while, analysing it and how it created its glitches and effects. 

![image](https://github.com/user-attachments/assets/05881477-b15f-4ed6-97c9-b395ec03d041)

I had an idea of creating a glitching effect, with some level of interactivity from the user, using the camera but made out of ASCII characters to be fully code-like. Where the user was a part of the glitch 

![image](https://github.com/user-attachments/assets/0e0f7a1c-5a02-4c18-bc38-b0752f33ef69)

I also noted down ideas of glitches being based on users' mouse potions or key inputs. However, I felt I was going too much with the direction of interactivity rather than the glitches themselves. And I was only looking at glitches from an aesthetic point of view rather than truly showing the randomness and breaking down of systems. 



<br>


### Scroll effect

**Research**

I started to test and play around with the scroll effect that made the glitching in the artwork ASDFG by JODI so compelling. So out of your control. 

After a few google searches I found a [forum about how to potentially move the scrollbar by javascript](https://www.quora.com/How-do-you-auto-scroll-a-webpage-up-and-down)

Where the user gave the following code to be used to auto-scroll a webpage: 

```javascript
setInterval(function(){ window.scrollBy(0,1000); }, 2000); 
```
<br>

**Testing the scroll effect** 

I set up my canvas so that the height was twice of my window to allow a scrollbar to take place: 
```javascript
function setup() {
    canvasWidth = windowWidth;
    canvasHeight = windowHeight * 2; //times the window height by 2 to make it twice as long
    createCanvas(canvasWidth, canvasHeight);
  }
```

![image](https://github.com/user-attachments/assets/491de680-10e6-4ce5-915c-b588324c1a91)


I then played around with the numbers on the function - namely, changing it from 1000 -> 10

This made it scroll downwards smoothly 


Leading to me figuring out how the function worked: 

![image](https://github.com/user-attachments/assets/e31966a5-4d74-4a6e-b4fb-281fdc1650e9)

Where if the y movement integer was positive, it would move downwards, and if it was negative, it would move upwards in a consistent manner. 

<br>

![image](https://github.com/user-attachments/assets/8440c5c0-5b09-41b8-9271-3ac5bc611a29)

I then started to experiment and test with window.scrollTo(). 

![image](https://github.com/user-attachments/assets/e4ba2da0-4b7b-431d-9f91-40bb6f3cf54d)


```javascript
window.scrollTo(0,100);
```

I found that it worked as I hoped - placing this in the draw() function made it so that if I wanted to scroll myself with mouse/inputs - it would go back to that same place.

This experiment can be seen here: [https://editor.p5js.org/MrEmily9/full/P4quJHWJh](https://editor.p5js.org/MrEmily9/full/P4quJHWJh)

### API implementation

I wanted to look into the unveiling of a network and website by gathering information from the user visiting the website. To do this, I wanted to use an API that allowed me to get the IP address and any other data from the user. 

![image](https://github.com/user-attachments/assets/003ad1fd-6b88-4aac-95e5-4b08ac4e41e5)

I took a look through the free [no auths APIs](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/) shown in the workshops and found one called [Cloudflare trace](https://github.com/fawazahmed0/cloudflare-trace-api)

![image](https://github.com/user-attachments/assets/c0c1f0e7-6a86-4683-ba3f-34023687c14a)


I was able to see the return format of the API, including its endpoints and the return format.

![image](https://github.com/user-attachments/assets/31eecfe5-84f8-4c6d-859e-012c423f3a2b)

I quickly implemented the API following the workshop on APIs as a guide to refresh my mind on it 

![image](https://github.com/user-attachments/assets/d381c77a-049f-48b9-b03a-2f06ae649661)

Creating an async function that grabs the api: 

```javascript
async function getapi(){
  let data = await fetch(ip_api);
  let jdata = await data.json();

  ip = jdata.clientIp;
  city = jdata.city;
  region = jdata.region;
  postalCode = jdata.postalCode;
}

function setup() {
  createCanvas(400, 400);
  getapi();
}

function draw() {
  background(220);
  text(ip, 20, 100);
  text(city, 30, 200);
  text(region, 40, 300);
  text(postalCode, 40, 340);
  text(time, 40, 370);
}
```

I also had to play around with different methods of grabbing the data, as one of the return formats wasn't in JSON. 

This led to me finding this [forum](https://stackoverflow.com/questions/62701643/extract-ip-and-uag-from-cloudflare-cdn-cgi-trace-text-result-using-regex-in-js/68304489#68304489) on how to convert it into JSON 

![image](https://github.com/user-attachments/assets/ba108900-465c-42f1-9c07-1af56fbfeef9)

So, I implemented this into my code. 

```javascript
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
```

and I had implemented this within my getapi() function 

```javascript
  let mdata = await getCloudflareJSON();
  time = mdata.ts;
```

I also found there was an option for time that was returned in the format of Epoch time

![image](https://github.com/user-attachments/assets/9b053296-21d2-452f-b8f8-bacc3ad60211)

and so I wanted to implement this into my code, looking at a [forum](https://stackoverflow.com/questions/4631928/convert-utc-epoch-to-local-date) I found a method to it 

![image](https://github.com/user-attachments/assets/ea8d4ee2-cfc6-422f-8d6a-06d39c73ee63)


This led me to implement the below within my draw() function to showcase the time on the sketch. 

```javascript
  var d = new Date(0);
  d.setUTCSeconds(time);
  text(d, 200, 370);
```

![image](https://github.com/user-attachments/assets/68d60c9d-0f9f-4b1e-bdd2-a05113bd6d74)


### Refreshing and Redirecting

I had found that the api was able to grab the information from the user, however it wouldn't be updated overtime. This was most obvious by the date and time, as it woulsn't update each second. To update this I would need to refresh the page. 

I then looked into refreshing a page and experimenting with this. 

I found a [website](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/) that showed how to do this within javascript

![image](https://github.com/user-attachments/assets/db53d1cb-53ac-4dad-8b66-fb4ddb50fb75)


And so, I quickly implemented this within my code following the same file from the API. Creating a function that refreshes the page every 50 counts. 

```javascript
draw(){
...
  count++;
  if( count % 50 == 0 )  {
    refresh();
  }
}
function refresh(){
  location.replace(location.href);
}
```

![image](https://github.com/user-attachments/assets/08343787-e8a4-4577-9ed0-e090a80e43f4)


Which ended up working out for me. 

From this, I also learnt that I can redirect users to a new URL with this same method by replacing the location.href with something else. 

This experiment can be seen here: [https://editor.p5js.org/MrEmily9/full/2mF6om4JB](https://editor.p5js.org/MrEmily9/full/2mF6om4JB) 


### The idea pt2 

At this point, With some experimentations being made. I found that I didn't like my idea, and it didn't fully play with the idea of glitches and how they work. It was more of a visual breakdown that only was to be looked like chaos. However, I wanted to try and work with critical thinking around glitches and bring about the underlying effects of the structures behind creating computual art. 

So I started with the new idea of playing around with, mashing between two different screens, a simple bouncing ball animation and a glitch effect. 

![image](https://github.com/user-attachments/assets/88ad833c-286c-40bd-8df4-4cd1b355f13c)

This idea then got expanded on while I was experimenting with the idea of refreshing and redirecting a page. On how I was going to present this and create this outcome. Where I looked into only have two pages that were switched to the other overtime, rather than a new page made for each glitch like in my previous iteration.  

![image](https://github.com/user-attachments/assets/2615c1b6-3239-4e9a-bdc5-6d59d8355774)


### Ball bouncing

I started to look at the other side of things, creating a simple simulation. 

I first created a ball class so that I was able to create as many or as few balls as I wanted. 

```javascript
class ball{
  constructor(xpos, ypos, dia){
    this.x = xpos;
    this.y = ypos;
    this.diameter = dia;
    this.xv = 3;
    this.yv = 5;
  }
  render(){
    fill(255);
    circle(this.x, this.y, this.diameter);
  }
  move(){
    this.x += this.xv;
    this.y += this.yv;
    //if it hits the edge it will change velocity to be the opposite
    //so that it bounces off
    if (this.x > width || this.x < 0) {
      this.xv *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.yv *= -1;
    }
  }
}
```

Wihtin the move() function of this class, I looked to make it so that when a ball hits the edge of the canvas it would switch directions by an if statement. 


I then tested this ball class and implemented a ball1 variable 

```javascript
let ball1;

function setup() {
  createCanvas(400, 400);
  background(0);
  ball1 = new ball(width / 2, height / 2, 40);
}

function draw() {
  background(0);
  ball1.move();
  ball1.render();
}
```

Which ended up working well. 

![image](https://github.com/user-attachments/assets/3b277ead-695a-45d3-b1c7-a3af7f892a18)

However I wanted more balls to be generated, and I wanted them to move in different starting directions and speeds to add more random interest. 

I looked into creating an array of variables that would be the different speeds the balls would start off with, with the negative numbers also chosing their starting direction. 

```javascript
let xvel = [0, 13, 15, 10, 15, -20, 17, -18, 5];
let yvel = [15, 20, 14, 10, 8, -18, 0, -4, -23];
```

I looked into updating the ball class to match this system. 

```javascript
class ball{
  constructor(xpos, ypos, dia, ind){
    this.x = xpos;
    this.y = ypos;
    this.diameter = dia;
    this.xv = xvel[ind];
    this.yv = yvel[ind];
    this.i = ind;
  }
```

and implementing this line so that a random index of the array was chosen, so that a random pair of velocities were chosen 

```javascript
int(random(xvel.length - 1))
```

This was all done instead of just changing the speed to be a random() function of between 0 and 10, as I didn't want there to be a point where both the y and x velocities of the ball were 0 - making it so that the ball wouldn't move. Having this array allowed me to play around with the speeds so that there was variety, yet not a point where the balls didn't move. I was able to have the balls fall fully down or to the side, without the risk of the random() function picking both 0. 

I had also added this line so that the ball would bounce off the walls of the user's browsers and not in a small box. 

```javascript
createCanvas(windowWidth , windowHeight);
```

![image](https://github.com/user-attachments/assets/6745951c-0bd4-4625-b675-9cb6783f90f4)

I then added more balls to the sketch using another array - balls[]. which wihtin the setup() of the sketch I had then done the below code. 

```javascript
//generate balls
  for(i = 0; i < random(1, 10); i++){
    balls[i] = new ball(random(width), random(height), 70, int(random(xvel.length )));
  }
```

![image](https://github.com/user-attachments/assets/68420c19-c288-406a-9e50-951d8670b569)

This can be seen here: https://editor.p5js.org/MrEmily9/full/t46HbefSn


### Putting them all together

At this point I started to connect all the things I had experimented with together, creating a new html and js file for the glitches. 


![image](https://github.com/user-attachments/assets/598b6a93-46c0-42a1-a23c-06d237fc7bd8)

making sure I copied and pasted over the html code from index.html, however changing the body text to link to the glitch javascript file instead. 

```html
  <body>
    <!-- <script type= "text/javascript" src="balls.js"></script> -->
    <script src="glitch.js"></script>
  </body>
```

Using the knowledge from the previous experiment, I made a new function called switchsite(), which followed in a similar footsteps as the refresh() function. 

Where in the ball file it was redirecting to the glitch.html

```javascript
function switchsite(){
    location.replace('glitch.html');
}
```

in the glitch.js file it would go towards the index.html which was running the ball animation

```javascript
function switchsite(){
    location.replace('index.html');
}
```

![image](https://github.com/user-attachments/assets/bda9a5f4-3ea7-496f-b735-fa73fc9c2156)

![image](https://github.com/user-attachments/assets/190d63d4-e076-4174-a591-6e2cb60e74a1)

This worked out in a way in which the websites would switch to each other after some time. 


### Glitch Effects

To help make these glitch-like effects, I looked into using the scroll effect from the previous experiment and also flashing the background between white and black to create that flashing effect. 
These were made within functions so that I can call them easily. 

Scroll effect

```javascript
function scrollbug(loc = 100){ // default value of 100 if not specfiyed
    window.scrollTo(0,random(loc, loc + windowHeight));
}
```

Background flashing between black and white - done with a random() function

```javascript
function bgflash(col = 2){
    background(bg[int(random(0, col))]);
}
```

To structure out my glitches, I created them in different functions. This is my first test of the glitchy effect. 



```javascript
function glitch1(){
    bgflash();
    scrollbug(50);
    for(i = 0; i < 30; i++){
        text(date, 200 + i +  random(i) , 370 + (i * 20));
    }
    text(date, 200, 370);
}
```

![image](https://github.com/user-attachments/assets/3a042983-96b3-42fd-90af-3af99912cce5)

To help me in producing these effects, I often looked into using the random() function, loops and text. 

I went ahead to change the font to a mono typeface, so that it would look more like 'code' where I chose the Google font [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro)

![image](https://github.com/user-attachments/assets/690cdecc-448a-482f-ad20-4df77e737b57)

Which then got implemented in within the preload() 

```javascript
function preload(){
    fontlight = loadFont("assets/SourceCodePro-VariableFont_wght.ttf");
    fontmed = loadFont("assets/SourceCodePro-Medium.ttf");
    fontbold = loadFont("assets/SourceCodePro-Bold.ttf");
}
```

![image](https://github.com/user-attachments/assets/0e4694cf-f44f-4243-a2c2-1444ff813b4e)


I played around with making glitches following the first one, using text from the api and loops to showcase the text. 
Playing around with location and size. 

I had also looked into making strips across the page with rectangles and loops 

```javascript
  for(i = 0; i < 30; i++){
        rect(0, 20 + i * 45, windowWidth, 20 + random ( i * 4));
    }
```

Which gave me this outcome 

![image](https://github.com/user-attachments/assets/b17fe1c2-9d34-4379-be5e-9cb7380fc7c4)

After creating three functions of different glitch-like effects, I looked into how a specific glitch effect would be chosen each time the page was refreshed. 

I did this with the help of switches, where the expression going in would determine the output. 

```javascript
    switch(glitches) {
        case 0:
            glitch1();
          break;
        case 1:
            glitch2();
          break;
        default:
            // glitch1();
    }
```

this expression being a random() function in the setup 

```javascript
glitches = int(random(0, 6));
```

Which I would update as I added in more glitch effects. 

Most of my glitch effects are similar and so I didn't want to document each and every single one of them, so to look at one that I liked and break it down since they use similar elements but with different text and changes in the numbers for the variables. 

![image](https://github.com/user-attachments/assets/98fab006-d3bb-45a6-828a-ed9a63ce400a)

I started with creating the bar and white bars as the background of the glitch, using a for loop and a rect() being made, which its y position would increase based on the number of loops it was on. The height of the rectangle itself would be random with the random() function so that it wasn't be even strips across downwards. 

```javascript
   for(i = 0; i < 14; i++){
        rect(0, 60 + (i * 80), windowWidth, 40 + random (50));
    }
```

I added in the scroll effect to the top of the function also 

```javascript
scrollbug(220);
```

I then created this effect with the text, where the ip address is seen.

![image](https://github.com/user-attachments/assets/b7e978bc-edce-4324-8ece-85e75006f5ad)

This top text is made with a for loop. However, the y position moves down by 1 pixel as the loop continues, such as the text looks connected together with this smearing effect. 

```javascript
for(i = 0; i < 30; i++){
        text("ip address: "+ip, 0, 600 + i );
    }
    text("ip address: "+ip, 0, 800);
```


I then had another set of text for the ip address on the left. 

![image](https://github.com/user-attachments/assets/755d95f0-7773-4612-8c4b-b790f1f8f5b7)

This was made to be alternating black and white, as the background was both, I wanted to be sure you can see the text in black on a white background sometimes. 

To do this I had an if-else statement, at the point of the loop where the number of loops being done at the moment was dividable by 5, it would be filled in white, if not it would be filled in black. 

```javascript 
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
```

# Final Outcome

Here is the [final outcome](https://mremily9.github.io/studio_project/), which can be seen on the net. (Flashing lights warning) 

This work addresses my theme of glitches by creating these false glitches to the user, breaking down their own network and browser to hold this artwork in. The randomness of this work within its glitched effects. Breaking down the user's easy viewing experience with a bouncing ball and what they are really looking at. 

# Future development 

- I would love to develop this project much further, creating more complex glitches, and more of them to add to its variety of it.
- I believe there are some bugs within the program where it doesn't work and needs to be refreshed, which I would love to "fix"
- I would also like to look into creating more different types of animations for the ball animation side, with different shapes and sizes as well.
- Another thing I wanted to do was look into glitching in the balls within the scene of the glitches - such as if they were somewhat seen within the glitch or just before the change into the glitch website. 


# Reflection

- I found this project to be very fun, as we were given a lot of freedom on what we wanted to do, and I was able to learn more about my chosen theme from the research commentaries
- I got to learn a lot about glitches, why I had a fascination with them, and what they meant from a critical lens, looking into the breaking of the system and its underlaying. Showcasing how the gneral user of the net works. 
- I was able to produce a work based on glitches that I enjoyed
- General reflection-wise, I was somewhat sad about the less time I had spent working on this versus the workshops.
  - Due to the nature of the workshops, the number of them, and how they were being done week by week, it was easy to work on them week by week.
- However, looking back on this studio project, I wasn't able to work on this as consistently as I had with my workshop tasks
- This was due to outside commitments, which I could've planned around better, but also from getting sick twice, with only a week in between. While I write this, I am still recovering from the sickness; however, without these roadblocks, I feel like I would've been able to produce something I would be more proud of and develop it more. 
