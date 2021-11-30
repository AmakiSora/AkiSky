<template>
  <div class="draw">
    <div class="menu">
      <div class="el-button" id="pen">画笔</div>
      <div class="el-button">粗细</div>
      <div class="el-button">颜色</div>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "Draw",
  mounted() {
    //获取canvas
    const canvas = document.querySelector("#canvas");
    //设置canvas的宽高
    canvas.setAttribute("width",canvas.offsetWidth)
    canvas.setAttribute("height",canvas.offsetHeight)
    var ctx = canvas.getContext('2d')
    var board = {
      type:"none",
      isDraw:false,
      penFn:function (e) {
        var x = e.pageX - canvas.offsetLeft
        var y = e.pageY - canvas.offsetTop
        ctx.beginPath()
        ctx.arc(x,y,3,0,2*Math.PI)
        ctx.fill()
        ctx.closePath()
      }
    }
    var pen = document.querySelector("#pen")
    pen.onclick = function (){
      board.type = "pen"
    }
    canvas.onmousedown = function () {
      board.isDraw = true
    }
    canvas.onmouseup = function () {
      board.isDraw = false
    }
    canvas.onmousemove = function (e) {
      if (board.isDraw){
        board[board.type+'Fn'](e)
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.menu{
  height: 100px;
  width: 100vw;
  display: flex;
  border: 1px solid #212121;
  border-radius: 3px;
  justify-content: space-around;
  align-items: center;
}
.el-button{
  width: 200px;
  height: 60px;
  border: 1px solid #a2cbf4;
  border-radius: 20px;
  text-align: center;
  line-height: 60px;
}
#canvas{
  flex: 1;
  width: 100vw;
  height: 100vh;
}
</style>
