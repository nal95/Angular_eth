import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from "web3-eth-contract";
import { ADDRESSES } from '../../environments/contractCreator'

const contractAbi = require('./PollContract.json');
declare var window: any;


@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  private  contractAddress = ADDRESSES.pollContract;

  constructor() {
    if(window.web3){
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );
      window.ethereum.enable().catch((err) => {
        console.log(err);
      });
    }else{
      console.warn('Metamask not found. Install or enable Metamask .');
    }
  }

  getAccount(): Promise<string>{
    return  this.web3.eth.getAccounts().then((accounts)=>accounts[0] || '');
  }

  async  executeTransaction (fnName: string, ...args: any[]): Promise<void> {
    const acc = await this.getAccount();
    this.contract.methods[fnName](...args).send({ from:acc });
    //this.contract.methods['vote'](0, 20).send({ from:'' });
  }

}
