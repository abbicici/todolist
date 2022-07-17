
import React from 'react';

const ListeDeger = (props) => {
    return(
    <div>
        <div className='kutucuk'>
            <div></div>
            <div>{props.ids+1}. {props.name}</div>
            <button className='duzenlemeci' onClick={props.deletele}>Sil</button>
        </div>
    </div>
    )
    }
export default ListeDeger;