# javascript-tool-library

[![npm](https://img.shields.io/npm/dt/@wolfzwz/javascript-tool-library.svg)](github-https://www.npmjs.com/package/@wolfzwz/javascript-tool-library)
[![npm](https://img.shields.io/npm/v/@wolfzwz/javascript-tool-library.svg)](https://www.npmjs.com/package/@wolfzwz/javascript-tool-library)

A small JavaScript tool library.   

Package with `rollup.js` , exported as `iife cmd cjs umd` module.   

## Install

``` bash
npm install @wolfzwz/javascript-tool-library
```

## Usage

``` javascript
import {
    find
} from '@wolfzwz/javascript-tool-library';

var data = [{
        userId: 8,
        title: 'title1'
    },
    {
        userId: 11,
        title: 'other'
    },
    {
        userId: 15,
        title: null
    },
    {
        userId: 19,
        title: 'title2'
    }
];

//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
    "title": /\d$/
}).orderBy('userId', 'desc');
console.log(result);
// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
```

Can also import like

``` javascript
import tool from '@zollty/zollty-util';

console.log(tool.find); // Function
```

## 项目开发需要执行的命令

### 开发环境

``` 
Requires Node >= 12.14.1 and Git >= 2.13.0.
```

### 安装依赖

``` 
或者使用cnpm代替npm
npm install --global rollup
npm install
npm install eslint --save-dev
```

### 命令行执行eslint检测

``` 

npm run lint
```

### 命令行格式化代码

``` 

npm run eslint-format
```

### 命令行执行提交
通过命令行提交代码
一般来说，commit message 应该清晰明了，说明本次提交的目的,  所以需要一些规范来使这些comment变得可读

``` 

npm run commit
```

### hooks
保证规范化git的commit信息
Existing hooks are kept. Requires Node >= 10 and Git >= 2.13.0.
``` 

"hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
```

### 命令行执行单测

``` 

npm run test
```

### 命令行生成dist包
运行命令后查看目录/dist

``` 

npm run build
```

### 命令行生成CHANGELOG

``` 

npm run release
```

### 命令行生成文档
支持搜索
支持global函数和class
支持点击跳转代码行
运行命令后查看目录/docs

``` 

npm run docs
```

### 命令行发布到npm

发布共有npm库
可以搭建私服，发布到私服

``` 

npm publish --access public
```

## License

Released under the MIT Licenses.
