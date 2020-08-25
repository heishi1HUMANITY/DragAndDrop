class DragAndDrop{
    constructor(child){
        this.child = child;
    }
    
    #drag = e => this.child.setAttribute('style', `position: absolute; top: ${e.pageY - this.mouseY}px; left: ${e.pageX - this.mouseX}px`);
    
    addEvent = () => {
        this.child.addEventListener('mousedown', e => {
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
            window.addEventListener('mousemove', this.#drag);
        });
        this.child.addEventListener('mouseup', () => window.removeEventListener('mousemove', this.#drag));
    }
}

const ddChild = document.querySelectorAll('.dd-child');
for(let d of ddChild){
    new DragAndDrop(d).addEvent();
}