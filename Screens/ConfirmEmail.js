import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { withTheme, Headline, Paragraph, Button } from "react-native-paper";

class ConfirmEmail extends React.Component {
  static navigationOptions = {
    title: "Sign In"
  };

  render() {
    const { colors } = this.props.theme;

    return (
      <View style={styles.wrapper}>
        <View
          style={[
            styles.centerContainer,
            { backgroundColor: colors.background }
          ]}
        >
          <Image
            style={styles.fullWidthImage}
            source={require("../assets/Email-Icon.png")}
          />
          <Headline style={styles.title}>We've sent you an email!</Headline>
          <Paragraph>
            This email contains a unique link that will sign you in. Open your
            email client below and tap the link to return to the app.
          </Paragraph>
        </View>
        <Button
          raised
          dark
          primary
          style={styles.fullWidthButton}
          onPress={() => this.props.navigation.navigate("NoAccount")}
        >
          Open Email
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  fullWidthButton: {
    alignSelf: "stretch",
    paddingVertical: 24,
    margin: 0
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
  headerLeft: {
    marginLeft: 12
  }
});

export default withTheme(ConfirmEmail);
