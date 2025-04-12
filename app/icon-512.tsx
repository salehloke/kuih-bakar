import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #92400e, #b45309)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '64px',
          padding: '2rem',
        }}
      >
        <div style={{ fontSize: 240, fontWeight: 'bold' }}>KB</div>
        <div style={{ fontSize: 48, marginTop: '1rem' }}>Kuih Bakar</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
