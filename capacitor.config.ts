import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.personal.universitylife',
  appName: 'حياتي الجامعية',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: { LocalNotifications: { smallIcon: 'ic_stat_icon_config_sample' } }
};
export default config;
