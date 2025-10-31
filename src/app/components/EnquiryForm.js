"use client"; 

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// --- NEW IMPORTS ---
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { PhoneNumberInput } from './PhoneNumberInput';

// --- Formspree Endpoint ---
const FORMSPREE_URL = "https://formspree.io/f/mzzkjnro"; // Use your actual Formspree URL

function EnquiryForm() {
  
  // --- State for Phone Input ---
  const [phoneNumber, setPhoneNumber] = useState("+91"); 
  
  // --- State for Form UI ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  // --- 1. NEW: Form Data Handler ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    
    // Reset status
    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmissionError(false);

    try {
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setIsSubmitted(true);
            form.reset(); // Clear the form fields
            
            // Auto-hide success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
            
        } else {
            // Handle HTTP errors or Formspree validation errors
            setSubmissionError(true);
            setTimeout(() => setSubmissionError(false), 5000);
        }
    } catch (error) {
        console.error("Submission failed:", error);
        setSubmissionError(true);
        setTimeout(() => setSubmissionError(false), 5000);
    } finally {
        setIsSubmitting(false);
    }
  };


  return (
    // 2. We use the JavaScript handleSubmit function instead of the HTML action attribute
    <form onSubmit={handleSubmit} className="grid w-full gap-8">
      
      {/* --- SUCCESS ALERT --- */}
      {isSubmitted && (
          <Alert className="border-green-500 bg-green-900/10 text-green-500 dark:border-green-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle>Message Sent!</AlertTitle>
              <AlertDescription>
                  Your enquiry has been received successfully. We will contact you soon.
              </AlertDescription>
          </Alert>
      )}

      {/* --- ERROR ALERT --- */}
      {submissionError && (
          <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Submission Error</AlertTitle>
              <AlertDescription>
                  There was an issue sending your message. Please check your inputs or try again.
              </AlertDescription>
          </Alert>
      )}

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
      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-brand-white" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

export default EnquiryForm;