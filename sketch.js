var player
var playerImg
var Background
var barrera1
var barera2
var barrera3
var p1
var p2
var p3
var p4
var p5
var bordes
var pista
var pista2
var pista3
var pista4
var pistasGroup
var img2
var img3
var pistavertImg
var pistaHorImg
var gameState="intro"
var p4img,p4img2,p4img3
var p3img,p3img2,p3img3
var p5img,p5img2,p5img3
var arbusto
var gradas,gradasimg
var back
var youwin,youwinimg
var trofeo,trofeoimg;
var ylose,yloseimg
var over,overimg
var historia,historiaimg

var sound

function preload(){
playerImg=loadImage("F1.png")
img2=loadImage("carro1v2.png")
img3=loadImage("carro1v3.png")
limite2=loadImage("limite3.png")
pistavertImg=loadImage("limite.jpg")
limite5img=loadImage("limite5.png")

banderaImg=loadImage("bandera.jpg")
sound=loadSound("FR3.mp4")
M1=loadSound("M1.mp4")
Yl=loadSound("Yl.mp4")
Yw=loadSound("YW.mp4")

p3img=loadImage("ferrari.png")
p3img2=loadImage("ferrder.png")
p3img3=loadImage("ferrizq.png")

p4img=loadImage("maclaren.png")
p4img2=loadImage("maclarender.png")
p4img3=loadImage("maclarenizq.png")

p5img=loadImage("lotus.png")
p5img2=loadImage("lotusder.png")
p5img3=loadImage("lotusizq.png")
arbustoimg=loadImage("arbusto.png")
arbusto2img=loadImage("arbusto2.png")
 restartimg=loadImage("restart.png")
 tierraimg=loadImage("tierra.jpg")
 gradasimg=loadImage("gradas.jpg")

reloadimg=loadImage("Press-r-to-restart.png")
trofeoimg=loadImage("trofeo.png")
youwinimg=loadImage("youwin2.png")

overimg=loadImage("GAME-OVER.png")
yloseimg=loadImage("YOU-LOSE.png")
historiaimg=loadImage("historia1.jpg")

mimg=loadImage("Tu-padre-era-un-corredor.png")
iimg=loadImage("que-murio-con-el-sueno-d.png")
fimg=loadImage("Ayudalo-a-cumplir-su-sue.png")
eimg=loadImage("Este-va-a-ser-tu-carro.png")
himg=loadImage("Presiona-barra-espaciado (1).png")
nimg=loadImage("Dirige-el-carro-con-las-.png")

}


