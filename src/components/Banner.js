import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Banner.module.scss"
export default function Banner({title, subtitle, backBtn}){
    return(
        <div className={styles.container}>
            <Link href={backBtn}> 
                <Image 
                src={"/Vector.svg"} 
                width={16}
                height={16}
                priority
                alt="BackButton"/>
            </Link>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}