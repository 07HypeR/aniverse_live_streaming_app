import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useWS } from "@/service/sockets/WSProvider";
import AnimatedImage from "@/components/auth/AnimatedImage";
import AnimatedOverlay from "@/components/auth/AnimatedOverlay";
import AnimatedButton from "@/components/auth/AnimatedButton";
import { handleTouch, startMainAnimation } from "@/components/auth/animations";

const Page = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const { updateAccessToken } = useWS();

  useEffect(() => {
    setTimeout(() => {
      startMainAnimation(setButtonVisible);
    }, 1000);
  }, []);

  return (
    <View style={commonStyles.container}>
      <AnimatedImage />
      <AnimatedOverlay />
      {isButtonVisible && (
        <TouchableOpacity
          onPress={() => handleTouch(updateAccessToken)}
          style={commonStyles.center}>
          <AnimatedButton />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Page;
