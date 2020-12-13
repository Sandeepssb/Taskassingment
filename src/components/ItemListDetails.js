import React from 'react';
import { connect } from 'react-redux';
import { defaultItem } from '../actions';
import SingleItem from './itemList/singleItem';
class ItemsDetail extends React.Component{
state={
  single:{}
}

  componentDidMount(){
    // this.props.defaultItem();
  }
  renderList(){
  return this.props.defaultItems.map((item)=>{
    return <SingleItem item={item}/>
  })
  }

  render(){
    if(!this.props.defaultItems){
      return <div>Loading</div>
    }
  return <div>{this.renderList()}</div>;
    
  }
}

const mapStateToProps = state => {
  return { item: state.selectedItems,
        defaultItems: state.defaultItem
  };
};

export default connect(mapStateToProps,{defaultItem})(ItemsDetail);
