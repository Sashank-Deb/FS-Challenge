import InvoiceItem from "./InvoiceItem"
import styles from '@/styles/Home.module.scss'
export default function InvoiceList({invoices}){
    return(
        <div className={styles.invoicesContainer}>
                {
                invoices.map((item) =>{
                        return(
                                <InvoiceItem key={item.retailer_Name} invoice={item}/>
                        )
                })
                }
            </div>
    )
}