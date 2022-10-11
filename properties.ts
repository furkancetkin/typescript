interface Point {
    x: number;
    y: number;
}


interface Vehicle {
    travelTo(point: Point): void;
}


class Taxi implements Vehicle {

    // private color: string;
    // private currentLocation: Point;
    
    constructor(private _location?: Point, private _color?: string){
        // this.currentLocation = _location;
        // this._color = 'Red';
    }

    travelTo(point: Point): void {
        console.log(`taksi x: ${this._location.x} y: ${this._location.y} 'dan x: ${point.x} y: ${point.y} konumuna gidiyor`);
    }

    get location(){
        return this._location;
    }

    set location(value: Point){
        if(value.x < 0 || value.y < 0){
            throw new Error('Koordinat bilgileri negatif olamaz.');
        }
        this._location = value;
    }
}


let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, 'Red');
taxi_1.travelTo({ x: 1, y: 2 })
let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };

let taxi_2: Taxi = new Taxi({ x: 2, y: 5 });
let taxi_3: Taxi = new Taxi();