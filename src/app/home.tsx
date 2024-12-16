import { View, Text, Image } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/commonStyles";
import Animated from "react-native-reanimated";
import { homeStyles } from "@/styles/homeStyles";
import HomeHeader from "@/components/home/HomeHeader";

const Page = () => {
  return (
    <View style={commonStyles.containerBlack}>
      <Animated.View style={homeStyles.animatedHeader}>
        <Animated.View style={[homeStyles.glassmorphismContainer]}>
          <Image
            source={require("@/assets/icons/thumb2.png")}
            style={homeStyles.glassmorphismBackground}
          />
        </Animated.View>
        <HomeHeader />
      </Animated.View>
    </View>
  );
};

export default Page;
