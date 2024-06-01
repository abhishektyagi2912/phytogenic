import React from "react";
import styles from "../../lib/styles/Home.module.css";
import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";
import Image from "next/image";

const Category = async () => {
  const collections = await getCollections();

  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.category}>
          {collections.map((collection: CollectionType) => (
            <Link href={`/Product/${collection._id}`} key={collection._id} className="nana" style={{textDecoration:'none'}}>
              <div className={styles.image}>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer"
                />
              </div>
              <h3 className={styles.catName}>{collection.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
