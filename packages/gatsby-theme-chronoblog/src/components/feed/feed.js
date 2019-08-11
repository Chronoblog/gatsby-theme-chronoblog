/** @jsx jsx */
import { jsx } from 'theme-ui';

import useInputValue from '../../hooks/use-input-value';
import FeedItems from './feed-items';
import FeedSearch from './feed-search';

/**
 * Feed
 *
 * @typedef {object} Props
 * @property {string=} search
 * @property {boolean=} searchInput
 * @property {object=} filter all feed items predicate returns truthy for
 * @property {object=} reject items of feed that predicate does not return truthy for
 * @property {number=} limit limit of feed items to show
 * @property {*=} children
 *
 */

/**
 * @param {Props=} props
 *
 * @example
 * <Feed
 *   filter={{ frontmatter: {tags: ["reactjs"]}}}
 *   reject={{ id: "some-id" }}
 *   limit={5}
 * />
 */
export default ({
  search = '',
  searchInput = false,
  filter,
  reject,
  limit
}) => {
  const useSearch = useInputValue(search);

  return (
    <section>
      {searchInput ? (
        <FeedSearch value={useSearch.value} onChange={useSearch.onChange} />
      ) : (
        ''
      )}
      <FeedItems
        search={useSearch.value}
        filter={filter}
        reject={reject}
        limit={limit}
      />
    </section>
  );
};
