import React from 'react';
import { StyleSheet, Image } from 'react-native';


// Props: image URL
export default class WideImage extends React.Component {
    render() {
        return(
            <Image 
              style={[styles.fullWidthImage, this.props.style]} 
              source={{uri:this.props.uri}}
            />
        )
    }
}  

const styles = StyleSheet.create({
  fullWidthImage: {
    width: '100%', 
    alignItems:'center', 
    justifyContent: 'center'
  },
});