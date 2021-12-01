class player
{
    

    x = 10;
    y = 10;
    width = 10;
    height = 10;
    WINDOW = new Window(500,500);
    constructor(sizeX,sizeY,Sprite)
    {
        if(sizeX < 1)
        {
            sizeX = 1;
            
        }
        this.width = sizeX;
        if(sizeY < 1)
        {
            sizeY = 1;
        }
        this.height = sizeY;

    }

    Move(pixelsX,pixelsY) {
        this.x += pixelsX;
        this.y += pixelsY;
        
        return x+y;
    }

   
}