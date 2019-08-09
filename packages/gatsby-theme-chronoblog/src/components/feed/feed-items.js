/** @jsx jsx */
import _ from 'lodash';
import { jsx } from 'theme-ui';

import useFeed from '../../hooks/use-feed';
import Card from './card';

/**
 * @typedef {import('./feed.js').Props} Props
 */

/**
 * @param {Props=} props
 */
export default ({ filter, reject, limit }) => {
  let feedItems = useFeed();

  // filter
  if (filter) feedItems = _.filter(feedItems, filter);
  // reject - the opposite of filter
  if (reject) feedItems = _.reject(feedItems, reject);
  // limit
  if (limit || limit > 0) feedItems = _.take(feedItems, limit);

  return (
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
  );
};
