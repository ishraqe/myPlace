import React, {Component} from 'react';
import {Image, Text, View,findNodeHandle, StatusBar} from 'react-native';
import { BlurView } from 'react-native-blur';
import styles from './style';

export default class Initial extends Component {
    constructor(props) {
        super(props);
        this.state = { viewRef: null };
      }
    
      imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
      }
  componentDidMount() {
      setTimeout(()=>{
          this.props.navigation.navigate('Tab');
      } ,3000) 
  }  
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Image 
         ref={(img) => { this.backgroundImage = img; }}
            resizeMode={'cover'}
            source={require('../../assets/initial.jpg')}
            style={styles.bgImage}
            onLoadEnd={this.imageLoaded.bind(this)}
        />
        {(this.state.viewRef == null ? null : 
            <BlurView 
                viewRef={this.state.viewRef}        
                style={styles.absolute}
                blurType="dark"
                blurAmount={1}
            />
        )}
        <View style={styles.mainContainer}>
            <Text style={[styles.appName, styles.first]}>
                My 
            </Text>
            <Text style={[styles.appName, styles.last]}>
                Place 
            </Text>
        </View>
      </View>
    );
  }
}
