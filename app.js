const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");

const products = [
    {
      id: 1,
      title: "FAUCET FAILURE",
      price: 60,
      colors: [
        {
          code: "black",
          img: "  ./img/u0138.png",
        },
        {
          code: "white",
          img: "./img/u0001.png",
        },
        {
          code: "peach",
          img: "./img/black0129.png",
        },
      ],
    },
    {
      id: 2,
      title: "SPOOKY",
      price: 50,
      colors: [
        {
          code: "white",
          img: "./img/Design0107.png",
        },
        {
          code: "black",
          img: "",
        },
        {
          code: "peach",
          img: "./img/Design0107.png",
        },
      ],
    },
    {
      id: 3,
      title: "LETS GET SPOOKY",
      price: 45,
      colors: [
        {
          code: "White",
          img: "./img/Final10049.png",
        },
        {
          code: "black",
          img: "./img/Final10049.png",
        },
        {
          code: "peach",
          img: "./img/Final10049.png",
        },
      ],
    },
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
          

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
   
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
    });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


