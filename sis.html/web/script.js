/* global index */

function generarRecibo() {
      var reciboHTML = "<h2>Recibo:</h2>";

      // Obtener los productos seleccionados
      var productosSeleccionados = [];
      var totalPrecio = 0;

      var checkboxes = document.getElementsByName("producto");
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          productosSeleccionados.push(checkboxes[i].value);
          totalPrecio += parseFloat(checkboxes[i].getAttribute("data-precio"));
        }
      }

      reciboHTML += "<p>Productos: " + productosSeleccionados.join(", ") + "</p>";
      reciboHTML += "<p>Total a Pagar: $" + totalPrecio.toFixed(2) + "</p>";

      // Obtener el medio de pago seleccionado
      var medioDePago = document.querySelector('input[name="pago"]:checked').value;
      reciboHTML += "<p>Medio de Pago: " + medioDePago + "</p>";

      // Obtener los datos del formulario
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("mail").value;
      var celular = document.getElementById("celular").value;
      var direccion = document.getElementById("direccion").value;
      reciboHTML += "<p>Nombre: " + nombre + "</p>";
      reciboHTML += "<p>Email: " + email + "</p>";
      reciboHTML += "<p>Celular: " + celular + "</p>";
      reciboHTML += "<p>Direccion: " + direccion + "</p>";

      // Codificar el recibo como parámetros de la URL
      var reciboParams = encodeURIComponent(reciboHTML);

      // Redirigir a la página de recibo con los parámetros
      window.location.href = "recibo.html?recibo=" + reciboParams;
    }
