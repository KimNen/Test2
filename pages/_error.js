import React from 'react'
import Router from 'next/router';

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    componentDidMount() {
        this.errorPageTimeOut();
    }

    errorPageTimeOut() {
        setTimeout(function () {
            Router.push('/')
        }, 5000)
    }

    render() {
        return (
            <div className="ErrorText">
                {this.props.statusCode
                    ? `An error ${this.props.statusCode} occurred on server`
                    : 'An error occurred on client'}
                    <br/>
                5초뒤 메인페이지로 이동합니다
          </div>
        )
    }
}