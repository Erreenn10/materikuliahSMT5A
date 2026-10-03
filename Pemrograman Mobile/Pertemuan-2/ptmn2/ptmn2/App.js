import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
         Nama Lengkap : Ashfahani Hasyim{"\n"}
         NIM : 2488010070{"\n"}
         Asal Sekolah : SMKN SAMUDRA NUSANTARA CIREBON{"\n"}
         Cita-cita : Pengusaha Sukses{"\n"}
         Rencana mencapai cita-cita : Ikut kedalam bisnis orang tua dan belajar bisnis dari orang lain{"\n"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bde129',
    alignItems: 'center',
    justifyContent: 'center',
  },
});