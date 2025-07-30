import { StyleSheet } from 'react-native';
import "./global.css"
import { ClerkProvider } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.log(err);
    }
  },
  async deleteToken(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (err) {
    }
  }
}

export default function App() {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
