class game {
    name = null;
    dino = null;
    score = null;
    speed = 10;
    level = 1;
    
    constructor(){
        this.canvas = document.getElementsById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 1000px;
        this.canvas.height = 500px;
    }
    start() {
            alert("Player name is required!!");
    }
}
    