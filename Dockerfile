# ベースイメージにNginxを使う
FROM nginx:alpine

# 静的ファイルをNginxの公開ディレクトリにコピー
COPY ./imoproject-hp.github.io/* /usr/share/nginx/html/

# ポート80で公開（省略可）
EXPOSE 80