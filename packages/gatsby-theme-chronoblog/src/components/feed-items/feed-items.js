/** @jsx jsx */
import _ from 'lodash';
import { useContext } from 'react';
import { jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';
import useFeed from '../../hooks/use-feed';
import Card from './card';

/**
 * @param {string[]=} tagsArray
 * @returns {string}
 */
const tagsToString = (tagsArray) =>
  tagsArray ? tagsArray.toString().toLowerCase() : '';

const filterSearchSymbols = (input, symbolsToSearch) => {
  let result = false;
  const sToSearch = symbolsToSearch.toLowerCase();
  result = _.includes(input.frontmatter.title.toLowerCase(), sToSearch);
  if (result) return result;
  result = _.includes(tagsToString(input.frontmatter.tags), sToSearch);
  if (result) return result;
  return result;
};

/**
 * Feed Items
 *
 * @typedef {object} Props
 * @property {string=} search
 * @property {string=} tag
 * @property {object=} filter all feed items predicate returns truthy for
 * @property {object=} reject items of feed that predicate does not return truthy for
 * @property {number=} limit limit of feed items to show
 *
 */
/**
 * @param {Props=} props
 */
export default ({ search = '', tag = '', filter, reject, limit }) => {
  let feedItems = useFeed();
  // props
  // tag from props
  if (tag && tag !== '') {
    feedItems = feedItems.filter((i) => {
      if (i.frontmatter.tags) return i.frontmatter.tags.includes(tag);
      return false;
    });
  }
  // search from props
  if (search && search !== '') {
    feedItems = feedItems.filter((i) => filterSearchSymbols(i, search));
  }
  // context
  const { value } = useContext(FeedContext);
  // search from input
  const searchFromInput = value.searchInput;
  if (searchFromInput && searchFromInput !== '') {
    feedItems = feedItems.filter((i) =>
      filterSearchSymbols(i, searchFromInput)
    );
  }
  // tag from tags
  const tagValue = value.tag;
  if (tagValue && tagValue !== '') {
    feedItems = feedItems.filter((i) => {
      if (i.frontmatter.tags) return i.frontmatter.tags.includes(tagValue);
      return false;
    });
  }
  // main
  // filter
  if (filter) feedItems = _.filter(feedItems, filter);
  // reject - the opposite of filter
  if (reject) feedItems = _.reject(feedItems, reject);
  // limit
  if (limit || limit > 0) feedItems = _.take(feedItems, limit);

  return (
    <div sx={{ marginY: [30] }}>
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
    </div>
  );
};
