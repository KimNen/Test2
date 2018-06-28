import React from 'react'
import Header from '../js/components/Header'
import Footer from '../js/components/Footer'

class store extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <div>
                <h1>store Page</h1>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default store;