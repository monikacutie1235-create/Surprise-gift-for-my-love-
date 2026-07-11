let step = 0;

const data = [
{
question:"Aapki kitni girlfriends hain? ❤️",
options:["1","2","3","Bahut saari"],
answer:"1",
gift:"🌹 Rose Gift"
},

{
question:"Aapki girlfriend ka naam kya hai? 💕",
options:["Monika","Muskan","Anjali","Priya"],
answer:"Monika",
gift:"🍫 Chocolate Gift"
},

{
question:"Aapki girlfriend ka birthday kab aata hai? 🎂",
options:["20 July","19 July","21 July","25 July"],
answer:"20 July",
gift:"🧸 Teddy Gift"
},

{
question:"Aapki girlfriend ko aapse kya chahiye? 💖",
options:["Pyaar","Paise","Mobile","Shopping"],
answer:"Pyaar",
gift:"🎂 Cake"
},

{
question:"Aapki girlfriend ka favourite colour kya hai? 🌈",
options:["White & Yellow","Black","Blue","Red"],
answer:"White & Yellow",
gift:"💍 Ring"
},

{
question:"Aapki girlfriend ko sabse zyada kya pasand hai? 😍",
options:["Dance Karna","Cricket","Gaming","Sleeping"],
answer:"Dance Karna",
gift:"💌 Love Letter"
},

{
question:"Aapki girlfriend ka favourite song kaunsa hai? 🎵",
options:["Pink Lips","Tum Hi Ho","Kesariya","Apna Bana Le"],
answer:"Pink Lips",
gift:"🎁 Special Gift"
},

{
question:"Aap apni girlfriend ko kitna pyaar karte ho? ❤️",
options:["Infinite se bhi zyada ❤️","Bahut","Thoda sa","Normal"],
answer:"Infinite se bhi zyada ❤️",
gift:"💖 Final Surprise"
}

];


function nextStep(){

let screen=document.getElementById("screen");

if(step < data.length){

let item=data[step];

let html=`
<h2>${item.question}</h2>
`;

item.options.forEach(option=>{

html+=`
<button class="option" onclick="checkAnswer('${option}')">
${option}
</button>
`;

});

screen.innerHTML=html;

}
else{

screen.innerHTML=`

<div class="gift">💖</div>

<h1>Happy Birthday Kartik My Love 😘❤️</h1>

<p>
I Love You Forever ❤️<br><br>
You are my special person 💕
<br><br>
- Monika 💖
</p>

`;

}

}



function checkAnswer(selected){

let item=data[step];

let screen=document.getElementById("screen");


if(selected===item.answer){

screen.innerHTML=`

<div class="gift">${item.gift}</div>

<h2 class="correct">
🥰 Yay! Bilkul sahi ❤️
</h2>

<p>
Chalo agla surprise dekhte hain ✨
</p>

<button onclick="nextQuestion()">
Next ➜
</button>

`;

}

else{

screen.innerHTML=`

<h2 class="wrong">
😅 Arre Kartik! Ye answer galat hai ❤️
</h2>

<p>
Dobara try karo 😊
</p>

<button onclick="retry()">
Try Again
</button>

`;

}

}



function nextQuestion(){

step++;

nextStep();

}



function retry(){

nextStep();

   }
