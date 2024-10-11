import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {Link, useNavigation} from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: true,
  });

  return (
    <SafeAreaView>
      <Link href={"/"} asChild>
        <TouchableOpacity style={[{ backgroundColor: "red", height: 100 }]}>
          <Text>Hello World</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
