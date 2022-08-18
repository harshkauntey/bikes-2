function setup() {
    createCanvas(500, 520);
    background("#F0F6F6");
    noStroke();
  }
  
  function draw() {
    background("#F0F6F6");
    
    //blue row 1
    fill("#34385D");
    rect(mouseX, 45, 520, 11);
    
  //blue row 3
    fill("#34385D");
    rect(mouseX, 480, 500, 12);
    
  //blue column 1
    fill("#34385D");
    rect(26, -mouseY, 13, 520);
  
  //red row 1
    fill("#D91E2D");
    rect(-mouseX, 7, 550, 12);
    
  //yellow row 7
    fill("#FEE800");
    rect(0, 500, 500, 12);
    
  //yellow row 4
    fill("#FEE800");
    rect(0, 321, 550, 12);
  
    //red row 2
    fill("#D91E2D");
    rect(-mouseX, 340, 500, 14);
    
  //yellow column1
    fill("#FEE800");
    rect(6, 0, 13, 520);
    
  //blue row2
    fill("#34385D");
    rect(mouseX, 208, 500, 12);
    
  //red column1
    fill("#D91E2D");
    rect(154, mouseY, 13, 520);
    
  //yellow row 2
    fill("#FEE800");
    rect(0, 114, 500, 11);
  
    //red column2
    fill("#D91E2D");
    rect(460, -mouseY, 13, 520);
    
  //yellow row1
    fill("#FEE800");
    rect(0, 30, 500, 11);
    
  //yellow row3
    fill("#FEE800");
    rect(0, 226, 500, 10);
    
  //yellow column 6
    fill("#FEE800");
    rect(402, 0, 13, 520);
    
  //yellow column 8
    fill("#FEE800");
    rect(480, 0, 11, 520);
    
  //yellow column 7
    fill("#FEE800");
    rect(430, 0, 10, 520);
    
  //yellow column 2
    fill("#FEE800");
    rect(46, 0, 13, 520);
    
  //yellow column 5
    fill("#FEE800");
    rect(355, 0, 13, 520);
    
  //yellow row 5
    fill("#FEE800");
    rect(0, 408, 500, 12);
    
  //yellow row6
    fill("#FEE800");
    rect(0, 441, 500, 12);
  
  //yellow column4
    fill("#FEE800");
    rect(317, 0, 13, 520);
    
  //yellow column3
    fill("#FEE800");
    rect(199, 0, 13, 520);
  
    if (isMouseInside(212, 353, 105, 55)) {
      fill("#D91E2D");
      rect(212, 354, 105, 54);
    }
  
    if (isMouseInside(59, 56, 105, 55)) {
      fill("#34385D");
      rect(59, 56, 95, 58);
    }
  
    if (isMouseInside(167, 354, 32, 54)) {
      fill("#34385D");
      rect(167, 354, 32, 54);
    }
  
    if (isMouseInside(59, 453, 95, 27)) {
      fill("#FEE800");
      rect(59, 453, 95, 27);
    }
    if (isMouseInside(212, 236, 105, 85)) {
      fill("#FEE800");
      rect(212, 236, 105, 85);
    }
  
    if (isMouseInside(59, 236, 95, 85)) {
      fill("#FEE800");
      rect(59, 236, 95, 85);
    }
  
    if (isMouseInside(59, 354, 95, 54)) {
      fill("#D91E2D");
      rect(59, 354, 95, 54);
    }
    if (isMouseInside(167, 56, 32, 58)) {
      fill("#FEE800");
      rect(167, 56, 32, 58);
    }
  
    if (isMouseInside(59, 125, 95, 83)) {
      fill("#D91E2D");
      rect(59, 125, 95, 83);
    }
  
    if (isMouseInside(212, 125, 105, 101)) {
      fill("#34385D");
      rect(212, 125, 105, 101);
    }
    if (isMouseInside(212, 56, 105, 58)) {
      fill("#FEE800");
      rect(212, 56, 105, 58);
    }
    if (isMouseInside(368, 236, 34, 85)) {
      fill("#FEE800");
      rect(368, 236, 34, 85);
    }
    if (isMouseInside(368, 125, 34, 101)) {
      fill("#D91E2D");
      rect(368, 125, 34, 101);
    }
     
    if (isMouseInside(440, 333, 40, 75)) {
      fill("#D91E2D");
      rect(440, 333, 40, 75);
      
       }
  
    if (isMouseInside(368, 333, 34, 75)) {
      fill("#34385D");
      rect(368, 333, 34, 75);
      
       }
    if (isMouseInside(212, 420, 105, 21)) {
      fill("#FEE800");
      rect(212, 420, 105, 21);
    }
    
  
    function isMouseInside(x, y, w, h) {
      if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
      } else {
        return false;
      }
    }
  }
  