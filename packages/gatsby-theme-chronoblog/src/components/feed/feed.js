/** @jsx jsx */
import _ from 'lodash';
import { jsx } from 'theme-ui';

import useFeed from '../../hooks/use-feed';
import Card from './card';

/**
 * @typedef {object} Props
 * @property {object=} filter all feed items predicate returns truthy for
 * @property {object=} reject items of feed that predicate does not return truthy for
 * @property {number=} limit
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
