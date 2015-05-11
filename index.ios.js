'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class MarvelouslyLuckyApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        barTintColor='#282a36'
        tintColor='#ff79c6'
        titleTextColor='#f8f8f0'
        initialRoute={{
          title: 'Marvelously Lucky',
          component: SearchPage
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('MarvelouslyLucky', () => MarvelouslyLuckyApp);
