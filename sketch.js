const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg;
var girl;


var bg = "unnamed.jpg";


function preload() {
    getBackgroundImg();
    girl=loadImage("a.png");
}

function setup(){
    var canvas = createCanvas(1200,800);


}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
        image(girl ,200,340,200,300);
      

  
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "unnamed.jpg";
    }
    else{
        bg = "26f13628aa34089cae577046023ae3cf.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    }