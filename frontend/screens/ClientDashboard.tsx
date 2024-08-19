import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ClientDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>Jane D.</Text>
        {/* Profile Icon */}
      </View>

      <TouchableOpacity style={styles.bookNowButton}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>

      <View style={styles.appointmentSection}>
        <View style={styles.therapistCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/60' }} // Replace with your image source
            style={styles.therapistImage}
          />
          <Text style={styles.therapistName}>Jill Doe</Text>
          <Text style={styles.therapistRating}>⭐ 4.9</Text>
        </View>

        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentDate}>14</Text>
          <Text style={styles.appointmentDay}>Wednesday</Text>
          <Text style={styles.appointmentMonth}>April</Text>
        </View>
      </View>

      <Calendar
        markedDates={{
          '2023-04-14': { selected: true, marked: true, selectedColor: '#f0a500' },
        }}
        style={styles.calendar}
        theme={{
          backgroundColor: '#333',
          calendarBackground: '#333',
          textSectionTitleColor: '#fff',
          monthTextColor: '#f0a500',
          arrowColor: '#f0a500',
          dayTextColor: '#fff',
          todayTextColor: '#f0a500',
          selectedDayBackgroundColor: '#f0a500',
          selectedDayTextColor: '#fff',
          textDisabledColor: '#555',
          dotColor: '#f0a500',
          selectedDotColor: '#fff',
          textDayFontFamily: 'System',
          textMonthFontFamily: 'System',
          textDayHeaderFontFamily: 'System',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            },
          },
        }}
      />

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Appointment History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Favorite Therapist</Text>
      </TouchableOpacity>

      <View style={styles.rewardsSection}>
        <View style={styles.rewardsCard}>
          <Text style={styles.rewardsPoints}>250 PTS</Text>
        </View>
        <View style={styles.referCard}>
          <Text style={styles.referText}>Refer a Friend</Text>
          {/* Add icon or image here */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
  },
  bookNowButton: {
    backgroundColor: '#f0a500',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: 'center',
  },
  bookNowText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appointmentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  therapistCard: {
    width: '48%',
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  therapistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  therapistName: {
    fontSize: 16,
    color: '#fff',
  },
  therapistRating: {
    fontSize: 14,
    color: '#f0a500',
  },
  appointmentCard: {
    width: '48%',
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  appointmentDate: {
    fontSize: 32,
    color: '#fff',
  },
  appointmentDay: {
    fontSize: 16,
    color: '#f0a500',
  },
  appointmentMonth: {
    fontSize: 16,
    color: '#fff',
  },
  calendar: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#444',
    padding: 10,
  },
  menuButton: {
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginBottom: 12,
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  rewardsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  rewardsCard: {
    width: '48%',
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  rewardsPoints: {
    fontSize: 24,
    color: '#f0a500',
  },
  referCard: {
    width: '48%',
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  referText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ClientDashboard;
