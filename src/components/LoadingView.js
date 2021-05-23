import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Screen} from './Screen';
import {connect} from 'react-redux';

class LoadingView extends React.Component {
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
          source={
            this.props.theme.mode === 'dark'
              ? require('../utils/loaderDark.json')
              : require('../utils/loader.json')
          }
          loop
          autoplay
        />
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  return {theme: state.themes.theme};
};

export default connect(mapStateToProps, null)(LoadingView);

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
