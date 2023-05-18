import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';
import { View, ViewProps } from 'react-native';
import { requireNativeComponent, UIManager, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-screen-shield' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface ScreenShieldProps extends ViewProps {}

const ComponentName = 'ScreenShieldView';
const ScreenShield = NativeModules.ScreenShield
  ? NativeModules.ScreenShield
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const AndroidScreenShieldView = (props: ScreenShieldProps) => {
  useEffect(() => {
    ScreenShield.enableSecureFlag();
  }, []);

  return <View {...props} />;
};

export const ScreenShieldView =
  Platform.OS === 'ios'
    ? UIManager.getViewManagerConfig(ComponentName) != null
      ? requireNativeComponent<ScreenShieldProps>(ComponentName)
      : () => {
          throw new Error(LINKING_ERROR);
        }
    : AndroidScreenShieldView;
