import {AsyncStorage} from 'react-native'
import {APPID} from '../constants'

export async function setProfile(profile) {
  await AsyncStorage.setItem(`${APPID}:profile`, JSON.stringify(profile))
}

export async function setDeviceId(deviceId : string) {
  await AsyncStorage.setItem(`${APPID}:deviceId`, deviceId)
}

export async function getProfile() {
  return await AsyncStorage.getItem(`${APPID}:profile`)
}

export async function getDeviceId() {
  return await AsyncStorage.getItem(`${APPID}:deviceId`)
}

export function setOidc() {}