class Canvas
{
    htmlObj;
    ctx;
    width = 500;
    height = 500;

    constructor(width = 500, height = 500)
    {
        this.width = width;
        this.height = height;

        this.htmlObj = document.createElement("canvas");
        document.body.appendChild(this.htmlObj);

        this.htmlObj.setAttribute("width", width);
        this.htmlObj.setAttribute("height", height);

        this.ctx = this.htmlObj.getContext("2d");
    }

    strokeColor(color = "black") { this.ctx.strokeStyle = color; }
    strokeWidth(width = 1) { this.ctx.lineWidth = width; }

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

    strokeRect(pos1, pos2)
    {
        const width = pos2.x - pos1.x;
        const height = pos2.y - pos1.y;

        this.ctx.rect(pos1.x, pos1.y, width, height);
        this.ctx.stroke();
    }

    fillRect(pos1, pos2)
    {
        const width = pos2.x - pos1.x;
        const height = pos2.y - pos1.y;

        this.ctx.rect(pos1.x, pos1.y, width, height);
        this.ctx.fill();
    }
}