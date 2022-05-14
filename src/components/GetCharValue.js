import React from 'react';

//atom is used to fetch data from components
//Working of useRecoilState is that we store data in global state and used any time that you want
//useRecoilValue is used to use selector function
import {atom,useRecoilState,selector,useRecoilValue} from 'recoil'; 

function GetCharValue() {
    const [text,setText] = useRecoilState(charAtom); //-->Use useRecoilState and in parameter use atom function name
    return (
        <div>
           <h1>Output of GetCharValue.js</h1>    
            <h2>{text}</h2> {/*-->input textbox we used in CharCount.js here we get just data*/}
             <h2>Total Text Length in InputBox:</h2>
            <h3>{useRecoilValue(charValueSelector)}</h3> {/*-->use useRecoilValue here charValueSelector is selector function name*/}
        </div>
    );
}

//In atom function charAtom and charAtom are just names you use any names
const charAtom = atom({  //-->Use atom here
    key:'charAtom',
    default:0
})

//In selector function charValueSelector are just name use any names
const charValueSelector = selector({  //-->Use selector here
    key:'charValueSelector',
    get:({get})=>{
        const text = get(charAtom) //-->Pass atom function name in get parameter and use text state name
        return text.length  //-->Show text length
    }
})

export default GetCharValue;