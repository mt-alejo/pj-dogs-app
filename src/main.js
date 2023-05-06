const urls = [
  "https://cdn2.thedogapi.com/images/O9aaUjez3.jpg",
  "https://cdn2.thedogapi.com/images/gwZ3amqat.jpg",
  "https://cdn2.thedogapi.com/images/e10KCAlSG.jpg",
  "https://cdn2.thedogapi.com/images/kH2Hf1cLJ.jpg",
  "https://cdn2.thedogapi.com/images/UV2IPnwbV.jpg",
  "https://cdn2.thedogapi.com/images/SJY6N6aVQ.gif",
  "https://cdn2.thedogapi.com/images/TiPvZN92n.jpg",
  "https://cdn2.thedogapi.com/images/iU-rWvOYA.jpg",
  "https://cdn2.thedogapi.com/images/ryzzmgqE7_1280.jpg",
];

const mainImage = document.querySelector("#mainImage");
const secondaryOne = document.querySelector("#secondaryOne");
const secondaryTwo = document.querySelector("#secondaryTwo");
const secondaryThree = document.querySelector("#secondaryThree");

secondaryOne.src = urls[0];
secondaryTwo.src = urls[1];
secondaryThree.src = urls[2];

const updateImgUrl = () => {
  mainImage.src = urls[0];
  secondaryOne.src = urls[1];
  secondaryTwo.src = urls[2];
  secondaryThree.src = urls[3];
  urls.shift();
};
