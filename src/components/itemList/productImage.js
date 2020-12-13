import React from 'react';

class ProductIcon extends React.Component{
    render(){
        return(
    <div className="image">
        <span style={{backgroundColor:this.props.colors}}></span>
    </div>
        )
    }
}

export default ProductIcon;