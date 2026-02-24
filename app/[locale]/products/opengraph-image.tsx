import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '제품',
    description: '글로벌 파트너와 함께하는 회전기계 부품 솔루션',
    subtitle: 'BUSINESS ITEM',
  });
}
