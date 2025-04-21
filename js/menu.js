const shareButton = document.querySelector("#share__button");
const share = document.querySelector(".share");

shareButton.addEventListener('click', function(event){
    if(share.getAttribute('data-visible') === 'false'){
        event.stopPropagation();
        share.style.display = 'flex';
        share.style.alignItems = 'center';
        share.style.gap = '1rem';
        share.setAttribute('data-visible', 'true');
    }else {
        share.style.display = 'none';
        share.setAttribute('data-visible', 'false');
    }
});