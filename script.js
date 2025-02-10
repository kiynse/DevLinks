function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  //pegar a tag image 
  const img = document.querySelector('#profile img')
  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode add a imagem ligth
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode add a imagem ligth
    alt.setAttribute("alt", "Avatar do Dabi branco")
  } else {
    alt.setAttribute("alt", "Avatar do Dabi preto")
  }
  
  
  //se tiver sem o ligth mode manter a imagem normal
}