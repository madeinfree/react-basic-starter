import React, { Component } from 'react';

import Header from './header/header.react';
import Footer from './footer/footer.react';

const styles = {
  padding: 20
}

export default class Common extends Component {
  render() {
    return (
      <div>
        <Header />
          <div style={ styles }>
            { this.props.children }
          </div>
        <Footer />
      </div>
    );
  }
};
