function printNavBar(options, id) {
  let template = "";
  for (const option of options) {
    template =
      template +
      `
      <li class="nav-li">
        <a class="nav-a" href="${option.href}">${option.title}</a>
      </li>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}
function printFooter(options, id) {
  let template = "";
  for (const option of options) {
    template =
      template +
      `
        <ul class="footer-ul">
        <li class="footer-main-item">
          <a class="footer-a" href="./index.html">${option.title}</a>
        </li>
        ${option.refs
          .map(
            (ref) =>
              `<li class="footer-li"><a class="footer-a" href="./index.html">${ref}</a></li>`
          )
          .join("")}
      </ul>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}

document.addEventListener("DOMContentLoaded", async () => {
  const options = await loadLayout();
  printNavBar(options, "nav");
  printFooter(options, "footer");
});

async function loadLayout() {
  try {
    const response = await fetch('./data/options.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.navbar; 
  } catch (error) {
    console.error('ERROR:', error);
    return [];
  }
}
export {loadLayout};