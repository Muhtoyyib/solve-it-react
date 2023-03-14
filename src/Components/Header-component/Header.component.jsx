import React from 'react';
import { Component } from 'react';
import './Header.css';

/* const Header = () => {
  return (
    <div className='mt-5'>
        
           <div className='row'>
             <div className='col'>
             <h1 class="text-center text-white">Do you know what is <strong>Permutation </strong> and <strong>Combination</strong>?</h1>
             <hr className='mt-4'/>
             </div>
           </div>
        
        </div>
  )
} */

class Header extends Component{
    render(){
        return(
        <div className='mt-5'>

           <div className='row'>
             <div className='col'>
             <h1 class="text-center text-white">Do you know what is <strong>Permutation </strong> and <strong>Combination</strong>?</h1>
             <hr className='mt-4'/>
             </div>
           </div>
        
        </div>
        
        )
    }
} 

export default Header;
