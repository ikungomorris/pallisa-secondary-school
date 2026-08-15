/* =========================================
   PALLISA SECONDARY SCHOOL
   MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

function toggleMenu() {

    const menu = document.getElementById("main-menu");

    if (menu) {
        menu.classList.toggle("open");
    }

}


/* =========================================
   CURRENT YEAR
   ========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
   ========================================= */

const menuLinks =
    document.querySelectorAll("#main-menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu =
            document.getElementById("main-menu");

        if (menu) {
            menu.classList.remove("open");
        }

    });

});


/* =========================================
   SIMPLE SEARCH FUNCTION
   ========================================= */

function searchWebsite() {

    const searchBox =
        document.getElementById("searchBox");

    if (!searchBox) {
        return;
    }

    const searchText =
        searchBox.value.toLowerCase().trim();

    const items =
        document.querySelectorAll(".search-item");


    items.forEach(function(item) {

        const content =
            item.textContent.toLowerCase();

        if (
            searchText === "" ||
            content.includes(searchText)
        ) {

            item.style.display = "";

        } else {

            item.style.display = "none";

        }

    });

}


/* =========================================
   SEARCH WHEN USER TYPES
   ========================================= */

const searchBox =
    document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener(
        "input",
        searchWebsite
    );

}


/* =========================================
   BACK TO TOP BUTTON
   ========================================= */

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 400) {

            backToTop.style.display =
                "block";

        } else {

            backToTop.style.display =
                "none";

        }

    });


    backToTop.addEventListener(
        "click",
        function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   SIMPLE FORM VALIDATION
   ========================================= */

const forms =
    document.querySelectorAll("form");

forms.forEach(function(form) {

    form.addEventListener(
        "submit",
        function(event) {

            const requiredFields =
                form.querySelectorAll(
                    "[required]"
                );

            let valid = true;


            requiredFields.forEach(
                function(field) {

                    if (
                        field.value.trim() === ""
                    ) {

                        field.style.border =
                            "2px solid #d93025";

                        valid = false;

                    } else {

                        field.style.border =
                            "";

                    }

                }
            );


            if (!valid) {

                event.preventDefault();

                alert(
                    "Please complete all required fields."
                );

            }

        }
    );

});


/* =========================================
   PAGE LOADED MESSAGE
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Pallisa Secondary School website loaded successfully."
        );

    }
);
