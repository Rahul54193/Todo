import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navigator from './navigations/Navigator'
import { Splashscreen } from './screens'
import { Provider } from 'react-redux';
import store from './store';
import { PaperProvider } from 'react-native-paper';
import { textScale } from './helper/responsiveSize';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Splashscreen />
        <FlashMessage
        position={'top'}
        titleStyle={{
          fontSize: textScale(14)
        }}
      />
      </Provider>
    </PaperProvider>

  )
}

export default App