import React from 'react';

interface LandingHeroProps {
  title?: string;
  tagline?: string;
  welcomeMessage?: string;
  logoUrl?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  title = 'Kuril Intake Client',
  tagline = 'Professional Client Management',
  welcomeMessage = 'Submit your project request and we will get back to you shortly.',
  logoUrl,
  backgroundColor = '#3B82F6',
  textColor = '#FFFFFF',
}) => {
  return (
    <div
      className="py-16 px-4 text-center"
      style={{ backgroundColor, color: textColor }}
    >
      {logoUrl && (
        <img
          src={logoUrl}
          alt={title}
          className="h-16 mx-auto mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {tagline && <p className="text-xl mb-4 opacity-90">{tagline}</p>}
      {welcomeMessage && <p className="text-lg opacity-80 max-w-2xl mx-auto">{welcomeMessage}</p>}
    </div>
  );
};