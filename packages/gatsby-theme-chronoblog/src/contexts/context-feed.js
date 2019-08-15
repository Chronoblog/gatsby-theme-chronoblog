import React from 'react';

const FeedContext = React.createContext({
  value: { searchInput: '', tag: '' },
  onChangeSearchInput: () => {},
  onChangeTag: () => {}
});

export default FeedContext;
