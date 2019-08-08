/** @jsx jsx */
import { jsx } from 'theme-ui';

import useFeed from '../../hooks/use-feed';
import Card from './card';

export default () => {
  const feedItems = useFeed();
  return (
    <section>
      <ul
        sx={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}
      >
        {feedItems.map((item) => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
