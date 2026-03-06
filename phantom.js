export async function connectPhantom(){

const provider = window.phantom?.solana

if(!provider){
window.location.href =
"https://phantom.app/ul/browse/https://richproject.vercel.app"
return
}

const resp = await provider.connect()

const address = resp.publicKey.toString()

const conn = new solanaWeb3.Connection(
"https://api.mainnet-beta.solana.com"
)

const balance =
await conn.getBalance(new solanaWeb3.PublicKey(address))

document.getElementById("address").innerText =
"Address: " + address

document.getElementById("network").innerText =
"Network: Solana"

document.getElementById("balance").innerText =
"Balance: " + (balance/1e9).toFixed(4) + " SOL"

}