import React from 'react';
import BrandColor from './BrandColor';
class SingleItem extends React.Component{
  
    render(){
        const {item}=this.props;
        return (
            <div className="ui link cards">
       
    <div className="content">
    <div className="header">Product Name: {item.name}</div>
      <div className="meta">
      <a>By:{item.brand}</a>
      </div>
         <BrandColor color={item.Variant} cost={item.Variant[0].cost} colors={item.Variant[0].color}/>
     
    </div>
    </div>
        )
    }
}



export default SingleItem;