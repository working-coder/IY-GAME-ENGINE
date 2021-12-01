const closedShape = { "Rect": "Rectangle", "Tri": "Triangle", "Cir": "Circle" }

class Object
{
    closedShape;
    pos;
    scale;
    Window;

    constructor(sizeX, sizeY, shape = closedShape["Rect"])
    {
        if(sizeX < 1)
            sizeX = 1;

        if(sizeY < 1)
            sizeY = 1;

        this.width = sizeX;
        this.height = sizeY;

        this.closedShape = shape;
    }

    move(delta)
    {
        this.x += delta.x;
        this.y += delta.y;

        this.Window.render();
    }

   assignWindow(window) { this.window = window; }
}