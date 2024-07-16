function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerLinks = document.createElement("div");
  footerLinks.classList.add("footer-links");

  const footerCopyright = document.createElement("div");
  footerCopyright.classList.add("footer-copyright");
  footerCopyright.innerHTML = `Made with <i class="fas fa-heart" aria-hidden="true"></i> and <i class="fa-solid fa-mug-hot" aria-hidden="true"></i> by Effendir. <a href="https://unsplash.com/fr/photos/mise-en-place-dun-diner-formel-oCsaxvGCehM" target="_blank" style="font-size: small; padding-left: 10px">Background</a><a href="https://unsplash.com/fr/photos/plat-brun-et-vert-sur-plaque-de-ceramique-blanche-8QRvzJGumSw" target="_blank" style="font-size: small; padding-left: 10px">Food Picture</a>`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/Effendir";
  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab", "fa-github", "fa-xl");
  githubLink.appendChild(githubIcon);
  footerLinks.appendChild(githubLink);

  const linkedInLink = document.createElement("a");
  linkedInLink.href = "https://fr.linkedin.com/in/eug%C3%A8ne-dami-4537442ab";
  const linkedInIcon = document.createElement("i");
  linkedInIcon.classList.add("fab", "fa-linkedin", "fa-xl");
  linkedInLink.appendChild(linkedInIcon);
  footerLinks.appendChild(linkedInLink);

  footer.appendChild(footerLinks);
  footer.appendChild(footerCopyright);

  return footer
}

export default createFooter;
