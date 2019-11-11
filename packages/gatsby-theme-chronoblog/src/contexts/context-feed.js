import React from 'react';

const FeedContext = React.createContext({
  value: { searchInput: '' },
  onChangeSearchInput: () => {}
});

export default FeedContext;
