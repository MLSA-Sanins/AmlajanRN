import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Screen} from '../../components/Screen';
import AdminStack from '../../navigation/AdminStack';
import {useSelector} from 'react-redux';

const AdminScreen = () => {
  const theme = useSelector(state => state.themes.theme);
  const [statusBarStyle, setStatusBarStyle] = useState(theme.STATUS_BAR_STYLE);
  return (
    <>
      <StatusBar
        backgroundColor={theme.SECONDARY_COLOR}
        barStyle={theme.STATUS_BAR_STYLE}
      />
      <AdminStack />
    </>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
});
