# ベースイメージにNginxを使う
FROM nginx:alpine

# 静的ファイルをNginxの公開ディレクトリにコピー
COPY ./imoproject-hp.github.io/* /usr/share/nginx/html/
COPY ./imoproject-hp.github.io/styles /usr/share/nginx/html/styles
COPY ./imoproject-hp.github.io/components /usr/share/nginx/html/components

# ポート80で公開（省略可）
EXPOSE 80