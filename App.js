import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { UseRoute } from './route';



  export default function App() {
  const routing = UseRoute({})
  return <NavigationContainer>{routing}</NavigationContainer>
  
}