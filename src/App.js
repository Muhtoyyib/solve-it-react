import './App.css';
import Header from './Components/Header-component/Header.component';
import Permutation from './Components/Permutation-component/Permutation.component';
import { Component } from 'react';

class App extends Component{

  constructor(){
    super()
    this.state = {
      ans: ''
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


    function displayPermutation(){
      let element = document.getElementById('permSol');
      element.classList.remove('d-none');
    }
  
    function hidePermutation(){
      let element = document.getElementById('permSol');
      element.classList.add('d-none');
    }
  
   
  
  
    return (
      <div className="App container-fluid center">
      <Header />
      <Permutation displayPermutation={displayPermutation} hidePermutation={hidePermutation} permutate={permutation} ans={this.state.ans}/>
      </div>
    );
  }

  
 
}

export default App;
