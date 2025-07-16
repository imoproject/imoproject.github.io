FROM nginx:alpine
# プロジェクトのルートディレクトリの内容をコピー
COPY ./imoproject-hp.github.io/ /usr/share/nginx/html/
EXPOSE 80
