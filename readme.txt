# 개요
# 유튜브 생활코딩의 Next.js 13 강의 클론코딩
# https://www.youtube.com/watch?v=9KOaR6QMb9A&list=PLuHgQVnccGMCwxXsQuEoG-JJ7RlwtNdwJ&index=1

# 개발환경
PS \nextapp> node -v
v20.10.0

PS \nextapp> npm -v
10.2.5

npx create-next-app@latest .
√ Would you like to use TypeScript? ... No
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like to use 'src/' directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No

# 임시 backend 실행
npx json-server --port 9999 --watch db.json
