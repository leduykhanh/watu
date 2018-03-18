import {AsyncStorage} from 'react-native';

export async function setProfile(profile) {
  await AsyncStorage.setItem('wat:profile', JSON.stringify(profile));
}

export async function setDeviceId(deviceId: string) {
  await AsyncStorage.setItem('wat:deviceId', deviceId);
}

export async function getProfile() {
  return await AsyncStorage.getItem('wat:profile');
}

export async function getDeviceId() {
  return await AsyncStorage.getItem('wat:deviceId');
}