function setup(){
 
    createCanvas(windowWidth,windowHeight)
    //background("blue")
historia=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
historia.addImage(historiaimg)
historia.visible=false
    bordes=createEdgeSprites();
    Background=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background.shapeColor="grey"
    
   ground=createSprite(windowWidth/2+1000,windowHeight/2+93)
   ground.scale=2
   ground.addImage(tierraimg)
    gradas=createSprite(windowWidth/2+400,-1480)
          gradas.addImage(gradasimg)
          gradas.scale=3
          
    
    barrera1=createSprite(0,windowHeight/2,20,windowHeight)
    barrera1.visible=false
    barrera2=createSprite(windowWidth,windowHeight/2,20,windowHeight)
    barrera2.visible=false
    barrera3=createSprite(windowWidth/2,windowHeight,windowWidth,20)
    barrera3.visible=false
    
    esp=createSprite(windowWidth/2-1050,windowHeight/2-100)
    esp.addImage(tierraimg)
    esp.scale=2
    
   
    //numero pista impar lado derecho
    //pistaW=createSprite(windoWidth/2+50,,120)
    pistaW=createSprite(windowWidth/2+200,120,20,550)
    
    pistaW.addImage(pistavertImg)
    pistaW.scale=0.8
   
    
    //  pista.lifetime=500
  pista3=createSprite(windowWidth/2+340,-150,300,20)
  pista3.addImage(limite2)
  pista3.scale=0.7
  
  pista5=createSprite(windowWidth/2+473,-487,20,670)
  pista5.addImage(pistavertImg)
  pista5.scale=0.98
  
  pista7=createSprite(windowWidth/2+279,-815,400,20)
  pista7.addImage(limite2)
  pista7.scale=0.98
  

  pista9=createSprite(windowWidth/2+87,-1055,20,500)
  pista9.addImage(pistavertImg)
  pista9.scale=0.72

  pista11=createSprite(windowWidth/2-50,-1300,280,20)
  pista11.addImage(limite2)
  pista11.scale=0.7
  pista13=createSprite(windowWidth/2-180,-1550,20,350)
  pista13.addImage(pistavertImg)
  pista13.scale=0.72


  //numero pista par lado izquierdo
  pista2=createSprite(windowWidth/2-250,22,20,750)
  pista2.addImage(pistavertImg)
  pista2.scale=1.1
  //430
  verde=createSprite(windowWidth/2-128,-451,400,190)
  verde.addImage(tierraimg)
  verde.scale=0.4
  //pista2.lifetime=500
  pista4=createSprite(windowWidth/2-110,-352,300,20)
  pista4.addImage(limite2)
  pista4.scale=0.72
  
  pista6=createSprite(windowWidth/2+24,-454,20,200)
  pista6.addImage(limite5img)
  pista6.scale=0.55

  pista8=createSprite(windowWidth/2-110,-550,300,20)
  
  pista8.addImage(limite2)
  pista8.scale=0.72

  pista10=createSprite(windowWidth/2-250,-800,20,500)
  pista10.addImage(pistavertImg)
  pista10.scale=0.75
  pista12=createSprite(windowWidth/2-360,-1052,200,20)
  pista12.addImage(limite2)
  pista12.scale=0.55
  

  pista14=createSprite(windowWidth/2-460,-1420,20,620)
  pista14.addImage(pistavertImg)
  pista14.scale=1.05


   meta2=createSprite(windowWidth/2-315,-1800,300,20)
   meta2.addImage(banderaImg)
   meta2.scale=0.45
  
b=createSprite(windowWidth/2-315,-1990,300,20)
b.visible=false

   meta1=createSprite(windowWidth/2,windowHeight-230,500,20)
   meta1.addImage(banderaImg)
   meta1.scale=0.45
 



   fondo=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   fondo.visible=false

   p3=createSprite(windowWidth/2-40,350)
   p3.addImage(p3img)
   p3.scale=0.157
   p3.setCollider("rectangle",0,0,18,10)

    p4=createSprite(windowWidth/2,430)
    p4.addImage(p4img)
    p4.setCollider("rectangle",0,0,18,10)
    p4.scale=0.13
    
   p5=createSprite(windowWidth/2-40,430,20,20)
   p5.addImage(p5img)
   p5.setCollider("rectangle",0,0,18,10)
   p5.scale=0.105

   player=createSprite(windowWidth/2,350)
   player.setCollider("rectangle",0,0,player.width,player.Height)
   player.addImage(playerImg)
   player.scale=0.175
  
  
reload=createSprite(windowWidth/2,windowHeight/2+200)
reload.addImage(reloadimg)
reload.visible=false
back=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
back.visible=false

trofeo=createSprite(windowWidth/2-50,windowHeight/2-120)
trofeo.addImage(trofeoimg)
trofeo.scale=0.5
trofeo.visible=false

youwin=createSprite(windowWidth/2-50,windowHeight/2-80)
youwin.addImage(youwinimg)
youwin.scale=4.5
youwin.visible=false

over=createSprite(windowWidth/2,windowHeight/2-150)
over.addImage(overimg)
over.visible=false
ylose=createSprite(windowWidth/2,windowHeight/2)
ylose.addImage(yloseimg)
ylose.visible=false
model=createSprite(windowWidth/2,windowHeight/2)
model.addImage(playerImg)
model.visible=false
fond=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
fond.shapeColor="black"
fond.visible=false
m=createSprite(windowWidth/2,windowHeight/2-250,30,30)
m.addImage(mimg)
m.scale=0.5
m.visible=false
i=createSprite(windowWidth/2,windowHeight/2-200,30,30)
i.addImage(iimg)
i.scale=0.5
i.visible=false
f=createSprite(windowWidth/2,windowHeight/2-145,30,30)
f.addImage(fimg)
f.scale=0.5
f.visible=false
j=createSprite(windowWidth/2,windowHeight/2-90,30,30)
j.addImage(eimg)
j.scale=0.5
j.visible=false
h=createSprite(windowWidth/2,windowHeight/2+30,30,30)
h.addImage(img2)
h.scale=0.9
h.visible=false
l=createSprite(windowWidth/2,windowHeight/2+230,30,30)
l.addImage(himg)
l.scale=0.5
l.visible=false
n=createSprite(windowWidth/2,windowHeight/2+160,30,30)
n.addImage(nimg)
n.scale=0.5
n.visible=false
bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
bg.shapeColor="black"
bg.visible=false
M1play();
}


