// Scroll chat to bottom
async function claim(){

const btn =
document.getElementById("btn");

const msg =
document.getElementById("msg");

btn.disabled=true;

btn.innerHTML=
"⏳ Processing...";

msg.innerText="";

const email=
document
.getElementById("email")
.value
.trim();

const wallet=
document
.getElementById("wallet")
.value
.trim();

if(!email || !wallet){

msg.innerText=
"Fill all fields";

btn.disabled=false;

btn.innerHTML=
"Claim Tokens";

return;

}

try{

const response=

await fetch(

"https://syntrix-airdrop-1-1.onrender.com/claim",

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify({

email,
wallet

})

}

);

const data=
await response.json();

msg.innerText=

data.message ||
data.error;

}

catch(err){

msg.innerText=

err.message;

}

btn.disabled=false;

btn.innerHTML=
"Claim Tokens";

}
