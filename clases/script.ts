
function suma(form: any):void{
    let micalculo : Calculo = new Calculo(parseInt(form.n1.value), parseInt(form.n2.value));
    let suma = micalculo.sumar();
    let resultado = "El resultado de la suma de primer numero " + micalculo.getX() + " mas segundo numero " + micalculo.getY() + " es igual a: " + suma; 
    document.getElementById("div").innerHTML = resultado;

    

}

function resta(form: any):void{
    let micalculo : Calculo = new Calculo(parseInt(form.n1.value), parseInt(form.n2.value));
    let resta = micalculo.restar();
    let resultado = "El resultado de la resta de primer numero " + micalculo.getX() + " menos segundo numero " + micalculo.getY() + " es igual a: " + resta; 
    document.getElementById("div").innerHTML = resultado;

    

}