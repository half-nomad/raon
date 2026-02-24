import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '회사 소개',
    description: '30년 경력의 회전기계 전문가들이 설립한 B2B 부품 솔루션 기업',
    subtitle: 'COMPANY',
  });
}
