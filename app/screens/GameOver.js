import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Button from '../components/Button'

class GameOver extends Component {
  static navigationOptions = {
    title: 'Game Over',
    header: null
  }

  constructor(props) {
    super(props)
  }

  backToMainMenu() {
    return NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'MainMenu'})
      ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.yourMoves}>Game Over</Text>
        <View style={styles.box}>
          <Text style={styles.scoreTitle}>Redudancy Score</Text>
        <Text style={styles.score}>{this.props.game.moves - 17}</Text>
        </View>
        <Button
          onPress={() => this.props.navigation.dispatch(this.backToMainMenu())}
        >
          HOME
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#013964'
  },

  yourMoves: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginBottom: 20
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: '#FF5500',
    marginBottom: 30,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  scoreTitle: {
    color: '#E9E9E9',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center'
  },

  score: {
    color: '#F5F5F5',
    fontWeight: '800',
    fontSize: 65
  }
})

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps)(GameOver)
