const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
   let header = document.querySelector(headerSelector);
   let tab = document.querySelectorAll(tabSelector);
   let content = document.querySelectorAll(contentSelector);
   let active = document.querySelector(activeClass);


   

  function hideContent(){
     content.forEach(item => {
        item.style.display = 'none';
     });

     tab.forEach( item => {
       item.classList.remove(active);
     })
  }

  function showContent(i = 0){
    content[i].style.display = "block";
    tab[i].classList.add(active);
}

hideContent();
showContent();

header.addEventListener('click', function(e){
    const target = e.target;
    if(target.classList.contains(tabSelector.replace(/\./, ''))  || 
    target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){
        tab.forEach((item, i) =>{
            if(target == item  || target.parentNode == item){
                hideContent();
                showContent(i);
            }
        })
    }

});

}

export default tabs;