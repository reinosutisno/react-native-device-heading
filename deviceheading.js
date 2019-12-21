import { NativeModules, NativeEventEmitter } from 'react-native';
const { RNDeviceHeading } = NativeModules;

let listener;

let _start = RNDeviceHeading.start;
RNDeviceHeading.start = (updateRate, callback) => {
  if (listener) {
    RNDeviceHeading.stop();
  }

  const rnDeviceEventEmitter = new NativeEventEmitter(RNDeviceHeading);
  listener = rnDeviceEventEmitter.addListener('HeadingUpdated', degree => {
    callback(degree);
  });

  _start(updateRate === null ? 0 : updateRate);
};

let _stop = RNDeviceHeading.stop;
RNDeviceHeading.stop = () => {
  listener && listener.remove();
  listener = null;
  _stop();
};

export default RNDeviceHeading;
