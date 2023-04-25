class Polygon{
    constructor(sides){
        this.sides=sides;
    }
    get countSides(){
       return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((acc,current) => acc+= current , 0);
    }
}
class Triangle extends polygon{

}

const polygon = new Polygon( [ 5, 5, 5 ] );
const triangle = new Triangle( [ 5, 5, 5 ] )