//alert("Hello");
//console.log("Hola");

function notafinal() {

    let nota_1 = parseFloat(document.getElementById("nota_1").value);
    let nota_2 = parseFloat(document.getElementById("nota_1").value);
    let nota_3 = parseFloat(document.getElementById("nota_1").value);
    let nota_final = parseFloat(document.getElementById("nota_final").value);
    let nota_trabajo = parseFloat(document.getElementById("nota_trabajo").value);

    let promedio = (nota_1 + nota_2 + nota_3) / 3;
    let nota_def = (promedio * 0.55) + (nota_final * 0.3) + (nota_trabajo * 0.15);

    // Mostrar la calificación final al usuario
    document.getElementById("Resultado").innerHTML = `La nota final es de: ${nota_def.toFixed(2)}`;
}