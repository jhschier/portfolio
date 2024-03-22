"use client"

import { motion } from "framer-motion"

const TestPage = () => {

    const variants = {
        variant1: {x:400, y:300, opacity: 0.5, transition: {
            duration: 1
        }},
        variant2: {x: 100, y: -300, rotation: 250, opacity: 0.8},
    }
    return (
        <div className="flex items-center justify-center h-full">
            <motion.div className="bg-red-400 rounded w-96 h-96" initial={{x:-100}} variants={variants} animate="variant1"></motion.div>
        </div>
    )
}

export default TestPage