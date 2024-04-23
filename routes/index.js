const express = require('express'); //index.js内でExpressの機能を使用するための記述
const router = express.Router(); //Expressで用意されているルーティングの機能を使用できるようにしている

//サーバーサイドの処理を読み込み
const allPosts = require('../controllers/posts/allPosts'); //コントローラーで定義する処理を読み込み、変数allPostsに格納している
const createGet = require('../controllers/posts/createGet');
const createPost = require('../controllers/posts/createPost');

//リクエストに対する実行処理を定義
router.get('/posts', allPosts);               //投稿一覧表示  トップページ（投稿一覧ページ）を表示する際のルーティングを設定しています。今回はページ表示のリクエストであるため、HTTPリクエストはGETとなります。
                                              // トップページのURIパターンは'/posts'としています。最後の引数allPostsは先程定義した変数allPostsと紐づいており、このようにルーティングに対する処理を定義しています。 
router.get('/posts/create', createGet);       //投稿画面表示
router.post('/posts/create', createPost);     //投稿処理

module.exports = router;  //ファイルに記載した内容を他のファイルから読み込めるようにする