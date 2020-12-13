import { combineReducers } from 'redux';

const ListitemReducer = () => {
  return [
   {
   id: 'PRODUCT_ID_1',
   name: 'Product1', 
   brand: 'Brand1',
   Variant: [{
      type: 'default',
      variationId: 'PRODUCT_ID_1_VAR_ID_0',
      cost: 123,
      color: 'red',
      months: ['November', 'December', 'January']
},
{
      type: 'variation',
      variationId: 'PRODUCT_ID_1_VAR_ID_1',
      cost: 106,
      color: 'orange',
      months: ['November', 'December', 'January']
},
{
      type: 'variation',
      variationId: 'PRODUCT_ID_1_VAR_ID_2',
      cost: 96,
      color: 'green',
      months: ['November', 'December', 'January']
},
{
      type: 'variation',
      variationId: 'PRODUCT_ID_1_VAR_ID_3',
      cost: 151,
      color: 'pink',
      months: ['November', 'December', 'January']
}
  ]
},
 {
   id: 'PRODUCT_ID_2',
   name: 'Product2', 
   brand: 'Brand2',
   Variant: [{
      type: 'default',
      variationId: 'PRODUCT_ID_2_VAR_ID_0',
      cost: 156,
      color: 'orange',
      months: ['November', 'December', 'January']
},
{
      type: 'variation',
      variationId: 'PRODUCT_ID_2_VAR_ID_1',
      cost: 145,
      color: 'red',
      months: ['November', 'December', 'January']
},
{
      type: 'variation',
      variationId: 'PRODUCT_ID_2_VAR_ID_3',
      cost: 185,
      color: 'pink',
      months: ['November', 'December', 'January']
},
{
      type: 'variation',
      variationId: 'PRODUCT_ID_2_VAR_ID_3',
      cost: 165,
      color: 'green',
      months: ['November', 'December', 'January']
},
  ]
}
  ]
};

const selecteditemReducer = (selectedSong = null, action) => {
  if (action.type === 'ITEM_SELECTED') {
    return action.payload;
  }
  
  return selectedSong;
};

const defaultitemReducer=(intialState=ListitemReducer(),action)=>{
  if(action.type==="DEFAULT_ITEM"){
    // let color=[...intialState.Variant.color];
    return {...intialState,color:action.payload}
  }
  return intialState;
}

export default combineReducers({
  itemList: ListitemReducer ,
  selectedItem: selecteditemReducer,
  defaultItem:defaultitemReducer
});
