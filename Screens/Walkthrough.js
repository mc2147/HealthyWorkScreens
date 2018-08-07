import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Headline, Paragraph, withTheme, Button } from "react-native-paper";
import { Constants } from "expo";
import { Slideshow } from "../Components";

class Walkthrough extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    position: 1,
    interval: null,
    data: [
      {
        title: "Title 1",
        caption: "Caption 1",
        url: "http://placeimg.com/640/480/any"
      },
      {
        title: "Title 2",
        caption: "Caption 2",
        url: "http://placeimg.com/640/480/any"
      },
      {
        title: "Title 3",
        caption: "Caption 3",
        url: "http://placeimg.com/640/480/any"
      }
    ]
  };

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={styles.wrapper}>
        <Slideshow
          style={{ marginTop: Constants.statusBarHeight }}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          dataSource={this.state.data}
          height={"60%"}
          arrowSize={0}
        />
        <View
          style={[
            styles.centerContainer,
            { backgroundColor: colors.background }
          ]}
        >
          <Headline style={styles.largeTitle}>
            Your Personalized Health Alert Program
          </Headline>
          <Paragraph style={styles.centerText}>
            Notifications tailored to your personal health conditions and
            regiment.
          </Paragraph>
        <Button
            raised
            dark
            primary
            style={styles.roundButtonView}
            onPress={() => this.props.navigation.navigate('SendEmail')}
            >
            <Text uppercase={false} style={styles.buttonText}>
                Get Started
            </Text>          
        </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        fontWeight: '100'
    },
    roundButtonView: {
        alignSelf: "stretch",
        marginVertical:12,
        paddingVertical: 12,
        borderRadius: 48,
    },
    wrapper: {
    flex: 1
  },
  centerText: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 12
  },
  largeTitle: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 16
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24
  }
});

export default withTheme(Walkthrough);
