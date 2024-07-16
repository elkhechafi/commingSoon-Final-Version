//big screen variables
let preloading = document.getElementById('preLoading');
let moon = document.getElementById('moon');
let tree = document.getElementById('tree');
let land = document.getElementById('land');
let leftLand = document.getElementById('leftLand');
let rightLand = document.getElementById('rightLand');
let leftTree =  document.getElementById('leftTree');
let house = document.getElementById('house');
//small screen variables
let preLoadingSm = document.getElementById('preLoadingSm');
let houseSm = document.getElementById('houseSm');
let moonSm = document.getElementById('moonSm');
let SmbottomLand = document.getElementById('SmbottomLand');
let SmTopLand = document.getElementById('SmTopLand');
let SmContent = document.getElementById('SmContent');


let viewWidth = document.body.clientWidth;

//position on load based on the screen size of the client

window.addEventListener('load', ()=>{
  window.scrollTo(0, 0);
    setTimeout(() => {
      if(viewWidth > 1536){
        tree.style.right = '0%';
        moon.style.top = '-1%';
        preloading.style.opacity = '0';
        preloading.style.display = 'none';
        preloading.style.height = '-15vh';
        house.style.top = '15%';
      }
      else if(viewWidth > 1200){
        tree.style.right = '0%';
        moon.style.top = '0%';
        preloading.style.opacity = '0';
        preloading.style.display = 'none';
        preloading.style.height = '-15vh';
        house.style.top = '12%';
      }
      else if(viewWidth > 900){
        tree.style.right = '0%';
        moon.style.top = '-5%';
        preloading.style.opacity = '0';
        preloading.style.display = 'none';
        preloading.style.height = '-15vh';
        house.style.top = '13%';
      }
      else if(viewWidth > 600){
        tree.style.right = '0%';
        moon.style.top = '-5%';
        preloading.style.opacity = '0';
        preloading.style.display = 'none';
        preloading.style.height = '-15vh';
        house.style.top = '34vh';
      }
      else if(viewWidth < 600){
        tree.style.right = '0%';
        moon.style.top = '-5%';
        preLoadingSm.style.opacity = '0';
        houseSm.style.top = '42vh';
      }
      else{
        tree.style.right = '0%';
        moon.style.top = '-5%';
        preLoadingSm.style.opacity = '0';
        preLoadingSm.style.display = 'none';
        house.style.top = '13vh';
      }

      }, "1500");
    setTimeout(() => {
      house.style.transition= 'none';
      tree.style.transition= 'none';
      land.style.transition= 'none';
      moon.style.transition= 'none';
      // SmbottomLand.style.transition= 'none';
      // SmTopLand.style.transition= 'none';
      moon.style.top= '0%';
      preLoadingSm.style.display = 'none'; 
      }, "4000");
})






