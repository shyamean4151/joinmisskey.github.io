---
title: "最近の更新 ～10.11.1"
description: パフォーマンスの向上やサーバー設定の改良がメインです。
layout: blog
date: 2018-10-13T03:00:00+09:00
thumbnail: /files/images/imports/2018/08/kiha110-3.jpg
author:
  name: aqz
  url: https://misskey.xyz/@aqz
  avatar: aqz
category: 更新
amp: true
---
前回の記事(たった2週間前)よりメジャーバージョンが2つ上がりましたが、Misskeyではよくあることです。  
また、メジャーバージョンアップがあったわりにそんなにデザインが変わっていないのもよくあることです。  
リアクションの表示が変わりましたが、他のサービスではこの程度の変更はよくあることですので書くまでもないでしょう。

今回の記事は省力版でお届けします。  
該当のプルリクエストやコミットへのリンクはありません。細かい変更は書かれていません。  
もちろん、バグ修正、使い勝手やパフォーマンスの向上も行っていますが、今回は省略します。

## ユーザーにうれしい機能
### パフォーマンスの改善(v10)
Misskeyの通信のすべてを1つのストリームに纏めたことで、通信量の削減や高速化が期待できます。  
また、サーバーから送られるデータそのものの最適化も行いました。

### テーマ機能の改良
テーマ機能の使い勝手がよくなりました。

### More…
- 投稿を削除すると非表示になるようになった
- お気に入りの解除ができるように

## インスタンス運営者に知ってほしい機能
メジャーバージョンアップ前にはとにかく[CHANGELOG](https://github.com/syuilo/misskey/blob/develop/CHANGELOG.md)を読んでMigrationを確認しましょう。

### 外部のおすすめユーザーエンジン
外部のおすすめユーザーエンジンを読み込めます。  
有効にするには、`.config/example.yml`の最後の方の`user_recommendation:`セクションを参考にdefault.ymlに追記してください。

### Redisがオプションに(ただし有効を推奨)
Redisをオプションにすることができます。  
通常は有効にすることを強く推奨しますが、いわゆる「おひとり様インスタンス」ならば無効にしてもかまわないです。  
Redisのセットアップは通常の環境なら料理に隠し味をする程度に簡単なことですから、理由がない限りはセットしたほうが無難です。

### Docker
[セットアップドキュメントにDockerを用いた開設方法が追加されました。](https://github.com/syuilo/misskey/blob/master/docs/docker.ja.md)