import React from "react";
class Background extends React.Component{
    render() { 
        return(
            <div className="background">
                {this.props.children} 
            </div>
        )
    }
}
export default Background;



