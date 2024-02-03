import { TextInput } from "react-native";
import styles from './SearchBar.style'

function SearcBar (props){

    return(
        <TextInput style={styles.input}
        placeholder="Ara..."
        onChangeText={props.SearchValue}
      />
    )
}

export default SearcBar