import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';
import { notFound } from 'next/navigation';

export async function getCabin(id) {
  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching cabin:', error.message);
    notFound();
  }

  return data;
}

export async function getCabinPrice(id) {
  const { data, error } = await supabase
    .from('cabins')
    .select('regularPrice, discount')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching cabin price:', error.message);
    return null;
  }

  return data;
}

export async function getCabins() {
  const { data, error } = await supabase
    .from('cabins')
    .select('id, name, maxCapacity, regularPrice, discount, image')
    .order('name');

  if (error) {
    console.error('Error fetching cabins:', error.message);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function getGuest(email) {
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    console.error('Error fetching guest:', error.message);
  }

  return data; 
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching booking:', error.message);
    throw new Error('Booking could not get loaded');
  }

  return data;
}

export async function getBookings(guestId) {
  const { data, error } = await supabase
    .from('bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
    )
    .eq('guestId', guestId)
    .order('startDate');

  if (error) {
    console.error('Error fetching bookings:', error.message);
    throw new Error('Bookings could not get loaded');
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinId', cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error('Error fetching booked dates:', error.message);
    throw new Error('Bookings could not get loaded');
  }

  const bookedDates = data
    .map((booking) => eachDayOfInterval({
      start: new Date(booking.startDate),
      end: new Date(booking.endDate),
    }))
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .single();

  if (error) {
    console.error('Error fetching settings:', error.message);
    throw new Error('Settings could not be loaded');
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v2/all?fields=name,flag');
    if (!res.ok) throw new Error('Failed to fetch countries');
    return await res.json();
  } catch (err) {
    console.error('Error fetching countries:', err.message);
    throw new Error('Could not fetch countries');
  }
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from('guests')
    .insert([newGuest]);

  if (error) {
    console.error('Error creating guest:', error.message);
    throw new Error('Guest could not be created');
  }

  return data;
}

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([newBooking])
    .select()
    .single();

  if (error) {
    console.error('Error creating booking:', error.message);
    throw new Error('Booking could not be created');
  }

  return data;
}

export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating guest:', error.message);
    throw new Error('Guest could not be updated');
  }

  return data;
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating booking:', error.message);
    throw new Error('Booking could not be updated');
  }

  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting booking:', error.message);
    throw new Error('Booking could not be deleted');
  }

  return data;
}