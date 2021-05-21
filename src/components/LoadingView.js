import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Screen} from './Screen';

export default class LoadingView extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  render() {
    return (
      <Screen>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../utils/loader.json')}
          loop
          autoplay
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
