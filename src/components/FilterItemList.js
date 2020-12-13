import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions';

class FilterList extends Component {
state={
   uniq:[]
}

 renderList(){
   const arr= this.props.itemsList.map(item=>{
     return item.Variant.map(color=>{
         return color.color;
     })
   });
   const flatArray=Array.prototype.concat.apply([],arr);
   const duplicate=Array.from(new Set(flatArray));
   return duplicate.map(x=>{
     return <div className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectItem(x)}
            >
              Select
            </button>
          </div>
         <div className="content filter"><span style={{backgroundColor:`${x}`}}></span>{x}</div>
        </div>
   })
   
 }

  render() {
  return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { itemsList: state.itemList };
};

export default connect(
  mapStateToProps,
  { selectItem }
)(FilterList);
