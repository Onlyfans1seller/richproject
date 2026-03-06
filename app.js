const connectBtn = document.getElementById("connectBtn")
const popup = document.getElementById("walletPopup")

connectBtn.onclick = () => {

popup.style.display = "flex"

}

function closePopup(){

popup.style.display = "none"

}

async function connectMetaMask(){

if(window.ethereum){

try{

const accounts = await window.ethereum.request({
method:"eth_requestAccounts"
})

alert("Connected: "+accounts[0])

window.location.href="/"

}catch(e){

alert("Connection rejected")

}

}else{

const dappUrl = encodeURIComponent(
"https://richproject.vercel.app"
)

window.location.href =
`https://metamask.app.link/dapp/${dappUrl}`

}

}

function connectPhantom(){

if(window.solana && window.solana.isPhantom){

window.solana.connect()
.then(res=>{

alert("Connected: "+res.publicKey)

})

}else{

const dapp = encodeURIComponent(
"https://richproject.vercel.app"
)

window.location.href =
`https://phantom.app/ul/browse/${dapp}`

}

}

function connectTrust(){

const dapp =
encodeURIComponent(
"https://richproject.vercel.app"
)

window.location.href =
`https://link.trustwallet.com/open_url?coin_id=60&url=${dapp}`

}

function connectCoinbase(){

const dapp =
encodeURIComponent(
"https://richproject.vercel.app"
)

window.location.href =
`https://go.cb-w.com/dapp?cb_url=${dapp}`

}

function connectWalletConnect(){

alert("WalletConnect integration coming")

}
