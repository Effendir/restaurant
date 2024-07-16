function contact(){
  const text = document.createElement("p");
  text.innerHTML = `We'd love to hear from you! Whether you have a question, want to reserve a table for a group, or simply want to say hello, feel free to reach out:
  <br>
  <br>
  Email: lilystable@mail.com
  <br>
  Phone: 123-456-7890
  <br>
  Come visit us: 123 rainbow road, NYC
  <br>
  Opening Hours: 9am - 7pm`;
  text.classList.add("content-text");
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(text);
}

export default contact;
