# Design Direction Overview

Tone: 화이트·네이비 기반, Pretendard 폰트, 포인트 컬러는 JEI 레퍼런스와 유사한 레드(#FF4848) 대신 라온 고유 색상(네이비/하이라이트 컬러)로 맞춤. 전체적으로 B2B 기술 기업 느낌을 주되, 카드 라운딩·배너 여백은 레퍼런스의 현대적 감각을 유지.
Grid: 최대 폭 1240px 컨테이너(mx-auto px-4 sm:px-6 lg:px-8), 모바일 1열 → 태블릿 2열 → 데스크톱 3열 구조. 섹션 간 기본 패딩 80px/120px, 모바일에서는 48px.
Buttons: 공통 CTA 2종 (상담 문의, 제품 문의). 라운드 pill 버튼, 기본형은 네이비 배경+화이트 텍스트, 아웃라인형은 흰 배경+네이비 라인.
이미지: 라이선스 확보 전까지 이미지 삽입 예정 박스를 사용(고정 비율 4:3). Tailwind aspect-video 또는 aspect-[4/3] 활용.
애니메이션: Hero 비디오는 1개만 autoplay; 스크롤 섹션은 data-effect="fadeUp" 역할을 Framer Motion 또는 기본 Tailwind transition으로 대체.
1. Header & Mobile Navigation
고정 헤더(높이 72px). 좌측 로고, 우측 상담 문의 아이콘(노란 원)과 햄버거 버튼.
모바일 메뉴: 풀스크린 시트(shadcn Sheet)로 오버레이. 1 Depth 메뉴 6개(Home, Company, Industries, Products, Partners, Contact). 각 항목 우측에 caret 아이콘, 탭하면 Accordion으로 2 Depth 표시(Company: 회사소개/연혁/위치 등).
스크롤 시 헤더 배경이 투명→화이트로 전환, 텍스트 컬러도 변환.
2. 홈 섹션별 설계
Hero

배경 비디오(full width). 중앙 좌측 텍스트 블록:
Title: “Technology Connecting Energy's Future”
Subtitle: “30년 전기계 경험...” (라인 138 기반).
CTA 2개(상담 문의=네이비, 제품 문의=화이트 아웃라인).
하단 오른쪽에 슬라이드 인디케이터(02 | 03). 실제 슬라이드는 1개지만 추후 확장 대비 구조 유지.
Industries Highlight

두 개 카드(석유·석유화학, 조선).
카드 구성: 배경 이미지(placeholder), 상단에 산업명, 하단 bullet 2~3개, CTA “세부 산업 보기”.
카드 밑에 해당 산업에서 주력 제품 태그(Chip 형태): 예) “Compressor & Parts”, “Pump”.
Products Snapshot

5개 제품군 카드(Compressor & Parts, Mixer, Pump, Bearing, Oil Purifier).
카드 = 이미지 placeholder + 제품명 + 1줄 요약. 클릭하면 Products 페이지로 이동.
“더 많은 제품 보기” 보조 CTA(secondary button).
Partners & Clients

두 줄 구성: 상단 “글로벌 파트너” 로고 슬라이더, 하단 “Trusted by” 로고 그리드.
각 로고 아래 작은 텍스트로 계약 연도/범위 표시.
문의 유도 배너

네이비 배경 + 화이트 텍스트. “부품 도면, 사진만 있어도 최적 솔루션 제안” (라인 157).
CTA 두 개(상담/제품). 오른쪽에 upward arrow floating 버튼으로 Scroll-to-top.
3. COMPANY 페이지
섹션 1: CEO 메시지

2열 레이아웃: 왼쪽 이미지/사인(placeholder), 오른쪽 텍스트(라인 164).
강조 quote 박스(네이비 배경, 흰 텍스트)로 핵심 문장 강조.
섹션 2: History Timeline

Horizontal timeline(2020~2025). 각 노드에 연도, 이벤트, 브랜드 로고 아이콘.
모바일에서는 세로 스텝 카드.
섹션 3: Location & Contact Info

