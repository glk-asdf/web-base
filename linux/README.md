# linux

## linux 命令

### 文件与目录管理

#### cp 复制文件或目录

> cp 即 copy 文件和目录

~~~
// cp [-adfilprus] 来源档(source) 目标档(destination)
// cp [options] source1 source2 source3 ... destination

cp -a a.text /Volumes/glk/a.text
~~~

* -a 相当于 -pdr，（常用）

* -d 若来源为连结档的属性（link file），则复制连结档的属性而非文件本身

* -f

* -i

* -l

* -p 连同文件的属性一起复制过去，而非使用默认属性（备份常用）

* -r 递归持续复制，用于目录的复制行为（常用）

* -u

* -s

#### rm 移除文件或目录

> rm 即 remove 文件和目录

~~~
// rm [-fir] 文件或目录
rm -rfi
~~~

* -f force（不可抗拒），会忽略不存在的文件，不会出现警告信息

* -i 互动模式，会在删除前询问是否操作

* -r recursion（递归），常用于删除目录，非常危险的选项

