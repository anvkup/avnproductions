"use client"

import React from 'react';
import 'react-phone-number-input/style.css'; 
import 'flag-icons/css/flag-icons.min.css';

import PhoneInputWithCountry from 'react-phone-number-input';
import { countries } from "@/lib/countries"; 

export function PhoneNumberInput({ value, onChange }) {
  
  const allowedCountries = countries.map(c => c.label.split('(')[0].trim());

  return (
    <PhoneInputWithCountry
      name="phoneInput"
      value={value}
      onChange={onChange}
      countries={allowedCountries}
      defaultCountry="IN"
      // 1. ADD THIS TARGET CLASS: 
      className="PhoneInputCustom flex" 
      
      // 2. We don't need inputComponentProps to hold all the styling now
      //    We rely on the global CSS to style the input.
    />
  );
}