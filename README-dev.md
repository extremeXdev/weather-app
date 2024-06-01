# Welcome to your Weather app 👋

## Used Library in the Project

- [react-native-progress](https://www.npmjs.com/package/react-native-progress): Loading ui components
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/): async-storage
- [NativeWind](https://www.nativewind.dev/quick-starts/expo): for using Tailwinds CSS in react native
- [Heroicons](https://www.npmjs.com/package/react-native-heroicons) and also (https://heroicons.com/): nice icons
- [axios](https://www.npmjs.com/package/react-native-axios): Deal with simplified way to make HTTP requests and handle responses

## Used API
- [weather] (https://www.weatherapi.com/)

## Command lines for Libraries

```bash
REM Creating expo apps...
@REM by example MySuperProject (hidden in console writing)
npm run create-expo-apps MySuperProject

echo Installing Prerequisites...

npm install nativewind &REM @latest?
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

```bash
echo delete too babel cash when launching
npx expo start -c
```

## Typescript issue
 Issue with 'className' inside components (solved)
 👉'className' issues solved with file app.d.ts (file), and name added to tsconfig.json file
 

 