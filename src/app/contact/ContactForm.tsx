"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import styles from "./ContactForm.module.css";

interface FormState {
  fullName: string;
  phone: string;
  carModel: string;
  vehicleType: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  carModel?: string;
  vehicleType?: string;
  serviceRequired?: string;
}

const VEHICLE_TYPES = [
  "Hatchback",
  "Sedan",
  "SUV",
  "Luxury / Premium",
  "Other",
];

const SERVICE_OPTIONS = [
  "Foam Wash",
  "Exterior Detailing",
  "Interior Deep Cleaning",
  "Paint Polishing",
  "Ceramic Protection",
  "Denting & Painting",
  "Not Sure",
];

const TIME_SLOTS = [
  "Morning (9:00 AM – 1:00 PM)",
  "Afternoon (1:00 PM – 5:00 PM)",
  "Evening (5:00 PM – 7:00 PM)",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    carModel: "",
    vehicleType: "Hatchback",
    serviceRequired: "Interior Deep Cleaning",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM – 1:00 PM)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.carModel.trim()) {
      newErrors.carModel = "Please enter your car make and model (e.g. Maruti Swift, Hyundai Creta)";
    }

    if (!formData.vehicleType) {
      newErrors.vehicleType = "Please select a vehicle type";
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select a detailing service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Fully client-side demo submission — NO backend, NO database, NO API
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      carModel: "",
      vehicleType: "Hatchback",
      serviceRequired: "Interior Deep Cleaning",
      preferredDate: "",
      preferredTime: "Morning (9:00 AM – 1:00 PM)",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={styles.confirmationContainer} role="status">
        <div className={styles.successIconWrapper}>
          <CheckIcon size={24} />
        </div>

        <h3 className={styles.confirmationTitle}>Enquiry Recorded</h3>

        <p className={styles.confirmationMessage}>
          Thank you. Your vehicle enquiry has been recorded on this studio demonstration presentation.
        </p>

        <div className={styles.enquirySummaryBox}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryKey}>Client Name</span>
            <span className={styles.summaryVal}>{formData.fullName}</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryKey}>Phone</span>
            <span className={styles.summaryVal}>{formData.phone}</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryKey}>Vehicle</span>
            <span className={styles.summaryVal}>
              {formData.carModel} ({formData.vehicleType})
            </span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryKey}>Service</span>
            <span className={styles.summaryVal}>{formData.serviceRequired}</span>
          </div>
          {formData.preferredDate && (
            <div className={styles.summaryRow}>
              <span className={styles.summaryKey}>Preferred Date</span>
              <span className={styles.summaryVal}>{formData.preferredDate}</span>
            </div>
          )}
          <div className={styles.summaryRow}>
            <span className={styles.summaryKey}>Time Slot</span>
            <span className={styles.summaryVal}>{formData.preferredTime}</span>
          </div>
        </div>

        <p className={styles.demoDisclaimer}>
          Note: This is a front-end demonstration website. No personal data has been stored or transmitted to external servers.
        </p>

        <div>
          <Button type="button" variant="outline" size="md" onClick={handleReset}>
            Submit Another Demo Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>REQUEST YOUR DETAIL</h2>
        <p className={styles.formSubtitle}>
          Share a few details about your vehicle and we&apos;ll help you choose the right service.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              <span>Full Name</span>
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g. Rohan Verma"
              value={formData.fullName}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.fullName ? styles.inputError : ""
              }`}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <span id="fullName-error" className={styles.errorText}>
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              <span>Phone Number</span>
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="e.g. +91 98100 12345"
              value={formData.phone}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.phone ? styles.inputError : ""
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <span id="phone-error" className={styles.errorText}>
                {errors.phone}
              </span>
            )}
          </div>

          {/* Car Model */}
          <div className={styles.formGroup}>
            <label htmlFor="carModel" className={styles.label}>
              <span>Car Model</span>
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            <input
              id="carModel"
              name="carModel"
              type="text"
              placeholder="e.g. Hyundai Creta, Maruti Swift, Nexon"
              value={formData.carModel}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.carModel ? styles.inputError : ""
              }`}
              aria-invalid={!!errors.carModel}
              aria-describedby={errors.carModel ? "carModel-error" : undefined}
            />
            {errors.carModel && (
              <span id="carModel-error" className={styles.errorText}>
                {errors.carModel}
              </span>
            )}
          </div>

          {/* Vehicle Type */}
          <div className={styles.formGroup}>
            <label htmlFor="vehicleType" className={styles.label}>
              <span>Vehicle Type</span>
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className={styles.select}
            >
              {VEHICLE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Service Required */}
          <div className={styles.formGroup}>
            <label htmlFor="serviceRequired" className={styles.label}>
              <span>Service Required</span>
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={styles.select}
            >
              {SERVICE_OPTIONS.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Date */}
          <div className={styles.formGroup}>
            <label htmlFor="preferredDate" className={styles.label}>
              <span>Preferred Date</span>
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          {/* Preferred Time */}
          <div className={`${styles.formGroup} ${styles.fieldFull}`}>
            <label htmlFor="preferredTime" className={styles.label}>
              <span>Preferred Time Slot</span>
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={styles.select}
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Message */}
          <div className={`${styles.formGroup} ${styles.fieldFull}`}>
            <label htmlFor="message" className={styles.label}>
              <span>Additional Message or Specific Concerns</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about specific stains, wash swirls, dent locations, or questions about packages..."
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn}>
            <span>BOOK A DETAIL</span>
            <span className={styles.btnArrow}>→</span>
          </button>

          <div className={styles.demoNoticeBanner}>
            Demo Note: This form performs front-end validation only. No personal data will be collected, stored, or sent to a database.
          </div>
        </div>
      </form>
    </div>
  );
}
