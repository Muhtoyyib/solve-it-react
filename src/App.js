import './App.css';
import Header from './Components/Header-component/Header.component';
import Permutation from './Components/Permutation-component/Permutation.component';
import Combination from './Components/Combination-component/Combination.component';
import { Component } from 'react';

class App extends Component{

  constructor(){
    super()
    this.state = {
      ans: '',
      showCard: false,
      showCombinationCard: false,
      nInputValue: '',
      rInputValue: '',
      nInputCombination: '',
      rInputValueCombination: '',
      ansCombination: '',
      pErrorMsg: '',
      cErrorMsg: ''
      
    }
  }

  permutation = () => {
    const {nInputValue: n, rInputValue} = this.state

    function factorial(num){
      let product = 1;

      for(let i=2; i <= num; i++){
        product *= i;
      }
     return product;
    }

    if(!n.trim() || !rInputValue.trim()){
      this.setState(()=>({pErrorMsg: `Please Input values!`}))
    } else{
      this.setState(() => ({ans: factorial(n) / factorial(n - rInputValue)}))
      this.setState(()=>({pErrorMsg: ``}))
    }
    
   }

   combination = () => {
    const {nInputCombination: nC, rInputValueCombination} = this.state

    function factorial(num){
      let product = 1;

      for(let i=2; i <= num; i++){
        product *= i;
      }
     return product;
    }

    const finaN = factorial(nC);
    const finalR = factorial(nC - rInputValueCombination) *factorial(rInputValueCombination);

   if(!nC.trim || !rInputValueCombination.trim()){
    this.setState(()=>({cErrorMsg: `Please Input Values!`}))
   }else{
    this.setState(() => ({ansCombination: finaN / finalR }))
    this.setState(()=>({cErrorMsg: ``}))
   }

   }


  render(){
    const {permutation, combination} = this;
    const {ans, showCard, showCombinationCard, nInputValue, rInputValue, nInputCombination, rInputValueCombination, ansCombination, pErrorMsg, cErrorMsg} = this.state


    return (
      <div className="App container-fluid center bg-image">
      <Header />

      <Permutation 
      displayPermutation={() => this.setState(() => ({...this.state, showCard: true}))} 
      hidePermutation={() => this.setState(() => ({...this.state, showCard: false}))} 
      permutate={permutation}
      showCard={showCard}
      ans={ans}
      nInputValue={nInputValue}
      handleNinputValue={(e) => this.setState(() => ({...this.state, nInputValue: e.target.value}))}
      rInputValue={rInputValue}
      handleRinputValue={(e) => this.setState(() => ({...this.state, rInputValue: e.target.value}))}
      pErrorMsg={pErrorMsg}
      />

      <Combination 
      displayCombination={() => this.setState(() => ({...this.state, showCombinationCard: true}))} 
      hideCombination={() => this.setState(() => ({...this.state, showCombinationCard: false}))} 
      combine={combination}
      showCombinationCard={showCombinationCard}
      nInputCombination={nInputCombination}
      handleNinputCValue={(e) => this.setState(() => ({...this.state, nInputCombination: e.target.value}))}
      rInputValueCombination={rInputValueCombination}
      handleRinputCValue={(e) => this.setState(() => ({...this.state, rInputValueCombination: e.target.value}))}
      ansCombination={ansCombination}
      cErrorMsg={cErrorMsg}
      />
      </div>

      
    );
  }

  
 
}

export default App;
