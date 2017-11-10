# Zero-padding

Zero padding for number at JavaScript

![IE 9以上](https://img.shields.io/badge/IE-9+-green.svg)
![IE Edge 最新版](https://img.shields.io/badge/IE%20Egde-Latest-green.svg)
![Google Chrome 最新版](https://img.shields.io/badge/Google%20Chrome-Latest-green.svg)
![Mozilla Firefox 最新版](https://img.shields.io/badge/Mozilla%20Firefox-Latest-green.svg)
![Safari 最新版](https://img.shields.io/badge/Safari-Latest-green.svg)
![iOS 7以上](https://img.shields.io/badge/iOS-7+-green.svg)
![Android 4.4以上](https://img.shields.io/badge/Android-4.4+-green.svg)

## Usage

### html

```html
<script src="dist/zero-padding.js"></script>
```

### npm

**Install to project**

```bash
$ npm i -D zero-padding
```

**Write to javascript files**

```js
import ZeroPadding from 'zero-padding'
```

## Document

### ZeroPadding(num, digit)

#### argument

param | type | description
--- | --- | ---
num | number | number you want to zero padding in
digit | number | include digit number of zero padding


#### return

string


#### example

```js
var num1 = ZeroPadding(10, 3)  //-> '010'
var num2 = ZeroPadding(-10, 5) //-> '-00010'
var num3 = ZeroPadding(100, 2) //-> '100' no zero padding
```


