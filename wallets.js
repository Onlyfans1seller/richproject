const DOMAIN = "richproject.vercel.app"

const PROJECT_ID = "a4746ac803fafe7cecb476f789b0230d"


function openWalletModal(){

document.getElementById("walletModal").style.display="flex"

}


function closeModal(){

document.getElementById("walletModal").style.display="none"

}



function setAddress(address){

document.getElementById("walletAddress").innerText=
"Connected: "+address

}



async function connectMetaMask(){

if(!window.ethereum){

window.location.href=
"https://metamask.app.link/dapp/"+DOMAIN

return

}

const provider=new ethers.BrowserProvider(window.ethereum)

await provider.send("eth_requestAccounts",[])

const signer=await provider.getSigner()

const address=await signer.getAddress()

setAddress(address)

}



async function connectPhantom(){

const provider=window.phantom?.solana

if(!provider){

window.location.href=
"https://phantom.app/ul/browse/"+DOMAIN

return

}

const resp=await provider.connect()

setAddress(resp.publicKey.toString())

}



function connectTrust(){

window.location.href=
"https://link.trustwallet.com/open_url?url=https://"+DOMAIN

}



function connectCoinbase(){

window.location.href=
"https://go.cb-w.com/dapp?cb_url=https://"+DOMAIN

}



function connectOKX(){

window.location.href=
"https://www.okx.com/download?deeplink=https://"+DOMAIN

}



async function connectWalletConnect(){

const provider=
await window.EthereumProvider.init({

projectId:PROJECT_ID,

chains:[1],

showQrModal:true

})

await provider.enable()

const ethersProvider=new ethers.BrowserProvider(provider)

const signer=await ethersProvider.getSigner()

const address=await signer.getAddress()

setAddress(address)

}
