import React from 'react';

const FeedContext = React.createContext({
  searchInput: '',
  onChangeSearchInput: () => {}
});

export default FeedContext;
