'use client'
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { layouts } from '.';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(layouts[0]);

  useEffect(() => {
    emailjs.init("ldpvuQWFWE9-Ov2Ph"); // Initialize EmailJS with your user ID
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const templateParams = {
      name,
      email,
      message,
      html: selectedLayout.template
        .replace('{{name}}', name)
        .replace('{{email}}', email)
        .replace('{{message}}', message)
        .replace('{{currentDate}}', currentDate)
    };

    try {
      await emailjs.send(
        'service_9zmvmm8',
        'template_9d9hw7p',
        templateParams
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.05, transition: { duration: 0.3 } },
    blur: { scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, yoyo: Infinity } }
  };

  return (
    <motion.div 
      className={styles.contactContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.backgroundAnimation}
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      />
      <h1 className={styles.title}>Get in Touch</h1>
      <div className={styles.layoutSelector}>
        {layouts.map(layout => (
          <motion.div
            key={layout.id}
            className={`${styles.layoutOption} ${selectedLayout.id === layout.id ? styles.selected : ''}`}
            onClick={() => setSelectedLayout(layout)}
            whileHover={{ scale: 1.1, backgroundColor: '#e0e0e0' }}
            transition={{ duration: 0.3 }}
          >
            {layout.name}
          </motion.div>
        ))}
      </div>
      <div className={styles.previewContainer}>
        <div className={styles.previewContent} dangerouslySetInnerHTML={{ __html: selectedLayout.template.replace('{{name}}', name).replace('{{email}}', email).replace('{{message}}', message) }} />
      </div>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={styles.thankYouMessage}
          >
            <h2>Thank you for reaching out!</h2>
            <p>We&apos;ll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            className={styles.form}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={formVariant}
          >
            <motion.div
              className={styles.formGroup}
              variants={inputVariants}
            >
              <label htmlFor="name" className={styles.label}>Name</label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                whileHover="hover"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                required
              />
            </motion.div>
            <motion.div
              className={styles.formGroup}
              variants={inputVariants}
            >
              <label htmlFor="email" className={styles.label}>Email</label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                whileHover="hover"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </motion.div>
            <motion.div
              className={styles.formGroup}
              variants={inputVariants}
            >
              <label htmlFor="message" className={styles.label}>Message</label>
              <motion.textarea
                variants={inputVariants}
                whileFocus="focus"
                whileHover="hover"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                required
              ></motion.textarea>
            </motion.div>
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.1, backgroundColor: '#3f51b5' }}
              whileTap={{ scale: 0.9 }}
              disabled={isLoading}
              transition={{ duration: 0.2 }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
