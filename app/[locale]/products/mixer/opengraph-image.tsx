import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: 'Mixer & Agitator',
    description: '산업용 Mixing Solution 전문',
    subtitle: 'SPXFLOW',
  });
}
