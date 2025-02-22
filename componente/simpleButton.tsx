import React from "react";
import { Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


type simpleButtonProps = {
    titulo : string;
    onPress: () => void;
}
const SimpleButton: React.FC<simpleButtonProps> = ({ titulo, onPress }) => {
    return (
        <Button onPress={onPress} title = {titulo} color="#ffff" ></Button>
      );
    
}

export  default  SimpleButton;

