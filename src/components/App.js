import React from 'react';
import Header from './Header';
import Body from './Body';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <div style={{textAlign:"center",color:"white"}}>Made By Satyam</div>
            </div>
        )
    }
}


export default App;