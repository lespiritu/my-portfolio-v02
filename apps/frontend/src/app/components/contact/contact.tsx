import styles from './contact.module.scss';
import { Button } from '@ui-design';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const form = useRef<HTMLFormElement>(null!);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = (e: any): void => {
    e.preventDefault();

    emailjs.sendForm('service_tf11y1l', 'template_cexcgqg', form.current, 'JaH9Kx28Q7vIRroEv').then(
      (result) => {
        alert('message sent');
      },
      (error) => {
        alert('Sorry message cannot send this time.');
      }
    );

    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="name" placeholder="Your Name" required />

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="e.g. youremail@gmail.com"
        />

        <textarea
          required
          name="message"
          id="message"
          className={styles.message}
          rows={10}
          placeholder="Your message here"
        ></textarea>

        <Button label="Send Email" />
      </form>
    </div>
  );
};
