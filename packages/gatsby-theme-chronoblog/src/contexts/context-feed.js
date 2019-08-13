import React from 'react';

const FeedContext = React.createContext({
  value: '',
  onChange: () => {}
});

export default FeedContext;
