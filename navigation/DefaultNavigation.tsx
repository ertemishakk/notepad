import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const DefaultNavigation = ({screens}: {screens: ScreenNavigation[]}) => {
  const Stack = createStackNavigator<RootNav>();
  return (
    <Stack.Navigator>
      {screens.map(
        screen =>
          screen.component && (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={{
                headerBackTitle: ' ',
                ...screen.options,
              }}
            />
          ),
      )}
    </Stack.Navigator>
  );
};

export default DefaultNavigation;
