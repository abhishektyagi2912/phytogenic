'use client';
import React, { useEffect, useState } from "react";
import styles from "../../lib/styles/Home.module.css";
import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      const fetchedCollections = await getCollections();
      setCollections(fetchedCollections.reverse());
      setLoading(false);
    };
    fetchCollections();
  }, []);

  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.category}>
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="nana" style={{ margin: '20px', textDecoration: 'none' }}>
                <div className={styles.image}>
                  <Skeleton height={200} />
                </div>
                <h3 className={styles.catName}><Skeleton width={100} /></h3>
              </div>
            ))
          ) : (
            collections.map((collection: CollectionType, index: number) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
