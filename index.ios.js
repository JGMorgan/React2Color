import NavigationBar from 'react-native-navbar'
import Button from 'react-native-button'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

class Project extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      textColor: "blue",
      text: "BLUE"
    };
  }
  addToScore(){
    this.setState((state, props) => ({score: state.score+1, textColor: state.textColor, text: state.text}));
  }
  generateColor(){
    this.setState((state, props) => ({score: state.score, textColor: 'blue', text: "BLUE"}))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>
          SCORE: {this.state.score}
        </Text>
        <Text style={[styles.color, {color: this.state.textColor}]}>
          {this.state.text}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Button 
            containerStyle={[styles.specialButton, {backgroundColor: 'red'}]}
            onPress={() => this.addToScore()}>
          </Button>
          <Button 
            containerStyle={[styles.specialButton, {backgroundColor: 'blue'}]}
            onPress={() => this.addToScore()}>
          </Button>
          <Button 
            containerStyle={[styles.specialButton, {backgroundColor: 'green'}]}
            onPress={() => this.addToScore()}>
          </Button>
          <Button 
            containerStyle={[styles.specialButton, {backgroundColor: 'yellow'}]}
            onPress={() => this.addToScore()}>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  specialButton: {
    padding:25, 
    height:45, 
    width:60, 
    overflow:'hidden', 
    marginBottom: 60,
    borderRadius:10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 60,
  },
  color: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 30,
  },
});

AppRegistry.registerComponent('Project', () => Project);
