---
title: このブログについて
date: "2024-11-20"
description: "このブログテンプレートの使い方"
thumbnailUrl: "https://contents.seelx3.com/seel.jpg"
---

## 事前準備

- asdf

```
asdf install // nodejs, yarn のバージョン指定
```

## 開発手順

```
yarn // パッケージインストール
yarn develop // 開発サーバー起動
yarn deploy // デプロイ
```

## ブログの追加

- `/content/blog` 以下にディレクトリを作成し、その中に `index.md` を作成してください。
- マークダウンで画像を使用する場合は、同じディレクトリに画像を配置して参照できます。

![](./seel-400x400.png)

## マークダウン中で外部リンクをカード表示

```
// blank
https://github.com/seelx3/blog-gatsby-template
// blank
```

https://github.com/seelx3/blog-gatsby-template

- 使用したプラグイン

https://github.com/okaryo/gatsby-remark-link-card
