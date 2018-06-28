import React from 'react'
import Header from '../js/components/Header'
import Footer from '../js/components/Footer'
import { Grid, Row, Col, code } from 'react-bootstrap'
import axios from 'axios'
import StoreCell from '../js/components/StoreCell'
import fetch from 'isomorphic-unfetch';

class store extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            DetailView: false,
            StoreList: [],
            SelectIdx : undefined,
        }

        this.GridLayout ={
            minHeight:"700px",
            display : "grid",
            gridTemplateColumns:" 210px 210px 210px",
        }

    }

    static async getInitialProps({ req }) {

        const response = await axios.get('http://localhost:9000/stores/');
        return {
            StoreList: response.data
        }
    }

    CellSelect(idx) {
        this.setState({
            DetailView: !this.state.DetailView,
            SelectIdx : !this.state.DetailView?idx:undefined
        })
    }

    render() {
        const StoreList = this.props.StoreList.map(
            CurrentValue => <StoreCell CellClick={this.CellSelect.bind(this)} data={CurrentValue} />
        
        )
        return (
            <div className="store">
                <Header />
                <div style={this.GridLayout}>
                    {StoreList}
                </div>
                <Footer />
                {this.state.DetailView ? <StoreDetailView data={this.state.SelectIdx}/>: null }
            </div>
        )
    }
}


export default store;
