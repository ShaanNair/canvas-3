class Data{
    constructor(){
        this.drawing = null;
    }
    saveDrawing(){
        var ref = database.ref('drawing');
        var data={
            name: "shaan",
            drawing :this.drawing
        }
        ref.push(data);
    }
}