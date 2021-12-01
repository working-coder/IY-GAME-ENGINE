class Canvas
{
    htmlObj;
    ctx;

    constructor(width = 500, height = 500)
    {
        this.htmlObj = document.createElement("canvas");
        document.body.appendChild(this.htmlObj);

        this.htmlObj.setAttribute("width", width);
        this.htmlObj.setAttribute("height", height);

        this.ctx = this.htmlObj.getContext("2d");
    }

    useColor(color = "black") { this.ctx.fillStyle = color; }

    drawLine(...positions)
    {
        if (positions.length < 2)
            return;

        this.ctx.beginPath();

        for (let i = 0; i < positions.length - 1; i++)
        {
            const pos = positions[i];
            const nextPos = positions[i + 1];

            this.ctx.moveTo(pos.x, pos.y);
            this.ctx.lineTo(nextPos.x, nextPos.y);
        }

        this.ctx.stroke();
        this.ctx.closePath();
    }
}