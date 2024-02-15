const rootElement = document.querySelector("#root");
let burgers = [];
let total = 0;

const skeletonComponent = () => `
<header id="myHeader"></header>
<main id="myMain"></main>
<footer id="myFooter"></footer>
`;

const headerComponent = () => `

<div class="logo">
    <p>Burger Land</p>
</div>

<div class="navbars">
    <ul class="navigators">
        <li class="about"><a>About</a></li>
        <li class="menu"><a>Menu</a></li>
        <li class="wish"><a>Make your own</a></li>
    </ul>  
</div>

<div class="h-icons">
    <i class="fa-solid fa-cart-shopping"></i>
</div>
`;

const mainComponent = () => `
<div class="textbox">
    <h1>🍔Welcome to Burger Land!🍔</h1>
    <p>Where every bite is an adventure! Our chefs craft mouthwatering, locally-sourced burgers using only the freshest ingredients. From classic cheeseburgers to gourmet specialties, there's something for everyone. Feeling bold? Try our signature Burger Land Challenge! Whether dining in or ordering online, every burger is a journey of flavor and satisfaction. Welcome to Burger Land: Where Every Bite is an Adventure! 🎉</p>
</div>
<div class="picture">
    <img src="public/images/wallpaper.jpg" alt="burger">
</div>
`;

const footerComponent = () => `<h5>The Team Project</h2>`;

const aboutComponent = (data) => `
<div class="about-text">
    <p>${data}</p>
</div>
`;

const burgersComponent = (data) => `

    <div class="burgercard">
        <div><img src="public/images/classic.jpg" alt="pizza"></div>
        <h2>${data.name}</h2>
        <h4>${data.price}</h4>
        <h2>${data.meat_patty_weight}</h2>
        <p>${data.toppings}</p>
    </div>
`;

const burgerContainerComponent = () => `<div class="burger-container"></div>`;

const cartComponent = () => `
<div class="row">
    <div class="col-25">
        <div class="container">
            <h4>Cart
                <span class="cart-price" style="color:black">
                    <i class="fa fa-shopping-cart"></i>
                </span>
            </h4>
            <div class="cart-container">
            <div class="burger-name"></div>
            <div class="burger-price"></div>
        </div>
        <hr>
        <p>Total 
            <span class="price" style="color:black">
                <b>$0</b>
            </span>
        </p>
    </div>
</div>

<div class="col-75">
    <div class="container">
        
        <form>
            <div class="row">
                <div class="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" required>
                    <label for="email"><i class="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com" required>
                    <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" required>
                    <label for="city"><i class="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="New York" required>

                    <div class="row">
                        <div class="col-50">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY" required>
                        </div>
                        <div class="col-50">
                            <label for="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="10001" required>
                        </div>
                    </div>
                </div>

                </div>
                <button class="btn">Checkout</button>
        </form>
    </div>
</div>
`;

const wishComponent = () => `
    <div id="burgerBuilder">  

        <h2>Choose base:</h2>
        <div class="base">
            <label>
                <input type="radio" name="base" id="tomatoSauce"> Special Burger Land Sauce
            </label>

            <label>
                <input type="radio" name="base" id="bbqSauce"> BBQ Sauce
            </label>

            <label>
                <input type="radio" name="base" id="oliveOil"> Garlic Mayo
            </label>

            <label>
                <input type="radio" name="base" id="pestoSauce"> Pesto Sauce
            </label>

            <label>
                <input type="radio" name="base" id="buffaloSauce"> Buffalo Sauce
            </label>
        </div>

        <h2>Choose toppings:</h2>
        <div  class="toppings">
            <label>
                <input type="checkbox" id="pepperoniCheckbox"> Beef patty
            </label>
            
            <label>
                <input type="checkbox" id="mushroomsCheckbox"> Mushrooms
            </label>
            
            <label>
                <input type="checkbox" id="olivesCheckbox"> Chicken patty
            </label>
            <label>
                <input type="checkbox" id="mozzarellaCheeseCheckbox"> Mozzarella Cheese
            </label>
            <label>
                <input type="checkbox" id="blackOlivesCheckbox"> Cheddar
            </label>
            <label>
                <input type="checkbox" id="freshBasilCheckbox"> Bacon
            </label>
            <label>
                <input type="checkbox" id="bellPeppersCheckbox"> Lettuce
            </label>
            <label>
                <input type="checkbox" id="onionsCheckbox"> Onions
            </label>
            <label>
                <input type="checkbox" id="grilledChickenCheckbox"> Tomato
            </label>
            <label>
                <input type="checkbox" id="redOnionsCheckbox"> Red Onions
            </label>
            <label>
                <input type="checkbox" id="cilantroCheckbox"> Pickles
            </label>
            <label>
                <input type="checkbox" id="hamCheckbox"> Avocado
            </label>
            <label>
                <input type="checkbox" id="pineAppleCheckbox"> Pineapple
            </label>
            <label>
                <input type="checkbox" id="sausageCheckbox"> Sausage
            </label>
            <label>
                <input type="checkbox" id="greenPeppersCheckbox"> Green Peppers
            </label>
            <label>
                <input type="checkbox" id="ricottaCheeseCheckbox"> Ricotta Cheese
            </label>
            <label>
                <input type="checkbox" id="garlicCheckbox"> Fried Egg
            </label>
            <label>
                <input type="checkbox" id="spinachCheckbox"> Spinach
            </label>
            <label>
                <input type="checkbox" id="parmesanCheckbox"> Parmesan
            </label>
            <label>
                <input type="checkbox" id="blueCheeseCheckbox"> Blue Cheese
            </label>
        </div>
        <button class="wish-btn">Send</button>
    </div>
    `;

