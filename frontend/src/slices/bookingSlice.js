import { BOOKINGS_URL, PAYPAL_URL } from '../utils/constants.js';
import { apiSlice } from './apiSlice.js';

export const bookingSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query({
            query: () => ({
                url: BOOKINGS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getBookingDetails: builder.query({
            query: (bookingId) => ({
                url: `${BOOKINGS_URL}/${bookingId}`,
            }),
            invalidatesTags: ['Booking'],
        }),
        createBooking: builder.mutation({
            query: (booking) => ({
                url: BOOKINGS_URL,
                method: 'POST',
                body: { ...booking },
            }),
        }),
        payBooking: builder.mutation({
            query: ({ bookingId, details }) => ({
                url: `${BOOKINGS_URL}/${bookingId}/pay`,
                method: 'PUT',
                body: details
            }),
        }),
        getPaypalClientId: builder.query({
            query: () => ({
                url: PAYPAL_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getMyBookings: builder.query({
            query: () => ({
                url: `${BOOKINGS_URL}/mybookings`,
            }),
            keepUnusedDataFor: 5,
        }),

        updateCheckinBooking: builder.mutation({
            query: (bookingId) => ({
                url: `${BOOKINGS_URL}/checkin/${bookingId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Booking'],
        }),
        updateCheckOutBooking: builder.mutation({
            query: (bookingId) => ({
                url: `${BOOKINGS_URL}/checkout/${bookingId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Booking'],
        }),
        deleteBooking: builder.mutation({
            query: (bookingId) => ({
                url: `${BOOKINGS_URL}/${bookingId}`,
                method: 'DELETE',
            }),
            providesTags: ['Booking'],
        }),
        getBookingsAfterDate: builder.query({
            query: (date) => ({
                url: `${BOOKINGS_URL}/getBookingsAfterDate/${date}`,
            }),
            providesTags: ['Booking'],
        }),
        getStaysAfterDate: builder.query({
            query: (date) => ({
                url: `${BOOKINGS_URL}/getStaysAfterDate/${date}`,
            }),
            providesTags: ['Booking'],
        }),
        getActivities: builder.query({
            query: (date) => ({
                url: `${BOOKINGS_URL}/todayActivities/${date}`,
            }),
            providesTags: ['Booking'],
        }),
    }),
})

export const { useGetBookingsQuery, useGetBookingDetailsQuery, useUpdateCheckinBookingMutation,
    useUpdateCheckOutBookingMutation, useDeleteBookingMutation, useGetBookingsAfterDateQuery,
    useGetStaysAfterDateQuery, useGetActivitiesQuery, useCreateBookingMutation, usePayBookingMutation, useGetPaypalClientIdQuery, useGetMyBookingsQuery } = bookingSlice