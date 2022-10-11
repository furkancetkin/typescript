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
    
    constructor(private location?: Point, private color?: string){
        // this.currentLocation = location;
        // this.color = 'Red';
    }

    travelTo(point: Point): void {
        console.log(`taksi x: ${this.location.x} y: ${this.location.y} 'dan x: ${point.x} y: ${point.y} konumuna gidiyor`);
    }
}


let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, 'Red');
taxi_1.travelTo({ x: 1, y: 2 })
// taxi_1.color = 'Red';
// console.log(taxi_1.currentLocation);

let taxi_2: Taxi = new Taxi({ x: 2, y: 5 });
let taxi_3: Taxi = new Taxi();