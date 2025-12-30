# Seinnyaungso

Seinnyaungso is a mobile application built using [Expo](https://expo.dev) and React Native. It leverages modern tools and libraries to provide a seamless user experience across Android, iOS, and web platforms.

## Features

- **WebView Integration**: Displays web content directly within the app.
- **File-based Routing**: Simplifies navigation with Expo Router.
- **Custom Theming**: Supports light and dark themes.
- **Haptic Feedback**: Enhances user interaction with haptic responses.
- **Cross-platform Support**: Runs on Android, iOS, and the web.

## Project Structure

```
app/
  _layout.tsx       # Root layout for the app
  (tabs)/           # Tab-based navigation
    _layout.tsx     # Layout for tabs
    index.tsx       # Home screen with WebView
assets/             # Static assets like images
components/         # Reusable UI components
constants/          # Theme and other constants
hooks/              # Custom React hooks
scripts/            # Utility scripts
```

## Getting Started

### Prerequisites

- Node.js (>=16.x)
- npm or bun
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joinworkify/syspare-mobile.git
   cd syspare-mobile
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun start
   ```

4. Open the app:
   - Use the Expo Go app on your device.
   - Or use an Android/iOS simulator.

## Scripts

- `bun run start`: Start the development server.
- `bun run android`: Run the app on an Android emulator.
- `bun run ios`: Run the app on an iOS simulator.
- `bun run web`: Start the app in a web browser.
- `bun run lint`: Run ESLint to check for code quality.
- `bun run reset-project`: Reset the project to a blank state.

## Configuration

### EAS Build

This project uses [Expo Application Services (EAS)](https://expo.dev/eas) for building and deploying the app. The build configurations are defined in `eas.json`:

- **Development**: Internal builds for testing.
- **Preview**: Builds for previewing features.
- **Production**: Builds for release.

### App Configuration

The app settings are defined in `app.json`:

- **iOS**: Bundle identifier: `com.syspare.seinnyaungso`
- **Android**: Package name: `com.syspare.seinnyaungso`
- **Web**: Static output with a custom favicon.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
