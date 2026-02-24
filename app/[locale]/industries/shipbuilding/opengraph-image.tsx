import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = 'edge';

export default async function Image() {
  return generateOGImage({
    title: '조선',
    description: '실린더 라이너, 모터, 베어링 등 선박용 부품 공급',
    subtitle: 'Ship Building',
  });
}
