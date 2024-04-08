import { ethers } from "ethers";

export async function getPrice(){
    const routerContract = "0x33C6a20D2a605da9Fd1F506ddEd449355f0564fe"

    const rpcURL = "https://evm-api-filters.zilliqa.com/"

    const abi= ['function getAmountsOut(uint amountIn, address[] memory path) internal view returns (uint[] memory amounts)'];

    const provider = new ethers.JsonRpcProvider(rpcURL)

    const amountIn = ethers.parseEther('1');

    const path = ["0x7F70a752E87372f4270F123bba8d86E432C7fC1D","0x94e18aE7dd5eE57B55f30c4B63E2760c09EFb192"];

    const router = new ethers.Contract(routerContract,abi,provider)



    const amounts = await router.getAmountsOut(amountIn, path);
    const price = ethers.formatUnits(amounts[1].toString(), 18);
    console.log(price);

  
    return price;
}


