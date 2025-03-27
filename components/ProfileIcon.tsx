import { Pressable, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

const ProfileIcon = () => {
  return (
    <Pressable onPress={() => {}} className="size-14 bg-white/40 justify-center items-center rounded-full">
        <Icon name="user" size={18} color="white"/>
    </Pressable>
  );
};

export default ProfileIcon;
