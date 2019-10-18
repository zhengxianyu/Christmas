$(function () {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  // 星星
  for (let index = 0; index < 100; index++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style = 'left: ' +
        numberRandom(15, 0) +
      'vw; top: ' +
        numberRandom(45, 0) +
      'vh; animation-delay: ' +
        numberRandom(60, 0) +
      's; animation: Wink ' +
        numberRandom(60, 0) +
      's linear infinite;';

    document.getElementById('sky').appendChild(star);
  }

  for (let index = 0; index < 5; index ++) {
    let tape = document.createElement('div');
    tape.className = 'tape';
    tape.style =
      'top: ' +
        (index * 0.5) +
      'vw; left: ' +
        (1 + 0.5 * index) +
      'vw; transform: rotate(' +
        (-31 - index * 25) +
      'deg)';
    let clothes = document.getElementById('clothes');
    clothes.appendChild(tape);
  }
})
