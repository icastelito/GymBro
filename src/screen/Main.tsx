import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function Main() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}