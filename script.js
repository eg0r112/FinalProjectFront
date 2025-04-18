let a = 0;
let c = 0
function Open() {
    const myElement = document.getElementById('Listings');
    const height = myElement.offsetHeight;
    if(height==641 || height==1091)
    {
    if(a==1)
    {
    document.getElementById('ListingsList2').style.display='none';
    document.getElementById("Listings").style.height="641px";
        a=0;
    }
    else if(a==0)
    {
    document.getElementById('ListingsList2').style.display='flex';
    document.getElementById("Listings").style.height="1091px";
    a=1;
    }
    } else
    {
        if(a==1)
        {
        document.getElementById('ii').style.display='none';
        document.getElementById('ii1').style.display='none';
        document.getElementById('ii2').style.display='none';
        document.getElementById('ii3').style.display='none';
        document.getElementById("Listings").style.height="661px";
            a=0;
        }
        else if(a==0)
        {
        document.getElementById('ii').style.display='block';
        document.getElementById('ii1').style.display='block';
        document.getElementById('ii2').style.display='block';
        document.getElementById('ii3').style.display='block';
        document.getElementById("Listings").style.height="1150px";
        a=1;
        }
    }
}
document.querySelector('#menuuu').addEventListener('click', function(){
    if(c==1)
    {
    document.getElementById('Dop').style.display='none';
        c=0;
    }
    else if(c==0)
    {
    document.getElementById('Dop').style.display='flex';
    c=1;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    try{
    const currentSrc = localStorage.getItem('username');
    const ussc = localStorage.getItem('ussc');
    const uss = localStorage.getItem('us');
    const imgElement1 = document.getElementById('Tow');
    const txtElement1 = document.getElementById('TOpis');
    const txtElement = document.getElementById('TCena');
    txtElement.textContent = ussc;
    txtElement1.textContent = uss;
    imgElement1.src = currentSrc;
} catch{}
});

document.querySelector('#Avion').addEventListener('click', function(){
    window.location.href = 'index.html';
});

function ooo() {
    const emailInput = document.getElementById('registerEmail');
    // Простейшая валидация email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Введите корректный email.');
    }
}

