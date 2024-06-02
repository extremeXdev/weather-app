<img src="assets/images/toadwithumbrella_.jpg" width="100%" alt="Weather Image two People with a umbrella">


# Weather App 🌈 🌤 🌪 🌧   
Weather App is a **Mobile application**  developped to run both **Android** and **IOS** plateform. Such apps is helpful, we need it to schedule our everyday by the power of knowing what will possibly happen locally or where we're going and better plan our works or stay. Can provide data to forecast weather globaly, it can become your daily hand-gadget tool used the most.

Build on **react native** with **Expo framework**. 

## Used Library in the Project

- [react-native-progress](https://www.npmjs.com/package/react-native-progress): Loading ui components
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/): async-storage
- [NativeWind](https://www.nativewind.dev/quick-starts/expo): for using Tailwinds CSS in react native
- [Heroicons](https://www.npmjs.com/package/react-native-heroicons) npm 👈 and also doc 👉 (https://heroicons.com/): nice icons
- [axios](https://www.npmjs.com/package/react-native-axios): Deal with simplified way to make HTTP requests and handle responses

## Used API
- [weather API](https://www.weatherapi.com/): The Weather Application Programming Interface used!

## Command lines for Libraries (done)
But if you're developing from scratch, launch the commands one after another.

```bash
REM Creating expo apps...
@REM by example MySuperProject (hidden in console writing)
npm run create-expo-apps MySuperProject

echo Installing prerequisites...

npm install nativewind &REM @latest? if wanna
npm install --save-dev tailwindcss@3.3.2

npm i react-native-heroicons react-native-svg
npm i react-native-heroicons

npm i react-native-progress
npm install react-native-svg

npm i @react-native-async-storage/async-storage

npm install axios

echo Reseting Expo Template...
npm run reset-project
```

```bash
echo Launching expo app...
npx expo start
```

or 

```bash
echo Launchinr expo apps: delete too babel cash when launching.
npx expo start -c
```

## Typescript issue (resolved)
 Issue with 'className' inside components (solved)
 👉'className' issues solved with file **app.d.ts** (file), and name added to **tsconfig.json** file.

.
________




**_This Mobile Application has been developed with Expo react native framework, this is a helpful way to begin with expo. Follow links for understanding more._**


# Welcome to Expo app 👨‍💻

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
