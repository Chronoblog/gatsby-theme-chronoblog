/** @jsx jsx */
import { jsx } from 'theme-ui';

import useInputValue from '../../hooks/use-input-value';
import FeedItems from './feed-items';

/**
 * Feed
 *
 * @typedef {object} Props
 * @property {object=} filter all feed items predicate returns truthy for
 * @property {object=} reject items of feed that predicate does not return truthy for
 * @property {number=} limit limit of feed items to show
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
export default ({ filter, reject, limit }) => {
  const search = useInputValue('');

  return (
    <section>
      {/*  */}
      <input {...search} />
      <p>{search.value}</p>
      {/*  */}

      {/*  */}
      <FeedItems filter={filter} reject={reject} limit={limit} />
    </section>
  );
};
