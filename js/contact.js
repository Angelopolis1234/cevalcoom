var btnContact = document.getElementById('btn-action'),
    btnContact1 = document.getElementById('btn-action1'),
    btnContact2 = document.getElementById('btn-action2'),
    btnContact3 = document.getElementById('btn-action3'),
    apear = document.getElementById('popup'),
    btnClose = document.getElementById('close-popup')


btnContact.addEventListener('click', function(){
    apear.classList.add('active');
})
btnContact1.addEventListener('click', function(){
    apear.classList.add('active');
})
btnContact2.addEventListener('click', function(){
    apear.classList.add('active');
})
btnContact3.addEventListener('click', function(){
    apear.classList.add('active');
})

btnClose.addEventListener('click', function(){
    apear.classList.remove('active')
})