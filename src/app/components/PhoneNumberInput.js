"use client"

import React from 'react'
import 'react-phone-number-input/style.css' 
import 'flag-icons/css/flag-icons.min.css'

import PhoneInputWithCountry from 'react-phone-number-input'
import { countries } from "@/lib/countries" 

export function PhoneNumberInput({ value, onChange }) {
  
  const allowedCountries = countries.map(c => c.label.split('(')[0].trim());

  return (
    <PhoneInputWithCountry
      name="phoneInput"
      value={value}
      onChange={onChange}
      countries={allowedCountries}
      defaultCountry="IN"
      // Apply the flex container styling
      className="flex" 
      
      // --- Country Dropdown Styling ---
      countrySelectComponentProps={{
        // Use !important to ensure dark background overrides library styles
        className: "bg-white dark:!bg-brand-deep-space rounded-l-md border dark:border-input h-10" // h-10 added for consistency
      }}
      
      // --- Phone Number Input Styling ---
      inputComponentProps={{
        // 1. (FIX) Use !important to force the dark background color
        className: "flex-1 bg-white dark:!bg-brand-deep-space rounded-r-md border-l-0 border dark:border-input placeholder:text-gray-500 dark:placeholder:text-gray-400 !ring-0 !ring-offset-0 !shadow-none h-10" // h-10 added for consistency
      }}
    />
  )
}