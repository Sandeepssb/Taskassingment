// Action creator
export const selectItem = item => {
  // Return an action
  return {
    type: 'ITEM_SELECTED',
    payload: item
  };
};

export const defaultItem = item => {
  // Return an action
  return {
    type: 'DEFAULT_ITEM',
    payload: item
  };
};