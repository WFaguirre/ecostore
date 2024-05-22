import styles from "./style.css";
import logo from "../../../assets/img/logo.png";
import person_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/person_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import search_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/search_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24 from "../../../assets/img/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24.svg";

export async function Blogs() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <div ${styles.cuerpo}> 
    <!-- header  -->
    <header class="${styles.header}" id="head">
      <!--header logo -->
        <div class="${styles.logo}">
          <img src="${logo}" alt="">
        </div>
      <!--header opciones -->
        <nav class="${styles.navigation}">
            <a href="#" class="${styles.active}">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
        </nav>
      <!-- header buscar, carrito y login -->
      <div class="${styles.nav_active}">
        <form action="" method="" class="${styles.search}" >
            <input type="text" name="q" class="${styles.search_input}" id="input_1" placeholder="Buscar...">
            <img src="${search_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
        </form>
        <div class="${styles.icon}" id="carrito">
          <img src="${shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24}"  alt="">
        </div>
        <div class="${styles.icon}" id="user">
          <img src="${person_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
        </div>
      </div>
    </header>
    `;
  let text = document.getElementById("text");
  let header = document.getElementById("head");
  let user = document.getElementById("user");
  let carrito = document.getElementById("carrito");
  let input = document.getElementById("input_1");
  let aboutSection = document.getElementById("about_secion");

  // Calcula la posición vertical de la sección "About Us"
}
