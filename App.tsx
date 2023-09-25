import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const nomes = [
  'Ana Maria',
  'Bruno Alves',
  'Carlos José',
  'Daniel Martins',
  'Efraim Gomes',
  'Francisco Junior',
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Array de Nomes</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;