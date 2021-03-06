# [Express+MySQL版]アプリ概要


**オリジナルアプリ「Tatoeba」。**

**わかりにくい話をわかりやすく例える、「例え話を支援する」アプリです。**


※こちらは[Express+MySQL版]バックエンド（API）のリポジトリです。
その他のリポジトリはこちら。

-------------
[Express+MySQL版]フロントエンドリポジトリ

https://github.com/london-newyork/tatoeba-frontend

<sub>[Prisma版]フロントエンドリポジトリ</sub>

https://github.com/london-newyork/tatoeba-frontend-prisma

<sub>[Prisma版]バックエンドを含むリポジトリ</sub>

https://github.com/london-newyork/tatoeba-api-prisma

-------------

### このアプリでの機能および主なやったこと

CRUD処理/検索/タグによるソート機能/eメールによるメール認証・ログイン認証/API設計/APIによる画像登録/他のユーザーからの評価機能/

Express、Curl、SQL文などを使った、APIのHTTP通信/設計(オニオンアーキテクチャ)

# 使用技術

### 言語とツール等

REST API(Open API)/Stoplight Studio/PlanetScale/Node.js/Express/Lambda/MySQL

- Stoplight Studio

  REST API設計のために使用。シンプルなGUIで簡単にyamlファイルを生み出すことができる。
  
- PlanetScale

  サーバレスDB。サーバーの管理をしなくても済むためその他の作業に集中できる。
  
- Express

  Node.jsフレームワーク。HTTP通信を理解するために使用。
  
- MySQL

  このリポジトリでは、Prismaを使っておりません。
  
  理由としては、Prismaを使うとSQL文を使わずに済むので楽ですが、DBとのやりとりが隠蔽されているため、後でPrisma以外のものがパラダイム・シフトで出現した場合、バックエンドの本質が理解できておらず対応が難しくなることを想定されます。そこで、バックエンドの基本を見に付けておきたい思いからこのようなリポジトリも用意しました。

# 開発背景

WEB 担当として仕事をしていた時に、非エンジニア・非デザイナーの方とお話しする機会が多かったのですが、その際、WEB 独特の用語を理解していただくのに、苦労したことがありました。逆に、非エンジニア・非デザイナーの方も話を理解するのに、とても苦労されたと思っています。

ある時、わかりにくい話をわかりやすく例える「例え話」を使うと、コミュニケーションが円滑に進むことがありました。
そこから、このアプリを開発することで、同じようなことに悩んでいる方の支援ができないかと思うようになりました。

この「例え話」を支援するアプリを通して、みなさんに、円滑なコミュニケーションをしていただけたらと思っています。
