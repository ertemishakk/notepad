import React, {useState} from 'react';
import Touchable from './Touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';
import DropdownMenu from './DropdownMenu';

const HeaderRightButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View>
      <Touchable
        onPress={() => setShowMenu(visible => !visible)}
        style={{marginRight: 10, paddingLeft: 10}}>
        <Icon
          name="ellipsis-h"
          size={25}
          color="black"
          style={{marginRight: 10}}
        />
      </Touchable>
      {showMenu && <DropdownMenu />}
    </View>
  );
};

export default HeaderRightButton;
