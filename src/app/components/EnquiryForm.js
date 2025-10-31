"use client"; 

import React, { useState } from 'react';

// 1. All extra imports (Popover, Command, etc.) are gone.
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// 2. We just import our new, clean component
import { PhoneNumberInput } from './PhoneNumberInput';

function EnquiryForm() {
  
  // 3. We only need one state for the phone number
  const [phoneNumber, setPhoneNumber] = useState("+91"); // Default to India

  return (
    <form
      action="https://formspree.io/f/YOUR_UNIQUE_ID_HERE" // <-- PASTE YOUR FORMSPREE URL
      method="POST"
      className="grid w-full gap-8"
    >
      {/* --- Name and Email --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-gray-900 dark:text-brand-white">Name *</Label>
          <Input
            type="text" id="name" name="name" 
            placeholder="Enter your name" required
            className="bg-white dark:bg-brand-deep-space placeholder:text-gray-500 dark:placeholder:text-gray-400" 
            autoComplete="name" 
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email" className="text-gray-900 dark:text-brand-white">Email Address *</Label>
          <Input
            type="email" id="email" name="email" 
            placeholder="Enter your email address" required
            className="bg-white dark:bg-brand-deep-space placeholder:text-gray-500 dark:placeholder:text-gray-400"
            autoComplete="email" 
          />
        </div>
      </div>

      {/* --- Phone Number Field --- */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phone-number" className="text-gray-900 dark:text-brand-white">Phone Number *</Label>
        
        {/* 4. We use our clean component here. All the extra code is gone. */}
        <PhoneNumberInput
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        
        <p className="text-sm text-gray-500 dark:text-gray-300">Please enter a valid phone number.</p>
      </div>

      {/* --- Hidden Input for Formspree --- */}
      <input type="hidden" name="phone" value={phoneNumber} />

      {/* --- Enquiry Regarding --- */}
      <div className="grid w-full items-center gap-3">
        <Label className="text-gray-900 dark:text-brand-white">Enquiry Regarding *</Label>
        <RadioGroup defaultValue="music-production" name="enquiry-type" className="space-y-3" required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Music Production" id="r1" />
            <Label htmlFor="r1" className="text-gray-900 dark:text-gray-100 font-normal">Music Production</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Mixing / Mastering" id="r2" />
            <Label htmlFor="r2" className="text-gray-900 dark:text-gray-100 font-normal">Mixing / Mastering</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Recording" id="r3" />
            <Label htmlFor="r3" className="text-gray-900 dark:text-gray-100 font-normal">Recording</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Jingle / Advertisement" id="r4" />
            <Label htmlFor="r4" className="text-gray-900 dark:text-gray-100 font-normal">Jingle / Advertisement</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Background Music / Foley" id="r5" />
            <Label htmlFor="r5" className="text-gray-900 dark:text-gray-100 font-normal">Background Music / Foley</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Other" id="r6" />
            <Label htmlFor="r6" className="text-gray-900 dark:text-gray-100 font-normal">Other</Label>
          </div>
        </RadioGroup>
      </div>

      {/* --- Message Field --- */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message" className="text-gray-900 dark:text-brand-white">If &quot;Other&quot;, please specify (or add your message here):</Label>
        <Textarea
          id="message" name="message" 
          placeholder="Tell us about your project..."
          className="bg-white dark:bg-brand-deep-space placeholder:text-gray-500 dark:placeholder:text-gray-400"
          rows={4} 
        />
      </div>

      {/* --- Submit Button --- */}
      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-brand-white">
        Submit
      </Button>
    </form>
  );
};

export default EnquiryForm;