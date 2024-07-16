function header(){
  const header = document.querySelector("header");
  const title = "Lily's table";
  header.prepend(title);

  return header;
}

export default header;
