import React from 'react';
import { Component } from 'react';
import './Combination.css';

/*const Permutation.component = () => {
  return (
    <div>
      
    </div>
  )
}*/

class Combination extends Component{

    render(){
    
      const {displayCombination, hideCombination, combine, showCombinationCard, nInputCombination,  handleNinputCValue, rInputValueCombination, handleRinputCValue, ansCombination} = this.props
        return(
            <div className='row'>

                <div className='col-8 offset-2'>

                 <h2>Combination</h2> 
                 <br />
                 <p className='text-info'>The combination is a way of selecting elements from a set so that the order of selection doesn’t matter. With the combination, only choosing elements matters. It means the order in which elements are chosen is not essential.</p>
                 <br />
                 <button className='solve' onClick={displayCombination}>Solve question</button>
                 <button className='solve mx-1' onClick={hideCombination}>Hide</button>

                </div>

                {showCombinationCard && <div className='jumbotron offset-sm-1 offset-md-2 d-none" id="permSol'>

                 <div className='row'>
                  <div className='col-8'>
                   <h2 className='text-dark'>Combination</h2>
                   <br />

                   <label htmlFor="n">If n =</label>
                   <input type="text" id="n" placeholder="input n" value={nInputCombination} 
                   onChange={(e) =>  handleNinputCValue(e)}
                   />
                   <br />
                   <label htmlFor="r">and r =</label>
                   <input type="text" id="r" placeholder="input r" value={rInputValueCombination} 
                   onChange={(e) => handleRinputCValue(e)}/> 

                   <button type="button" className="mt-2 ml-2 solve" onClick={combine}>Combine</button>
                  </div>

                  <div className='col-4'>
                  <p>The ans is: <b id="ans" className="text-success">{ansCombination}</b></p>
                  </div>

                 </div>
        
                
                </div>}

                <hr className='mt-4'/>


            </div> // row div
        )
    }
}

export default Combination;
