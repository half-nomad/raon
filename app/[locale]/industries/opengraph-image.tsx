import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '산업 분야',
    description: '정유·석유화학, 조선, 발전소 산업에 특화된 회전기계 부품 솔루션',
    subtitle: 'BUSINESS FIELD',
  });
}
