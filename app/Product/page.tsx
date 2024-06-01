import React from "react";
import styles from "../../lib/styles/Home.module.css";
function Category() {
  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.image}>
            <img src="/images/herbal-6.jpg" alt="slider1" />
          </div>
          <h3 className={styles.catName}>Cartridges</h3>
        </div>
        <div className={styles.category}>
          <div className={styles.image}>
            <img src="/images/herbal-1.jpg" alt="slider1" />
          </div>
          <h3 className={styles.catName}>Cartridges</h3>
        </div>
        <div className={styles.category}>
          <div className={styles.image}>
            <img src="/images/herbal-2.jpg" alt="slider1" />
          </div>
          <h3 className={styles.catName}>Cartridges</h3>
        </div>
        <div className={styles.category}>
          <div className={styles.image}>
            <img src="/images/herbal-3.jpg" alt="slider1" />
          </div>
          <h3 className={styles.catName}>Cartridges</h3>
        </div>
        <div className={styles.category}>
          <div className={styles.image}>
            <img src="/images/herbal-5.jpg" alt="slider1" />
          </div>
          <h3 className={styles.catName}>Cartridges</h3>
        </div>
      </div>
    </section>
  );
}

export default Category;
