import "./style.css";
import logo from "./public/logo.svg";

document.querySelector("#app").innerHTML = `
  <header class="header container" id="header">
    <div class="nav_and_logo">
      <img src="${logo}" alt="Logo">
      <hr>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Pages</li>
          <li>Packages</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
    <button class="secondary">Free Consultation <i class="bi bi-arrow-right"></i></button>
  </header>
  <button class="hamburger" id="hamburger">&#9776;</button> 
  <main class="hero container">
    <section class="left">
      <div class="top">
        <button class="secondary">Welcome to Businezz X</button>
        <h2>Join us in growing your <span>business</span>.</h2>
      </div>
      
      <div class="bottom">
        <p>Elevate your business with Businezz X, a professional Weblfow template.</p>
        <button class="primary">Contact us <i class="bi bi-arrow-right"></i></button>
      </div>
    </section>
    <section class="right">
      <div class="centered">
        <button class="secondary consultation">Book your free consultation</button>
        <h2>Get a free consultation</h2>
        <form>
          <div>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="contact@email.com">
          </div>
          <textarea  placeholder="Please type your message here..."></textarea>
          <button class="secondary" type="submit">Get in touch</button>
        </form>
      </div>
    </section>
  </main>
  <footer class="footer container">
    <div class="footer-content">
      <div class="footer-description">
        <p>Hola, mi nombre es Lautaro Aguilar. Tengo 22 años y soy Desarrollador Frontend.</p>
        <p>Para el desafío de DOMO elegí la 4ta imagen porque me pareció que era la que más elementos tenía, y era un poco más compleja que las demás.</p>
        <p>Creé el proyecto con Vite y comencé a desarrollar el sitio en HTML, CSS y JS. También utilicé Bootstrap para agregar los íconos.</p>
      </div>
      <div class="footer-links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/lautaro-aguilar/" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:lautaroaramisaguilar@gmail.com">
              <i class="bi bi-envelope"></i>
            </a>
          </li>
          <li>
            <a href="tel:+5491122501319">
              <i class="bi bi-telephone"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/lautaroaramis" target="_blank">
              <i class="bi bi-twitter-x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
`;

document.querySelector(".hamburger").addEventListener("click", function () {
  document.getElementById("header").classList.toggle("show");
  console.log("click hamburguer");
});
