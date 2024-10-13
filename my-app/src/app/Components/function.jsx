import { ethers } from "ethers";
import Link from "next/link";

const rpcURL = "https://api.zilliqa.com";

const provider = new ethers.JsonRpcProvider(rpcURL);

const routerContract = "0x33C6a20D2a605da9Fd1F506ddEd449355f0564fe";

const factoryContract = "0xf42d1058f233329185A36B04B7f96105afa1adD2";

export async function getPrice() {
  const abi = [
    "function getAmountsOut(uint amountIn, address[] memory path) internal view returns (uint[] memory amounts)",
  ];

  const amountIn = ethers.parseEther("1");

  const path = [
    "0x7F70a752E87372f4270F123bba8d86E432C7fC1D",
    "0x94e18aE7dd5eE57B55f30c4B63E2760c09EFb192",
  ];

  const router = new ethers.Contract(routerContract, abi, provider);

  const amounts = await router.getAmountsOut(amountIn, path);
  const price = ethers.formatUnits(amounts[1].toString(), 18);

  return price;
}

export async function getPairs() {
  const factoryABI = [
    "function allPairs(uint) external view returns (address pair)",
    "function allPairsLength() external view returns (uint)",
  ];

  const pairABI = [
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
  ];

  const tokenABI = ["function symbol() external view returns (string)"];

  const factory = new ethers.Contract(factoryContract, factoryABI, provider);

  const pairLength = await factory.allPairsLength();
  const pairsWithSymbols = [];

  for (let i = 0; i < Number(pairLength); i++) {
    const pairAddress = await factory.allPairs(i);
    const pairContract = new ethers.Contract(pairAddress, pairABI, provider);

    const token0Address = await pairContract.token0();
    const token1Address = await pairContract.token1();

    const token0Contract = new ethers.Contract(
      token0Address,
      tokenABI,
      provider
    );
    const token1Contract = new ethers.Contract(
      token1Address,
      tokenABI,
      provider
    );

    let token0Symbol = await token0Contract.symbol();
    let token1Symbol = await token1Contract.symbol();

    if (token0Symbol == "MEOW" || token1Symbol == "MEOW") {
      if (token1Symbol == "WZIL") {
        token1Symbol = "ZIL";
      }
      pairsWithSymbols.push({
        pairAddress,
        token0Symbol,
        token1Symbol,
        token0Address,
        token1Address,
      });
    }
  }
  const mapPairs = pairsWithSymbols.map((pair, index) => {
    return (
      <p    key={index}>
        {pair.token1Symbol == "ZIL" ? (
          <Link
            href={`https://plunderswap.com/swap?outputCurrency=${pair.token0Address}`}
            target="_blank"
         
          >
            <li
       
              className=" list-none underline"
            >{`${pair.token0Symbol} /  ${pair.token1Symbol}`}</li>
          </Link>
        ) : (
          <Link
            href={`https://plunderswap.com/swap?outputCurrency=${pair.token1Address}&inputCurrency=${pair.token0Address}`}
            target="_blank"
            key={index}
          >
            <li
           
              className=" list-none underline"
            >{`${pair.token0Symbol} /  ${pair.token1Symbol}`}</li>
          </Link>
        )}
      </p>
    );
  });

  return mapPairs;
}

export async function getLogs(){

  const latestBlockNumber = await provider.getBlockNumber();
  const fromBlockNumber = BigInt(latestBlockNumber - 100);
  const hexlify = ethers.hexlify(ethers.toQuantity(fromBlockNumber))

  const filter = {
    fromBlock: hexlify,
    toBlock: "latest"
  }
  const logs = await provider.getLogs(filter)

}


export async function getZILprice(){
    const fetchPrice = await fetch("https://api.diadata.org/v1/assetQuotation/Ziliqa/0x0000000000000000000000000000000000000000",{cache: "no-store"});

    let zilPrice = await fetchPrice.json();

    return zilPrice.Price;
    
}