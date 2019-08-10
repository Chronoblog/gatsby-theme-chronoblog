/** @jsx jsx */
import _ from 'lodash';
import { jsx } from 'theme-ui';

import useFeed from '../../hooks/use-feed';
import Card from './card';

/**
 * @param {string[]=} tagsArray
 * @returns {string}
 */
const tagsToString = (tagsArray) =>
  tagsArray ? tagsArray.toString().toLowerCase() : '';

/**
 * @typedef {import('./feed.js').Props} Props
 */

/**
 * @param {Props=} props
 */
export default ({ search = '', filter, reject, limit }) => {
  let feedItems = useFeed();

  // search
  if (search && search !== '') {
    let searchWords = search;
    searchWords = searchWords.toLowerCase();
    feedItems = feedItems.filter((i) => {
      let result = false;
      result = _.includes(i.frontmatter.title.toLowerCase(), searchWords);
      if (result) return result;
      result = _.includes(tagsToString(i.frontmatter.tags), searchWords);
      if (result) return result;
      return result;
    });
  }
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
