import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { Wallet, Provider } from '../hooks/useWallet'


const ERC20ABI = require('../abi/ERC20.json')

const getContract = (
  provider: Provider,
  address: string,
) => {
  const web3 = new Web3(provider)
  const abi: AbiItem = ERC20ABI.abi
  return new web3.eth.Contract(abi, address)
}

const getDecimals = async (
  provider: Provider,
  tokenAddress: string,
) => {
  if (!provider) throw new Error('getDecimals called with a null provider')

  const contract = getContract(provider, tokenAddress)
  const decimals = await contract.methods.decimals().call()
  return decimals
}

const fetchBalance = async(
  wallet: Wallet,
  tokenAddress: string,
) => {
  const { ethereum, account } = wallet
  if (!(ethereum || account)) return -1

  const contract = getContract(ethereum, tokenAddress)
  const decimals = await getDecimals(ethereum, tokenAddress)

  try {
    const balance = await contract.methods.balanceOf(account).call()
    return Number((balance / (Math.pow(10, decimals))).toFixed(3))
  } catch(e) {
    console.warn('Got error trying to fetch balance for ' + tokenAddress)
    return 0
  }
}

const fetchTotalSupply = async(
  provider: Provider,
  tokenAddress: string,
) => {
  if (!provider) return -1

  const contract = getContract(provider, tokenAddress)
  const decimals = await getDecimals(provider, tokenAddress)

  try {
    const totalSupply = await contract.methods.totalSupply().call()
    return Number(totalSupply) / Math.pow(10, decimals)
  } catch(e) {
    return 0
  }
}

export const ERC20Util = {
  getContract,
  fetchBalance,
  fetchTotalSupply,
}
