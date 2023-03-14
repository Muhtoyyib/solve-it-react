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
    

        return(
            <div className='row'>

                <div className='col-8 offset-2'>

                 <h2 className='text-white'>Permutation</h2> 
                 <br />
                 <p className='text-info'>A permutation is an arrangement in a definite order of several objects taken, some or all at a time, with permutations, every tiny detail matters. It means the order in which elements are arranged is significant.</p>
                 <br />
                 <button className='solve' onClick={this.props.displayPermutation}>Solve question</button>
                 <button className='solve mx-1' onClick={this.props.hidePermutation}>Hide</button>

                </div>

                <div className='jumbotron offset-sm-1 offset-md-2 d-none" id="permSol'>

                 <div className='row'>
                  <div className='col-8'>
                   <h2>Permutation</h2>
                   <br />

                   <label htmlFor="n">If n =</label>
                   <input type="text" id="n" placeholder="input n" /><br />
                   <label htmlFor="r">and r =</label>
                   <input type="text" id="r" placeholder="input r" /> 

                   <button type="button" className="mt-2 solve" onClick={this.props.permutate}>Permute</button>
                  </div>

                  <div className='col-4'>
                  <p>The ans is: <b id="ans" className="text-success">{this.props.ans}</b></p>
                  </div>

                 </div>
                
                </div>


            </div> // row div
        )
    }
}

export default Permutation;
