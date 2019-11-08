/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from '../layout';

export default ({ children }) => {
  return (
    <Layout>
      <main>
        <article>{children}</article>
      </main>
    </Layout>
  );
};
