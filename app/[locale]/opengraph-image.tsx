import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: "Technology Connecting Energy's Future",
    description: '30년 경험의 회전기계 및 압축기 부품·솔루션 전문 기업',
  });
}