function draw(){
    //background("blue")

    
    if(gameState==="intro"){
    background("blue")
    
    truet();
Background.visible=true     
     
     fond.visible=true
      drawSprites();
     
      if(keyCode===32){
        gameState="play"
        M1.stop();
        playSound();
      }
    }

    if(gameState==="play"){
      Yw.stop();
      Yl.stop();
        model.visible=false
fond.visible=false
historia.visible=false
m.visible=false
i.visible=false
f.visible=false
j.visible=false
h.visible=false
l.visible=false
n.visible=false
fond.visible=false
    
if(frameCount%1===0&&p3.y>=257){
  arbusto=createSprite(random(windowWidth/2-700,windowWidth/2-300),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=4
  arbusto.scale=0.7
  arbusto.lifetime=167
  
}
if(frameCount%1===0&&p3.y>=257){
  arbusto2=createSprite(random(windowWidth/2-700,windowWidth/2-300),windowHeight-630)
arbusto2.addImage(arbustoimg)
arbusto2.velocityY=4
arbusto2.scale=0.2
arbusto2.lifetime=167
}


if(frameCount%3===0&&p3.y<=250){
  arbusto=createSprite(random(windowWidth/2-700,windowWidth/2-510),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=4
  arbusto.scale=0.7
  arbusto.lifetime=167
}
if(frameCount%3===0&&p3.y<=250){

  arbusto2=createSprite(random(windowWidth/2-700,windowWidth/2-510),windowHeight-630)
  arbusto2.addImage(arbustoimg)
  arbusto2.velocityY=4
  arbusto2.scale=0.2
  arbusto2.lifetime=167
}




if(frameCount%1===0&&p3.y>=280){
  arbusto=createSprite(random(windowWidth/2+520,windowWidth/2+700),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=4
  arbusto.scale=0.7
  arbusto.lifetime=167
}
if(frameCount%1===0&&p3.y>=280){
  arbusto2=createSprite(random(windowWidth/2+540,windowWidth/2+700),windowHeight-630)
  arbusto2.addImage(arbustoimg)
  arbusto2.velocityY=4
  arbusto2.scale=0.2
  arbusto2.lifetime=167
}
if(frameCount%1===0&&p3.y<=219){
  arbusto=createSprite(random(windowWidth/2-120,windowWidth/2+100),windowHeight-630)
  arbusto.addImage(arbustoimg)
  arbusto.velocityY=4
  arbusto.scale=0.2
  arbusto.lifetime=167
  back.depth=arbusto.depth
  back.depth=back.depth+1
}
if(frameCount%1===0&&p3.y<=219){
  arbusto2=createSprite(random(windowWidth/2-120,windowWidth/2+100),windowHeight-630)
  arbusto2.addImage(arbusto2img)
  arbusto2.velocityY=4
  arbusto2.scale=0.48
  arbusto2.lifetime=167
  back.depth=arbusto2.depth
  back.depth=back.depth+1
}

      pistaW.velocityY=4
      pista2.velocityY=4
      pista3.velocityY=4
      pista4.velocityY=4
      pista5.velocityY=4
      pista6.velocityY=4
      pista7.velocityY=4
      pista8.velocityY=4
      pista9.velocityY=4
      pista10.velocityY=4
      pista11.velocityY=4
      pista12.velocityY=4
      pista13.velocityY=4
      pista14.velocityY=4
      meta1.velocityY=4
      meta2.velocityY=4
      b.velocityY=4
      verde.velocityY=4
      esp.velocityY=4
      gradas.velocityY=4
      ground.velocityY=4
      if(meta1.y>=650){
        meta1.destroy();
      }

if(pistaW.y>=870){
  pistaW.destroy();
}
if(pista2.y>=990){
  pista2.destroy();
}
if(pista3.y>=630){
  pista3.destroy();
}
if(pista4.y>=640){
  pista4.destroy();
}
if(pista5.y>=920){
  pista5.destroy();
}
if(pista6.y>=700){
  pista6.destroy();
}
if(pista7.y>=700){
  pista7.destroy();
} 
if(pista8.y>=700){
  pista8.destroy();
}
if(pista9.y>=870){
  pista9.destroy();
}
if(pista10.y>=870){
  pista10.destroy();
}
if(pista11.y>=700){
  pista11.destroy();
}
if(pista12.y>=650){
  pista12.destroy();
}
     //esp ground verde
     if(esp.y>=1180){
       esp.destroy();
     }
     if(verde.y>=700){
       verde.destroy();
     }
     if(ground.y>=1180){
       ground.destroy();
     }

  //
  p3.velocityY=-(random(0.3,0.5))
  if(p3.y<=310){
    p3.velocityX=4
    p3.addImage(p3img2)
  }
    if(p3.y<=292){
      p3.velocityX=0

      p3.addImage(p3img)
    }
    if(p3.y<=265){
      p3.velocityX=-4
      p3.addImage(p3img3)

    }
if(p3.y<=250){
  p3.velocityX=0
  p3.addImage(p3img)
}
if(p3.y<=223){
  p3.velocityX=-4
  p3.addImage(p3img3)
}
if(p3.y<=200){
  p3.velocityX=0
  p3.addImage(p3img)
}

//

p4.velocityY=-(random(0.3,0.5))
if(p4.y<=383){
  p4.velocityX=4
  p4.addImage(p4img2)
}
if(p4.y<=363){
  p4.velocityX=0
  p4.addImage(p4img)
}

if(p4.y<=342){
  p4.velocityX=-4
  p4.addImage(p4img3)
}
if(p4.y<=326){
  p4.velocityX=0
  p4.addImage(p4img)
}

if(p4.y<=310){
  p4.velocityX=-4
  p4.addImage(p4img3)
}
if(p4.y<=265){
  p4.velocityX=0
  p4.addImage(p4img)
}
//
p5.velocityY=-(random(0.4,0.7))
if(p5.y<=360){
  p5.velocityX=4
  p5.addImage(p5img2)
}
if(p5.y<=340){
  p5.velocityX=0
  p5.addImage(p5img)
}
if(p5.y<=305){
  p5.velocityX=-4
  p5.addImage(p5img3)
}
if(p5.y<=280){
  p5.velocityX=0
  p5.addImage(p5img)
}
if(p5.y<=255){
  p5.velocityX=-4
  p5.addImage(p5img3)
}
if(p5.y<=220){
  p5.velocityX=0
  p5.addImage(p5img)
}

reload.depth=arbusto2.depth
reload.depth=arbusto.depth

reload.depth+=+1



      if(keyCode===UP_ARROW){
        player.velocityY=-0.85
                player.velocityX=0
        player.addImage(playerImg)
      }
         if(keyCode===RIGHT_ARROW){
             player.velocityX=3
             player.velocityY=0
     
             player.addImage(img2)
         }
         if(keyCode===LEFT_ARROW){
         player.velocityX=-3
         player.velocityY=0
         player.addImage(img3)
       }
       if(keyCode===DOWN_ARROW){
         player.velocityX=0
         player.velocityY=0
       }
     
     
        //player.collide(barrera1)
        //player.collide(barrera2)
        //player.collide(barrera3)
        //p1.bounceOff(player)
        player.collide(p3)
        player.collide(p4)
        //player.bounceOff(p5)*/
     
        player.collide(pistaW)
        player.collide(pista2)
        player.collide(pista3)
        player.collide(pista4)
        player.collide(pista5)
        player.collide(pista6)
        player.collide(pista7)
        player.collide(pista8)
        player.collide(pista9)
        player.collide(pista10)
        player.collide(pista11)
        player.collide(pista12)
        player.collide(pista13)
        player.collide(pista14)
     
      
     
     
        p3.collide(pistaW)
        p3.collide(pista2)
        p3.collide(pista3)
        p3.collide(pista4)
        p3.collide(pista5)
        p3.collide(pista6)
        p3.collide(pista7)
        p3.collide(pista8)
        p3.collide(pista9)
        p3.collide(pista10)
        p3.collide(pista11)
        p3.collide(pista12)
        p3.collide(pista13)
        p3.collide(pista14)
        
     
     
        p4.collide(pistaW)
        p4.collide(pista2)
        p4.collide(pista3)
        p4.collide(pista4)
        p4.collide(pista5)
        p4.collide(pista6)
        p4.collide(pista7)
        p4.collide(pista8)
        p4.collide(pista9)
        p4.collide(pista10)
        p4.collide(pista11)
        p4.collide(pista12)
        p4.collide(pista13)
        p4.collide(pista14)
        
     
        p5.collide(pistaW)
        p5.collide(pista2)
        p5.collide(pista3)
        p5.collide(pista4)
        p5.collide(pista5)
        p5.collide(pista6)
        p5.collide(pista7)
        p5.collide(pista8)
        p5.collide(pista9)
        p5.collide(pista10)
        p5.collide(pista11)
        p5.collide(pista12)
        p5.collide(pista13)
        p5.collide(pista14)
      
        drawSprites();



if(player.collide(b)){
  sound.stop();

  Yw.play();
  bg.visible=true
  gameState="end"
  p3.destroy();
p4.destroy();
p5.destroy();
player.destroy();
gradas.destroy();
arbusto.destroy();
arbusto2.destroy();
pista13.destroy();
pista14.destroy();
meta2.destroy();
  
bg.depth=back.depth
bg.depth=Background.depth
bg.depth=trofeo.depth
bg.depth=bg.depth+1
bg.visible=true
bg.shapeColor="black"
reload.depth=back.depth
reload.depth+=+1

trofeo.depth=back.depth
trofeo.depth+=+1

youwin.depth=back.depth
youwin.depth+=+1
trofeo.visible=true

back.visible=true
reload.visible=true
youwin.visible=true
if(keyCode===82){
  gameState="play"
  Yw.stop();
  create();
}



}
     if(p3.collide(b)){
      sound.stop();

      Yl.play();
       gameState="end2"
       bg.visible=true
       bg.shapeColor="black"
       bg.depth=back.depth
bg.depth=Background.depth
bg.depth=bg.depth+1
        bg.visible=true
        
        
        reload.depth=back.depth
        reload.depth+=+1
        
        over.depth=back.depth
        over.depth+=+1
        ylose.depth=back.depth
        ylose.depth+=+1
        
        
        back.visible=true
        reload.visible=true
        over.visible=true
        ylose.visible=true
        
        
        p3.destroy();
        p4.destroy();
        p5.destroy();
        player.destroy();
        gradas.destroy();
        arbusto.destroy();
        arbusto2.destroy();
        pista13.destroy();
        pista14.destroy();
        meta2.destroy();
          if(keyCode===82){
            Yl.stop();
            gameState="play"
            create();
          }
          
                  
     }

     

    }
    
 
if(gameState==="end"){

  bg.visible=true
  bg.shapeColor="black"

p3.destroy();
p4.destroy();
p5.destroy();
player.destroy();
gradas.destroy();
arbusto.destroy();
arbusto2.destroy();
pista13.destroy();
pista14.destroy();
meta2.destroy();
  
bg.depth=back.depth
bg.depth=Background.depth
bg.depth=bg.depth+1
bg.visible=true

reload.depth=back.depth
reload.depth+=+1

trofeo.depth=back.depth
trofeo.depth+=+1

youwin.depth=back.depth
youwin.depth+=+1
trofeo.visible=true

back.visible=true
reload.visible=true
youwin.visible=true
if(keyCode===82){
  gameState="play"
  create();
}
drawSprites();

}


if(gameState==="end2"){
bg.visible=true
bg.shapeColor="black"
bg.depth=back.depth
bg.depth=Background.depth
bg.depth=bg.depth+1
reload.depth=back.depth
reload.depth+=+1

over.depth=back.depth
over.depth+=+1
ylose.depth=back.depth
ylose.depth+=+1


back.visible=true
reload.visible=true
over.visible=true
ylose.visible=true


p3.destroy();
p4.destroy();
p5.destroy();
player.destroy();
gradas.destroy();
arbusto.destroy();
arbusto2.destroy();
pista13.destroy();
pista14.destroy();
meta2.destroy();
  if(keyCode===82){
    gameState="play"
    create();
  }
  
  drawSprites();
}
/*if(gameState==="end3"){
  Background.shapeColor="green"
  
  
  reload.depth=back.depth
  reload.depth+=+1
  
  over.depth=back.depth
  over.depth+=+1
  ylose.depth=back.depth
  ylose.depth+=+1
  
  
  back.visible=true
  reload.visible=true
  over.visible=true
  ylose.visible=true
  
  
  p3.destroy();
  p4.destroy();
  p5.destroy();
  player.destroy();
  gradas.destroy();
  arbusto.destroy();
  arbusto2.destroy();
  pista13.destroy();
  pista14.destroy();
  meta2.destroy();
    if(keyCode===82){
      gameState="play"
      create();
    }
    
    drawSprites();
  }*/
  

  
    

}
function create(){
  Background=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background.shapeColor="grey"
   ground=createSprite(windowWidth/2+1000,windowHeight/2+93)
   ground.scale=2
   ground.addImage(tierraimg)
    gradas=createSprite(windowWidth/2+400,-1480)
          gradas.addImage(gradasimg)
          gradas.scale=3
          
    
    barrera1=createSprite(0,windowHeight/2,20,windowHeight)
    barrera1.visible=false
    barrera2=createSprite(windowWidth,windowHeight/2,20,windowHeight)
    barrera2.visible=false
    barrera3=createSprite(windowWidth/2,windowHeight,windowWidth,20)
    barrera3.visible=false
    
    esp=createSprite(windowWidth/2-1050,windowHeight/2-100)
    esp.addImage(tierraimg)
    esp.scale=2
    
   
    //numero pista impar lado derecho
    //pistaW=createSprite(windoWidth/2+50,,120)
    pistaW=createSprite(windowWidth/2+200,120,20,550)
    
    pistaW.addImage(pistavertImg)
    pistaW.scale=0.8
   
    
    //  pista.lifetime=500
  pista3=createSprite(windowWidth/2+340,-150,300,20)
  pista3.addImage(limite2)
  pista3.scale=0.7
  
  pista5=createSprite(windowWidth/2+473,-487,20,670)
  pista5.addImage(pistavertImg)
  pista5.scale=0.98
  
  pista7=createSprite(windowWidth/2+279,-815,400,20)
  pista7.addImage(limite2)
  pista7.scale=0.98
  

  pista9=createSprite(windowWidth/2+87,-1055,20,500)
  pista9.addImage(pistavertImg)
  pista9.scale=0.72

  pista11=createSprite(windowWidth/2-50,-1300,280,20)
  pista11.addImage(limite2)
  pista11.scale=0.7
  pista13=createSprite(windowWidth/2-180,-1550,20,350)
  pista13.addImage(pistavertImg)
  pista13.scale=0.72


  //numero pista par lado izquierdo
  pista2=createSprite(windowWidth/2-250,22,20,750)
  pista2.addImage(pistavertImg)
  pista2.scale=1.1
  //430
  verde=createSprite(windowWidth/2-128,-451,400,190)
  verde.addImage(tierraimg)
  verde.scale=0.4
  //pista2.lifetime=500
  pista4=createSprite(windowWidth/2-110,-352,300,20)
  pista4.addImage(limite2)
  pista4.scale=0.72
  
  pista6=createSprite(windowWidth/2+24,-454,20,200)
  pista6.addImage(limite5img)
  pista6.scale=0.55

  pista8=createSprite(windowWidth/2-110,-550,300,20)
  
  pista8.addImage(limite2)
  pista8.scale=0.72

  pista10=createSprite(windowWidth/2-250,-800,20,500)
  pista10.addImage(pistavertImg)
  pista10.scale=0.75
  pista12=createSprite(windowWidth/2-360,-1052,200,20)
  pista12.addImage(limite2)
  pista12.scale=0.55
  

  pista14=createSprite(windowWidth/2-460,-1420,20,620)
  pista14.addImage(pistavertImg)
  pista14.scale=1.05


   meta2=createSprite(windowWidth/2-315,-1800,300,20)
   meta2.addImage(banderaImg)
   meta2.scale=0.45
  
b=createSprite(windowWidth/2-315,-1990,300,20)
b.visible=false

   meta1=createSprite(windowWidth/2,windowHeight-230,500,20)
   meta1.addImage(banderaImg)
   meta1.scale=0.45
 



   fondo=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   fondo.visible=false

   p3=createSprite(windowWidth/2-40,350)
   p3.addImage(p3img)
   p3.scale=0.157
   p3.setCollider("rectangle",0,0,18,10)

    p4=createSprite(windowWidth/2,430)
    p4.addImage(p4img)
    p4.setCollider("rectangle",0,0,18,10)
    p4.scale=0.13
    
   p5=createSprite(windowWidth/2-40,430,20,20)
   p5.addImage(p5img)
   p5.setCollider("rectangle",0,0,18,10)
   p5.scale=0.105

   player=createSprite(windowWidth/2,350)
   player.setCollider("rectangle",0,0,player.width,player.Height)
   player.addImage(playerImg)
   player.scale=0.175

    
  
reload=createSprite(windowWidth/2,windowHeight/2+200)
reload.addImage(reloadimg)
reload.visible=false
back=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
back.visible=false

trofeo=createSprite(windowWidth/2-50,windowHeight/2-120)
trofeo.addImage(trofeoimg)
trofeo.scale=0.5
trofeo.visible=false

youwin=createSprite(windowWidth/2-50,windowHeight/2-80)
youwin.addImage(youwinimg)
youwin.scale=4.5
youwin.visible=false

over=createSprite(windowWidth/2,windowHeight/2-150)
over.addImage(overimg)
over.visible=false
ylose=createSprite(windowWidth/2,windowHeight/2)
ylose.addImage(yloseimg)
ylose.visible=false
model=createSprite(windowWidth/2,windowHeight/2)
model.addImage(playerImg)
model.visible=false
fond=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   sound.play();
   if(player.collide(b)){
    gameState="end"
  }
       if(p3.collide(b)){
         gameState="end2"
       }
}
function playSound(){
  sound.play();

}
function M1play(){
  M1.play();
}

function truet(){
  m.visible=true
     i.visible=true
     f.visible=true
     j.visible=true
     h.visible=true
     l.visible=true
     n.visible=true
  

}

