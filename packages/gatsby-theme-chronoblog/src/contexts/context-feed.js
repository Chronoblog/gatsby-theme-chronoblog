import React from 'react';

const FeedContext = React.createContext({
  value: { searchInput: '', tag: '' },
  onChange: () => {}
});

export default FeedContext;
