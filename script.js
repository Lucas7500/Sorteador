function sorteio() {
  const min = parseInt(document.getElementById("min").value)
  const max = parseInt(document.getElementById("max").value)
  const sorteio = Math.floor(Math.random() * (max + 1 - min) + min)

  document.getElementById("result").innerHTML = sorteio
}
