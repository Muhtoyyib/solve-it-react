import React from 'react';
import { Component } from 'react';
import './Permutation.css';

/*const Permutation.component = () => {
  return (
    <div>
      
    </div>
  )
}*/

class Permutation extends Component{

    render(){
    
      const {displayPermutation, hidePermutation, permutate, showCard, ans, nInputValue, handleNinputValue, rInputValue, handleRinputValue} = this.props
        return(
            <div className='row'>

                <div className='col-8 offset-2'>

                 <h2>Permutation</h2> 
                 <br />
                 <p className='text-info'>A permutation is an arrangement in a definite order of several objects taken, some or all at a time, with permutations, every tiny detail matters. It means the order in which elements are arranged is significant.</p>
                 <br />
                 <button className='solve' onClick={displayPermutation}>Solve question</button>
                 <button className='solve mx-1' onClick={hidePermutation}>Hide</button>

                </div>

                {showCard && <div className='jumbotron offset-sm-1 offset-md-2 d-none" id="permSol'>

                 <div className='row'>
                  <div className='col-8'>
                   <h2 className='text-dark'>Permutation</h2>
                   <br />

                   <label htmlFor="n">If n =</label>
                   <input type="text" id="n" placeholder="input n" value={nInputValue} 
                   onChange={(e) => handleNinputValue(e)}
                   />
                   <br />
                   <label htmlFor="r">and r =</label>
                   <input type="text" id="r" placeholder="input r" value={rInputValue} 
                   onChange={(e) => handleRinputValue(e)}/> 

                   <button type="button" className="mt-2 solve" onClick={permutate}>Permute</button>
                  </div>

                  <div className='col-4'>
                  <p>The ans is: <b id="ans" className="text-success">{ans}</b></p>
                  </div>

                 </div>
        
                
                </div>}


            </div> // row div
        )
    }
}

export default Permutation;
