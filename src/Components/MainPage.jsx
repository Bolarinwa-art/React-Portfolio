import React from "react";

class MainPage extends React.Component {
    render () {
        return (
        <div className="MainPage"> 
            {this.props.children}
        </div>
        )
    }
}
export default MainPage;