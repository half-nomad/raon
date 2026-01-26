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
| 새 페이지/컴포넌트 생성 | TODO (완료 체크), CHANGELOG (Added) |
| 기존 코드 수정 | TODO (완료 체크), CHANGELOG (Changed) |
| 버그 수정 | TODO (완료 체크), CHANGELOG (Fixed) |
| 파일 삭제 | TODO (완료 체크), CHANGELOG (Removed) |
| Phase 완료 | TODO + PLAN (마일스톤 체크) |

### 3. docs/02-TODO.md 업데이트

- 완료된 작업 항목에 `[x]` 체크
- 진행률 통계 업데이트 (상단 테이블)
- 최종 수정 날짜 업데이트

### 4. docs/03-CHANGELOG.md 업데이트

현재 버전 섹션에 변경 내용 추가:

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

### 5. docs/01-PLAN.md 업데이트 (필요 시)

Phase 완료 또는 마일스톤 달성 시에만:
- `[ ]` → `[x]` 체크
- 진행 현황 테이블 업데이트

### 6. Git Commit

```bash
git add docs/02-TODO.md docs/03-CHANGELOG.md docs/01-PLAN.md
git commit -m "docs: update project documentation

- Updated TODO progress
- Added CHANGELOG entries
- [Optional: Updated PLAN milestones]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

## 업데이트 규칙

### TODO.md
- **매 세션**: 작업 완료 체크 + 통계 업데이트
- 새 작업 발견 시 pending 항목 추가

### CHANGELOG.md
- **버전 릴리스 시에만** 새 버전 섹션 생성
- 일반 작업은 현재 버전 섹션에 추가
- Unreleased 섹션 사용 금지 (TODO 참조)

### PLAN.md
- **Phase 완료 시에만** 마일스톤 체크
- 진행률 테이블 업데이트

## 커밋 메시지 형식

```
docs: [간단한 설명]

- [변경 사항 1]
- [변경 사항 2]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## 실행 예시

세션에서 power-plant 페이지 생성 + 홈 페이지 수정 작업 완료 후:

1. TODO.md: "Power Plant 페이지 신규 생성" 항목 `[x]` 체크
2. CHANGELOG.md: Added 섹션에 "Power Plant 페이지 생성" 추가
3. PLAN.md: Phase 5.5 해당 항목 체크
4. Git commit 실행
