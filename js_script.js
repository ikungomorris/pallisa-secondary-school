/* =========================================
   PALLISA SECONDARY SCHOOL
   WEBSITE JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

function toggleMenu() {

    const menu = document.getElementById("main-menu");

    if (menu) {

        menu.classList.toggle("open");

    }

}


/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("main-menu");

    if (menu) {

        const links = menu.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("open");

            });

        });

    }


/* =========================================
   CURRENT YEAR
   ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});


document.addEventListener("DOMContentLoaded", () => {
  const h6 = document.getElementById("animatedText");
  let hue = 0;

  function animate() {
    hue = (hue + 1) % 360;
    h6.style.color = `hsl(${hue}, 100%, 50%)`;
    requestAnimationFrame(animate);
  }

  animate();
});

