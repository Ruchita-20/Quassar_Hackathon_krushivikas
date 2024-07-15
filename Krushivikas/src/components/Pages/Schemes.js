import React from 'react';
import schemesData from '../../data/schemesData';
import SchemeCard from '../../components/SchemeCard';
import Footer from './Footer';

const Schemes = () => {
  return (
    <div>
    <div  className="container m-auto justify-content-center">
      <h1 className='text-center'>Available Schemes</h1><br></br>
      <div className='row justify-content-center'>
        {schemesData.map(scheme => (
          <div className='col-md-4 mb-5' key={scheme.id}>
            <SchemeCard scheme={scheme} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Schemes;