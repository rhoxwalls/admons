export function toogleMenu(buttonNav, ulNav) {
  const d = document;

  const $ButtonNav = d.querySelector(buttonNav);
  const $UlNav = d.querySelector(ulNav);


  if (!$ButtonNav || !$UlNav) {
    console.error("Elementos no encontrados. Verifica los selectores.");
    return;
  }


  $ButtonNav.addEventListener("click", () => {
    function desplegarMenu() {
      if ($UlNav.classList.contains("phone:hidden")) {
        return $UlNav.classList.remove("phone:hidden"), $UlNav.classList.add("flex");
      } else {
        return $UlNav.classList.add("phone:hidden"), $UlNav.classList.remove("flex");
      }
    }
    desplegarMenu();
  });
};
