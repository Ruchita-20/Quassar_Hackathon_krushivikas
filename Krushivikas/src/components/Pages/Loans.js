import React from 'react';
import loansData from '../../data/loansData';
import LoanCard from '../../components/LoanCard';
import Footer from './Footer';

const Loans = () => {
  return (
    <div>
    <div  className="container m-auto justify-content-center">
      <h1 className='text-center'>Available Loans</h1><br></br>
      <div className='row justify-content-center'>
        {loansData.map(loan => (
          <div className='col-md-4 mb-5' key={loan.id}>
            <LoanCard loan={loan} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Loans;