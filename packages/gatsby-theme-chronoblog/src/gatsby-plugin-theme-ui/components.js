/** @jsx jsx */
import { jsx } from 'theme-ui';

const heading = (Tag) => ({ id, children, ...props }) =>
  !id ? (
    <Tag {...props} />
  ) : (
    <Tag id={id} {...props}>
      <a
        href={`#${id}`}
        sx={{
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        {children}
      </a>
    </Tag>
  );

export default {
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6')
};
