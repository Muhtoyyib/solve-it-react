import './App.css';
import Header from './Components/Header-component/Header.component';
import Permutation from './Components/Permutation-component/Permutation.component';
import { Component } from 'react';

class App extends Component{

  constructor(){
    super()
    this.state = {
      ans: '',
      showCard: false,
      nInputValue: '',
      rInputValue: ''
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

    this.setState(() => ({ans: factorial(n) / factorial(n - rInputValue)}))
   }

  render(){
    const {permutation} = this;
    const {ans, showCard, nInputValue, rInputValue} = this.state


    return (
      <div className="App container-fluid center">
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
      />
      </div>
    );
  }

  
 
}

export default App;
