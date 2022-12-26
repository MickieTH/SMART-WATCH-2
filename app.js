
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
//console.log(d)
  const dCut = String(d).split(" ")
//console.log(dCut)

  let h3 = document.querySelector('#dddmdy').innerHTML = `${dCut[0]} ${dCut[2]} ${dCut[1]} ${dCut[3]}`
  document.querySelector('#time').innerHTML = dCut[4];
}
