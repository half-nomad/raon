import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '문의하기',
    description: '회전기계 부품 견적 및 기술 상담',
    subtitle: 'CONTACT',
  });
}
