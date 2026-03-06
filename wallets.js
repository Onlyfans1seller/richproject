export async function connectEVM(){

if(!window.ethereum){

alert("Open site inside wallet browser")

return

}

const provider=new ethers.providers.Web3Provider(window.ethereum)

await provider.send("eth_requestAccounts",[])

const signer=provider.getSigner()

const address=await signer.getAddress()

const network=await provider.getNetwork()

const balance=await provider.getBalance(address)

document.getElementById("address").innerText="Address: "+address

document.getElementById("network").innerText="Network: "+network.name

document.getElementById("balance").innerText="Balance: "+ethers.utils.formatEther(balance)+" ETH"

}