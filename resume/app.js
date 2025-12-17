var skl = document.querySelectorAll('slider .skl');
var next = document.getElementById('next');
var prev = document.getElementById('prev');

var active = 3;
function loadShow(){
    // 1. Calculate the offset to center the 'active' card (index 3)
    // The current active card's position should be 0 translation relative to the main block.
    // The main block needs to shift left to bring the active card into view.
    var shiftAmount = active * 120; // 120px is the base translation used in your logic

    // 2. Loop through all cards and apply the centered position and styling
	var stt = 0;
    
    // Apply initial shift to the active card's element to center the entire group
    // NOTE: This assumes the cards are laid out inline initially, but your CSS uses position:absolute
    // Since your CSS uses position: absolute, we apply the shift relative to the active card
    
    // Reset/Set the active card (index 3) to its centered position
	skl[active].style.transform = 'translateX(0px)';
	skl[active].style.zIndex = 1; 
	skl[active].style.filter = 'none';
	skl[active].style.opacity = 1;

    // Apply translations for cards AFTER the active card (i=4, 5, 6...)
	for(var i = active + 1; i < skl.length; i++){
		stt++;
		skl[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
		skl[i].style.zIndex = -stt; 
		skl[i].style.filter = 'blur(5px)';
		skl[i].style.opacity = stt > 2 ? 0 : 0.6;
	}
    
	stt = 0;
    
    // Apply translations for cards BEFORE the active card (i=2, 1, 0)
	for(var i = active - 1; i>= 0; i--){
		stt++;
		// Correct the X translation for cards on the left side (negative shift)
		skl[i].style.transform = 'translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)'; // Swapped to rotateY(1deg) for visual balance
		skl[i].style.zIndex = -stt; 
		skl[i].style.filter = 'blur(5px)';
		skl[i].style.opacity = stt > 2 ? 0 : 0.6;
	}
}
loadShow();
next.onclick = function(){
	active = active + 1 < skl.length ? active + 1 : active;
	loadShow();
}
prev.onclick = function(){
	active = active - 1 >= 0 ? active - 1 : active;
	loadShow();
}