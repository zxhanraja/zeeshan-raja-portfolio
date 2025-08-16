import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State for form inputs and validation
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  // Web3Forms Access Key
  const accessKey = "2a3e3b3e-c365-4dbb-b8a9-386ed001d25f";

  // Effect to validate the form whenever inputs change
  useEffect(() => {
    const { name, email, message } = formValues;
    // Basic email regex for validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isFormComplete = name.trim() !== '' && message.trim() !== '' && email.trim() !== '';
    setIsFormValid(isFormComplete && isEmailValid);
  }, [formValues]);

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // An extra check, though the button should be disabled.
    if (!isFormValid) {
        setIsSubmitting(false); // Stop submission process
        setError("Please fill out all fields with valid information.");
        return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", accessKey);
    
    // Add a subject for the email
    formData.append("subject", "New Contact Form Submission from your Portfolio");
    formData.append("from_name", "Portfolio Contact Form");


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setFormValues({ name: '', email: '', message: '' }); // Reset React state
      } else {
        console.error("Error from Web3Forms:", data);
        setError(data.message || "An error occurred while sending the message. Please try again.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError("An error occurred. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8F5F2] dark:bg-[#1C1A19]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4237] dark:text-[#FDFBFA]">Get In Touch</h2>
          <p className="text-lg text-[#6B6258] dark:text-[#D1CAC2] mt-2">I'm ready to discuss how I can contribute to your team. Let's connect.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-[#EAE6E1] dark:bg-[#2C2722] p-8 md:p-12 rounded-lg shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
          {submitted ? (
            <div className="text-center p-4">
              <h3 className="text-2xl font-bold text-[#A68A68]">Thank you!</h3>
              <p className="text-[#6B6258] dark:text-[#D1CAC2] mt-2">Your message has been sent. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold text-[#6B6258] dark:text-[#D1CAC2] mb-2">Full Name</label>
                <input required type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className="w-full px-4 py-3 bg-[#F8F5F2] dark:bg-[#1C1A19] text-[#4B4237] dark:text-[#FDFBFA] rounded-md border border-[#D1CAC2] dark:border-[#4B4237] focus:outline-none focus:ring-2 focus:ring-[#A68A68] transition-colors" placeholder="Your Name" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold text-[#6B6258] dark:text-[#D1CAC2] mb-2">Email Address</label>
                <input required type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className="w-full px-4 py-3 bg-[#F8F5F2] dark:bg-[#1C1A19] text-[#4B4237] dark:text-[#FDFBFA] rounded-md border border-[#D1CAC2] dark:border-[#4B4237] focus:outline-none focus:ring-2 focus:ring-[#A68A68] transition-colors" placeholder="your.email@example.com" />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-[#6B6258] dark:text-[#D1CAC2] mb-2">Message</label>
                <textarea required id="message" name="message" rows={5} value={formValues.message} onChange={handleChange} className="w-full px-4 py-3 bg-[#F8F5F2] dark:bg-[#1C1A19] text-[#4B4237] dark:text-[#FDFBFA] rounded-md border border-[#D1CAC2] dark:border-[#4B4237] focus:outline-none focus:ring-2 focus:ring-[#A68A68] transition-colors" placeholder="Your message..."></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting || !isFormValid}
                  className="w-full sm:w-auto px-10 py-4 font-bold text-white bg-[#A68A68] rounded-full hover:bg-[#8e7558] transition-all duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {error && (
                <div className="text-center mt-4 text-red-600 font-medium">
                  <p>{error}</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;