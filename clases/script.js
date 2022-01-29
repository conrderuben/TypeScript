function suma(form) {
    var micalculo = new Calculo(parseInt(form.n1.value), parseInt(form.n2.value));
    var suma = micalculo.sumar();
    var resultado = "El resultado de la suma de primer numero " + micalculo.getX() + " mas segundo numero " + micalculo.getY() + " es igual a: " + suma;
    document.getElementById("div").innerHTML = resultado;
}
function resta(form) {
    var micalculo = new Calculo(parseInt(form.n1.value), parseInt(form.n2.value));
    var resta = micalculo.restar();
    var resultado = "El resultado de la resta de primer numero " + micalculo.getX() + " menos segundo numero " + micalculo.getY() + " es igual a: " + resta;
    document.getElementById("div").innerHTML = resultado;
}