const burgerNameComponent = (burgerH2) => `<div>${burgerH2}</div>`;

const burgerPriceComponent = (burgerH4) => `<div>$${burgerH4}</div>`;

const burgerTotal = (newTotal) => `<div>$${newTotal}</div>`;

function init() {
  rootElement.insertAdjacentHTML("beforeend", skeletonComponent());

  const headerElement = document.querySelector("#myHeader");
  const mainElement = document.querySelector("#myMain");
  const footerElement = document.querySelector("#myFooter");

  headerElement.insertAdjacentHTML("beforeend", headerComponent());
  mainElement.insertAdjacentHTML("beforeend", mainComponent());
  footerElement.insertAdjacentHTML("beforeend", footerComponent());

  const logoElement = document.querySelector(".logo");
  logoElement.addEventListener("click", () => {
    console.log("clicked");
    window.location = "/";
  });

  const aboutElement = document.querySelector(".about");
  aboutElement.addEventListener("click", () => {
    console.log("clicked");
    fetch("/about")
      .then((res) => res.json())
      .then((data) => (mainElement.innerHTML = aboutComponent(data)));
  });

  const menuElement = document.querySelector(".menu");
  menuElement.addEventListener("click", () => {
    console.log("clicked");
    mainElement.innerHTML = "";
    mainElement.insertAdjacentHTML("beforeend", burgerContainerComponent());
    mainElement.insertAdjacentHTML("beforeend", cartComponent());
    const burgerContainerElement = document.querySelector(".burger-container");
    const burgerNameElement = document.querySelector(".burger-name");
    const burgerPriceElement = document.querySelector(".burger-price");
    const burgerTotalElement = document.querySelector(".price");

    fetch("/burgers")
      .then((res) => res.json())
      .then((data) => {
        burgerData = data.map((burger) => burgersComponent(burger));

        burgerContainerElement.insertAdjacentHTML(
          "beforeend",
          burgerData.join("")
        );

        const burgercardElements = document.querySelectorAll(".burgercard");
        burgercardElements.forEach((burgercardElement) =>
          burgercardElement.addEventListener("click", (event) => {
            const burgercardData = event.target.parentElement;
            const burgerH2 = burgercardData.querySelector("h2").innerText;
            const burgerH4 = Number(
              burgercardData.querySelector("h4").innerText
            );

            burgerNameElement.insertAdjacentHTML(
              "beforeend",
              burgerNameComponent(burgerH2)
            );
            burgerPriceElement.insertAdjacentHTML(
              "beforeend",
              burgerPriceComponent(burgerH4)
            );

            const newTotal = (total += burgerH4);
            burgers.push(burgerH2);
            console.log(burgers);

            burgerTotalElement.innerHTML = burgerTotal(newTotal);

            const newUserFormElement = document.querySelector("form");
            newUserFormElement.addEventListener("submit", async (event) => {
              event.preventDefault();

              const response = await fetch("/burgers", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  burger: {
                    name: burgers,
                  },
                  total: newTotal,
                  name: {
                    full: newUserFormElement.querySelector(
                      'input[name="firstname"]'
                    ).value,
                  },
                  email: newUserFormElement.querySelector('input[name="email"]')
                    .value,
                  shipping: {
                    address: newUserFormElement.querySelector(
                      'input[name="address"]'
                    ).value,
                    city: newUserFormElement.querySelector('input[name="city"]')
                      .value,
                    state: newUserFormElement.querySelector(
                      'input[name="state"]'
                    ).value,
                    zip: newUserFormElement.querySelector('input[name="zip"]')
                      .value,
                  },
                }),
              });

              const newOrder = await response.json();
              console.log(newOrder);
            });
          })
        );
      });
  });

  const wishElement = document.querySelector(".wish");
  wishElement.addEventListener("click", () => {
    mainElement.innerHTML = "";
    mainElement.insertAdjacentHTML("beforeend", wishComponent());
  });
}
init();
