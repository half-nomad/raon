#!/bin/bash

# 문서 업데이트 자동화 스크립트
# 사용법: ./scripts/update-docs.sh

echo "📋 Updating project documentation..."

# 현재 날짜
TODAY=$(date +%Y-%m-%d)

# 1. TODO 통계 계산
TODO_DONE=$(grep -c "^- \[x\]" docs/02-TODO.md || echo "0")
TODO_PENDING=$(grep -c "^- \[ \]" docs/02-TODO.md || echo "0")
TODO_TOTAL=$((TODO_DONE + TODO_PENDING))

echo "✅ TODO: $TODO_DONE/$TODO_TOTAL completed"

# 2. PLAN 마일스톤 계산
PLAN_DONE=$(grep -c "^- \[x\]" docs/01-PLAN.md || echo "0")
PLAN_TOTAL=$(grep -c "^- \[" docs/01-PLAN.md || echo "17")
PLAN_PROGRESS=$(awk "BEGIN {printf \"%.0f\", ($PLAN_DONE/$PLAN_TOTAL)*100}")

echo "✅ PLAN: $PLAN_DONE/$PLAN_TOTAL milestones ($PLAN_PROGRESS%)"

# 3. PLAN 진행률 자동 업데이트
sed -i "s/\*\*현재 진행률:\*\* [0-9]*%/**현재 진행률:** $PLAN_PROGRESS%/" docs/01-PLAN.md
sed -i "s/\*\*완료된 마일스톤:\*\* [0-9]* \/ [0-9]*/**완료된 마일스톤:** $PLAN_DONE \/ $PLAN_TOTAL/" docs/01-PLAN.md

echo "✅ PLAN.md 진행률 업데이트 완료"

# 4. TODO 통계 자동 업데이트
sed -i "s/\*\*Completed:\*\* [0-9]*/**Completed:** $TODO_DONE/" docs/02-TODO.md
sed -i "s/\*\*Total Tasks:\*\* [0-9]*/**Total Tasks:** $TODO_TOTAL/" docs/02-TODO.md
sed -i "s/\*\*Last Updated:\*\* [0-9-]*/**Last Updated:** $TODAY/" docs/02-TODO.md

echo "✅ TODO.md 통계 업데이트 완료"

# 5. 요약 출력
echo ""
echo "📊 문서 업데이트 완료"
echo "   • TODO: $TODO_DONE/$TODO_TOTAL ($((TODO_DONE*100/TODO_TOTAL))%)"
echo "   • PLAN: $PLAN_DONE/$PLAN_TOTAL ($PLAN_PROGRESS%)"
echo ""
echo "💡 다음 단계:"
echo "   1. CHANGELOG.md 수동 업데이트 (완료된 작업 기록)"
echo "   2. git add docs/"
echo "   3. git commit -m \"docs: update progress\""
