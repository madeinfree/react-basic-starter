import React from 'react';

import Header from './header/header.react';
import Footer from './footer/footer.react';

const styles = {
  padding: 20
};

const Common = () => (
  <div>
    <Header />
    <div style={ styles }>
      { this.props.children }
    </div>
    <Footer />
  </div>
);

export default Common;
