import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SKILLS_DATA = [
  { id: '1', title: 'Gitar Dersi', user: 'Ahmet' },
  { id: '2', title: 'İngilizce Konuşma Pratiği', user: 'Ayşe' },
  { id: '3', title: 'Profesyonel CV Hazırlama', user: 'Mehmet' },
  { id: '4', title: 'Sosyal Medya Yönetimi', user: 'Zeynep' },
];

const SkillItem = ({ title, user }) => (
  <View style={styles.item}>
    <Text style={styles.skillTitle}>{title}</Text>
    <Text style={styles.skillUser}>sağlayan: {user}</Text>
  </View>
);

const SkillList = () => {
  return (
    <FlatList
      data={SKILLS_DATA}
      renderItem={({ item }) => <SkillItem title={item.title} user={item.user} />}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  skillUser: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default SkillList;
