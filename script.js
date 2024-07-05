const body = document.body;
const box = document.querySelectorAll(".audio")
const btn = document.querySelector(".btn");
const navItems = document.querySelectorAll(".nav-iteam")
//sign in
// Get modal elements
const loginModal = document.getElementById('loginForm');
const signUpModal = document.getElementById('signUpForm');

// Get open modal buttons
const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');

// Get close buttons
const closeLogin = document.getElementById('closeLogin');
const closeSignUp = document.getElementById('closeSignUp');

// Open modals
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

signUpBtn.addEventListener('click', () => {
    signUpModal.style.display = 'block';
});

// Close modals
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeSignUp.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Close modals when clicking outside of the modal
window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = 'none';
    }
});

//signin


btn.addEventListener("click", ()=>{
    body.style.background = "radial-gradient(788px at 0.7% 3.4%, rgb(164, 231, 192) 0%, rgb(255, 255, 255) 90%)";
    for(i=0; i<=box.length; i++){
        let presentBox = box[i]
        presentBox.style.backgroundColor = "#FFF"
        presentBox.style.color = "black"
        presentBox.style.boxShadow = ".1px .1px 14px 0.1px #a19f9f"
        btn.innerHTML = "light"
    }
})

document.getElementById('play-audio').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});


document.getElementById('play-audio').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';
});

document.getElementById('play-audio').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio');
    img.src = "https://tse1.mm.bing.net/th?id=OIP.ArNr41uTJtaxS4wXEe2s4AHaHa&pid=Api&P=0&h=220";
});
//audio2
document.getElementById('play-audio1').addEventListener('click', function() {
    var audio = document.getElementById('audio1');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio1').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio1');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';
});

document.getElementById('play-audio1').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio1');
    img.src = "https://www.naasongs.co/wp-content/uploads/2022/05/Beast-Telugu-2022.jpg";
});

//audio3
document.getElementById('play-audio2').addEventListener('click', function() {
    var audio = document.getElementById('audio2');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio2').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio2');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';
});

document.getElementById('play-audio2').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio2');
    img.src = "https://tse1.mm.bing.net/th?id=OIP.JF_O9-gcrAvTZ-oFuIqoHAAAAA&pid=Api&P=0&h=220";
});
//AUDIO4
document.getElementById('play-audio3').addEventListener('click', function() {
    var audio = document.getElementById('audio3');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio3').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio3');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio3').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio3');
    img.src = "https://i.scdn.co/image/ab67706c0000bebbeaf0a0bf5d524c4f14132104";
});

//audio5
document.getElementById('play-audio4').addEventListener('click', function() {
    var audio = document.getElementById('audio4');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio4').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio4');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio4').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio4');
    img.src = "https://static.qobuz.com/images/covers/za/3x/u60tlylrp3xza_600.jpg";
});

//audio6
document.getElementById('play-audio5').addEventListener('click', function() {
    var audio = document.getElementById('audio5');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio5').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio5');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio5').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio5');
    img.src = "https://i1.wp.com/www.creatopy.com/blog/wp-content/uploads/2019/10/dreamer-1024x1024.jpg";
});

//audio7
document.getElementById('play-audio6').addEventListener('click', function() {
    var audio = document.getElementById('audio6');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio6').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio6');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio6').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio6');
    img.src = "https://media2.bollywoodhungama.in/wp-content/uploads/2017/06/Kedarnath-1.jpg";
});
//audio8
document.getElementById('play-audio7').addEventListener('click', function() {
    var audio = document.getElementById('audio7');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio7').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio7');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio7').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio7');
    img.src = "https://tse1.mm.bing.net/th?id=OIP.VmhNEG4oN7J-9ov4NC8vBAHaE8&pid=Api&P=0&h=220";
});

//audio 9 
document.getElementById('play-audio8').addEventListener('click', function() {
    var audio = document.getElementById('audio8');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio8').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio8');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio8').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio8');
    img.src = "https://i.scdn.co/image/ab67706f00000003721742bfde0b12a2b74d2658";
});
//audio 10 
document.getElementById('play-audio9').addEventListener('click', function() {
    var audio = document.getElementById('audio9');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio9').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio9');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio9').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio9');
    img.src = "https://i.ytimg.com/vi/UaYQRG-CuXI/maxresdefault.jpg";
});
//audio 11
document.getElementById('play-audio10').addEventListener('click', function() {
    var audio = document.getElementById('audio10');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio10').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio10');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio10').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio10');
    img.src = "https://i2.cinestaan.com/image-bank/1500-1500/63001-64000/63892.jpg";
});
//audio11
document.getElementById('play-audio11').addEventListener('click', function() {
    var audio = document.getElementById('audio11');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('play-audio11').addEventListener('mouseover', function() {
    var img = document.getElementById('play-audio11');
    img.src = 'https://media.tenor.com/bVk4KX5znbEAAAAC/graphics-equalizer-colors.gif';

});

document.getElementById('play-audio11').addEventListener('mouseout', function() {
    var img = document.getElementById('play-audio11');
    img.src = "https://tse3.mm.bing.net/th?id=OIP.vFf_xUEyGzlSLGLS65mbLgHaEK&pid=Api&P=0&h=220";

});


