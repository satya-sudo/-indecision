import React,{ useState } from 'react';
import Items from './Items';
import Modal from './Modal';


const Body = () => {

    const [items,addItems]  = useState([]);   
    const [input,setInput] = useState(''); 
    const [modalUse,setModalUse] = useState(false);

    const decideLogic =  () => {
        if (modalUse ){
            const  index  =  Math.floor(Math.random()*(items.length - 0) + 0);
   
            const action = <button className="ui button black" onClick={()=>setModalUse(false)}>Thanks</button>
            const title =  <div className="ui inverted segment " style={{textAlign:"center"}}><h2>we made a decision for you</h2> <div className="ui inverted grey segment"><h1>{items[index]}</h1></div>
            {action}</div>
            return (
                <Modal 
                title={title}
                
                />
            );
        }
        
    }

    const decideBt = () => {
        if (items.length > 0){
            return ( 
                <div className="ui grey inverted segment" style={{textAlign:'center',padding:"15px"}}>
                        <button onClick={()=>setModalUse(true)} className="fluid black ui button">Decide!</button>
                </div>
            );
        } else {
            return null;
        }
    }
    const handleRemoveItem =  name => addItems(items => items.filter(item=> item !== name ));
    return (
        <div className="ui inverted segment">
            <div className="ui container" >
                <div className="ui grey inverted segment">
                    <h2 style={{textAlign:'center',padding:"15px"}}>
                    Add Items to the Decision List.
                    </h2>
                </div>
                <div className="ui grey inverted segment" style={{textAlign:'center',padding:"15px"}}>
                    <div className="ui fluid inverted transparent action input"> 
                        <input type="text" value={input} onChange={e => {setInput(e.target.value);}}/>
                        <button className="ui black button" onClick={e => {input.length !== 0? addItems(items => [...items,input]) :  console.log(items); setInput("");console.log(items) }}>Add</button>
                        {console.log(items)}
                    </div>
                </div>
                <Items items= {items} onRemove={handleRemoveItem} />
                {decideBt()}
                {decideLogic()}
            </div>
        </div> );    
}

export default Body;