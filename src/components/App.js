import React from 'react';
import FilterList from './FilterItemList';
import ItemsDetail from './ItemListDetails';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <FilterList />
        </div>
        <div className="column eight wide">
          <ItemsDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
