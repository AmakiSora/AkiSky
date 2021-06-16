<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu>
          <el-menu-item>123</el-menu-item>
          <el-menu-item>123</el-menu-item>
          <el-menu-item>123</el-menu-item>
          <el-menu-item>123</el-menu-item>
        </el-menu>
        <el-menu>
          <el-menu-item>123</el-menu-item>
          <el-menu-item>123</el-menu-item>
          <el-menu-item>123</el-menu-item>
          <el-menu-item>123</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>


        <h1 >git操作命令</h1>
        <pre><code class='language-shell' lang='shell'>git config --global user.name&#39;NOCOSMOS&#39;
git config --global user.email&#39;961737902@qq.com&#39;
git add .
git commit  -m &quot;xxxxx&quot;
git push
</code></pre>
        <p>删除某个版本</p>
        <pre><code class='language-shell' lang='shell'>git reset --hard 上个版本号
git push --force强制推送
</code></pre>
        <p>Git删除上次提交的版本</p>
        <p>1、强制返回上次的版本（~1回退到上一次提交，~2回退到上两次提交，以此类推）</p>
        <pre><code class='language-shell' lang='shell'>git reset --hard HEAD~1
</code></pre>
        <p>2、将本次变更强行推送至服务器；这样在服务器上就能回退到你想回退的位置。</p>
        <pre><code class='language-shell' lang='shell'>git push --force
</code></pre>
        <p>&nbsp;</p>
        <p>当我们用 <code>git add</code> 把某些文件提交到暂存区之后，突然发现一个文件原本不需要这次被 add 进去，这要怎么做呢？</p>
        <pre><code class='language-shell' lang='shell'>git rm --cache xxx.js
</code></pre>
        <p>只把文件从暂存区删除，<strong>不会修改文件的内容，也不会删除文件</strong> recommended</p>
        <pre><code class='language-shell' lang='shell'>git rm -f xxx.js
</code></pre>
        <p>直接把文件从暂存区删除，同时删除物理文件，回收站也找不到。</p>
        <p>&nbsp;</p>


      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Blog",
  components: {}
}
</script>

<style scoped>
.el-container{
  margin-left: 190px;
  margin-right: 190px;
}
.el-aside{
  margin: 10px 5px 10px 10px;
  border-radius: 20px;
}
.el-main{
  margin: 10px 10px 10px 5px;
  background: white;
  border-radius: 20px;
}
.el-menu{
  background: white;
  border-radius: 20px;
  margin-bottom: 10px;
}
.el-menu-item{
  border-radius: 20px;
}

</style>
