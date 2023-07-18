import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SendEmail from './SendEmail';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
  recaptcha: string;
};



const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("submitting")
    setIsSubmitting(true);
    const token = await recaptchaRef.current?.executeAsync();
    console.log('Form data:', data);
    console.log('reCAPTCHA token:', token);
    try{
      if (token) { // Add a check to ensure that the email parameter is not null or undefined
        await SendEmail(data.email, data.message, data.name, token);
        console.log("sent")
        setIsSubmitting(false);
        setSubmitSuccess(true);
        reset();
      } else {
        console.log("Email parameter is null or undefined");
        setIsSubmitting(false);
      }
    }catch(e){
      console.log(e)
    }  
  };


  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className='contactform' id = "contact">
        <div className="contact-container flex flex-col">
            <div className="contact-header flex flex-col">
                <div className="contact-title font-bold text-lg text-slate-200 mt-10">Contact</div>
                <div className="contact-sub text-sm text-slate-500">I am seeking for opportunities and great people with great mind all the time. If you would like to get in contact with me, send me a message!</div>
            </div>
            <div className="contact-box rounded-2xl flex min-h-full flex-col p-2 min-w-full h-full">
                <div className="contact-details flex min-w-full gap-1 mb-1">
                    <div className="name-box w-1/2 flex">
                    <input type="text" id="name" {...register('name', { required: true })} placeholder={errors.message ? "Name field is required!" : 'Name'}  className='w-full border-2 rounded-md border-slate-500 bg-transparent pl-2 pr-2 pt-1 pb-1'  value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="email-box w-1/2 flex">
                    <input type="email" id="email" {...register('email', { required: true })} placeholder={errors.message ? "Email field is required" : 'Email'}  className='w-full border-2 rounded-md border-slate-500 bg-transparent pl-2 pr-2 pt-1 pb-1' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                </div>
                <div className="message-box w-full h-24 flex">
                <textarea id="message" {...register('message', { required: true })} placeholder={errors.message ? "Message field is required" : 'Message'}  className='w-full border-2 rounded-md border-slate-500 bg-transparent h-full pl-2 pr-2 pt-1 pb-1' value={message} onChange={(event) => setMessage(event.target.value)}/>
                </div>
            </div>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lfnhy4nAAAAAG_mU3BBeuDZN9eTNv_oWhm-RMk7"
                size="invisible"
            />
            <div className="submit-box mb-10">
                <button type="submit" disabled={isSubmitting || submitSuccess} className='bg-transparent, text-slate-400' >{isSubmitting ? 'Sending...' : (submitSuccess ? 'Sent!' : 'Send Message')} <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    </form>
  );
};

export default ContactForm;



