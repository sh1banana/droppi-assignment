/* LIBRARY */
import React from 'react';
import { Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
/** COMPONENTS */
import { WaveIndicator } from "~/components/CIndicator";
/** COMMON */
import { Assets } from '~/configs';
import CStyles from '~/theme/styles';
import themeColors from '~/theme/themeColors';

const durationLoading = 500;

class CImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _loading: true,
      _source: props.source,
      _animOpacity: new Animated.Value(1)
    }
  }

  /* FUNCTIONS */
  _onLoad = () => {
    this.setState({ _loading: false }, () => {
      let animationParams = { toValue: 0, duration: durationLoading, useNativeDriver: true };
      Animated.timing(this.state._animOpacity, animationParams).start();
    })
  }

  _onError = () => {
    this.setState({
      _source: this.props.sourceFailed ? this.props.sourceFailed : Assets.imageFailed,
      _loading: false
    })
  }

  /* LIFE CYCLES */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.source != this.props.source) {
      this.setState({ _source: this.props.source });
    }
  }

  /* RENDER */
  render() {
    let { style, resizeMode, children } = this.props;
    let { _source } = this.state;

    return (
      <FastImage
        style={[style, { overflow: 'hidden' }]}
        source={_source.uri ?
          {
            uri: _source.uri,
            priority: FastImage.priority.normal
          } :
          _source}
        resizeMode={resizeMode}
        cache={FastImage.cacheControl.immutable}
        onLoadStart={this._onLoadStart}
        onLoad={this._onLoad}
        onError={this._onError}
      >
        <Animated.View style={[styles.conLoading, { opacity: this.state._animOpacity }]}>
          <WaveIndicator color={themeColors.light.primary} waveMode={"outline"} />
        </Animated.View>
        {children}
      </FastImage>
    )
  }
}

const styles = {
  conLoading: [CStyles.center, CStyles.con, { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: themeColors.light.border }]
}

export default CImage;

CImage.defaultProps = {
  style: {},
  source: Assets.imageFailed,
  resizeMode: "cover"
}