import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import style from './style.module.scss';
import { PRIVACY_POLICY_WARNING } from '@constants/constants';

type FormFields = 'name' | 'company' | 'email' | 'phone' | 'subject' | 'budget' | 'description';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",  
        budget: "",
        description: ""
    });

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTextareaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = textareaRef.current;
    
        if (textarea) {
            // Set height based on scrollHeight, limiting it to a maximum height
            const newHeight = Math.min(textarea.scrollHeight, 100); // Restrict height to max 100px
            textarea.style.height = `${newHeight}px`; // Set new height
    
            // Enable scroll if the content exceeds 100px
            textarea.style.overflowY = textarea.scrollHeight > 100 ? 'auto' : 'hidden';
        }
    
        handleChange(e);  // Update form data
    };
    
    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
    };

    const renderInputLabel = (fieldName: FormFields, label: string) => {
        return formData[fieldName] ? (
            <label className={style.inputLabel}>{label}</label>
        ) : null;
    };

    return (
        <div className={style.contactContainer}>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.formGroup}>
                    {renderInputLabel('name', 'Name')}
                    <input
                        className={style.inputField}
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name*'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={style.formGroup}>
                    {renderInputLabel('company', 'Company')}
                    <input
                        className={style.inputField}
                        type="text"
                        id="company"
                        name="company"
                        placeholder='Company*'
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={style.formGroup}>
                    {renderInputLabel('email', 'Email')}
                    <input
                        className={style.inputField}
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Corporate Email*'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={style.formGroup}>
                    {renderInputLabel('phone', 'Phone')}
                    <input
                        className={style.inputField}
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='Phone*'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={style.formGroup}>
                    {renderInputLabel('subject', 'Subject')}
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>
                            Subject*
                        </option>
                        <option value="IT Staff Augmentation">IT Staff Augmentation</option>
                        <option value="Turnkey Product Development">Turnkey Product Development</option>
                        <option value="Support and Enhancement">Support and Enhancement</option>
                        <option value="Careers">Careers</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    {renderInputLabel('budget', 'Project budget (min.$15K)*')}
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>
                            Project budget (min.$15K)*
                        </option>
                        <option value="$15k-$30k">$15k-$30k</option>
                        <option value="$30k-$100k">$30k-$100k</option>
                        <option value="$100k-$250k">$100k-$250k</option>
                        <option value="More than $250k">More than $250k</option>
                    </select>
                </div>
                <div className={style.formGroup + ' ' + style.fullWidth}>
                    <textarea 
                        className={style.dynamicTextarea}
                        name="description" 
                        id="description"
                        placeholder='Describe your needs in detail'
                        value={formData.description}
                        onChange={handleTextareaInput}
                        ref={textareaRef}
                        required
                    />
                </div>
                <div className={style.descriptionSuggestion}>Please include project details, duration, tech stack, IT professionals needed, and other relevant info</div>
                <div className={style.attachment}>
                    <div className={style.recording}>
                        <div className={style.recordingDescription}>
                        Record a voice message about your<br />
                        project to help us understand it better
                        </div>
                        <button type="button" className={style.recordButton}>Record</button>
                    </div>
                    <div className={style.uploadFile}>
                    <div className={style.uploadDescription}>
                        Attach additional documents as needed
                    </div>
                    <div className={style.uploadContainer}> {/* Add this wrapper */}
                        <button type="button" className={style.uploadButton}>Upload file</button>
                        <div className={style.uploadDetails}>?</div>
                    </div>
                </div>
                </div>
                <div className={style.submitBtnContainer}>
                    <div className={style.privacyWarning}>
                        {PRIVACY_POLICY_WARNING.split("Privacy Policy")[0]}
                        <span className={style.privacyPolicy}>Privacy Policy</span>
                        {PRIVACY_POLICY_WARNING.split("Privacy Policy")[1]}
                    </div>
                    <button type="submit" className={style.submitBtn}>Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;