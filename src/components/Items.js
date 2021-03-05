import React from 'react';

const items = (props) =>{
    console.log(props);
    const  itemsrendered  = props.items.map((item,index) => {
        return (
            <div key={index} className="ui grey clearing inverted segment">
                <h2 class="ui left floated" style={{display:"inlineBlock"}}>{`${index+1}.  ${item}`}</h2>
                <button className="ui right floated black button" style={{display:"inlineBlock",verticalAlign:"top"}} onClick={() =>{props.onRemove(item)}} > remove</button>
            </div>
    );
    });
    return itemsrendered;
}


export default items;