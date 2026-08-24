# fujitatakashi.com 復活ノート

2026-04-03 の考え事

## 結論

detour でやりたいことが fujitatakashi.com そのもの。
detour のコードベースを fujitatakashi.com に持ってくる。

## 方針

- コンテンツは階層を作らずフラットに並べる
- 見つけたサイトも自分のテキストも同じ地面に置く
- URLだけ貼るようなことはせず、ちゃんと言葉を添える
- せいぜいタグで種類を区別する程度
- /about を追加する

## 現状

- fujitatakashi.com: choo + browserify の2017年スタック、Netlify、Node.js 8時代
- detour: Astro + Panda CSS + Pagefind、Cloudflare Workers
- ドメインは Squarespace（旧 Google Domains）で管理中

## やること

- detour のコードベースを fujitatakashi.com に移す
- Content Collections のスキーマを広げる（サイト紹介以外のテキストも書けるように）
- ホスティングを Netlify → Cloudflare Workers に移行
- ドメインのネームサーバーを Cloudflare に向ける

## 思想

インターネットに自分の土地を作って維持する。
階層はなく、ちまちま手を入れて、何か書いて、辿れるようにする。
見に来てくれる人にだけ見てもらえればうれしい。
