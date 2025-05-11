document.addEventListener('mousemove', function(e) {
    let bgImages = document.querySelectorAll('.bg');
    
    bgImages.forEach(function(bgImage) {
        const computedStyle = window.getComputedStyle(bgImage);
        const matrix = new DOMMatrix(computedStyle.transform);
        
        const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
        
        const scale = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
        
        const speed = 2;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        bgImage.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${angle}deg) scale(${scale})`;
    });
});
