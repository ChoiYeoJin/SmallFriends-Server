# Node.js 이미지를 기반으로 설정
FROM node:14

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# 애플리케이션 의존성 설치
# package.json 과 package-lock.json을 먼저 복사
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 패키지 설치 시
# RUN npm ci --only=production

# 애플리케이션 소스 추가
COPY . .

# 애플리케이션이 사용하는 포트 설정
EXPOSE 8080

# 애플리케이션 실행
CMD [ "node", "server.js" ]
