const textForm = document.querySelector('#message-form');

textForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = document.querySelector('#message');
    const error = document.querySelector('.feedback');
    const printText = document.querySelector('.message-content');

    if(text.value.length>0){
        printText.textContent = text.value;
        text.value='';
    }else{
        error.classList.add('show');
        setTimeout((()=>error.classList.remove('show')),2000);
    }
});