import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 192,
  height: 192,
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
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 96,
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '24px',
        }}
      >
        KB
      </div>
    ),
    {
      ...size,
    }
  );
}
