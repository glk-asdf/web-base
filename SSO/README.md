# SSO 单点登录

browser 登录 App1 页面
点击登陆跳转 cas server，做登录操作，在 browser，生成 ST
跳转 App1 页面，并将 ST 传给 App1 服务器，

## [漫谈单点登录（SSO）(淘宝天猫)（转载）](https://www.cnblogs.com/ruiati/p/6249361.html)

* v1: 相同一级域名下的二级域名之间可以将 cookie 放在一级域名下，实现共享

* v2: 不同一级域名，在登录时，访问不同接口，在所有 domain 的 cookie 写下相同 cookie 信息

* v3: 有一个中转 sso 页面，a 页面登录时，跳转 sso 页面，登陆成功后，记录 cookie 在 sso 页面，  
  并携带 cookie 作为 query parameter 重定向至 a 页面，a 验证成功后，并记录 cookie  
  当访问 b 页面时，b 验证失败，跳转 sso 页面，验证成功后，  
  携带 cookie 作为 query parameter 重定向至 b 页面，b 验证成功后，并记录 cookie