주소/전화/Fax/E-mail 박스. 구글맵 iframe 대체 이미지 placeholder.
“카카오맵 열기” 버튼 추가 가능.
4. INDUSTRIES 페이지
Hero: 섹터별 비주얼(BG 이미지).
Industry Card Template
제목, 핵심 소개 문단, bullet(주요 공급 장비 리스트).
하단에 관련 제품 링크 버튼(태그 스타일).
현재 2개 섹션(석유·석유화학 / 조선). 발전·에너지 섹션은 빈 카드로 “Coming soon” 표기.
5. PRODUCTS 페이지
Intro Section: 제품군 개요 + Search/Filter(추후).
제품군 카드 목록
각 카드:
상단: 제품군명 + 브랜드 로고(placeholder).
이미지 placeholder.
텍스트: 2~3줄 개요 + bullet 3개.
“자세히 보기” 토글 → 펼치면 상세 설명(라인 210~249에 있는 서술).
토글 내부 구성:
“주요 특징” bullet
“적용 사례” bullet
“참고 링크/브랜드”
CTA 없음.
제품군 리스트(7개) 반복. 각 섹션 사이 Divider.
6. PARTNERS 페이지
상단 설명(라인 255).
그리드: 카드당 로고/설명/계약 연도.
고객 섹션: 2열 로고 그리드 + 업군 Tag.
7. CONTACT 페이지
좌측 설명(문의 안내 문구, 라인 295).
우측 폼(shadcn Form). 필드: 구분 멀티셀렉트, 이름, 회사명, 이메일, 전화, 문의내용, 파일 업로드.
제출 버튼 2개? => 하나의 폼에 제출 but 상단 CTA에서 진입한 유형을 hidden input으로 전달(상담/제품).
폼 하단에 개인정보 수집 동의 체크박스.
8. 공통 컴포넌트
펼침 토글: 제품 상세에 사용. 기본 closed 상태에서 4줄만 보여주고, 더 보기 클릭 시 전체 텍스트 + bullet + 이미지 보조 자료를 노출.
Placeholder 이미지: div with dashed border, text “이미지 삽입 예정”.
Tag/Chip: Tailwind rounded-full bg-slate-100 text-slate-600 px-3 py-1. 산업/제품 링크 등에 활용.
Logo Carousels: Swiper or Embla. Autoplay 4초, hover 시 pause. 모바일에서는 스크롤 가능한 flex row.
9. Phase Handling
Resources 전체 제외: nav에는 표시하되 “Coming in Phase 2” 라벨 또는 disabled 상태. 혹은 메뉴에서 임시 제거.
Case Study/FAQ는 문서화만 준비, UI placeholder section(석: “추가 예정”) 배치 가능.
10. Outstanding Questions/Needs
각 제품/산업 카드에 들어갈 최종 텍스트 분량(문단/ bullet 수). 현재 계획대로라면 카드당 3~5 bullet이 적당.
Color palette 확정 (네이비 HEX, 서브컬러). 포인트 레드 사용 여부.
Contact form 제출 시 이메일 라우팅 확인 (sales@...).
Resources 메뉴 처리 방식(비활성 vs 숨김).
Header CTA 버튼 클릭 시 폼 구분 값(“상담 문의” vs “제품 문의”) 전달 필요 여부.
이 설계를 기반으로 Figma 와이어프레임/Next.js 컴포넌트 정의 문서를 상세화할 수 있습니다. 추가 세부 내용이 필요하면 알려주세요.

shadcn 도 적용가능한 설계야?


네, 위 설계는 shadcn/ui 컴포넌트 체계를 전제로 잡았습니다. 주요 매핑은 다음과 같습니다.

Header: NavigationMenu + 커스텀 버튼, 모바일용 Sheet/Accordion 조합.
Hero CTA, 카드 버튼: Button 컴포넌트 변형(variant=default/outline).
탭/타임라인: Tabs, Stepper는 shadcn에 없으니 Tabs+맞춤 스타일 혹은 Card 반복으로 구현.
제품 토글: Accordion 또는 Collapsible.
Contact Form: Form, Select, Textarea, Input, File Upload(업데이트 필요 시 Dropzone).