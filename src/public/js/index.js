console.log("%cNodeJS 2023", "font-size:2rem; color:lime;");

const version = 2023

const header = document.getElementById("header_container");
const footer = document.getElementById("footer_container");

header.innerHTML = `
<nav class="nav_container">
  <ul>
    <a href="/"><li>🍷${version}</li></a>
    <a href="/searchsales"><li>🏹</li></a>
    <a href="/sales/separado"><li>🛹Deptors</li></a>
    <a href="/sales"><li>🐾Registered</li></a>
    <a href="/search" class="primario"><li>REGISTER</li></a>
    <a href="/sales/date"><li>🏀Search</li></a>
    <a href="/total"><li>🌈Mounts</li></a>
    <a href="/day"><li>🎭Days</li></a>
    <a href="/products"><li>🏐Code</li></a>
    <a href="/products/stock"><li>🎱Stock</li></a>
    <a href="/products/searchStock"><li>🍑🍌</li></a>
    <a href="/bills"><li>📊</li></a>
    <a href="/bills/add"><li>📠</li></a>
    <a href="/users"><li>🌵</li></a>
  </ul>
</nav>`;

footer.innerHTML = `
  <p class="text1">App para registrar las ventas de <strong>Pinkylin Moda Intima</strong></p>
  <p class="text2">Creada por <strong>@CRKJ</strong> para Pinkylin Moda Intima 😎👍 ${version}</p>
  <p class="tech_text">
    <img src="/img/mysql.svg" />
    <img src="/img/html5.svg" />
    <img src="/img/css3.svg" />
    <img src="/img/javascript.svg" />
    <img src="/img/nodejs.svg" />
  </p>
`;
