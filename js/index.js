     //代码滚动
    var cvs = document.getElementById("cvs");
    var ctx = cvs.getContext("2d");
    var cw = cvs.width = document.body.clientWidth;
    var ch = cvs.height = document.body.clientHeight;
    //动画绘制对象
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var codeRainArr = []; //代码雨数组
    var cols = parseInt(cw / 14); //代码雨列数
    var step = 22;    //步长，每一列内部数字之间的上下间隔
    ctx.font = "bold 18px microsoft yahei"; //声明字体，个人喜欢微软雅黑
	//点击小太阳跳转到showTime界面
	
    function createColorCv() {
        //画布基本颜色
        ctx.fillStyle = "#242424";
        ctx.fillRect(0, 0, cw, ch);
    }
 
    //创建代码雨
    function createCodeRain() {
        for (var n = 0; n < cols; n++) {
            var col = [];
            //基础位置，为了列与列之间产生错位
            var basePos = parseInt(Math.random() * 300);
            //随机速度 3~13之间
            var speed = parseInt(Math.random() * 10) + 3;
            //每组的x轴位置随机产生
            var colx = parseInt(Math.random() * cw)
 
            //绿色随机
            var rgbr = 0;
            var rgbg = parseInt(Math.random() * 255);
            var rgbb = 0;
            //ctx.fillStyle = "rgb("+r+','+g+','+b+")"
 
            for (var i = 0; i < parseInt(ch / step) / 2; i++) {
                var code = {
                    x: colx,
                    y: -(step * i) - basePos,
                    speed: speed,
                    //  text : parseInt(Math.random()*10)%2 == 0 ? 0 : 1  //随机生成0或者1
                     text: ["0", "1", "1", "0", "1", "0", "1", "0", "1", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "0", "", "1", "0", "0", "1"][parseInt(Math.random() * 11)], //随机生成字母数组中的一个
                    color: "rgb(" + rgbr + ',' + rgbg + ',' + rgbb + ")"
                }
                col.push(code);
            }
            codeRainArr.push(col);
        }
    }
    //代码雨下起来
    function codeRaining() {
        //把画布擦干净
        ctx.clearRect(0, 0, cw, ch);
        //创建有颜色的画布
        //createColorCv();
        for (var n = 0; n < codeRainArr.length; n++) {
            //取出列
            col = codeRainArr[n];
            //遍历列，画出该列的代码
            for (var i = 0; i < col.length; i++) {
                var code = col[i];
                if (code.y > ch) {
                    //如果超出下边界则重置到顶部
                    code.y = 0;
                } else {
                    //匀速降落
                    code.y += code.speed;
                }
                
                //1 颜色也随机变化
                //ctx.fillStyle = "hsl("+(parseInt(Math.random()*359)+1)+",30%,"+(50-i*2)+"%)"; 
 
                //2 绿色逐渐变浅
                ctx.fillStyle = "hsl(123,80%,"+(30-i*2)+"%)"; 
 
                //3 绿色随机
                // var r= 0;
                // var g= parseInt(Math.random()*255) + 3;
                // var b= 0;
                // ctx.fillStyle = "rgb("+r+','+g+','+b+")";
 
                //4 一致绿
                ctx.fillStyle = code.color;
                //把代码画出来
                ctx.fillText(code.text, code.x, code.y);
            }
        }
        requestAnimationFrame(codeRaining);
    }
    //创建代码雨
    createCodeRain();
    //开始下雨吧 GO>>
    requestAnimationFrame(codeRaining);

    //点击文字
    (function () {
            var a_idx = 0;
            window.onclick = function (event) {
                var a = new Array("@yin", "@hong", "@zhi", "@yin", "@hong",  "@zhi", "@yin", "@hong",  "@zhi",
                "@yin", "@hong",  "@zhi");
 
                var heart = document.createElement("b"); //创建b元素
                heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
 
                document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
                a_idx = (a_idx + 1) % a.length;
                heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
 
                var f = 16, // 字体大小
                    x = event.clientX - f / 2, // 横坐标
                    y = event.clientY - f, // 纵坐标
                    c = randomColor(), // 随机颜色
                    a = 1, // 透明度
                    s = 1.2; // 放大缩小
 
                var timer = setInterval(function () { //添加定时器
                    if (a <= 0) {
                        document.body.removeChild(heart);
                        clearInterval(timer);
                    } else {
                        heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                            c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                            s + ");";
 
                        y--;
                        a -= 0.016;
                        s += 0.002;
                    }
                }, 15)
 
            }
            // 随机颜色
            function randomColor() {
 
                return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";
 
            }
        }());