window.addEventListener('scroll', ()=>{
  let value = window.scrollY;

  document.body.style.backgroundSize = 100 + (value*0.05) + '%';
  if(viewWidth > 1536){
    house.style.marginTop = + (value * 0.02) + '%';
    house.style.opacity = 1 - (value * 0.006);
      
    leftTree.style.left = - (value * 0.056) +'%';
    tree.style.right = - (value * 0.006) +'%';
    tree.style.marginTop =  (value * 0.006) +'%';

    leftLand.style.left = -(value * 0.03) + '%';
    rightLand.style.right = -(value * 0.01) + '%';
    land.style.scale =  value*0.002;
    land.style.height =  value*0.002;
    moon.style.top = - ( value * 0.02) + 'vh';

    if (value < 34){
      // moon.style.height = 34 - ( value * 0.02) + 'vh';
      land.style.scale =  'none';  }
    else{
      // moon.style.height = 34 - ( value * 0.02) + 'vh';
      land.style.scale =  1.1;
    }
    land.style.marginBottom = -(value * 0.01) + '%';
  }


  if(viewWidth > 1200){
    house.style.marginTop = + (value * 0.02) + '%';
    house.style.opacity = 1 - (value * 0.006);
      
    leftTree.style.left = - (value * 0.056) +'%';
    tree.style.right = - (value * 0.006) +'%';
    tree.style.marginTop =  (value * 0.006) +'%';

    leftLand.style.left = -(value * 0.03) + '%';
    rightLand.style.right = -(value * 0.01) + '%';
    land.style.scale =  value*0.02;
    land.style.height =  value*0.02;
    moon.style.top =  - ( value * 0.02) + 'vh';

    if (value < 34){
      // moon.style.height = '34vh';
      land.style.scale =  'none';  }
    else{
      // moon.style.height = 35 - ( value * 0.02) + 'vh';
      land.style.scale =  1.1;
    }
    land.style.marginBottom = -(value * 0.01) + '%';
  }


  if(viewWidth > 900){
    house.style.marginTop = + (value * 0.02) + '%';
    house.style.opacity = 1 - (value * 0.006);
      
    leftTree.style.left = - (value * 0.056) +'%';
    tree.style.right = - (value * 0.006) +'%';
    tree.style.marginTop =  (value * 0.006) +'%';

    leftLand.style.left = -(value * 0.03) + '%';
    rightLand.style.right = -(value * 0.01) + '%';
    land.style.scale =  value*0.02;
    land.style.height =  value*0.02;
    moon.style.top = - ( value * 0.02) + 'vh';

    if (value < 34){
      // moon.style.height = 35 - ( value * 0.02) + 'vh';
      // moon.style.top =  value * 0.2 + 'vh';
      land.style.scale =  'none';  }
    else{
      // moon.style.height = 35 - ( value * 0.02) + 'vh';
      land.style.scale =  1.1;
    }
    land.style.marginBottom = -(value * 0.01) + '%';
  }


  if(viewWidth > 600){
    // house.style.marginTop = + (value * 0.02) + '%';
    house.style.opacity = 1 - (value * 0.006);
      
    leftTree.style.left = - (value * 0.056) +'%';
    tree.style.right = - (value * 0.006) +'%';
    tree.style.marginTop =  (value * 0.006) +'%';
    tree.style.marginTop =  (value * 0.006) +'%';

    leftLand.style.left = -(value * 0.03) + '%';
    rightLand.style.right = -(value * 0.01) + '%';
    land.style.scale =  value*0.02;
    land.style.height =  value*0.02;

    if (value < 34){
      // moon.style.height = 35 - ( value * 0.02) + 'vh';
      // moon.style.top =  value * 2 + 'vh';
      land.style.scale =  'none';  }
    else{
      moon.style.height = 51 - ( value * 0.02) + 'vh';
      land.style.scale =  1.1;
    }
    land.style.marginBottom = -(value * 0.01) + '%';
  }


  if(viewWidth > 480){
    // houseSm.style.marginTop = value * 0.2 + '%';
    houseSm.style.opacity = 1 - (value * 0.006);
    moonSm.style.left = (value * 0.2) + '%';



    if (value < 34){
      SmbottomLand.style.opacity = 1 - ( value * 0.5) ;
      SmTopLand.style.opacity =  value * 0.05;  }
    else{
      SmTopLand.style.opacity =  value * 0.05 ;
    }
  }
  if(viewWidth < 480){
    houseSm.style.opacity = 1 - (value * 0.006);
    houseSm.style.marginTop = (value * 0.1) + 'vh';
    
    moonSm.style.left = (value * 0.01) + '%';
    moonSm.style.height = 247 + (value * 0.01) + 'px';
    if (value < 34){
      SmbottomLand.style.opacity = 1 - ( value * 0.5) ;
      SmTopLand.style.opacity =  value * 0.05;  
    }
    else{
      SmTopLand.style.opacity =  value * 0.05 ;
      SmContent.style.zIndex =  300 + value;
    }
    land.style.marginBottom = -(value * 0.01) + '%';
  }



  




} )

