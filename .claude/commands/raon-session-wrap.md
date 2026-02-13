---
name: raon-session-wrap
description: |
  라온토탈솔루션 프로젝트 세션 정리 커맨드. 세션에서 작업한 내용을 문서에 자동 반영하고 git commit까지 수행.
  사용 시점: (1) 작업 세션 종료 시, (2) "작업 정리해줘" 요청 시, (3) 문서 업데이트 필요 시
---

# Raon Session Wrap

세션에서 수행한 작업을 프로젝트 문서에 반영하고 git commit하는 커맨드.

## 실행 순서

### 1. 변경 사항 분석

```bash
git status
git diff --stat
```

현재 세션에서 변경된 파일 목록 확인.

### 2. 문서 업데이트 결정

변경된 파일 유형에 따라 업데이트할 문서 결정:

| 변경 유형 | 업데이트 문서 |
|----------|--------------|
| 새 페이지/컴포넌트 생성 | TODO (완료 체크) |
| 기존 코드 수정 | TODO (완료 체크) |
| 버그 수정 | TODO (완료 체크) |
| 파일 삭제 | TODO (완료 체크) |
| Phase 완료 | TODO + PLAN (Phase 체크) |
| 버전 릴리스 | TODO + CHANGELOG (버전 기록) |

### 3. docs/02-TODO.md 업데이트

- 완료된 작업 항목에 `[x]` 체크
- 진행률 통계 업데이트 (상단 테이블)
- 최종 수정 날짜 업데이트

### 4. docs/01-PLAN.md 업데이트 (Phase 완료 시에만)

Phase 완료 시에만:
- `[ ]` → `[x]` 체크
- 진행 현황 테이블의 Phase 수 업데이트

### 5. docs/03-CHANGELOG.md 업데이트 (버전 릴리스 시에만)

버전 릴리스 시에만 새 버전 섹션 추가:

```markdown
## [X.X.X] - YYYY-MM-DD

### Added
- 새로 추가된 기능/페이지

### Changed
- 변경된 기능/디자인

### Fixed
- 수정된 버그

### Removed
- 삭제된 기능/파일
```

### 6. Git Commit

```bash
git add docs/02-TODO.md
# Phase 완료 시: git add docs/01-PLAN.md
# 버전 릴리스 시: git add docs/03-CHANGELOG.md

git commit -m "docs: update project documentation

- Updated TODO progress
- [Phase 완료 시: Updated PLAN phase checkboxes]
- [버전 릴리스 시: Added CHANGELOG entries]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

## 업데이트 규칙

### TODO.md
- **매 세션**: 작업 완료 체크 + 진행률 통계 업데이트
- 새 작업 발견 시 pending 항목 추가
- Blockers 섹션 관리

### PLAN.md
- **Phase 완료 시에만** Phase 체크박스 업데이트
- 세부 작업은 절대 추가하지 않음 (TODO.md에서 관리)
- 진행 현황 테이블의 Phase 수치만 업데이트

### CHANGELOG.md
- **버전 릴리스 시에만** 새 버전 섹션 생성
- 매 세션마다 업데이트하지 않음
- Unreleased 섹션 사용 금지 (TODO 참조)

## 커밋 메시지 형식

```
docs: [간단한 설명]

- [변경 사항 1]
- [변경 사항 2]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## 실행 예시

### 일반 세션 (대부분의 경우)

power-plant 페이지 생성 + 홈 페이지 수정 작업 완료 후:

1. TODO.md: 완료 항목 체크 + 진행률 업데이트
   - `[x]` Power Plant 페이지 신규 생성
   - `[x]` 홈 페이지 제품 섹션 수정
   - 통계: 22개 중 18개 완료 (81.8%)
2. Git commit (TODO.md만)

### Phase 완료 시

Phase 5 모든 작업 완료 후:

1. TODO.md: 완료 항목 체크 + 진행률 업데이트
2. PLAN.md: Phase 5 체크박스 업데이트
   - `[x] Phase 5: 페이지 구축`
   - 진행 현황: 5/6 Phase 완료
3. Git commit (TODO.md + PLAN.md)

### 버전 릴리스 시

v1.5.0 릴리스:

1. TODO.md: 완료 항목 체크 + 진행률 업데이트
2. CHANGELOG.md: 새 버전 섹션 추가
   ```markdown
   ## [1.5.0] - 2025-12-24

   ### Added
   - Power Plant 페이지 생성
   - 파트너십 페이지 데이터 업데이트
   ```
3. PLAN.md: 해당 Phase 체크 (필요 시)
4. Git commit (TODO.md + CHANGELOG.md + PLAN.md)
