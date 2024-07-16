function home(){
  const text = document.createElement("p");
  text.innerHTML = "Escape the everyday and find your center at Lily's Table. We're more than just a cafe; we're a haven of calm amidst the city's buzz. Immerse yourself in a space filled with lush greenery, soothing music, and an atmosphere that whispers relaxation. <br><br> Savor delicious coffees, teas, and an array of handcrafted pastries. We use high-quality ingredients to create treats that nourish your body and soul.";
  text.classList.add("content-text");
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(text);
}

export default home;
