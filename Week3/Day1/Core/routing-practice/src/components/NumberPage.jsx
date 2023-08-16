import React from 'react';
import { useParams } from 'react-router-dom';

const NumberPage = (props) => {
    const{NumberPage}=useParams()
    const {bc}=useParams();
    const{color}=useParams();
    if(isNaN(NumberPage)){
        return(
            <div style={{backgroundColor: bc , color:color}}>
            <h4>
                the word is :{NumberPage}
            </h4>
        </div>
        )
    }
  return (
    <div>
        <h4>the number is :{NumberPage}</h4>
    </div>
  )
}

export default NumberPage;