class Object
{
    pos;
    scale;
    Window;

    constructor(sizeX, sizeY)
    {
        if(sizeX < 1)
            sizeX = 1;

        if(sizeY < 1)
            sizeY = 1;

        this.width = sizeX;
        this.height = sizeY;
    }

    move(delta)
    {
        this.x += delta.x;
        this.y += delta.y;

        this.Window.render();
    }

   assignWindow(window) { this.window = window; }
}