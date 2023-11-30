import { NativeBaseProvider, StatusBar  } from "native-base";
import { Theme } from "./src/styles/themes";
import Login from "./src/screen/Login";

export default function App() {
  return (
    <>
    <NativeBaseProvider theme={Theme}>
      <StatusBar backgroundColor={Theme.colors.blue[800]}/>
      <Login />
    </NativeBaseProvider>
    </>
  );
}