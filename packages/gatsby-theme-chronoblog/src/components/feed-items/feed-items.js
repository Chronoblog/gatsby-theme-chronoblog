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
import Compact from './compact';

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
  itemsFormat = 'card',
  children
}) => {
  //
  if (
    itemsFormat === 'compact' &&
    showMoreButton &&
    feedItemsLength > showLimit
  ) {
    return (
      <div sx={{ my: '10px' }}>
        <Button
          sx={{
            fontSize: [1, 2],
            fontWeight: 'bolder',
            bg: 'background',
            p: 0,
            ':hover': {
              boxShadow: `inset 0 0 0 0px`
            }
          }}
          onClick={() => setCount(showLimit + showMoreNumber)}
        >
          {children}
        </Button>
      </div>
    );
  }
  //
  if (itemsFormat === 'card' && showMoreButton && feedItemsLength > showLimit) {
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
  //
  return <div />;
};

const filterBySlug = (feedItems, pathname) => {
  if (pathname && pathname !== '' && pathname !== '/') {
    return feedItems.filter((item) => item.fields.slug !== pathname);
  }
  return feedItems;
};

const listStyleObject = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const getItemYear = (item, lang = 'en-US') => {
  const date = new Date(item.frontmatter.date);
  const year = date.toLocaleString(lang, { year: 'numeric' });
  return year;
};
const getYears = (items, lang = 'en-US') => {
  let years = items.map((item) => getItemYear(item, lang));
  years = [...new Set(years)];
  return years;
};

const YearSeparator = ({
  year,
  firstYear,
  itemsFormat,
  yearSeparatorType,
  yearSeparatorSkipFirst = false,
  children
}) => {
  const mtStylePx = itemsFormat === 'card' ? '48px' : '20px';
  const mtStyle = yearSeparatorType === 'space' ? '38px' : mtStylePx;
  const style = {
    fontSize: itemsFormat === 'card' ? [4] : [1],
    opacity: 0.8,
    fontWeight: 'normal',
    mt: mtStyle,
    textAlign: itemsFormat === 'card' ? 'center' : null
  };
  //
  if (yearSeparatorSkipFirst && firstYear === year)
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  //
  if (!yearSeparatorType)
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  //
  if (yearSeparatorType === 'space')
    return (
      <div>
        <div sx={style} />
        <div>{children}</div>
      </div>
    );
  //
  return (
    <div>
      <div sx={style}>{year}</div>
      <div>{children}</div>
    </div>
  );
};

const Item = ({ itemsFormat, item, linksBeforeTitle = '' }) => {
  if (itemsFormat === 'compact')
    return (
      <div>
        <Compact item={item} linksBeforeTitle={linksBeforeTitle} />
      </div>
    );
  return (
    <div>
      <Card item={item} linksBeforeTitle={linksBeforeTitle} />
    </div>
  );
};

/**
 * Feed Items
 *
 * @typedef {object} Props
 * @property {string=} filterBySearch
 * @property {string[]=} filterByTags
 * @property {string[]=} filterByTypes
 * @property {object=} filter all feed items predicate returns truthy for
 * @property {object=} reject items of feed that predicate does not return truthy for
 * @property {number=} limit limit of feed items to show
 * @property {boolean=} showMoreButton
 * @property {string=} showMoreText
 * @property {number=} showMoreNumber
 * @property {boolean=} skipThisPageItem page where the user is now
 * @property {'year' | 'space' | boolean=} yearSeparator
 * @property {boolean=} yearSeparatorSkipFirst
 * @property {'card' | 'compact'=} itemsFormat
 *
 */
/**
 * @param {Props=} props
 */
export default ({
  filterBySearch = '',
  filterByTags,
  filterByTypes,
  filter,
  reject,
  limit,
  showMoreButton = true,
  showMoreText = '',
  showMoreNumber = 50,
  skipThisPageItem = true,
  yearSeparator,
  yearSeparatorSkipFirst,
  itemsFormat = 'card'
}) => {
  let feedItems = useFeed();
  //
  const siteMeta = useSiteMetadata();
  const { uiText } = siteMeta;
  const feedItemsFromMeta = siteMeta.feedItems;
  const linksBeforeTitle = _.get(
    siteMeta,
    'feedItems.contentTypes.links.beforeTitle',
    ''
  );
  //
  let yearSeparatorType = siteMeta.feedItems.yearSeparator;
  if (yearSeparator !== undefined) yearSeparatorType = yearSeparator;
  //
  let yearSeparatorSkipFirstUse = siteMeta.feedItems.yearSeparatorSkipFirst;
  if (yearSeparator === 'space') yearSeparatorSkipFirstUse = true;
  if (yearSeparatorSkipFirst !== undefined)
    yearSeparatorSkipFirstUse = yearSeparatorSkipFirst;
  //
  const feedLimit = limit || feedItemsFromMeta.limit;
  //
  // props
  // Tags array from props
  if (filterByTags && filterByTags.length > 0) {
    feedItems = feedItems.filter((i) => {
      if (i.frontmatter.tags && i.frontmatter.tags.length > 0) {
        const filteredTags = i.frontmatter.tags.filter((t) =>
          filterByTags.includes(t)
        );
        return filteredTags.length > 0;
      }
      return false;
    });
  }
  // Types array from props
  if (filterByTypes && filterByTypes.length > 0) {
    feedItems = feedItems.filter((i) => {
      if (i.fields.type) return filterByTypes.includes(i.fields.type);
      return false;
    });
  }
  // search from props
  if (filterBySearch && filterBySearch !== '') {
    feedItems = feedItems.filter((i) => filterSearchSymbols(i, filterBySearch));
  }
  // context
  const { searchInput } = useContext(FeedContext);
  // search from input
  const searchFromInput = searchInput;
  if (searchFromInput && searchFromInput !== '') {
    feedItems = feedItems.filter((i) =>
      filterSearchSymbols(i, searchFromInput)
    );
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
          const yearsArray = getYears(feedItemsToShow);
          const firstYear = yearsArray[0];
          //
          return (
            <div sx={listStyleObject}>
              {yearsArray.map((year) => {
                return (
                  <YearSeparator
                    key={year}
                    year={year}
                    firstYear={firstYear}
                    itemsFormat={itemsFormat}
                    yearSeparatorSkipFirst={yearSeparatorSkipFirstUse}
                    yearSeparatorType={yearSeparatorType}
                  >
                    <div sx={listStyleObject}>
                      {feedItemsToShow.map((item) => {
                        if (getItemYear(item) === year) {
                          return (
                            <Item
                              key={item.id}
                              itemsFormat={itemsFormat}
                              item={item}
                              linksBeforeTitle={linksBeforeTitle}
                            />
                          );
                        }
                        return undefined;
                      })}
                    </div>
                  </YearSeparator>
                );
              })}
            </div>
          );
        }}
      </Location>
      <ButtonShowMore
        showMoreButton={showMoreButton}
        feedItemsLength={feedItems.length}
        showLimit={showLimit}
        showMoreNumber={showMoreNumber}
        setCount={setCount}
        itemsFormat={itemsFormat}
      >
        {showMoreText || uiText.feedShowMoreButton}
      </ButtonShowMore>
    </div>
  );
};
