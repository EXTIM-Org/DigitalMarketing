"use client";

import React, { useState } from 'react';
import ContactForm from './ContactForm';

export default function ContactModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="btn-primary" 
        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
        onClick={() => setIsModalOpen(true)}
      >
        درخواست مشاوره
      </button>
      
      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
