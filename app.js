import { connectEVM } from "./wallets.js"
import { connectPhantom } from "./phantom.js"

const btn = document.getElementById("connectBtn")
const modal = document.getElementById("walletModal")

btn.onclick = () => {
modal.style.display="flex"
}

document.getElementById("metamask").onclick=connectEVM
document.getElementById("trust").onclick=connectEVM
document.getElementById("coinbase").onclick=connectEVM
document.getElementById("rainbow").onclick=connectEVM
document.getElementById("phantom").onclick=connectPhantom
