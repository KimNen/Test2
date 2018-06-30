import React from 'react'
import Header from '../js/components/Header'
import Footer from '../js/components/Footer'
import Link from 'next/link';
import axios from 'axios'
import StoreCell from '../js/components/StoreCell'
import Modal from 'react-modal';
import fetch from 'isomorphic-unfetch';

Modal.setAppElement('#modal')

class store extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            DetailView: false,
            StoreList: [],
            SelectIdx: undefined,
        }

        this.GridLayout = {
            minHeight: "700px",
            display: "grid",
            gridTemplateColumns: "210px 210px 210px",
        }

        this.customStyle = {
            webkitTransform: "translate(0.25)"

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
            SelectIdx: idx
        })
    }

    closeModal() {
        this.setState({
            DetailView: !this.state.DetailView,
            SelectIdx: undefined,
        })
    }

    storeUrlButtonClick(url) {
        if (url === undefined) {
            return alert("등록된 주소가 없습니다");
        } else {
            console.log("storeUrlButtonClick", url)
        }
    }

    render() {

        let { DetailView, SelectIdx } = this.state;
        let { StoreList } = this.props;

        const StoreListArr = StoreList.map(
            CurrentValue => <StoreCell key={CurrentValue.id} CellClick={this.CellSelect.bind(this)} data={CurrentValue} />

        )
        return (
            <div className="store">
                <Header />
                <div className="list">
                    <div style={this.GridLayout}>
                        {StoreListArr}
                    </div>
                </div>
                {this.state.DetailView ?
                    <Modal
                        isOpen={this.state.DetailView}
                        onRequestClose={this.closeModal.bind(this)}
                    >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 className="modal-title">
                                    {StoreList[SelectIdx].name}
                                </h4>
                                <button className="close" onClick={this.closeModal.bind(this)}>x</button>

                            </div>
                            <div className="storeImg">
                                <img src={StoreList[SelectIdx].image} />
                            </div>
                            <div className="modal-body">
                                {StoreList[SelectIdx].description}
                            </div>
                            <div className="modal-footer">
                                <a href={StoreList[SelectIdx].url}>
                                    {StoreList[SelectIdx].url !== undefined ?
                                        "가게 홈페이지 보기"
                                        : null}
                                </a>
                            </div>
                        </div>
                    </Modal>
                    : null}
                <Footer />
            </div>
        )
    }
}


export default store;
