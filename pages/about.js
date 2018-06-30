import React from 'react'
import Header from '../js/components/Header'
import Footer from '../js/components/Footer'

class about extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <div className="contents">
                <div className="aboutProject">
                    <br/>
                    사용 기술<br/>
                    Framework : Next.js<br/>
                    Css : bootstrap<br/>
                    ajax : axios<br/>
                    Modal Dialog : react-modal<br/>
                    server : json-server<br/><br/><br/>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
export default about;