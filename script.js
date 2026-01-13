<!--Page5 Finalized Script-->

let noClicks = 0;
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const message = document.getElementById('message');

if(yesBtn && noBtn){
  noBtn.addEventListener('click', () => {
    noClicks++;
    yesBtn.style.transform = `scale(${1 + noClicks*0.15})`;
    noBtn.style.transform = `scale(${1 - noClicks*0.1})`;

    if(noClicks === 1) message.textContent = "Try again 😏";
    else if(noClicks === 2) message.textContent = "I thought we were friends 😢";
    else if(noClicks === 3) message.textContent = "Seriously, don't make me sad 😅";
    else if(noClicks === 4) message.textContent = "You're testing me 😤";
    else if(noClicks === 5) message.textContent = "This is your last chance 🤯";
    else if(noClicks >= 6) {
      message.textContent = "Okay fine, the answer is YES 💖";
      noBtn.style.display = 'none';
    }
  });

  yesBtn.addEventListener('click', () => {
    message.textContent = "Yay! 💖 I knew you'd say yes!";
    yesBtn.style.backgroundColor = "#ff1493";
  });
}
