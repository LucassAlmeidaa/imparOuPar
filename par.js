let text = document.getElementById('text')


function clicar(){
   var resp =  window.prompt('Digite o número que gostaria de analisar =)')
   if(resp % 2 == 0){
    text.innerHTML = "Teu numero é como a gente, um belo <strong>PAR</strong>"
   }else{
       text.innerHTML = 'Como não tem piadinha com impar ele só é <strong>ÍMPAR</strong>'
   }
}