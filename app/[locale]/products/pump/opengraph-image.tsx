import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: 'Pump',
    description: 'Magnetic Driven Pump 전문 솔루션',
    subtitle: 'CP PUMP',
  });
}
