"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
}

export function ConfettiEffect({ trigger }: { trigger: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger) {
      const colors = ["#0052FF", "#3B82F6", "#10B981", "#F59E0B", "#EC4899"];
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        rotation: Math.random() * 360,
      }));
      setPieces(newPieces);

      const timer = setTimeout(() => setPieces([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <AnimatePresence>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="pointer-events-none fixed z-[100] h-3 w-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: -20,
            backgroundColor: piece.color,
          }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
            rotate: piece.rotation + 720,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
}
