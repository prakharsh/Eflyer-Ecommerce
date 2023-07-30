import React from 'react'
import styles from '../styles/DisplayProd.module.css'
function DisplayProd({prod}) {
  return (
    <div className={styles.item_con}>
      {
        prod.map((obj,idx)=>(
          <div className={`col-lg-4 col-sm-4 ${styles.item_box}`} key={idx}>
                                 <h4 className={styles.item_name}>{obj.title}</h4>
                                 <p className={styles.item_price}>Price  <span style={{"color": "#262626"}}>${obj.price}</span></p>
                                 <div className={styles.item_img}>< img src={obj.image} className={styles.item_img} alt=""/></div>
                                 <div className={styles.btn_main}>
                                    <a href="#" className={styles.link}>Buy Now</a>
                                    <a href="#" className={styles.link}>See More</a>
                                 </div>
                            
            </div>
        ))
      }
      </div>
  )
}

export default DisplayProd