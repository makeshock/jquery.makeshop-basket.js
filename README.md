# jquery.makeshop-basket.js

## コード例
### JavaScript
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="jquery.makeshop-basket.js"></script>
<script>
$(document).ready(function(){
     $('.basket').MakeShopBasket();
});
</script>
```

### HTML
```html
<!-- ボタン用 -->
<div class="basket" data-url="http://ショップURL/api/basket/add.html" data-param="1,012000000003,1,,,," data-button="購入する"></div>

<!-- リンク用 -->
<div class="basket" data-url="http://ショップURL/api/basket/add.html" data-param="1,012000000003,1,,,," data-link="購入する"></div>

<!-- 画像用 -->
<div class="basket" data-url="http://ショップURL/api/basket/add.html" data-param="1,012000000003,1,,,," data-image="画像URL"></div>
```

## リファレンス
### プラグインオプション
* target<br>
フォームのターゲットを指定する。例えば`_blank`を指定すると、ボタンを押した際に別ウィンドウが開く。
```javascript
$('.basket').MakeShopBasket({ target: '_blank' });
```

### 要素属性
* data-url<br>
カゴURLを指定する。
* data-param<br>
カゴへ送るパラメータを指定する。
* data-button<br>
カゴへ入れるボタンに表示する文字列を指定する。
* data-link<br>
カゴへ入れるリンクに表示する文字列を指定する。
* data-image<br>
カゴへ入れるボタン画像のURLを指定する。
