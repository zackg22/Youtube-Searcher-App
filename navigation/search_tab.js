import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VideoList from '../components/video_list';
import VideoDetail from '../components/video-detail';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const SearchTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={VideoList}
        options={{
          title: 'Youtube Searcher',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
};

export default SearchTab;
