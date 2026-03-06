import { connectEVM } from "./evm.js"
import { connectPhantom } from "./phantom.js"

const modal = document.getElementById("walletModal")
const btn = document.getElementById("connectBtn")

btn.onclick = () => {
 modal.style.display = "flex"
}

document.getElementById("metamask").onclick = connectEVM
document.getElementById("trust").onclick = connectEVM
document.getElementById("coinbase").onclick = connectEVM
document.getElementById("rainbow").onclick = connectEVM
document.getElementById("phantom").onclick = connectPhantom