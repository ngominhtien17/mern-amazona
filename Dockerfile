# Sử dụng image Nginx gốc
FROM nginx:latest

# Xóa cấu hình mặc định của Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Sao chép file cấu hình tùy chỉnh vào vị trí cấu hình của Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
