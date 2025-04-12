import { ImageResponse } from 'next/og';
import { siteConfig } from './seo-config';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Kuih Bakar Malaysian Delights';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to right, #92400e, #15803d)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '4rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: '1.5rem',
            maxWidth: '80%',
            color: '#fef3c7',
          }}
        >
          Authentic Malaysian Delights - Traditional Kuih Bakar and Nasi Lemak
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
