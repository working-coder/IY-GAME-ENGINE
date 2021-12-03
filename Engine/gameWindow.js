class GameWindow
{
    canvas;
    objects;
    backgroundColor = "white";

    constructor(width = 500, height = 500, backgroundColor = "white")
    {
        this.canvas = new Canvas(width, height);
        this.backgroundColor = backgroundColor;
        
        this.render();
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
        this.canvas.ctx.fillStyle = this.backgroundColor;
        this.canvas.fillRect({x: 0, y: 0}, {x: 500, y: 500});
    }
}