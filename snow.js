class Snow{
    constructor(x, y) {
        var options = {
            'friction':1.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.imag = loadImage("blue.png");
        this.imag1 = loadImage("yellow.png");
        this.imag2 = loadImage("sky.png");
        this.imag3 = loadImage("pink.png");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position
        push();
        imageMode(CENTER);

        var img= Math.round(random(1,9))
        switch(img){
        case 1:
        image(this.image, pos.x, pos.y, this.width, this.height);
        
        break;
        case 2:
        image(this.image, pos.x, pos.y, this.width, this.height);
        
        break;
        case 3:
        image(this.image, pos.x, pos.y, this.width, this.height);
        
        break;
        case 4:
        image(this.image, pos.x, pos.y, this.width, this.height);
        break;
        default:break
        }
        pop();
      }
}