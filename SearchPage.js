'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: '#44475A'
  },
  headline: {
    fontSize: 36,
    color: '#50fa7b'
  },
  description: {
    color: '#f8f8f0',
    fontSize: 18,
    marginBottom: 10
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: '#f8f8f0',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ff79c6',
    borderColor: '#ff79c6',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ff79c6',
    borderRadius: 8,
    color: '#ff79c6'
  }
});

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Marvelously Lucky
        </Text>
        <Text style={styles.description}>
          Fill out some criteria, and a comic will be reccomended!
        </Text>
        <View style={styles.flowRight}>
          <TextInput style={styles.searchInput}
            value={this.state.searchString}
            placeholderTextColor='white'
            placeholder='Enter a character name' />
          <TouchableHighlight style={styles.button}
            underlayColor='#FF7A83'>
            <Text style={styles.buttonText}>Find</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = SearchPage;
