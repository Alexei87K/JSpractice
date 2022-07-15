const modals = () => {
   function bindModal(btnClick, modal, closeBtn){
    let callEngineerbtn = document.querySelector(btnClick);
    let modalEngineer = document.querySelector(modal);
    let modalEngineerClose = document.querySelector(closeBtn);

    
    
    callEngineerbtn.addEventListener('click', (e) => {
       if(e.target){
        e.preventDefault();
       }
        modalEngineer.style.display = 'block';
        document.body.style.overflow = 'hedden'
    });
    modalEngineerClose.addEventListener('click', () => {
        modalEngineer.style.display = 'none';
        document.body.style.overflow = ''
    });

   }

   bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
}

export default modals;