import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/utils/Constants";
import { Stack } from "expo-router";
import { WSProvider } from "@/service/sockets/WSProvider";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  forceCodeForRefreshToken: true,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
});

const Root = () => {
  return (
    <>
      <WSProvider>
        <StatusBar
          style="light"
          backgroundColor={Colors.tertiary}
          translucent={false}
        />
        <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen
            name="auth"
            options={{
              animation: "fade",
              animationDuration: 2000,
              animationTypeForReplace: "push",
            }}
          />
          <Stack.Screen
            name="home"
            options={{
              animation: "fade",
              animationDuration: 2000,
              animationTypeForReplace: "push",
            }}
          />
          <Stack.Screen name="playlist" />
        </Stack>
      </WSProvider>
    </>
  );
};

export default Root;
