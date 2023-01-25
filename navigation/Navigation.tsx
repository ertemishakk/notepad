import React from 'react';
import Note, {NOTE_SCREEN} from '../screens/Note';
import Notes, {NOTES_SCREEN} from '../screens/Notes';
import DefaultNavigation from './DefaultNavigation';

const Navigation = () => {
  const screens: ScreenNavigation[] = [
    {
      name: NOTES_SCREEN,
      component: Notes,
      options: {
        headerShown: false,
      },
    },
    {
      name: NOTE_SCREEN,
      component: Note,
      options: {
        headerTitle: '',
      },
    },
  ];
  return <DefaultNavigation screens={screens} />;
};

export default Navigation;
