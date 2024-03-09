# UpstoxDemo(React Native)
This app allows users to manage their investment holdings efficiently. Users can view a list of their holdings along with detailed information such as stock name, quantity, purchase price, and current market value. The app calculates and displays the total profit or loss based on the latest market prices.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
>Follow the instructions below to get the app up and running on your local machine.

### Installation

1. Clone the repository:
   git clone https://github.com/talharizvi/UpstoxDemo.git
2. Change to the project directory:
   cd UpstoxDemo
3. Install dependencies:
    npm install
4. Install CocoaPods(ios):
   cd ios
   pod install   

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ or physical device shortly provided you have set up your emulator/simulator or physical device correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully ran your React Native App. :partying_face:
