
let booleano: boolean = true;
let numero: number = 34;
let hex:number = 0xf00d; //0x
let binary: number = 0b1010; //0b
let octal: number = 0o456; //0o
let nombre: string = "peppito";
let apellido: string = 'Perez';
let direccion: string = `Calle del Pez`;
let fullName: string = `Bob bobbington`;
let age: number = 37;
let sentencia: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month`;
let sentencia2: string = "Hello, my name is" + fullName + ". I'll be " + " years old next month";
let cadena: string;

//Arrays
let list:number[] = [1,2,3];
let list2: Array<string> = ["uno","dos","3"];

//Enumeraciones
enum Animals {cat,lion,dog,cow, monkey};
let c: Animals = Animals.cat;
console.log(Animals[3]); //cow
console.log(Animals.monkey); // 4


cadena = "Booleano = " + booleano + "<br> numero = " + numero;
cadena +="<br>Nombre = ("+nombre+"), Apellidos ("+ apellido + ")<br>";
cadena += "Direccion (" + direccion +")<br>";
cadena += "Sentencia= " + sentencia + "<br> sentencia2 " + sentencia2;

cadena += "<br>Array1 = " + list;
cadena += "<br>Array2 = " + list2;

cadena += "<br>c = " + c;
cadena += "<br> Animals[3] = " + Animals[3];
cadena += "<br> Animals.moneky 0 " + Animals.monkey;

document.body.innerHTML = cadena;


let mivar: string | number = "42";
mivar = 34;

type miTipo =  string | number;
let otraVar: miTipo = "Cadena";

