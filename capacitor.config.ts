import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.viniciusith.mybooklib',
	appName: 'mybooklib',
	webDir: 'build',
	server: { url: 'http://192.168.1.2:25565', cleartext: true, androidScheme: 'https' }
};

export default config;
