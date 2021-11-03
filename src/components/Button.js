import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    render() {
        const { handleClick, text, type, isSelected} = this.props
        console.log("props",this.props)
        return (
            <div className="container my-3">
                <button 
                type={type}
                className="btn btn-outline-primary"
                onClick={() => handleClick(text)} 
                >{text}
                </button>
            </div>
        );
    }
}

export default Button;