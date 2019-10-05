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
}