'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EnvelopeExperience } from '@/components/EnvelopeExperience';
import { HeroSection } from '@/components/HeroSection';
import { ParticleBackground } from '@/components/ParticleBackground';
import { MusicPlayer } from '@/components/MusicPlayer';

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleEnvelopeOpen = () => {
    setShowEnvelope(false);
    setIsPlayingMusic(true);
  };

  return (
    <main className="min-h-screen bg-[#F2F1E8] text-[#3a2c18] relative selection:bg-[#D2C08A]/30 selection:text-[#3a2c18]">
      
      {/* Background Floating Particles (White Jasmine Petals & Gold Dust) */}
      <ParticleBackground />

      {/* Video Opening Screen (Fades into 1st Section on Video End) */}
      <AnimatePresence mode="wait">
        {showEnvelope && (
          <EnvelopeExperience onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {/* Main Invitation Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showEnvelope ? 0 : 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={showEnvelope ? 'h-screen overflow-hidden pointer-events-none' : 'w-full'}
      >
        <HeroSection />
      </motion.div>

      {/* Floating Audio Controller */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

    </main>
  );
}
