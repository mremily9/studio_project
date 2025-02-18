# Studio Project

Website link: https://mremily9.github.io/studio_project/

About the project: 
<br> This work looks to first showcase a basic animation of a ball bouncing around and off from the screens of the user's windows. This basic animation is a simple visual coding exercise that leads into a glitched phase, showcasing the backbones of this code and breaking the user's perspective of what is happening. Creating an unexpected moment of where the underlying code is revealed in a flash of unrecognisable text for the user, showcasing basic network information and variables that the user wouldnt see from the frontend side of things. 

# Table of contents
- [Overview](https://github.com/mremily9/studio_project/edit/main/README.md#overview)
- [Notes](https://github.com/mremily9/studio_project/edit/main/README.md#notescontextual-research)
- [Progress](https://github.com/mremily9/studio_project/edit/main/README.md#progress-problem-solvingcode)
  - [The idea and inspiration ](https://github.com/mremily9/studio_project/edit/main/README.md#the-idea-and-inspiration)
  - Experiments
    - [Scroll effect](https://github.com/mremily9/studio_project/edit/main/README.md#scroll-effect )
    - [API - getting the user IP address, locational information etc ](https://github.com/mremily9/studio_project/edit/main/README.md#api-implementation)
    - [Refreshing/Redirecting](https://github.com/mremily9/studio_project/edit/main/README.md#refreshing-and-redirecting)
    - [Ball bouncing](https://github.com/mremily9/studio_project/edit/main/README.md#ball-bouncing)
  - Putting them all together
  - Glitch Effects
  - Final Outcome
- [Future Development](https://github.com/mremily9/studio_project/edit/main/README.md#future-development)
- [Reflection](https://github.com/mremily9/studio_project/edit/main/README.md#reflection)

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
### The idea and inspiration



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


### API implementation


### Refreshing and Redirecting


### Ball bouncing





# Future development 



# Reflection
