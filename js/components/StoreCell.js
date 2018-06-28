import React from 'react'

class StoreCell extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
        console.log("StoreCell constructor",this.props.data)
    }

    render(){
        return(
            <div className="StoreCell">
                <img src={this.props.data.thumb}/>
            </div>
        )
    }
}

export default StoreCell;