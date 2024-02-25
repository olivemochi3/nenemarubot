# ベースイメージの指定
FROM node:16

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストール
# パッケージ.jsonとパッケージロックファイルをコピー
COPY package*.json ./

# npmを使ってパッケージをインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションがバインドするポートを指定
EXPOSE 8080

# 定義された環境変数
ENV DISCORD_BOT_TOKEN=MTIxMTI1ODcyODk5NzcxNTk5OA.G8GR3R.caUWNsNgZF5oj0bVYQYx9O_CREKOlMUbwcmEsk

# アプリケーションの起動
CMD [ "node", "index.js" ]
