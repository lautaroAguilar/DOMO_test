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
    <button class="secondary">Free Consultation -></button>
  </header>
  <button class="hamburger" id="hamburger">&#9776;</button> 
  <main class="hero container">
    <section class="left">
      <div class="top">
        <button class="secondary">Welcome to Businezz X</button>
        <h1>Join us in growing your <span>business</span>.</h1>
      </div>
      
      <div class="bottom">
        <p>Elevate your business with Businezz X, a professional Weblfow template.</p>
        <button class="primary">Contact us</button>
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
`;

document.querySelector(".hamburger").addEventListener("click", function () {
  document.getElementById("header").classList.toggle("show");
  console.log("click hamburguer");
});
