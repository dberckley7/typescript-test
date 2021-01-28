// Boolean
var isValid = true;
//String
var name = 'Alberto';
//etc
//Array 
var numbers = [12, 5, 7];
var numbers2 = [12, 5, 7];
//tuplas
var place = ['house', 202552];
//Enum
var Status;
(function (Status) {
    Status[Status["offLine"] = 0] = "offLine";
    Status[Status["undefined"] = 1] = "undefined";
    Status[Status["online"] = 2] = "online";
})(Status || (Status = {}));
var stat = Status.offLine;
// Console.log(stat)  ---- 2
//Se puede añadir otros valores. 
var Status2;
(function (Status2) {
    Status2[Status2["offLine"] = -1] = "offLine";
    Status2[Status2["undefined"] = 0] = "undefined";
    Status2[Status2["online"] = 1] = "online";
})(Status2 || (Status2 = {}));
var noType;
noType = 32;
noType = true;
var stringNew = "este es un mensaje";
//no se puede hacer
// stringNew = noType
var typeUnknow = "este es el mensaje";
stringNew = typeUnknow;
//Void
function greet() {
    console.log("hello");
}
