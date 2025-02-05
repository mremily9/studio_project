# Studio Project

Website link: 

About the project: 


# Table of contents
- [Overview](https://github.com/mremily9/studio_project/edit/main/README.md#overview)
- [Notes](https://github.com/mremily9/studio_project/edit/main/README.md#notescontextual-research)
- [Progress](https://github.com/mremily9/studio_project/edit/main/README.md#progress-problem-solvingcode)
  - Experiments
    - [Scroll effect](https://github.com/mremily9/studio_project/edit/main/README.md#scroll-effect )
- [Future Development](https://github.com/mremily9/studio_project/edit/main/README.md#future-development)
- [Reflection](https://github.com/mremily9/studio_project/edit/main/README.md#reflection)

# Overview
- bullet points

  
# Notes/contextual research 




# Progress (Problem Solving/Code)
**Setting up**

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




# Future development 



# Reflection
