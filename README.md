# imoproject-hp.github.io
imoprojectのHP作成リポジトリ

# ローカルでの検証方法
1. Dockerアプリを立ち上げる（installしていない場合はinstallからする）
2. ターミナルやシェルに入る
3. docker build -t static-site .
4. docker run -d -p 8080:80 static-site
5. Googleなどのブラウザでhttp://localhost:8080/を立ち上げる