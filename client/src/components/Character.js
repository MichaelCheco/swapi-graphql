import React from 'react';

const Character = ({info: {name, gender, birth_year, eye_color, mass, skin_color}}) => {
    return ( 
    <div>
        <h1>{name}</h1>
    </div> 
    );
}
 
export default Character;