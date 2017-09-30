import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native'

import Button from '../components/Button'
import { SET_GAME_STATE } from '../actions/gameActions'

class MainMenu extends Component {
  static navigationOptions = {
    title: 'Main Menu',
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  playButton() {
    this.props.SET_GAME_STATE()
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.appThumbnail}/>
        <Button onPress={() => this.playButton()} dark>PLAY</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9E9E9',
    flex: 1,
    justifyContent: 'center'
  },

  appThumbnail: {
    width: 290,
    height: 290,
    marginBottom: 140
  },

  playButton: {
    width: 120,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#0C5984',
    alignSelf: 'center'
  },

  playButtonText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F5F5F5'
  }
})

const mapDispactToProps = dispatch => ({
  SET_GAME_STATE: () => dispatch(SET_GAME_STATE())
})

export default connect(() => ({}), mapDispactToProps)(MainMenu)
