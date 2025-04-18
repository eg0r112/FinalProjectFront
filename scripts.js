let b = 1;
function ooo() {
    const emailInput = document.getElementById('registerEmail');
    // Простейшая валидация email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Введите корректный email.');
    }
}
try {
document.querySelector('#Plus').addEventListener('click', function(){
    const PlMn = document.getElementById('quantityy');
    b = PlMn.value;
    b++;
    PlMn.value = b;
});
document.querySelector('#Minus').addEventListener('click', function(){
    const PlMn = document.getElementById('quantityy');
    b = PlMn.value;
    if(b>1)
    {
    b--;
    }
    PlMn.value = b;
});
} catch{}