let slidertheta
let autobutton
let auto = 0

function autotheta() {
  if (auto == 0){
    auto = 1
    return
  }
  auto = 0
}

function setup() {
  // put setup code here
  createCanvas(1000,1000)
  textSize(30)
  angleMode(DEGREES)
  frameRate(20)
  slidertheta = createSlider(0,359,0,0.1)
  slidertheta.position(100,600)
  slidertheta.style('width','300px')
  autobutton = createButton('Animation')
  autobutton.position(420,600)
  autobutton.size(100,20)
  autobutton.mousePressed(autotheta)
}




let radius = 500
radius /= 2
function draw() {
  
  if (auto === 1){
    if (theta < 360){
      theta +=1
    }
    else{theta=0}
    
    slidertheta.remove()
    slidertheta = createSlider(0,359,theta,0.1)
    slidertheta.position(100,600)
    slidertheta.style('width','300px')
  }
  else{
  theta = slidertheta.value()}
  strokeWeight(5)
  background(100)
  stroke('black')
  fill('white')
  circle(500,300,2*radius)
  
  
  
  
  point(500,300)
  stroke('gray')
  line(500,300,radius*cos(theta)+500,-radius*sin(theta)+300)

  // y
  stroke('blue')
  line(radius*cos(theta)+500,-radius*sin(theta)+300,radius*cos(theta)+500,300)

  //x
  stroke('red')
  line(500,300,radius*cos(theta)+500,300)

  strokeWeight(0)
  fill(0)
  text(`θ = ${theta}°`,100,650)
  fill('blue')
  text(`sin(θ) = y = ${sin(theta)}`,100,700)
  fill('red')
  text(`cos(θ) = x = ${cos(theta)}`,100,750)



  


}