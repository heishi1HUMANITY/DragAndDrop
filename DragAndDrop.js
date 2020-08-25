class drag_and_drop{
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

const dd_child = document.querySelectorAll('.dd-child');
for(let d of dd_child){
    new drag_and_drop(d).addEvent();
}