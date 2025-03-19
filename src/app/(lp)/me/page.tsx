import { Metadata } from 'next'

import { Links } from '@/const/links';

import { SocialLink } from './_components/socialLink';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'しおんのプロフィール',
}

export default function StaticPage() {
    return (
        <div className={styles.me}>
            <p className={styles.name}>しおん</p>
            <p className={styles.enName}>shioncha</p>
            <h1>Profile</h1>
            <p >19y/o<br/>PCとアニメが好きな学生</p>
            <div className={styles.links}>
                <h1>Links</h1>
                {Links.map((link) => {
                    return <SocialLink key={link.href} href={link.href} serviceName={link.serviceName} id={link.id} color={link.color} icon={link.icon}/>
                })}
            </div>
        </div>
    )
}