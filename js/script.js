
window.onload = () => {
    
    let windowsPart = document.querySelectorAll('.window div'),
        window      = document.querySelector('.window');
   
    var layers = document.querySelectorAll('.layer');

    function parallax(event){
       windowsPart.forEach(function(layer){
         
            var speed = layer.getAttribute('data-speed');
            layer.style.transform = 'translateX('+ (event.clientX*speed)/1000 +'px)';
            console.log(layer)
            
       });
    }

    document.addEventListener('mousemove', parallax);



    const hourOnesRing = document.querySelector('#hour-ones');
    const minuteTensRing = document.querySelector('#minute-tens');
    const minuteOnesRing = document.querySelector('#minute-ones');
    
    const resetRing = (event) => {
      if (event.target.style.transform === 'rotate(-180deg)') {
        event.target.style.transition = 'none';
        event.target.style.transform = 'rotate(180deg)';
      }
    };
    
    const updateRing = (ring, rotate) => {
      if (ring.style.transition.startsWith('none')) {
        ring.style.transition = null;
      }
    
      if (rotate === 'rotate(180deg)' && ring.style.transform !== 'rotate(180deg)') {
        ring.style.transform = 'rotate(-180deg)';
      } else {
        ring.style.transform = rotate;
      }
    };
    
    hourOnesRing.addEventListener('transitionend', resetRing);
    minuteTensRing.addEventListener('transitionend', resetRing);
    minuteOnesRing.addEventListener('transitionend', resetRing);
    
    const faster = document.querySelector('#faster');
    
    
    
    
    
    
    
    
    
    
    const update = () => {
      const fasterType = document.querySelector('.faster');
      const now = new Date();
      const hours = faster.checked ? now.getMinutes() : now.getHours();
      const minutes = faster.checked ? now.getSeconds() : now.getMinutes();
        
      const hoursTwelves = Math.floor(hours % 12);
      const minuteTens = Math.floor(minutes / 10) + 6 * (hours % 2);
      const minuteOnes = minutes % 10;
    
      updateRing(hourOnesRing, `rotate(${180 - 30 * hoursTwelves}deg)`);
      updateRing(minuteTensRing, `rotate(${180 - 30 * minuteTens}deg)`);
      updateRing(minuteOnesRing, `rotate(${180 - 36 * minuteOnes}deg)`);
      if(faster.checked){
       fasterType.textContent = "Slower!";
        
      }else{
        fasterType.textContent = "Faster!";
      }
    };
    
    update();
    
    hourOnesRing.style.transition = 'none';
    minuteTensRing.style.transition = 'none';
    minuteOnesRing.style.transition = 'none';
    
    setInterval(update, 1000);
    
    // Fix for Firefox and Safari
    if (!navigator.userAgent.includes('Chrome')) {
      document.querySelectorAll('feImage[*|href^="#"]').forEach((feImage) => {
        const href = feImage.getAttribute('xlink:href');
        const svg = `<svg viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg">${document.querySelector(href).outerHTML}</svg>`;
        const dataUri = `data:image/svg+xml;base64,${window.btoa(svg)}`;
        feImage.setAttribute('xlink:href', dataUri);
      });
    }
    var message = document.querySelector('.message h2');
    new TypeIt(message, {
        speed: 50,
        startDelay: 900
      })
      .type('The most versatile animated typing utility on the internte')
      .pause(300)
      .delete(2)
      .pause(250)
      .type('et')
      .pause(750)
      .options({speed: 100, deleteSpeed: 75})
      .delete(8)
      .pause(750)
      .type('<em>planet.</em>')
      .go();

}
