import './App.css';
import Header from './Components/Header-component/Header.component';
import Permutation from './Components/Permutation-component/Permutation.component';
import { Component } from 'react';

class App extends Component{

  constructor(){
    super()
    this.state = {
      ans: '',
      showCard: false
    }
  }

  permutation =(n,r)=>{
  
    n = document.getElementById('n').value;
    r = document.getElementById('r').value;
   
    function factorial(num){
      let product = 1;
    for(let i=2; i <= num; i++){
      product *= i;
    }
     return product;
    }
   const ans = factorial(n)/factorial(n-r);

   console.log(ans);

   this.setState(() => {
    return {ans}
  })
   }

  render(){
    const {permutation} = this;
    const {ans, showCard} = this.state

    return (
      <div className="App container-fluid center">
      <Header />

      <Permutation 
      displayPermutation={() => this.setState(() => ({...this.state, showCard: true}))} 
      hidePermutation={() => this.setState(() => ({...this.state, showCard: false}))} 
      permutate={permutation}
      showCard={showCard}
      ans={ans}
      />
      </div>
    );
  }

  
 
}

export default App;
