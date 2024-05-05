import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config.js';
import DoctorCard from "./../../components/Doctors/DoctorCard"
import Loading from "../../Loader/Loading"
import Error from '../../Error/Error';

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/api/v1/users/appointments/my-appointments`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errMessage={error} />;
  }

  // Check if appointments is undefined or null
  if (!appointments) {
    return <div><h2 className='mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor'>You didnot book any doctor yet</h2></div>;
  }

  // Check if appointments is an array and has length
  if (!Array.isArray(appointments) || appointments.length === 0) {
    return <div><h2 className='mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor'>You didnot book any doctor yet</h2></div>;
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      {appointments.map(doctor => (
        <DoctorCard doctor={doctor} key={doctor._id} />
      ))}
    </div>
  );
};

export default MyBookings;
