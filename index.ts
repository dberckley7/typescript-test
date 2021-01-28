// Boolean
let isValid: boolean = true;

//String
let name: string = 'Alberto'

//etc

//Array 
let numbers: number[] = [12, 5, 7]
let numbers2: Array<number> = [12,5,7]

//tuplas
let place: [string, number] = ['house', 202552]

//Enum
enum Status{
    offLine,
    undefined, 
    online
}
let stat: Status = Status.offLine 
// Console.log(stat)  ---- 2

//Se puede añadir otros valores. 
enum Status2{
    offLine = -1,
    undefined = 0, 
    online= 1
}

let noType: unknown
noType = 32
noType = true

let stringNew: string = "este es un mensaje"
//no se puede hacer
// stringNew = noType

let typeUnknow: any = "este es el mensaje"
stringNew = typeUnknow

//Void
function greet(): void {
    console.log( "hello")
}



