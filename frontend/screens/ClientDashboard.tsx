import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ClientDashboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* Header with user info */}
        <View style={styles.header}>
          <Text style={styles.username}>Jane D.</Text>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.avatarImage} />
          </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>

        {/* Appointments Section */}
        <Text style={styles.sectionTitle}>Appointments</Text>
        <View style={styles.appointmentsContainer}>
          <View style={styles.therapistCard}>
            <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.therapistImage} />
            <Text style={styles.therapistName}>Jill Doe</Text>
            <Text style={styles.therapistRating}>⭐ 4.9</Text>
          </View>
          <View style={styles.dateCard}>
            <Text style={styles.appointmentDate}>14</Text>
            <Text style={styles.appointmentDay}>Wednesday</Text>
            <Text style={styles.appointmentMonth}>April</Text>
          </View>
        </View>

        {/* Calendar */}
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#333',
            calendarBackground: '#333',
            textSectionTitleColor: '#fff',
            dayTextColor: '#fff',
            todayTextColor: '#f0a500',
            selectedDayTextColor: '#fff',
            monthTextColor: '#f0a500',
            arrowColor: '#f0a500',
            selectedDayBackgroundColor: '#444',
            textDisabledColor: '#666',
          }}
          markedDates={{
            '2024-08-19': { selected: true, marked: true, selectedColor: '#f0a500' },
          }}
        />

        {/* Menu Buttons */}
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Appointment History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Favorite Therapist</Text>
        </TouchableOpacity>

        {/* Rewards and Referral Section */}
        <View style={styles.rewardsSection}>
          <View style={styles.rewardsCard}>
            <Text style={styles.rewardsText}>250</Text>
            <Text style={styles.rewardsLabel}>PTS</Text>
          </View>
          <View style={styles.referCard}>
            <Text style={styles.referText}>Refer a Friend</Text>
            <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.referIcon} />
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navButton}>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.navIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    color: '#fff',
  },
  avatarContainer: {
    backgroundColor: '#444',
    borderRadius: 30,
    padding: 5,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bookButton: {
    backgroundColor: '#f0a500',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  appointmentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  therapistCard: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '48%',
  },
  therapistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  therapistName: {
    color: '#fff',
    fontSize: 16,
  },
  therapistRating: {
    color: '#f0a500',
    fontSize: 14,
  },
  dateCard: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '48%',
  },
  appointmentDate: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 5,
  },
  appointmentDay: {
    color: '#f0a500',
    fontSize: 16,
  },
  appointmentMonth: {
    color: '#fff',
    fontSize: 14,
  },
  calendar: {
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: '#444',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  rewardsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rewardsCard: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  rewardsText: {
    fontSize: 28,
    color: '#f0a500',
  },
  rewardsLabel: {
    fontSize: 18,
    color: '#fff',
  },
  referCard: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  referText: {
    fontSize: 18,
    color: '#f0a500',
    marginBottom: 5,
  },
  referIcon: {
    width: 40,
    height: 40,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#444',
    borderRadius: 20,
    marginTop: 20,
  },
  navButton: {
    padding: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default ClientDashboard;
