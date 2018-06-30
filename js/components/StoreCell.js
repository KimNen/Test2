import React from 'react'
import '../../style.css'

class StoreCell extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    CellSelect(idx){
        this.props.CellClick(idx);
    }

    render(){
        return(
            <div className="StoreCell"
                onClick={this.CellSelect.bind(this,this.props.data.id-1)}
            >
                <img className="cursorpoint" src={this.props.data.thumb}/>
            </div>
        )
    }
}

export default StoreCell;