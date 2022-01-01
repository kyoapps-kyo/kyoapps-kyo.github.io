---
layout: post
title: "在laravel中使用gmail发送邮件"
subtitle: "个人喜欢的音乐集合"
date: 2021-12-31
tags: laravel email
description: "laravel中通过gmail发送邮件给目标收件箱"
color: "rgb(160,51,255)"
cover: "/assets/imgs/common/laravel.png"
---



>给web应用编写一个邮件咨询功能，将提交的表单内容发送给目标邮箱，在laravel中需要怎么做呢？

## 前提准备

1. 拥有一个 google 账号，并且给账号设置二段验证。
2. 在账号的安全性中，为 laravel 生成应用专用密码。
3. 保存应用专用密码待用。

## laravel 中的操作

1. 生成 mailables 类

    ```
    php artisan make:mail SendMail
    ```

2. 编写 Mailables 类

    `app/Mail/SendMail.php`

    ```php
    <?php

    namespace App\Mail;

    use Illuminate\Bus\Queueable;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;
    use Illuminate\Http\Request;

    class SendMail extends Mailable
    {
        use Queueable, SerializesModels;
        public $info;

        public function __construct(Request $request)
        {
            $this->info = $request;
        }
        public function build()
        {
            return $this->from('app@app.com')
            ->view('mail');
        }
    }
    ```

3. 生成一个邮件控制器

    ```
    php artisan make:controller MailsController
    ```

    `app/Controllers/MailsController.php`

    ```php
    <?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Mail;
    use App\Mail\SendMail;

    class MailsController extends Controller
    {
        //
        public function store(Request $request)
        {
            $this->validate($request, [
                'captcha' => 'required|captcha',
                'mail_category' => 'required',
                'mail' => 'email|required',
                'mail_name' => 'required',
                'mail_content' => 'required',
            ]);
            $mailAddr = '接受邮件的电子邮箱' ;
            Mail::to($mailAddr)->send(new SendMail($request));
            return redirect()->route('pages.about')->with('success', '邮件发送成功！');
        }
    }

    ```

4. 新建一个邮件模版资源

    `resources/views/mail.blade.php`

    ```php
    <div class=" container mx-auto lg:px-40 lg:pb-20">
        <h1 class=" text-center text-4xl p-2">HOME PAGE</h1>
        <p class=" text-xl p-2">CATEGORY: { { $info->mail_category } }</p>
        <p class=" text-xl p-2">NAME: { { $info->mail_name } }</p>
        <p class=" text-xl p-2">NAME KATAKANA: { { $info->mail_name_katakana } }</p>
        <p class=" text-xl p-2">MAIL ADDR: { { $info->mail } }</p>
        <p class=" text-xl p-2">CONTENT: { { $info->mail_content } }</p>
    </div>

    ```

5. 配置`.env`文件:

    ```
    MAIL_MAILER=smtp

    MAIL_HOST="smtp.gmail.com"

    MAIL_PORT=587

    MAIL_USERNAME="youremail@gmail.com"

    MAIL_PASSWORD="应用专用密码"

    MAIL_ENCRYPTION=tls

    MAIL_FROM_ADDRESS="app@app.com"

    MAIL_FROM_NAME="${APP_NAME}"
    ```

至此邮件发送功能编写完毕，可以提交表单尝试下是否发送成功。
