import { Block, Button, Icon, Text } from "galio-framework";
import React from "react";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import AuthContext from "../controller/authContext";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

export default function Logout() {
  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <Block flex center style={styles.home}>
      <Block>
        <ImageBackground
          style={styles.headerImage}
          source={require("../assets/images/blueHeader.png")}
        >
          <Block flex row>
            <Block flex={1} style={{ marginTop: 35 }} middle>
              <Icon
                size={20}
                name="arrow-back-outline"
                family="ionicon"
                color="white"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </Block>
            <Block flex={9} center style={{ marginTop: 35 }}>
              <Text
                size={16}
                color={"#FFFFFF"}
                bold
                style={{ marginRight: 44 }}
              >
                Logout
              </Text>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
      <Block flex style={styles.options}>
        <Block flex={1} middle>
          <Button color="#1FACFB" round shadowless onPress={signOut}>
            Sign out
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor: "#ffffff",
  },
  headerImage: {
    width: width,
    height: 95,
  },
});
