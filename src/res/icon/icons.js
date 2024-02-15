import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const usersIcon = ({color, size}) => {
  return <Feather name="users" size={size} color={color} />;
};

const filterIcon = ({color, size}) => {
  return <Feather name="filter" size={size} color={color} />;
};

const bellIcon = ({color, size}) => {
  return <Feather name="bell" color={color} size={size} />;
};
const historyIcon = ({color, size}) => {
  return <Feather name="server" color={color} size={size} />;
};

const userIcon = ({color, size}) => {
  return <Feather name="user" color={color} size={size} />;
};
const keyIcon = ({color, size}) => {
  return <Foundation name="key" size={size} color={color} />;
};

const addIcon = ({color, size}) => {
  return <Ionicons name="add" size={size} color={color} />;
};

const closeIcon = ({color, size}) => {
  return <Ionicons name="close" size={size} color={color} />;
};

const timeIcon = ({color, size}) => {
  return <Ionicons name="time-outline" size={size} color={color} />;
};

const noteIcon = ({color, size}) => {
  return <MaterialIcons name="notes" size={size} color={color} />;
};

const backIcon = ({color, size}) => {
  return <Ionicons name="chevron-back" size={size} color={color} />;
};
export const icons = {
  usersIcon,
  keyIcon,
  filterIcon,
  bellIcon,
  historyIcon,
  userIcon,
  addIcon,
  closeIcon,
  timeIcon,
  noteIcon,
  backIcon,
};
