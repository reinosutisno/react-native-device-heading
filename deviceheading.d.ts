declare module 'react-native-device-heading' {
  export const start: (
    threshold: number,
    callback: (heading: number) => void
  ) => Promise<boolean>;

  export const stop: () => void;
}
