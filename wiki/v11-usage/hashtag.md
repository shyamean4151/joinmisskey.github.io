---
title: ハッシュタグ
description: ハッシュタグを活用しよう。ノートと自己紹介にハッシュタグを追加できる。
layout: wiki
rank: 3.1
prev: /wiki/v11-usage/list
next: /wiki/v11-usage/post
---
ハッシュタグを付加すると、簡単にノートやユーザーを見つけてもらうことができる。  
`#Misskey `のように、先頭に`#`を付加し、末尾を半角空白または改行にすることで、単語や文をハッシュタグにできる。

## ユーザーハッシュタグ
「みつける」ページのハッシュタグ名をクリックすると、[プロフィール](profile)の自己紹介にそのハッシュタグを書いているユーザーが表示される。

## ハッシュタグタイムライン
ハッシュタグタイムラインは[タイムライン](timelines)の一種で、設定したハッシュタグが含まれたノートを表示する。

ハッシュタグタイムラインを利用するには、まずハッシュタグタイムラインの追加と設定を行う必要がある。  
設定の「ハッシュタグ」タブから設定できる。

**追加**を選択し、ハッシュタグタイムラインを追加。  
そして、任意のタイトルと**クエリ**を記入し、保存する。  
クエリを空白にした場合はタイトルと同じタグが付いたノートを表示する。

#### クエリの記入方法
1つのタグ（たとえば`#AiArt`）を検索するなら、以下のように記入する。

```
AiArt
```

さらに、簡単な条件を指定して検索できる。  
半角スペースは`and`、改行は`or`となる。  
**例:**

```
misskey Ai
misskey 藍
AiArt
```

この場合、`#misskey #Ai` `#Misskey #藍` `#AiArt`の3つのパターンのいずれかにあてはまるノートが表示される。