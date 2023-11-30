import { NativeBaseProvider, StatusBar  } from "native-base";
import { Theme } from "./src/styles/themes";
import Login from "./src/screen/Login/Login";
import Registration from "./src/screen/Registration/Registration";

export default function App() {
  return (
    <>
    <NativeBaseProvider theme={Theme}>
      <StatusBar backgroundColor={Theme.colors.blue[800]}/>
      <Registration />
    </NativeBaseProvider>
    </>
  );
}