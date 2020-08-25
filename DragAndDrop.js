class drag_and_drop{
    constructor(child){
        this.child = child;
    }
    
    #drag = e => {
        const pre_top = this.child.offsetTop;
        const pre_left = this.child.offsetLeft;
        this.child.setAttribute('style',`position: absolute; top: ${pre_top + e.movementY}px; left: ${pre_left + e.movementX}px`);
    }
    
    addEvent = () => {
        this.child.addEventListener('mousedown', () => {
            this.child.addEventListener('mousemove', this.#drag);
        });
        this.child.addEventListener('mouseup', () => {
            this.child.removeEventListener('mousemove', this.#drag);
        });
    }
}

const dd_child = document.querySelectorAll('.dd-child');
for(let d of dd_child){
    new drag_and_drop(d).addEvent();
}