try {
document.querySelector('#V1').addEventListener('click', function(){
        const imgElement = document.getElementById('V1');
        const txtElement = document.getElementById('u1');
        const text = txtElement.textContent;
        localStorage.setItem('us', text);
        const txtElement1 = document.getElementById('b1');
        const text1 = txtElement1.textContent;
        localStorage.setItem('ussc', text1);

        localStorage.setItem("Ch", 1);


        // Получаем текущую ссылку
        const currentSrc = imgElement.src;
        localStorage.setItem('username', currentSrc);
        window.location.href = 'magazin.html';
});
document.querySelector('#V2').addEventListener('click', function(){
    const imgElement = document.getElementById('V2');
    const txtElement = document.getElementById('u2');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b2');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 2);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V3').addEventListener('click', function(){
    const imgElement = document.getElementById('V3');
    const txtElement = document.getElementById('u3');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b3');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 3);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V4').addEventListener('click', function(){
    const imgElement = document.getElementById('V4');
    const txtElement = document.getElementById('u4');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b4');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 4);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V5').addEventListener('click', function(){
    const imgElement = document.getElementById('V5');
    const txtElement = document.getElementById('u5');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b5');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 5);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V6').addEventListener('click', function(){
    const imgElement = document.getElementById('V6');
    const txtElement = document.getElementById('u6');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b6');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 6);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V7').addEventListener('click', function(){
    const imgElement = document.getElementById('V7');
    const txtElement = document.getElementById('u7');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b7');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 7);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V8').addEventListener('click', function(){
    const imgElement = document.getElementById('V8');
    const txtElement = document.getElementById('u8');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b8');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 8);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});

document.querySelector('#V11').addEventListener('click', function(){
    const imgElement = document.getElementById('V11');
    const txtElement = document.getElementById('u11');
    const text = txtElement.textContent;
    localStorage.setItem('us', text);
    const txtElement1 = document.getElementById('b11');
    const text1 = txtElement1.textContent;
    localStorage.setItem('ussc', text1);

    localStorage.setItem("Ch", 1);

    // Получаем текущую ссылку
    const currentSrc = imgElement.src;
    localStorage.setItem('username', currentSrc);
    window.location.href = 'magazin.html';
});
document.querySelector('#V12').addEventListener('click', function(){
const imgElement = document.getElementById('V12');
const txtElement = document.getElementById('u12');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b12');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 2);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
document.querySelector('#V13').addEventListener('click', function(){
const imgElement = document.getElementById('V13');
const txtElement = document.getElementById('u13');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b13');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 3);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
document.querySelector('#V14').addEventListener('click', function(){
const imgElement = document.getElementById('V14');
const txtElement = document.getElementById('u14');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b14');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 4);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
document.querySelector('#V15').addEventListener('click', function(){
const imgElement = document.getElementById('V15');
const txtElement = document.getElementById('u15');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b15');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 5);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
document.querySelector('#V16').addEventListener('click', function(){
const imgElement = document.getElementById('V16');
const txtElement = document.getElementById('u16');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b16');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 6);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
document.querySelector('#V17').addEventListener('click', function(){
const imgElement = document.getElementById('V17');
const txtElement = document.getElementById('u17');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b17');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 7);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
document.querySelector('#V18').addEventListener('click', function(){
const imgElement = document.getElementById('V18');
const txtElement = document.getElementById('u18');
const text = txtElement.textContent;
localStorage.setItem('us', text);
const txtElement1 = document.getElementById('b18');
const text1 = txtElement1.textContent;
localStorage.setItem('ussc', text1);

localStorage.setItem("Ch", 8);

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
}
catch{}
function Buy() {
    const Chh = localStorage.getItem('Ch');
    switch (Chh) {
            case "1":
                const txtElement41 = document.getElementById('quantityy');
                const text41 = txtElement41.value;

                localStorage.setItem("Va1", text41);
            break;
            case "2":
                const txtElement42 = document.getElementById('quantityy');
                const text42 = txtElement42.value;

                localStorage.setItem("Va2", text42);
            break;
            case "3":
                const txtElement43 = document.getElementById('quantityy');
                const text43 = txtElement43.value;

                localStorage.setItem("Va3", text43);
            break;
            case "4":
                const txtElement44 = document.getElementById('quantityy');
                const text44 = txtElement44.value;

                localStorage.setItem("Va4", text44);
            break;
            case "5":
                const txtElement45 = document.getElementById('quantityy');
                const text45 = txtElement45.value;

                localStorage.setItem("Va5", text45);
            break;
            case "6":
                const txtElement46 = document.getElementById('quantityy');
                const text46 = txtElement46.value;

                localStorage.setItem("Va6", text46);
            break;
            case "7":
                const txtElement47 = document.getElementById('quantityy');
                const text47 = txtElement47.value;

                localStorage.setItem("Va7", text47);
            break;
            case "8":
                const txtElement48 = document.getElementById('quantityy');
                const text48 = txtElement48.value;

                localStorage.setItem("Va8", text48);
            break;
        default:
            break;
    }
}
try{
    document.querySelector('#korzin').addEventListener('click', function(){
        window.location.href = 'korzina.html';
    });
}catch{}
try{
    document.addEventListener('DOMContentLoaded', function() {
        const Vaa1 = parseInt(localStorage.getItem('Va1'), 10);
        const Vaa2 = parseInt(localStorage.getItem('Va2'), 10);
        const Vaa3 = parseInt(localStorage.getItem('Va3'), 10);
        const Vaa4 = parseInt(localStorage.getItem('Va4'), 10);
        const Vaa5 = parseInt(localStorage.getItem('Va5'), 10);
        const Vaa6 = parseInt(localStorage.getItem('Va6'), 10);
        const Vaa7 = parseInt(localStorage.getItem('Va7'), 10);
        const Vaa8 = parseInt(localStorage.getItem('Va8'), 10);
        // localStorage.removeItem('Va1');
        // localStorage.removeItem('Va2');
        // localStorage.removeItem('Va3');
        // localStorage.removeItem('Va4');
        // localStorage.removeItem('Va5');
        // localStorage.removeItem('Va6');
        // localStorage.removeItem('Va7');
        // localStorage.removeItem('Va8');
        if(Vaa1>0)
        {
            document.getElementById('Ob1').style.display='block';
            document.getElementById('C1').textContent = Vaa1.toString();
        }
        if(Vaa2>0)
        {
            document.getElementById('Ob2').style.display='block';
            document.getElementById('C2').textContent = Vaa2.toString();
        }
        if(Vaa3>0)
        {
            document.getElementById('Ob3').style.display='block';
            document.getElementById('C3').textContent = Vaa3.toString();
        }
        if(Vaa4>0)
        {
            document.getElementById('Ob4').style.display='block';
            document.getElementById('C4').textContent = Vaa4.toString();
        }
        if(Vaa5>0)
        {
            document.getElementById('Ob5').style.display='block';
            document.getElementById('C5').textContent = Vaa5.toString();
        }
        if(Vaa6>0)
        {
            document.getElementById('Ob6').style.display='block';
            document.getElementById('C6').textContent = Vaa6.toString();
        }
        if(Vaa7>0)
        {
            document.getElementById('Ob7').style.display='block';
            document.getElementById('C7').textContent = Vaa7.toString();
        }
        if(Vaa8>0)
        {
            document.getElementById('Ob8').style.display='block';
            document.getElementById('C8').textContent = Vaa8.toString();
        }
    });
}catch{}