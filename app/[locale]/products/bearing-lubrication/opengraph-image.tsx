import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: 'Bearing & Lubrication',
    description: '유체윤활베어링 및 윤활유 정제 솔루션',
    subtitle: '터보링크 · 삼영필텍',
  });
}
