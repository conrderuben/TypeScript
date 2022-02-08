var booleano = true;
var numero = 34;
var hex = 0xf00d; //0x
var binary = 10; //0b
var octal = 302; //0o
var nombre = "peppito";
var apellido = 'Perez';
var direccion = "Calle del Pez";
var fullName = "Bob bobbington";
var age = 37;
var sentencia = "Hello, my name is ".concat(fullName, ". I'll be ").concat(age + 1, " years old next month");
var sentencia2 = "Hello, my name is" + fullName + ". I'll be " + " years old next month";
var cadena;
//Arrays
var list = [1, 2, 3];
var list2 = ["uno", "dos", "3"];
//Enumeraciones
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lion"] = 1] = "lion";
    Animals[Animals["dog"] = 2] = "dog";
    Animals[Animals["cow"] = 3] = "cow";
    Animals[Animals["monkey"] = 4] = "monkey";
})(Animals || (Animals = {}));
;
var c = Animals.cat;
console.log(Animals[3]); //cow
console.log(Animals.monkey); // 4
cadena = "Booleano = " + booleano + "<br> numero = " + numero;
cadena += "<br>Nombre = (" + nombre + "), Apellidos (" + apellido + ")<br>";
cadena += "Direccion (" + direccion + ")<br>";
cadena += "Sentencia= " + sentencia + "<br> sentencia2 " + sentencia2;
cadena += "<br>Array1 = " + list;
cadena += "<br>Array2 = " + list2;
cadena += "<br>c = " + c;
cadena += "<br> Animals[3] = " + Animals[3];
cadena += "<br> Animals.moneky 0 " + Animals.monkey;
document.body.innerHTML = cadena;
