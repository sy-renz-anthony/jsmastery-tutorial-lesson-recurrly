import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link href={"/(auth)/sign-in"}>Log In</Link>
    </View>
  );
};

export default SignUp;
