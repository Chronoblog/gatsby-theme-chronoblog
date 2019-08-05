/** @jsx jsx */
import { jsx } from 'theme-ui';

import Card from './card';

export default ({ posts }) => {
  return (
    <ul
      sx={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}
    >
      {posts.map((post) => (
        <li key={post.id}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
};
