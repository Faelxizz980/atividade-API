import { StyleSheet, View ,TextInput } from 'react-native';

export const  InputDDD = ({ onChangeText }) => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          maxLength={2}
          placeholder="Digite o DDD"
          keyboardType="numeric"
          onChangeText={onChangeText}
        />
      </View>
    );
  }
  
  
  my-app/components/Inputs.jsx
  const styles = StyleSheet.create({
    input:{ 
      height: 40, 
      width: '80%',
      borderColor: 'gray', 
      borderWidth: 1, 
      borderRadius: 5,
      margin: 10,
    }
  });
  