import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
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
        <StatusBar
          backgroundColor={this.props.theme.PRIMARY_BACKGROUND_COLOR}
          barStyle={this.props.theme.STATUS_BAR_STYLE}
        />
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={
            this.props.theme.mode === 'dark'
              ? require('../utils/loader.json')
              : require('../utils/loaderDark.json')
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
