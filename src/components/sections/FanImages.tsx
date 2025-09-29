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
    { src: "/images/phone/139c0466879591993e40b0317e330199.jpg", title: "Tema Oscuro" },
    { src: "/images/phone/25c33361051b1382aff57306b796dd36.jpg", title: "Tema Claro" },
    { src: "/images/phone/295cc07854f00d2d81953125b93f6b99.jpg", title: "Tema Azul" },
    { src: "/images/phone/8e4dda2ec81cb85ecd4ca722f7a336c2.jpg", title: "Tema Verde" },
    { src: "/images/phone/f9e8abd6842c7cbeed281be5ce9d2261.jpg", title: "Tema Rosa" },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden z-20">
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-surface bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
        </div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
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
                    {/* Marco del móvil */}
                    <div className="relative w-48 md:w-56 lg:w-64 h-96 md:h-[28rem] lg:h-[32rem] bg-black rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:shadow-3xl p-2"
                         style={{
                           filter: index === centerIndex ? 'none' : 'brightness(0.7) contrast(0.8) saturate(0.8)',
                         }}>
                      {/* Pantalla del móvil */}
                      <div className="relative w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={256}
                          height={512}
                          className="w-full h-full object-cover"
                        />

                        {/* Notch/Dynamic Island simulado */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                      </div>

                      {/* Botón home */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* Overlay con título */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[2.5rem] flex items-end">
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