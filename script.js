let a = 0;
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
document.addEventListener('DOMContentLoaded', function() {
    const currentSrc = localStorage.getItem('username');
    const ussc = localStorage.getItem('ussc');
    const uss = localStorage.getItem('us');
    const imgElement1 = document.getElementById('Tow');
    const txtElement1 = document.getElementById('TOpis');
    const txtElement = document.getElementById('TCena');
    txtElement.textContent = ussc;
    txtElement1.textContent = uss;
    imgElement1.src = currentSrc;
});
document.querySelector('#Avion').addEventListener('click', function(){
    window.location.href = 'index.html';
});

document.querySelector('#V1').addEventListener('click', function(){
        const imgElement = document.getElementById('V1');
        const txtElement = document.getElementById('u1');
        const text = txtElement.textContent;
        localStorage.setItem('us', text);
        const txtElement1 = document.getElementById('b1');
        const text1 = txtElement1.textContent;
        localStorage.setItem('ussc', text1);

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

// Получаем текущую ссылку
const currentSrc = imgElement.src;
localStorage.setItem('username', currentSrc);
window.location.href = 'magazin.html';
});
