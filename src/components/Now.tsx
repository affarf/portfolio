import React, { useState } from 'react';
import blonde from '../assets/blonde.jpg';
import dune from '../assets/dune.png';
import gtav from '../assets/gtav.jpg';
import leadership from '../assets/leadership.jpg';
import sports from '../assets/sports.jpg';
import travel from '../assets/travel.jpg';
import career from '../assets/career.jpg';
import research from '../assets/research.jpg';

const carouselCards = [
  {
    id: '01',
    label: 'Career',
    content: 'Settling into my new Business Analytics role at FP&M ',
    image: career,
  },
  {
    id: '02',
    label: 'Reading & Research',
    content: 'Piloting Temi robot for a research at the People and Robots Lab',
    image: research,
  },
  {
    id: '03',
    label: 'Leadership & Campus Life',
    content: 'Serving as the Director of Logistics for Malaysian Student Association at UW-Madison and chaired the International Student Services Advisory Board',
    image: leadership,
  },

  {
    id: '04',
    label: 'Sports & Life',
    content: 'Hitting the soccer pitch, staying active, and balancing classes',
    image: sports,
  },

  {
    id: '05',
    label: 'Currently Planning',
    content: 'Mapping out the logistics and crunching numbers for my next budget backpacking trip',
    image: travel,
  },
];

function MagazineCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + carouselCards.length) % carouselCards.length);
  const next = () => setCurrent((c) => (c + 1) % carouselCards.length);
  const card = carouselCards[current];

  return (
    <div className="mb-32 w-full">
      {/* Card */}
      <br />

    <div style={{
  backgroundColor: '#fdfcf9',
  border: '2px solid #e8e4dd',
  boxShadow: '12px 16px 0px rgba(42, 37, 32, 0.08)',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  height: '550px',          // ← card height, change this freely
  transition: 'all 0.4s ease',
}}>
  {/* Image side - width independent from card height */}
  <div style={{ width: '460px', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
    <img
      src={card.image}
      alt={card.label}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',  // ← crop from top so faces aren't cut
        display: 'block',
        filter: 'grayscale(100%) contrast(1.1)',
        transition: 'filter 0.5s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
      onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)')}
    />
    <div style={{
      position: 'absolute', bottom: '12px', left: '12px',
      backgroundColor: '#8b4545', color: '#fdfcf9',
      fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
      fontWeight: 700, padding: '4px 10px', letterSpacing: '2px',
    }}>
      {current + 1} / {carouselCards.length}
    </div>
  </div>

  {/* Text side */}
  <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', color: '#8b4545', textTransform: 'uppercase', marginBottom: '1rem' }}>
      {card.label}
    </p>
    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', lineHeight: 1.4, color: '#2a2520', fontWeight: 700 }}>
      {card.content}
    </p>
  </div>
</div>
      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
        <button
          onClick={prev}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: '#fdfcf9', backgroundColor: '#8b4545', border: '2px solid #8b4545', padding: '10px 20px', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fdfcf9'; e.currentTarget.style.color = '#8b4545'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#8b4545'; e.currentTarget.style.color = '#fdfcf9'; }}
        >
          ← PREV
        </button>
        <button
          onClick={next}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: '#fdfcf9', backgroundColor: '#8b4545', border: '2px solid #8b4545', padding: '10px 20px', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fdfcf9'; e.currentTarget.style.color = '#8b4545'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#8b4545'; e.currentTarget.style.color = '#fdfcf9'; }}
        >
          NEXT →
        </button>
        <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
          {carouselCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', backgroundColor: i === current ? '#8b4545' : '#e8e4dd', cursor: 'pointer', transition: 'background-color 0.2s' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



export default function Now() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const entries = [
    {
      id: '01',
      label: 'Currently Listening',
      content: 'Spinning Frank Ocean, early indie tracks, and vintage Alex Turner',
      image: blonde,
      rotation: '-rotate-2',
    },
    {
      id: '02',
      label: 'Deep-Diving',
      content: 'Researching and dissecting the political factions within the Dune universe',
      image: dune,
      rotation: 'rotate-2',
    },
    {
      id: '03',
      label: 'Currently Playing',
      content: 'Messing around in Grand Theft Auto V',
      image: gtav,
      rotation: '-rotate-1',
    },
  ];

  return (
    
    <div className="min-h-screen pt-48 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <br /><br /><br />
        <header className="mb-24 border-b-4 pb-12" style={{ borderColor: '#2a2520' }}>
          <p className="font-mono text-md tracking-widest uppercase font-semibold" style={{ color: '#8b4545' }}>
            Last Updated: {currentDate}
          </p>
          <p style={{ color: '#5a5047', fontSize: '2.25rem', fontWeight: 900, lineHeight: '1.4', maxWidth: '84rem', marginTop: '2rem', fontFamily: 'var(--font-mono)' }}>
            A living document of what I am focused on and experimenting with right at this exact moment
          </p>
        </header>
        <br />
        

        {/* Magazine Carousel */}
        <MagazineCarousel />
        <br /> <br /> <br /> 

        {/* Section Divider */}
        <div className="mb-16" style={{ borderTop: '5px solid #2a2520', paddingTop: '1rem' }}>
        <p  style= {{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 550, color: '#8b4545' }}>
            Currently Into
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 900, color: '#5a5047' }}>
            What I am consuming, obsessing over, and letting live rent-free in my head
        </p>
        </div>

        {/* Zine Layout - Frank Ocean, Dune, GTA V */}
        <div className="space-y-32">
            <br/>
          {entries.map((entry, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={entry.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center pb-8"
              >
                {/* Image */}
                <div className={`flex justify-center group cursor-pointer order-last ${isEven ? 'md:order-first' : 'md:order-last'}`}>
                  <div
                    className={`relative w-full max-w-xs p-4 shadow-xl transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:scale-[1.05] ${entry.rotation} group-hover:rotate-0`}
                    style={{ backgroundColor: '#fdfcf9', overflow: 'visible', paddingBottom: '20px' }}
                  >
                    <div className="aspect-square overflow-hidden bg-[#e8e4dd]">
                      <img
                        src={entry.image}
                        alt={entry.label}
                        className="w-full h-full object-cover"
                        style={{ filter: 'grayscale(100%) contrast(1.1)', transition: 'filter 0.5s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                        onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)')}
                      />
                    </div>
                    <br />
                    <div
                      className="absolute -bottom-3 -right-3 z-20 px-4 py-1 font-mono text-sm font-bold shadow-md transform rotate-3"
                      style={{ backgroundColor: '#8b4545', color: '#fdfcf9' }}
                    >
                      No. {entry.id}
                    </div>
                    <br />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col justify-center order-first ${
                    isEven ? 'md:order-last' : 'md:order-first'
                  }`}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      marginBottom: '1.25rem',
                      color: '#8b4545',
                    }}
                  >
                    {entry.label}
                  </h2>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)', // 👈 keep mono for consistency
                      fontSize: '1.6rem',
                      lineHeight: 1.5,
                      color: '#2a2520',
                      fontWeight: 500,
                      maxWidth: '36rem',
                    }}
                  >
                    {entry.content}

                    {entry.label === 'Currently Listening' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginTop: '24px' }}>
                        
                        <iframe
                            style={{ borderRadius: '12px 12px 0 0' }}
                            src="https://open.spotify.com/embed/album/3mH6qwIy9crq0I9YQbOuDf?utm_source=generator&theme=0"
                            width="100%"
                            height="200"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />

                        <iframe
                            style={{ borderRadius: '0 0 12px 12px' }}
                            src="https://open.spotify.com/embed/album/3OqRGywivnQ0IeClUeUa4n?utm_source=generator&theme=0"
                            width="100%"
                            height="200"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />

                        </div>
                        )}

                    {entry.label === 'Deep-Diving' && (
                    <iframe
                        style={{ marginTop: '1rem', borderRadius: '12px' }}
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/nLyxSDHjbHY?si=t_E_9Xy7F_nLly4v"
                        title="Dune Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                    )}
                    <br />


                    {entry.label === 'Currently Playing' && (
                        <div
                            style={{
                            marginTop: '1rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            letterSpacing: '2px',
                            color: '#8b4545',
                            }}
                        >
                            LOG 01 — DROVE AROUND AIMLESSLY  
                            <br />
                            LOG 02 — CAUSED MINOR CHAOS  
                            <br />
                            LOG 03 — NO REGRETS  
                        </div>
                        )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
    