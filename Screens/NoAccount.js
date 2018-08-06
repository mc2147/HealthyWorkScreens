import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { withTheme, Headline, Paragraph } from "react-native-paper";
import { RoundButton, WideImage } from "../Components";

class NoAccount extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { colors } = this.props.theme;
    return (
      <View
        style={[styles.centerContainer, { backgroundColor: colors.background }]}
      >
        <Image
          style={styles.fullWidthImage}
          source={require("../assets/NoAccountImage.png")}
        />
        <Headline style={[styles.title, { marginTop: 0 }]}>
          No Account Found
        </Headline>
        <Paragraph style={styles.centerText}>
          Unfortunately, we couldn't find an account for either you or your
          employer in our system. If you think this is in error, please contact
          your HR department or visit our support site below.
        </Paragraph>
        <Paragraph style={[styles.centerText, { color: colors.primary }]}>
          Sign In With A Different Email
        </Paragraph>
        <RoundButton
          onPress={() => this.props.navigation.navigate("CreateProfile", {})}
          text="Visit Healthyworks Support"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24
  },
  title: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 32
  },
  fullWidthImage: {
    alignItems: "center",
    justifyContent: "center"
  },
  centerText: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 12
  }
});

export default withTheme(NoAccount);
