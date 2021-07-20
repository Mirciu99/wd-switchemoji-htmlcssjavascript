const emojiClosed = document.querySelector('.closed');
const emojiGorila = document.querySelector('.gorila');
const emojiTiger = document.querySelector('.tiger');

// add event listener

emojiClosed.addEventListener('click', ()=> {
    if(emojiGorila.classList.contains('gorila'))
{
    emojiGorila.classList.add('active');
    emojiClosed.classList.remove('active');
}
});

emojiGorila.addEventListener('click',()=>{
    if(emojiTiger.classList.contains('tiger'))
    {
        emojiTiger.classList.add('active');
        emojiGorila.classList.remove('active');
    }
})

emojiTiger.addEventListener('click', ()=>{
    if(emojiClosed.classList.contains('closed'))
    {
        emojiClosed.classList.add('active');
        emojiTiger.classList.remove('active');
    }
});

