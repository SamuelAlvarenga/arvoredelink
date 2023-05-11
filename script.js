function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // subistituir a imagem
  if (html.classList.contains("light")) {
    // set tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "Samuel Alvarenga está de óculos escuro em um parque, com uma construção antiga ao fundo no Rio de Janeiro, o nome do local se chama Parque Laje"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Samuel Alvarenga, sério, usando camisa preta, oculos na cabeça, está em um palco com uma mesa de som Midas M32 ao fundo."
    )
  }
}
