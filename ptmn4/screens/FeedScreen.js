import { View, Text, Button, StyleSheet } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Screen</Text>
      <Text>Daftar feed ada di sini.</Text>
      <View style={{ height: 10 }} />
      <Button
        title="Buka Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});