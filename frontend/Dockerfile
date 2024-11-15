# Sử dụng Node.js bản mới nhất làm base image
FROM node:22.8.0-alpine

# Tạo và chuyển đến thư mục /app
WORKDIR /app

# Sao chép file package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Build ứng dụng React
RUN npm run build

# Mở cổng cho frontend
EXPOSE 3000

# Chạy ứng dụng frontend
CMD ["npm", "start"]
