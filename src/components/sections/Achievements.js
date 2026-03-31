import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';
import SectionContainer from '../common/SectionContainer';

// Simple image carousel component
const PhotoCarousel = ({ photos, alt }) => {
  const [current, setCurrent] = useState(0);
  const { darkMode } = useTheme();

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="relative my-5">
      <div
        className={`rounded-xl overflow-hidden border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
        style={{ maxHeight: '360px' }}
      >
        <img
          src={photos[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-full object-cover"
          style={{ maxHeight: '360px' }}
          onError={(e) => { e.target.onerror = null; e.target.src = '/api/placeholder/600/360'; }}
        />
      </div>

      {/* Controls — only show if more than 1 photo */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition"
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-sky-500' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const achievements = [
  {
    id: 2,
    emoji: '🏆',
    title: '1st Place — Warwick Consulting Case Competition',
    subtitle: '180 Degrees Consulting × Enactus Warwick | University of Warwick',
    tags: ['Consulting', 'Strategy', 'CCUS', 'Sustainability'],
    summary:
      'Our team Data Mosaic won the case competition by helping a Series C CCUS (Carbon Capture, Usage & Storage) company craft a blueprint to convert their $75M funding into a profitable, exit-ready business — anchoring expansion in the Netherlands with a cost optimisation strategy.',
    highlights: [
      'Diagnosed complex financial and operational challenges in the CCUS industry and structured a viable go-to-market strategy.',
      'Built a financial model without Excel — leveraging modern analytical tooling for the first time.',
      'Prize money donated to Ashden to support innovative climate solutions globally.',
    ],
    photos: [
      process.env.PUBLIC_URL + '/images/achievements/achievement_1/1763577980601.jpeg',
      process.env.PUBLIC_URL + '/images/achievements/achievement_1/1763577980647.jpeg',
    ],
  },
  {
    id: 1,
    emoji: '🚀',
    title: 'Top 4 Finalist — Google × NatWest Hackathon',
    subtitle: 'Secure Intelligence Frontier Hackathon | Google London Office',
    tags: ['FinTech', 'AI', 'Hackathon', 'Google', 'NatWest'],
    summary:
      'Reached the finals of the Secure Intelligence Frontier Hackathon — top 4 out of 26 teams — and pitched at the Google London office. Our solution VTap simplifies everyday financial decisions by intelligently selecting the best payment method for each transaction.',
    highlights: [
      'Designed and built VTap: an AI-driven payment optimisation product in a competitive hackathon setting.',
      'Pitched to industry judges including representatives from Google and NatWest Group.',
      'Placed in the top 4 out of 26 competing teams.',
    ],
    photos: [
      process.env.PUBLIC_URL + '/images/achievements/achievment_2/1773858856408.jpeg',
      process.env.PUBLIC_URL + '/images/achievements/achievment_2/1773858864432.jpeg',
      process.env.PUBLIC_URL + '/images/achievements/achievment_2/1773858872392.jpeg',
      process.env.PUBLIC_URL + '/images/achievements/achievment_2/1773858876311.jpeg',
    ],
  },
];

const Achievements = () => {
  const { darkMode } = useTheme();

  return (
    <section className="mb-12">
      <SectionTitle title="Achievements" />

      <SectionContainer>
        <div className="space-y-12">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`rounded-2xl p-6 border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } shadow-md`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className={`text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-sky-800'}`}>
                    <span>{ach.emoji}</span> {ach.title}
                  </h3>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                    {ach.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        darkMode ? 'bg-sky-900 text-sky-200' : 'bg-sky-100 text-sky-700'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {ach.summary}
              </p>

              {/* Photo Carousel */}
              {ach.photos.length > 0 ? (
                <PhotoCarousel photos={ach.photos} alt={ach.title} />
              ) : (
                <div
                  className={`my-5 rounded-xl border-2 border-dashed flex items-center justify-center text-sm ${
                    darkMode ? 'border-gray-600 text-gray-500' : 'border-gray-300 text-gray-400'
                  }`}
                  style={{ height: '160px' }}
                >
                  📷 Add photos to the <code className="mx-1 px-1 bg-gray-100 text-gray-600 rounded">achievements</code> array to display a carousel here
                </div>
              )}

              {/* Highlights */}
              <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {ach.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Team */}
              <p className={`text-sm mt-4 border-t pt-3 ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-100 text-gray-500'}`}>
                <span className="font-medium">Team:</span> {ach.team}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Achievements;
