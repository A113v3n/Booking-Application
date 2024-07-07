import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../services/api';

interface Attendant {
  _id: string;
  firstName: string;
  lastName: string;
}

interface Room {
  _id: string;
  name: string;
}

interface Location {
  _id: string;
  name: string;
}

const BookingScreen: React.FC = () => {
  const [client, setClient] = useState('');
  const [attendant, setAttendant] = useState('');
  const [room, setRoom] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [amenities, setAmenities] = useState('');
  const [attendants, setAttendants] = useState<Attendant[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const attendantsResponse = await api.get('/attendant');
      const roomsResponse = await api.get('/room');
      const locationsResponse = await api.get('/location');
      setAttendants(attendantsResponse.data);
      setRooms(roomsResponse.data);
      setLocations(locationsResponse.data);
    };
    fetchData();
  }, []);

  const handleBooking = async () => {
    try {
      await api.post('/booking', {
        client,
        attendant,
        room,
        location,
        startTime,
        endTime,
        amenities: amenities.split(',').map(amenity => amenity.trim()),
      });
      alert('Booking created successfully');
    } catch (error) {
      console.error('Booking failed', error);
      alert('Booking failed');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>Book a Room</Text>
      <TextInput
        placeholder="Client ID"
        value={client}
        onChangeText={setClient}
      />
      <Picker selectedValue={attendant} onValueChange={setAttendant}>
        <Picker.Item label="Select Attendant" value="" />
        {attendants.map(attendant => (
          <Picker.Item key={attendant._id} label={`${attendant.firstName} ${attendant.lastName}`} value={attendant._id} />
        ))}
      </Picker>
      <Picker selectedValue={room} onValueChange={setRoom}>
        <Picker.Item label="Select Room" value="" />
        {rooms.map(room => (
          <Picker.Item key={room._id} label={room.name} value={room._id} />
        ))}
      </Picker>
      <Picker selectedValue={location} onValueChange={setLocation}>
        <Picker.Item label="Select Location" value="" />
        {locations.map(location => (
          <Picker.Item key={location._id} label={location.name} value={location._id} />
        ))}
      </Picker>
      <TextInput
        placeholder="Start Time"
        value={startTime}
        onChangeText={setStartTime}
      />
      <TextInput
        placeholder="End Time"
        value={endTime}
        onChangeText={setEndTime}
      />
      <TextInput
        placeholder="Amenities (comma separated)"
        value={amenities}
        onChangeText={setAmenities}
      />
      <Button title="Book" onPress={handleBooking} />
    </ScrollView>
  );
};

export default BookingScreen;
