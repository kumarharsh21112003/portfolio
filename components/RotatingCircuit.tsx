"use client";

import { motion } from "framer-motion";
import {
    SiPython,
    SiAmazonwebservices,
    SiDocker,
    SiTensorflow,
    SiReact,
    SiNodedotjs,
    SiKotlin,
} from "react-icons/si";

const techIcons = [
    { Icon: SiAmazonwebservices, color: "#FF9900", name: "AWS" },
    { Icon: SiPython, color: "#3776AB", name: "Python" },
    { Icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
    { Icon: SiDocker, color: "#2496ED", name: "Docker" },
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { Icon: SiKotlin, color: "#7F52FF", name: "Kotlin" },
];

export default function RotatingCircuit() {
    const radius = 280;
    const totalIcons = techIcons.length;

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.4] sm:scale-[0.5] md:scale-[0.7] lg:scale-100 -translate-x-2 sm:translate-x-0 -translate-y-4 sm:-translate-y-8 lg:-translate-y-16">
            {/* Dotted Circuit Circle */}
            <svg className="absolute w-[600px] h-[600px]">
                <motion.circle
                    cx="300"
                    cy="300"
                    r={radius}
                    fill="none"
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ transformOrigin: "300px 300px" }}
                />
                <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF204E" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#A0153E" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#5D0E41" stopOpacity="0.6" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Rotating Icons Container */}
            <motion.div
                className="absolute w-[600px] h-[600px]"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {techIcons.map((tech, index) => {
                    const angle = (360 / totalIcons) * index - 90;
                    const radian = (angle * Math.PI) / 180;
                    const x = 300 + radius * Math.cos(radian);
                    const y = 300 + radius * Math.sin(radian);

                    return (
                        <motion.div
                            key={tech.name}
                            className="absolute w-14 h-14 flex items-center justify-center rounded-xl"
                            style={{
                                left: x - 28,
                                top: y - 28,
                                backgroundColor: "rgba(17, 17, 27, 0.8)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                boxShadow: `0 4px 20px ${tech.color}40`,
                            }}
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <tech.Icon size={28} color={tech.color} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
