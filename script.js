class Car{
    constructor(model, color, year){
        this.model = model;
        this.color = color;
        this.year = year;
    }
    EngineStart(){                                        
        console.log(`${this.color} ${this.model} ${this.year}  engine started`)   
    }
    EngineStop(){
        console.log(`${this.color} ${this.model} ${this.year}  engine stopped`)   
    }
}

let ns = new Car("Nissan", "Red", 2014);
ns.EngineStart();
ns.EngineStop();

let ms = new Car("Mercedes", "Black", 2012);
ms.EngineStart();
ms.EngineStop();

