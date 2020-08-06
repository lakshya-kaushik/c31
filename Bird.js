class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    //empty array to store birds position 
    //array can be store many values at the sames time 
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    // set a cut off for storing the birds position
    if(this.body.velocity.x>10 && this.body.position.x>200){
      //get bird position and store as array of array's [[x][y]]
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
       //draw the smoke image for every position
    for(var i = 0; i<this.trajectory.length; i=i+1){
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
