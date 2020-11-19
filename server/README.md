<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: sun
 * @Date: 2020-10-29 08:23:11
 * @LastEditors: Seven
 * @LastEditTime: 2020-11-03 10:34:48
-->
# server 服务相关

## 关于部署的服务宕机

* 设置监测进程，如果相应进程停止就重新启动

* 设置限流，削峰，避免过量请求，导致系统宕机

## 会话

screen 命令：

screen -S mpf #创建一个session，别名mpf  
screen -ls #查看会话列表  
screen -dr mpf #连上session，踢掉其他连接  
screen -X -S sid quit

### 在screen内的窗口操作
ctrl+a c # 创建一个窗口  
ctrl+a w # 在左下角显示所有窗口，*标记当前窗口  
ctrl+a [0-9] # 进入0-9号窗口  
ctrl+a n #next窗口  
ctrl+a p #pre窗口  
ctrl+a k #关闭当前窗口，正在运行的进程被杀。ctrl+d或exit也可以。  
ctrl+a :quit #关闭会话，所有窗口所有进程被杀。  

ctrl+a d 退出会话


## ip-mac

### ip

> 网际协议地址。Internet Protocol Address

### mac

> 物理地址，硬件地址。Media Access Control 或 Medium Access Control

* 查看 mac 使用命令如下：
~~~
// windows
ipcpnfig/all
// linux
ifconfig
~~~

## vpn

> 虚拟私有网络。Virtual Private Network  
  

* 可用于在公司之外登录公司内网