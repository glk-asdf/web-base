<!--
 * @Description: switch 语句细节
 * @Version: 2.0
 * @Autor: sun
 * @Date: 2020-10-29 16:17:15
 * @LastEditors: Seven
 * @LastEditTime: 2020-11-03 10:36:43
-->
# switch

* 匹配成功后，若未 break，则会执行后面的语句。可以省略重复的代码

  ~~~
  let i = 'edit';
  switch (true) {
    case /add/i.test(i):
    {
      console.log('add');
    }
    case /edit/i.test(i):
    {
      console.log('edi');
    }
    case /delete/i.test(i):
    {
      console.log('del');
    }
    case /clear/i.test(i):
    {
      console.log('cle');
    }
    case /enable/i.test(i):
    {
      console.log('ena');
    }
    case /disable/i.test(i):
    {
      console.log('dis');
      break;
    }
  }


  // edi
  // del
  // cle
  // ena
  // dis



  let i = 'edit';
  switch (true) {
    case /add/i.test(i):
    {
      console.log('add');
      break;
    }
    case /edit/i.test(i):
    {
      console.log('edi');
      break;
    }
    case /delete/i.test(i):
    {
      console.log('del');
      break;
    }
    case /clear/i.test(i):
    {
      console.log('cle');
      break;
    }
    case /enable/i.test(i):
    {
      console.log('ena');
      break;
    }
    case /disable/i.test(i):
    {
      console.log('dis');
      break;
    }
  }


  // edi
  ~~~