---
layout: post
title:  "Laravel发送短信接口之easy-sms"
subtitle: '使用easy-sms通过腾讯云发送短信'
date:   2021-10-21
tags: laravel 发送短信 easy-sms 腾讯云短信
description: '虽然easy-sms文档中已经告诉你怎么使用了，但是没有实际的例子的话，还是会遇到不少问题，下文用一个可执行的例子，演示如何使用easy sms通过腾讯云发送短信'
color: 'rgb(196,122,78)'
cover: '/assets/imgs/2021/10/21/iphone.webp'
---

![cat](/assets/imgs/2021/10/21/iphone.webp)

# 短信服务提供商

## 腾讯云

### 选择的理由

- 在腾讯云里有已经认证的企业
- 本来打算使用阿里云的，但是阿里云的短信模版需要已经发布了的应用，还在开发环境下的程序审查不通过，腾讯这里没有这个问题。

### 1.短信服务申请流程（已有腾讯云的账号，并且有认证的公众号或者备案的网站或者可用的企业信息）

**1.申请短信签名**

创建签名
![cat](/assets/imgs/2021/10/21/创建签名.png)
填写签名
![cat](/assets/imgs/2021/10/21/填写签名.png)
签名审查通过
![cat](/assets/imgs/2021/10/21/签名审查通过.png)

**2.申请短信模版**

创建短信模版
![cat](/assets/imgs/2021/10/21/创建短信模版.png)
填写模版
![cat](/assets/imgs/2021/10/21/填写模版.png)
模版审查通过
![cat](/assets/imgs/2021/10/21/模版审查通过.png)

**3.记下SDK-APP-ID和SDK-APP-KEY，之后会用到**

![cat](/assets/imgs/2021/10/21/应用sdkid.png)
![cat](/assets/imgs/2021/10/21/应用sdkkey.png)

### 2.服务端配置

#### 安装 [easy sms][easy-sms]

```
composer require "overtrue/easy-sms"
```

封装该组件的Laravel 的 ServiceProvider

```
$ touch config/easysms.php
```

*config/easysms.php*

```php
<?php

return [
    // HTTP 请求的超时时间（秒）
    'timeout' => 10.0,

    // 默认发送配置
    'default' => [
        // 网关调用策略，默认：顺序调用
        'strategy' => \Overtrue\EasySms\Strategies\OrderStrategy::class,

        // 默认可用的发送网关
        'gateways' => [
            'qcloud',
        ],
    ],
    // 可用的网关配置
    'gateways' => [
        'errorlog' => [
            'file' => '/tmp/easy-sms.log',
        ],
        'qcloud' => [
            'sdk_app_id' => env('SMS_QCLOUD_SDK_APP_ID'), // SDK APP ID
            'app_key' => env('SMS_QCLOUD_APP_KEY'), // APP KEY
            'sign_name' => '申请的名字', // 短信签名，如果使用默认签名，该字段可缺省（对应官方文档中的sign）
            'templates' => [
                'register' => env('SMS_QCLOUD_TEMPLATE_REGISTER'),//短信模版ID
            ],
        ],
    ],
];

```

在 `.env`中配置 `SMS_QCLOUD_SDK_APP_ID`和`SMS_QCLOUD_APP_KEY`还有一个短信模版ID`SMS_QCLOUD_TEMPLATE_REGISTER`，注意下面需要替换为你自己的 `ID`和`KEY`：

```
.
.
.
SMS_QCLOUD_SDK_APP_ID=160*************
SMS_QCLOUD_APP_KEY=91275**************
SMS_QCLOUD_TEMPLATE_REGISTER=11******
```
在 `.env.example` 中也加入配置示例，提交到版本库，方便以后部署
```
.
.
.
# QCloud SMS
SMS_QCLOUD_SDK_APP_ID=
SMS_QCLOUD_APP_KEY=
SMS_QCLOUD_TEMPLATE_REGISTER=
```

然后创建一个 ServiceProvider

```
$ php artisan make:provider EasySmsServiceProvider
```

修改文件

*app/providers/EasySmsServiceProvider.php*
```php
<?php

namespace App\Providers;

use Overtrue\EasySms\EasySms;
use Illuminate\Support\ServiceProvider;

class EasySmsServiceProvider extends ServiceProvider
{
    public function boot()
    {
        //
    }

    public function register()
    {
        $this->app->singleton(EasySms::class, function ($app) {
            return new EasySms(config('easysms'));
        });

        $this->app->alias(EasySms::class, 'easysms');
    }
}
```

最后 打开 `config/app.php` 在 providers 中增加 `App\Providers\EasySmsServiceProvider::class,`

*config/app.php*
```php
.
.
.
    'providers' => [
			.
			.
			.
			App\Providers\EventServiceProvider::class,
			App\Providers\RouteServiceProvider::class,

			App\Providers\EasySmsServiceProvider::class,
	],
.
.
.
```

打开 tinker
```
php artisan tinker
```
输入如下代码，注意将 `13212345678` 替换为你自己的手机号

```php
$sms = app('easysms');
try {
	$sms->send(13212345678, [
                    'template' => config('easysms.gateways.qcloud.templates.register'),
                    'data' => [
                        $code,//对应着短信模版里的{1}
                    ],
                ]);
            } catch (\Overtrue\EasySms\Exceptions\NoGatewayAvailableException $exception) {
                $message = $exception->getException('qloucd')->getMessage();
	dd($message);
}
```

到这里，你的手机就可以收到验证码了，如果因为腾讯账户里没有短信余量而发不出短信，就得自己想办法啦。

[easy-sms]: https://github.com/kyoapps-kyo/easy-sms

