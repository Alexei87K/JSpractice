import { post } from "jquery";

const form = () => {
   const forms = document.querySelectorAll('form');
   const input = document.querySelectorAll('input');

   let message = {
      load: "Загрузка",
      succes: "Спасибо, данные получены",
      error: "Ошибка, данные не отправленны"
   }


   let postData = async (url, data) => {
      document.querySelector('.status').textContent = message.load;
      let res = await fetch(url, {
        method: "POST",
        body: data
      })

      return await res.text();
   }

   forms.forEach(item => {

        item.addEventListener('submit', (e)=> {
            e.preventDefault();

            let status = document.createElement('div');
            status.classList.add('status');
            item.append(status);

           const formData = new FormData(item);

           postData('assets/server.php', formData)
                  .then(res => {
                    console.log(res);
                  })
        })
   })
    
   

}

export default form;