import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css";

export default function RootLayout() {
  return (
    <Fragment>
      {Platform.OS === "android" && (
        <StatusBar style="light" backgroundColor="#8308d1" />
      )}
      <SafeAreaView
        className="flex-1 bg-nubank text-white"
        edges={["top", "left", "right"]}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaView>
    </Fragment>
  );
}
