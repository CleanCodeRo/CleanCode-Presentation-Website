'use client'

import React from 'react';
import ContactForm from '@components/ContactForm';
import WhatNext from '@components/WhatNext';
import style from './style.module.scss';
import { CONTACT_TITLE, CONTACT_DESCRIPTION } from '@constants/constants';

const Contact=()=> {

    return (
        <div className={style.contactComponent}>
        <div className={style.TitleAndDescription}>
            <div className={style.contactTitle}>{CONTACT_TITLE}</div>
            <div className={style.contactDescription}>{CONTACT_DESCRIPTION}</div>
        </div>
        <div className={style.contactSubComponent}>
            <ContactForm />
            <WhatNext />
        </div>
        </div>
    )
}
export default Contact;