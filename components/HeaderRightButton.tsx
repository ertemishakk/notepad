import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TouchableOpacity} from 'react-native';
import DropdownMenu from './DropdownMenu';

const HeaderRightButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowMenu(visible => !visible)}
        style={{marginRight: 10, paddingLeft: 10}}>
        <Icon
          name="ellipsis-h"
          size={25}
          color="black"
          style={{marginRight: 10}}
        />
      </TouchableOpacity>
      {showMenu && <DropdownMenu />}
    </View>
  );
};

export default HeaderRightButton;
