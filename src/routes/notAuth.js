import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/Login';
import RegisterPage from '../screens/Register';
import Onboarding from '../components/Onboarding';

const { Navigator, Screen } = createStackNavigator()

export default function NotAuthRoutes() {
  return (
    <Navigator initialRouteName="Onboarding">
      <Screen options={{ headerShown: false }} name="Register" component={RegisterPage} />
      <Screen options={{ headerShown: false }} name='Login' component={LoginPage} />
    </Navigator>
  )
}