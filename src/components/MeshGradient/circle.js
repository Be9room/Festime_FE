export default class Circle {
  constructor(x, y, r, dx, dy, lifetime, ctx, primaryColor, secondaryColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.lifetime = lifetime;
    this.birthTime = Date.now();
    this.ctx = ctx;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
  }

  draw() {
    const timePassed = Date.now() - this.birthTime;
    const fraction = timePassed / this.lifetime;
    const scaleFactor = Math.sin(fraction * Math.PI);
    const adjustedRadius = Math.max(this.r * scaleFactor, 0);

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, adjustedRadius, 0, Math.PI * 2);

    const gradient = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, adjustedRadius);
    gradient.addColorStop(0, this.primaryColor);
    gradient.addColorStop(0.5, this.secondaryColor);
    gradient.addColorStop(0.8, "rgba(0, 0, 0, 0)");

    this.ctx.fillStyle = gradient;
    this.ctx.globalCompositeOperation = "xor";
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }

  isExpired() {
    return Date.now() - this.birthTime > this.lifetime + 10;
  }
}
