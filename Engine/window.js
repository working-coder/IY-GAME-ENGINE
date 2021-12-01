class Window
{
    canvas;
    objects = [];
    backgroundColor = "white";

    constructor(width = 500, height = 500, backgroundColor = "white")
    {
        this.canvas = new Canvas(width, height);
        this.canvas.fillRect({x: 0, y: 0}, {width, height});
        this.backgroundColor = backgroundColor;
    }

    changeBackgroundColor(backgroundColor) { this.backgroundColor = backgroundColor; }

    removeObject()
    {

    }

    addObject()
    {

    }

    render()
    {
        // Add rendering code
    }
}