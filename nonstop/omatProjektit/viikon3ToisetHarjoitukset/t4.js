function arvoKortit() {
  let temp = [];
  for (var i = 0; i < 5; i++) {
    let maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'][Math.floor(Math.random() * 4)]
    let numerot = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'][Math.floor(Math.random() * 14)]
    temp.push(" " + maat + numerot);
  }
  document.getElementById('vastaus').innerHTML = temp;
}
//Valmis toimii!
