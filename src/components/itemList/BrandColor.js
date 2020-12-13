import React from 'react';
import ProductIcon from './productImage';
import {connect} from 'react-redux';
import {selectItem} from '../../actions/index';

class BrandColor extends React.Component{
    state={
        cost:null,
        color:null
    }
   renderList(){
       if(this.props.itemSelected==null){
           console.log('true');
            // this.props.selectItem(null);  
           return (
               <>
 <ProductIcon colors={this.state.color||this.props.colors}/>
        <div className="meta">
      <span>Cost:{this.state.cost||this.props.cost}</span>
      </div>
               </>
           )
       }else{
       return this.props.color.map(itm=>{
           if(itm.color==this.props.itemSelected){
                    return  (
               <>
           <ProductIcon colors={itm.color||this.state.color}/>
             <div className="meta">
      <span>Cost:{itm.cost||this.state.cost}</span>
      </div>
           </>
           )
           }
      
       })
    }
   }
reset=()=>{
    return this.props.selectItem(null);
}

render(){
    const {color,colors}=this.props;
    return(
        <>    
       
    {this.renderList()}
         <div className="description">
          {color.map((c)=>{
            return <span style={{backgroundColor:c.color}} onClick={()=>{
                this.setState({cost:c.cost,color:c.color});
                this.reset();
            }
            }></span>
          })}
      </div> 
      </>
    )
}
}


const mapStateToProps=(state)=>{
    return{
        itemSelected:state.selectedItem
    }
}
export default connect(mapStateToProps,{selectItem})(BrandColor);