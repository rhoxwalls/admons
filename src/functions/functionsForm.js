const d = document;

// Date Functions

export function FechaActual() {
  const today = new Date().toISOString().split("T")[0];
  document.querySelector("#fecha").setAttribute("min", today);
  console.log(today);
}

FechaActual();

export function platillos(entradaContainer, principalContainer, postresContainer) {

    function addDynamicRow(containerSelector, itemClass) {

      const container = d.querySelector(containerSelector);
        console.log(containerSelector)
      container.addEventListener("click", (e) => {
          console.log(itemClass)
        if (e.target.classList.contains(`add-${itemClass}`)) {
          const containerDiv = e.target.closest(`#${itemClass}`);
          const newSelect = containerDiv.querySelector("select").cloneNode(true);
          const div = d.createElement("div");
          div.classList.add("flex", "gap-3", "mb-2");
  
          // Crear contador dinámico
          const restarButton = d.createElement("button");
          restarButton.textContent = "-";
          restarButton.setAttribute("type", "button");
          restarButton.classList.add(`restar-${itemClass}`, "border", "rounded-full", "border-gray-600", "p-3", "h-6", "flex", "items-center", "justify-center");
  
          const contador = d.createElement("p");
          contador.textContent = "0";
          contador.classList.add(`contador-${itemClass}`, "w-7", "text-center");
  
          const sumarButton = d.createElement("button");
          sumarButton.textContent = "+";
          sumarButton.setAttribute("type", "button");
          sumarButton.classList.add(`sumar-${itemClass}`, "border", "rounded-full", "border-gray-600", "p-3", "h-6", "flex", "items-center", "justify-center");
  
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


  export function contadorPlatos(contador,sumar, restar){
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