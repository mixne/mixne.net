import styles from './links.module.css'

export function SocialLink(
    props:
    {href:string, serviceName:string, id:string, icon: JSX.Element, color:any}
) {
    let r = props.color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
    let c = null
    if (r) {
        c = r.slice(1,4).map(function(x: string) { return parseInt(x, 16) })
    }
    const color = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.1)`

    return (
        <a href={props.href} className={styles.link} target="_blank" rel="noreferrer">
            <span className={`${styles.icon}`} style={{backgroundColor: color}}>{props.icon}</span>
            <div className={styles.text}>
                <span className={styles.service}>{props.serviceName}</span>
                <span className={styles.id}>{props.id}</span>
            </div>
        </a>
    )
}