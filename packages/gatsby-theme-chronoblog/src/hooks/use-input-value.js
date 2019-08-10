import { useCallback, useState } from 'react';

/**
 * @typedef {import('../index').InputValue} InputValue
 */

/**
 * @param {string} initialValue
 * @returns {InputValue}
 *
 * @example
 * export default () => {
 *   const search = useInputValue('');
 *
 *   return (
 *     <div>
 *       <input {...search} />
 *       <p>{search.value}</p>
 *     </div>
 *   );
 * };
 *
 */
export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((event) => {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange
  };
};
