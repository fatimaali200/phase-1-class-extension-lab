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
const polygon = new Polygon( [ 5, 5, 5 ] );

class Triangle extends Polygon{
    get isValid(){
     const [a,b,c] =this.sides;
     if( a+b>c && a+c>b && b+c>a){
        return true;}
     return false;
    }

}
const triangle = new Triangle( [ 5, 5, 5 ]);
console.log(triangle.countSides);
console.log(triangle.perimeter);
console.log(triangle.isValid)
   