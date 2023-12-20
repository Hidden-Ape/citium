import { CapacitorConfig } from '@capacitor/cli';

const appName: string = 'Citium';

const config: CapacitorConfig = {
  appId: 'com.hiddenape.citium',
  appName: appName,
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
