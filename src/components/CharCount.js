import React from 'react';

//atom is used to fetch data from components
//Working of useRecoilState is that we store data in global state and used any time that you want
import {atom,useRecoilState} from 'recoil'; 

function CharCount() {
    const [text,setText] = useRecoilState(charAtom); //-->Use useRecoilState and in parameter use atom function name
    return (
        <div>
            <h1>Output of CharCount.js</h1> 
            <input type="text" onChange={(e)=>setText(e.target.value)}/>  {/*-->In charAtom value change which we write in input textbox */}
            {/* <h1>{text}</h1> */}
        </div>
    );
}

//In atom function charAtom and charAtom are just names you use any names
const charAtom = atom({  //-->Use atom here
    key:'charAtom',
    default:0
})



export default CharCount;