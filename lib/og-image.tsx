import { ImageResponse } from 'next/og';

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = 'image/png';

interface OGImageOptions {
  title: string;
  description?: string;
  subtitle?: string;
}

export async function generateOGImage({ title, description, subtitle }: OGImageOptions) {
  const fontData = await fetch(
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff/Pretendard-Bold.woff'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0A1628 0%, #1A2D47 50%, #0A1628 100%)',
          fontFamily: '"Pretendard"',
        }}
      >
        {/* Red-blue accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #EF4444 0%, #3B82F6 100%)',
          }}
        />

        {/* Company name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              letterSpacing: '0.1em',
            }}
          >
            RAON TOTAL SOLUTION
          </div>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: '20px',
              color: '#3B82F6',
              marginBottom: '16px',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: '24px',
              color: '#CBD5E1',
              lineHeight: 1.5,
              maxWidth: '800px',
            }}
          >
            {description}
          </div>
        )}

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '3px',
              background: '#EF4444',
            }}
          />
          <div
            style={{
              fontSize: '16px',
              color: '#64748B',
            }}
          >
            raontotalsolution.com
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: 'Pretendard',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
