// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  const todayWorkout = [
    "01 - Warm up (5 min)",
    "02 - Squats (3x12)",
    "03 - Push-ups (3x10)",
    "04 - Lunges (3x10 each leg)",
    "05 - Plank (1 min)",
    "06 - Burpees (3x8)",
    "07 - Bicep curls (3x12)",
    "08 - Russian twists (3x15)",
    "09 - Cool down (5 min)"
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Conteúdo principal com scroll */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Olá, Usuário</Text>
          <Text style={styles.subtitle}>Veja seu treino de hoje</Text>

          {/* Treino do Dia */}
          <View style={styles.section}>
            {todayWorkout.map((exercise, index) => (
              <Text key={index} style={styles.exercise}>{exercise}</Text>
            ))}
          </View>

          {/* Desafio Diário */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Desafio Diário</Text>
            <TouchableOpacity style={styles.challengeButton}>
              <Text style={styles.challengeText}>Adicione o desafio no seu treino</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Menu Inferior FIXO */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Treinos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Monitoramento</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#232323',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 80, // Espaço para o menu fixo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#B3A0FF',
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  exercise: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 8,
  },
  challengeButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  challengeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  menuItem: {
    backgroundColor: '#B3A0FF',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HomeScreen;