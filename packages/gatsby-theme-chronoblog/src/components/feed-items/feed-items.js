/** @jsx jsx */
import { Location } from '@reach/router';
import _ from 'lodash';
import { useContext, useState } from 'react';
import { jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';
import useFeed from '../../hooks/use-feed';
import useSiteMetadata from '../../hooks/use-site-metadata';
import Button from '../button';
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
 *
 */
const ButtonShowMore = ({
  showMoreButton = true,
  feedItemsLength,
  showLimit = 10,
  showMoreNumber = 10,
  setCount,
  children
}) => {
  if (showMoreButton && feedItemsLength > showLimit) {
    return (
      <div sx={{ my: '20px' }}>
        <Button
          sx={{ fontSize: [1, 2], width: '100%' }}
          onClick={() => setCount(showLimit + showMoreNumber)}
        >
          {children}
        </Button>
      </div>
    );
  }
  return <div />;
};

const filterBySlug = (feedItems, pathname) => {
  if (pathname && pathname !== '' && pathname !== '/') {
    return feedItems.filter((item) => item.fields.slug !== pathname);
  }
  return feedItems;
};

/**
 * Feed Items
 *
 * @typedef {object} Props
 * @property {string=} filterBySearch
 * @property {string=} filterByTag
 * @property {object=} filter all feed items predicate returns truthy for
 * @property {object=} reject items of feed that predicate does not return truthy for
 * @property {number=} limit limit of feed items to show
 * @property {boolean=} showMoreButton
 * @property {string=} showMoreText
 * @property {number=} showMoreNumber
 * @property {boolean=} skipThisPageItem
 *
 */
/**
 * @param {Props=} props
 */
export default ({
  filterBySearch = '',
  filterByTag = '',
  filter,
  reject,
  limit,
  showMoreButton = true,
  showMoreText = '',
  showMoreNumber = 20,
  skipThisPageItem = true
}) => {
  let feedItems = useFeed();
  //
  const {
    uiText: { feedShowMoreButton },
    feedItemsLimit
  } = useSiteMetadata();
  const feedLimit = limit || feedItemsLimit || 10;
  //
  // props
  // tag from props
  if (filterByTag && filterByTag !== '') {
    feedItems = feedItems.filter((i) => {
      if (i.frontmatter.tags) return i.frontmatter.tags.includes(filterByTag);
      return false;
    });
  }
  // search from props
  if (filterBySearch && filterBySearch !== '') {
    feedItems = feedItems.filter((i) => filterSearchSymbols(i, filterBySearch));
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
  //
  const [showLimit, setCount] = useState(feedLimit);
  //
  return (
    <div sx={{ marginY: [30] }}>
      <Location>
        {({ location }) => {
          let feedItemsToShow = feedItems;
          feedItemsToShow = skipThisPageItem
            ? filterBySlug(feedItemsToShow, location.pathname)
            : feedItemsToShow;
          feedItemsToShow = _.take(feedItemsToShow, showLimit);
          //
          return (
            <ul
              sx={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {feedItemsToShow.map((item) => {
                return (
                  <li key={item.id}>
                    <Card item={item} />
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Location>
      <ButtonShowMore
        showMoreButton={showMoreButton}
        feedItemsLength={feedItems.length}
        showLimit={showLimit}
        showMoreNumber={showMoreNumber}
        setCount={setCount}
      >
        {showMoreText || feedShowMoreButton || 'Show More'}
      </ButtonShowMore>
    </div>
  );
};
