const d = document;
// Date Functions

export function FechaActual() {
  const today = new Date().toISOString().split("T")[0];
  document.querySelector("#fecha").setAttribute("min", today);
  console.log(today);
}

FechaActual();

export function platillos(
  entradaContainer,
  principalContainer,
  postresContainer
) {
  function addDynamicRow(containerSelector, itemClass) {
    const container = d.querySelector(containerSelector);
    console.log(containerSelector);
    container.addEventListener("click", (e) => {
      console.log(itemClass);
      if (e.target.classList.contains(`add-${itemClass}`)) {
        const containerDiv = e.target.closest(`#${itemClass}`);
        const newSelect = containerDiv.querySelector("select").cloneNode(true);
        const div = d.createElement("div");
        div.classList.add("flex", "gap-3", "mb-2");

        // Crear contador dinámico
        const restarButton = d.createElement("button");
        restarButton.textContent = "-";
        restarButton.setAttribute("type", "button");
        restarButton.classList.add(
          `restar-${itemClass}`,
          "border",
          "rounded-full",
          "border-gray-600",
          "p-3",
          "h-6",
          "flex",
          "items-center",
          "justify-center"
        );

        const contador = d.createElement("p");
        contador.textContent = "0";
        contador.classList.add(`contador-${itemClass}`, "w-7", "text-center");

        const sumarButton = d.createElement("button");
        sumarButton.textContent = "+";
        sumarButton.setAttribute("type", "button");
        sumarButton.classList.add(
          `sumar-${itemClass}`,
          "border",
          "rounded-full",
          "border-gray-600",
          "p-3",
          "h-6",
          "flex",
          "items-center",
          "justify-center"
        );

        const removeButton = d.createElement("button");
        removeButton.textContent = "Eliminar";
        removeButton.classList.add(
          `remove-${itemClass}`,
          "bg-red-500",
          "text-white",
          "px-2",
          "py-1",
          "rounded"
        );

        // Agregar elementos al contenedor
        div.appendChild(newSelect);
        div.appendChild(restarButton);
        div.appendChild(contador);
        div.appendChild(sumarButton);
        div.appendChild(removeButton);
        containerDiv.appendChild(div);

        // Agregar funcionalidad a botones de sumar/restar
        sumarButton.addEventListener("click", (e) => {
          e.preventDefault();
          contador.textContent = parseInt(contador.textContent) + 1;
        });

        restarButton.addEventListener("click", (e) => {
          e.preventDefault();
          if (parseInt(contador.textContent) > 0) {
            contador.textContent = parseInt(contador.textContent) - 1;
          }
        });

        // Eliminar fila dinámica
        removeButton.addEventListener("click", () => {
          div.remove();
        });
      }
    });
  }

  // Inicializar contenedores
  addDynamicRow(entradaContainer, "entrada");
  addDynamicRow(principalContainer, "principal");
  addDynamicRow(postresContainer, "postres");
}

export function contadorPlatos(contador, sumar, restar) {
  const $contador = d.querySelector(contador),
    $sumarButton = d.querySelector(sumar),
    $restarButton = d.querySelector(restar);

  $sumarButton.addEventListener("click", (e) => {
    e.preventDefault();
    $contador.textContent = parseInt($contador.textContent) + 1;
  });

  $restarButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (parseInt($contador.textContent) > 0) {
      $contador.textContent = parseInt($contador.textContent) - 1;
    }
  });
}

// ENVIAR FORMULARIO

export function sendForm() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Obtener datos del formulario
    const comensales = formData.get("comensales");
    const fecha = formData.get("fecha");
    const hora =formData.get("hora");
    const platillos =
      formData.getAll("platillos[]").length > 0
        ? formData.getAll("platillos[]").join(",")
        : "Sin platillos";
    const comentarios = formData.get("comentarios");
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const numero = formData.get("numero");
    console.log(formData);
    // Validar número de teléfono
     function validatePhoneNumber(number) {
      // Expresión regular básica para números celulares internacionales
      const regex = /^\+?[1-9]\d{1,14}$/; // Basado en el formato E.164
      return regex.test(number);
    };

    const testNumber = "+1234567890";
    if (validatePhoneNumber(testNumber)) {
      console.log("Número válido");
    } else {
      console.log("Número no válido");
    }

    if (!nombre || !apellido) {
      alert("Por favor completa todos los campos requeridos");
      return;
    }
    // Crear mensaje de WhatsApp
    const mensaje = `Reservas:\n
    Comensales: ${comensales}\n
    Hora:${hora}\n
    Fecha: ${fecha}\n
    Platillos: ${platillos}\n
    Comentarios: ${comentarios}\n
    Datos personales:\n
    Nombre: ${nombre} ${apellido}\n
    Teléfono: ${numero}\n`;

    // Enviar a WhatsApp
    const numeroWhatsApp = "3874402610"; // Cambia este número por el destino
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(linkWhatsApp, "_blank");
  });
}

// VALIDAR NUMERO DE TELEFONO

// Ejemplo de uso