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
})
