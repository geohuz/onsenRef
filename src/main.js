import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Tabbar, Tab, Toolbar, Navigator, Button, BackButton} from 'react-onsenui';
import 'onsenui'

var index = 0;

var MyPage = React.createClass({
  renderToolbar: function(route, navigator) {
    const backButton = route.hasBackButton
      ? <BackButton onClick={this.handleClick.bind(this, navigator)}>Back</BackButton>
      : null;

    return (
      <Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{route.title}</div>
      </Toolbar>
    );
  },

  handleClick: function(navigator) {
          navigator.popPage();
  },

  pushPage: function(navigator) {
    navigator.pushPage({
      title: `Another page ${index}`,
      hasBackButton: true
    });

    index++;
  },

  renderPage: function(route, navigator) {
    return (
      <Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
        <section style={{margin: '16px', textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this, navigator)}>
            Push Page
          </Button>
        </section>
      </Page>
    );
  },

  render: function() {
    return (
      <Navigator
        renderPage={this.renderPage}
        initialRoute={{
          title: 'First page',
          hasBackButton: false
        }}
      />
    );
  }
});


ReactDOM.render(<MyPage />, document.getElementById('app'));