let numAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
  intentos++;
  let numero = parseInt(document.getElementById("numero").value);
  let mensaje;

  if (numero == numAleatorio) {
    mensaje = "¡Felicidades! Adivinaste el número en " + intentos + " intentos";
    document.getElementById("resultado").style.color = "green";
    document.getElementById("numero").disabled = true;
    alert(mensaje);
  } else if (numero < numAleatorio) {
    mensaje = "El número ingresado es menor al número buscado";
    document.getElementById("resultado").style.color = "red";
    alert(mensaje);
  } else {
    mensaje = "El número ingresado es mayor al número buscado";
    document.getElementById("resultado").style.color = "red";
    alert(mensaje);
  }

  document.getElementById("resultado").innerHTML = mensaje;
  document.getElementById("intentos").innerHTML = "Intentos: " + intentos;

  if (intentos >= 5) {
    mensaje = "¡Lo siento! Has excedido el número máximo de intentos permitidos. El número era: " + numAleatorio;
    document.getElementById("resultado").style.color = "red";
    document.getElementById("numero").disabled = true;
    document.getElementById("intentos").innerHTML = "Intentos: " + intentos + " - Juego terminado";
    alert(mensaje);
  }
}
function mostrarNum() {
   let mensaje = "¡El número correcto es: " + numAleatorio + "!";
   alert(mensaje);}