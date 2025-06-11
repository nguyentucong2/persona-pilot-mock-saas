import React from 'react';
import { motion } from "framer-motion";
//import flip from "../assets/flip.png";

export default function FlippingFeatureCard({ front, back, frontImg }) {
    const [flipped, setFlipped] = React.useState(false);

    function flipCard() {
        setFlipped(prevFlipped => !prevFlipped);
    }

    return (
        <motion.section 
            className="feature"
            onMouseEnter={flipCard}
            onMouseLeave={flipCard}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: "relative", perspective: 1000, transformStyle: "preserve-3d" }}
        >
            <div className="front">
                <img src={frontImg} className="feature-image" width={'50px'}/>
                <h3>{front}</h3>
                {/*<div className='flip-icon'>
                    <p>Learn more</p>
                    <img src={flip} alt="Click to flip" width={'20px'}/>
                </div>*/}
            </div>
            <div className="back">
                <p>{back}</p>
            </div>
        </motion.section>
    );
}
