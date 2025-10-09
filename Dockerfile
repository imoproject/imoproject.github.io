FROM nginx:alpine
# プロジェクトのルートディレクトリの内容をコピー
COPY ./ /usr/share/nginx/html/
EXPOSE 80
