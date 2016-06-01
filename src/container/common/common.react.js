import React from 'react';

import Header from './header/header.react';
import Footer from './footer/footer.react';

const styles = {
  padding: 20
};

const Common = (props) => (
  <div>
    <Header />
    <div style={ styles }>
      { props.children }
    </div>
    <Footer />
  </div>
);

export default Common;
