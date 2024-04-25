import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import CadastrarExtintor from '../screens/CadastrarExtin';

const {Navigator,Screen} = createStackNavigator()

export default function AuthRoute() {
  return (
  <Navigator initialRouteName="Onboarding">
    <Screen options={{ headerShown: false }} name="Home" component={HomePage} />
    <Screen name="CadastrarExtintor" component={CadastrarExtintor} />
  </Navigator>
  )
}