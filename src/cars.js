import React from 'react';

function Cars(props){
return(
    <div>
    <h1> We deal in {props.brandH}</h1>
    <h1> We deal also in {props.brandT} </h1>
    <h1>We deal also in {props.brandS}</h1>

    </div>
);
}
export default Cars ; 