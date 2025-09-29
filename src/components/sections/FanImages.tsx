"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FanImagesProps {
  title?: string;
  description?: string;
}

const FanImages: React.FC<FanImagesProps> = ({
  title = "Explora Diferentes Temas",
  description = "Personaliza la experiencia con múltiples temas para cada ocasión"
}) => {
  const images = [
    { src: "/images/samsung-galaxy-s24-2024-medium.png", title: "Tema Oscuro" },
    { src: "/images/samsung-galaxy-s24-2024-medium.png", title: "Tema Claro" },
    { src: "/images/samsung-galaxy-s24-2024-medium.png", title: "Tema Azul" },
    { src: "/images/samsung-galaxy-s24-2024-medium.png", title: "Tema Verde" },
    { src: "/images/samsung-galaxy-s24-2024-medium.png", title: "Tema Rosa" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#4c1d95]/20 via-[#5b21b6]/10 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Fan Layout */}
        <div className="relative flex justify-center items-center min-h-[700px]">
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {images.map((image, index) => {
              // Crear verdadero efecto abanico con rotaciones desde un punto central
              const totalImages = images.length;
              const fanAngle = 80; // Ángulo total del abanico
              const angleStep = fanAngle / (totalImages - 1);
              const rotation = (index * angleStep) - (fanAngle / 2); // -40 a +40 grados
              const centerIndex = Math.floor(totalImages / 2);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, rotateZ: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotateZ: rotation
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: rotation * 0.8,
                    zIndex: 20
                  }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{
                    transformOrigin: '50% 120%', // Punto de pivote del abanico
                    transform: `rotate(${rotation}deg)`,
                    zIndex: totalImages - Math.abs(index - centerIndex),
                    left: '50%',
                    top: '45%',
                    marginLeft: '-128px', // Half of image width
                    marginTop: '-256px'   // Half of image height
                  }}
                >
                  <div className="group relative">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={256}
                      height={512}
                      className="w-48 md:w-56 lg:w-64 h-auto shadow-2xl rounded-2xl transition-all duration-500 group-hover:shadow-3xl"
                      style={{
                        filter: index === centerIndex ? 'none' : 'brightness(0.7) contrast(0.8) saturate(0.8)',
                      }}
                    />

                    {/* Overlay con título */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-semibold text-sm">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanImages;