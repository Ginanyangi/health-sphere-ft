import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import Navbar from './components/Navbar';
import BookingForm from './components/Booking';
import PrescriptionForm from './components/Prescription';
import Home from './components/Home';
import FacilitySearch from './components/Places';
import Facilities from './components/Facilities';
import AdminDashboard from './components/AdminDashboard';
import ContactForm from './components/Contact';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';


const App =()=> {
  return (
    <Router>
      <Navbar />
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<FacilitySearch />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          {/* <Route path="/booking" element={<BookingForm />} />
          <Route path="/prescription" element={<PrescriptionForm />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/contact" element={<ContactForm />} /> */}
          <Route path="/booking"
          element={
             <PrivateRoute>
                  <BookingForm />
            </PrivateRoute>}/>
        <Route
          path="/prescription"
          element={
            <PrivateRoute>
              <PrescriptionForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        </Routes>
       </div>
       <div>
        <Footer />
       </div>
    </Router>
  );
}

export default App;
