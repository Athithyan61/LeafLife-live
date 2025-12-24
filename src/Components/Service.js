import React from 'react'
import styles from '../styles/Service.module.css'
import services from "../data/Service.json";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
export default function Service() {
    const navigate = useNavigate()
    return (
        <section>
            <div className={styles.serviceBg}>
                <div className={styles.title}>
                    <div className={styles.links}>
                        <a href="">Home |</a>
                        <a href="">Services</a>
                    </div>
                    <h1>OUR SERVICES</h1>
                </div>

            </div>
            <div className={styles.service}>
                <div className={styles.serviceCards}>
                    <div className={styles.grid}>
                        {services.map(service => (
                            <div
                                key={service.id}
                                className={styles.Scard}
                                onClick={() => navigate(`/services/${service.id}`)}
                            >
                                <img src={service.image} alt={service.title} />

                                {/* Arrow Icon */}
                                <span className={styles.icon}>
                                    <FiArrowUpRight size={40}/>
                                </span>

                                <div className={styles.overlay}>
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
