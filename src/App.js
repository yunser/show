import React from 'react'
import logo from './logo.svg'
import './App.css'

const COLOR_RED = '#ea4335'
const COLOR_YELLOW = '#fbbc05'
const COLOR_BLUE = '#4285f4'

const FRAME_END = {
    startDuration: 9,
    frameDuration: 1,
    draw(parmas) {
        let { ctx, canvasWidth, canvasHeight } = parmas

        ctx.fillStyle = '#333'
        ctx.font = "40px Georgia"
        ctx.textBaseline = 'middle'; //设置文本的垂直对齐方式
        ctx.textAlign = 'center';//设置文本的水平对齐方式
        ctx.fillText('播放结束，谢谢', canvasWidth / 2, canvasHeight / 2)
    }
}

function titleFrame(title) {
    return {
        startDuration: 0,
        frameDuration: 1,
        draw(parmas) {
            let { ctx, canvasWidth, canvasHeight } = parmas
            ctx.fillStyle = '#333'
            ctx.font = "40px Georgia"
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'center'
            ctx.fillText(title, canvasWidth / 2, canvasHeight / 2)
        }
    }
}

let videos = [
    {
        id: '1',
        name: '什么是圆？',
        totalTime: 4,
        objects: [
            titleFrame('什么是圆？'),
            {
                startDuration: 0.5,
                frameDuration: 0.5,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight } = parmas
                    ctx.fillStyle = '#333'
                    ctx.font = "24px Georgia"
                    ctx.textBaseline = 'middle'
                    ctx.textAlign = 'center'
                    ctx.fillText('-xxx 制作', canvasWidth * 0.75, canvasHeight * 0.75)
                }
            },
            // 什么是圆
            {
                startDuration: 1,
                frameDuration: 8,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight, progress, drawDot } = parmas
                    let padding = 16

                    let radius = 80
                    let r = 80

                    let center = {
                        x: r + padding,
                        y: r + padding,
                    }


                    let myTime = progress - 0.1
                    let myTotal = 0.6
                    let myProgress = myTime / myTotal
                    if (myProgress > 1) {
                        myProgress = 1
                    }
                    let angle = 90 - 360 * myProgress
                    if (angle < 360) {
                        angle += 360
                    }

                    let x = center.x + radius * Math.cos(angle * Math.PI / 180)
                    let y = center.y + radius * Math.sin(angle * Math.PI / 180)


                    ctx.beginPath()
                    ctx.strokeStyle = COLOR_BLUE
                    ctx.lineWidth = 4
                    let endAngle = 0.5 - 2 * myProgress
                    ctx.arc(center.x, center.y, radius, 0.5 * Math.PI, endAngle * Math.PI, true)
                    ctx.stroke()
                    // 半径
                    ctx.beginPath()
                    ctx.strokeStyle = COLOR_YELLOW
                    ctx.lineWidth = 4
                    ctx.moveTo(center.x, center.y)
                    ctx.lineTo(x, y)
                    ctx.strokeStyle = COLOR_RED
                    ctx.stroke()
                    // 圆上一点
                    ctx.fillStyle = COLOR_YELLOW
                    drawDot(x, y)
                    drawDot(center.x, center.y)


                }
            },
            FRAME_END

        ],
    },
    {
        id: '1',
        name: '圆的周长',
        totalTime: 10 * 1000,
        objects: [
            {
                startDuration: 0,
                frameDuration: 1,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight } = parmas
                    ctx.fillStyle = '#333'
                    ctx.font = "40px Georgia"
                    ctx.textBaseline = 'middle'
                    ctx.textAlign = 'center'
                    ctx.fillText('圆的周长？', canvasWidth / 2, canvasHeight / 2)
                }
            },
            // 圆的周长
            {
                startDuration: 1,
                frameDuration: 8,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight, progress, drawDot } = parmas

                    let myTime = progress - 0.1
                    let myTotal = 0.6
                    let myProgress = myTime / myTotal
                    if (myProgress > 1) {
                        myProgress = 1
                    }
                    let angle = 90 - 360 * myProgress
                    if (angle < 360) {
                        angle += 360
                    }

                    let center = {
                        x: canvasWidth / 2,
                        y: canvasHeight / 2
                    }
                    let radius = 30

                    let x = center.x + radius * Math.cos(angle * Math.PI / 180)
                    let y = center.y + radius * Math.sin(angle * Math.PI / 180)


                    const COLOR_RED = '#ea4335'
                    const COLOR_YELLOW = '#fbbc05'
                    ctx.globalAlpha = 0.2
                    ctx.beginPath()
                    ctx.strokeStyle = COLOR_RED
                    ctx.lineWidth = 4
                    let endAngle = 0.5 - 2 * myProgress
                    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true)
                    ctx.stroke()
                    ctx.globalAlpha = 1

                    ctx.fillStyle = COLOR_YELLOW
                    drawDot(center.x, center.y)

                    let length = 2 * Math.PI * radius
                    // ctx.beginPath()
                    // ctx.strokeStyle = COLOR_YELLOW
                    // ctx.lineWidth = 4
                    // ctx.moveTo(center.x, center.y + radius)
                    // ctx.lineTo(center.x + length, center.y + radius)
                    // ctx.stroke()

                    ctx.fillStyle = '#09c'
                    let center2 = {
                        x: center.x + length * myProgress,
                        y: center.y
                    }
                    // drawDot(center2.x, center.y)
                    // 铺平的线
                    ctx.beginPath()
                    ctx.strokeStyle = COLOR_RED
                    ctx.lineWidth = 4
                    ctx.moveTo(center.x, center.y + radius)
                    ctx.lineTo(center2.x, center2.y + radius)
                    ctx.stroke()
                    // 剩下的圆
                    ctx.beginPath()
                    ctx.strokeStyle = COLOR_RED
                    ctx.lineWidth = 4
                    let endAngle2 = 0.5 - 2 * (1 - myProgress)
                    ctx.arc(center2.x, center2.y, radius, 0.5 * Math.PI, endAngle2 * Math.PI, true)
                    ctx.stroke()


                }
            },
            FRAME_END
        ],
    },
    {
        id: '1',
        name: '三角形的面积',
        totalTime: 10 * 1000,
        objects: [
            titleFrame('三角形的面积'),
            {
                startDuration: 1,
                frameDuration: 8,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight, progress, drawDot } = parmas

                    let myTime = progress - 0.1
                    let myTotal = 0.6
                    let myProgress = myTime / myTotal
                    if (myProgress > 1) {
                        myProgress = 1
                    }
                    let angle = 90 - 360 * myProgress
                    if (angle < 360) {
                        angle += 360
                    }

                    let center = {
                        x: 100,
                        y: 240
                    }
                    let radius = 30

                    let x = center.x + radius * Math.cos(angle * Math.PI / 180)
                    let y = center.y + radius * Math.sin(angle * Math.PI / 180)


                    const COLOR_RED = '#ea4335'
                    const COLOR_YELLOW = '#fbbc05'
                    const COLOR_BLUE = '#4285f4'
                    const COLOR_BLACK = '#333'

                    // ctx.globalAlpha = 0.2
                    // ctx.beginPath()
                    // ctx.strokeStyle = COLOR_RED
                    // ctx.lineWidth = 4
                    // let endAngle = 0.5 - 2 * myProgress
                    // ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true)
                    // ctx.stroke()
                    // ctx.globalAlpha = 1

                    ctx.fillStyle = COLOR_YELLOW

                    let pt1 = {
                        x: 260,
                        y: 80
                    }
                    let pt2 = {
                        x: 200,
                        y: 180
                    }
                    let pt3 = {
                        x: 340,
                        y: 180
                    }
                    let ptJiao = {
                        x: 260,
                        y: 180
                    }
                    // drawDot(pt1.x, pt1.y)
                    // drawDot(ptJiao.x, ptJiao.y)
                    // drawDot(pt2.x, pt2.y)
                    // drawDot(pt3.x, pt3.y)

                    // h

                    // 三角形
                    ctx.strokeStyle = COLOR_BLACK
                    ctx.fillStyle = COLOR_BLUE
                    ctx.lineWidth = 4
                    ctx.beginPath()
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(pt2.x, pt2.y)
                    ctx.lineTo(pt3.x, pt3.y)
                    ctx.closePath()
                    ctx.fill()
                    ctx.stroke()
                    // ctx.drawLine
                    // ctx.lineTo(pt1.x, ptJiao.y)
                    let rotateCenter = {
                        x: (pt1.x + pt3.x) / 2,
                        y: (pt1.y + pt3.y) / 2
                    }
                    // drawDot(rotateCenter.x, rotateCenter.y)
                    // 底





                    function getRotatePt(pt) {
                        return {
                            x: (pt.x - rotateCenter.x) * Math.cos(angPI) - (pt.y - rotateCenter.y) * Math.sin(angPI) + rotateCenter.x,
                            y: (pt.y - rotateCenter.y) * Math.cos(angPI) + (pt.x - rotateCenter.x) * Math.sin(angPI) + rotateCenter.y
                        }
                    }

                    let ang = myProgress * 180
                    let angPI = ang / 180 * Math.PI
                    let pt11 = getRotatePt(pt1)
                    // drawDot(pt11.x, pt11.y)
                    let pt22 = getRotatePt(pt2)
                    // drawDot(pt22.x, pt22.y)
                    let pt33 = getRotatePt(pt3)
                    // drawDot(pt33.x, pt33.y)
                    // 旋转后的三角形
                    ctx.lineWidth = 4
                    ctx.strokeStyle = COLOR_BLACK
                    ctx.fillStyle = COLOR_RED
                    ctx.beginPath()
                    ctx.moveTo(pt11.x, pt11.y)
                    ctx.lineTo(pt22.x, pt22.y)
                    ctx.lineTo(pt33.x, pt33.y)
                    ctx.closePath()
                    ctx.fill()
                    ctx.stroke()

                    ctx.strokeStyle = '#333'
                    ctx.lineWidth = 1
                    let ct = {
                        x: (pt2.x + pt3.x) / 2,
                        y: (pt2.y + pt3.y) / 2
                    }
                    ctx.fillStyle = COLOR_BLACK
                    ctx.font = "14px Georgia"
                    ctx.textBaseline = 'middle'
                    ctx.textAlign = 'center'
                    ctx.fillText('底', ct.x, ct.y + 48)

                    function drawAsd() {
                        ctx.beginPath()
                        ctx.moveTo(pt2.x, pt2.y + 16)
                        ctx.lineTo(pt2.x + 4, pt2.y + 16 + 8)
                        ctx.lineTo(ct.x - 4, ct.y + 16 + 8)
                        ctx.lineTo(ct.x, ct.y + 16 + 8 + 8)
                        ctx.lineTo(ct.x + 4, ct.y + 16 + 8)
                        ctx.lineTo(pt3.x - 4, pt3.y + 16 + 8)
                        ctx.lineTo(pt3.x, pt3.y + 16)
                        ctx.stroke()
                    }
                    drawAsd()

                    // 高
                    // 高线
                    const angle_size = 16
                    ctx.strokeStyle = '#fff'
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(ptJiao.x, ptJiao.y)
                    ctx.stroke()
                    ctx.beginPath()
                    ctx.moveTo(ptJiao.x, ptJiao.y - angle_size)
                    ctx.lineTo(ptJiao.x + angle_size, ptJiao.y - angle_size)
                    ctx.stroke()
                    ctx.beginPath()
                    ctx.moveTo(ptJiao.x + angle_size, ptJiao.y - angle_size)
                    ctx.lineTo(ptJiao.x + angle_size, ptJiao.y)
                    ctx.stroke()
                    // 高文字
                    ctx.fillStyle = '#fff'
                    ctx.font = "14px Georgia"
                    ctx.textBaseline = 'middle'
                    ctx.textAlign = 'center'
                    ctx.fillText('高', ptJiao.x + 16, (ptJiao.y + pt1.y) / 2)

                    if (progress > 0.7) {
                        ctx.fillStyle = COLOR_BLACK
                        ctx.font = "20px Georgia"
                        ctx.textBaseline = 'middle'
                        ctx.textAlign = 'center'
                        ctx.fillText('面积 = (底 × 高) ÷ 2', ct.x, ct.y + 80)
                    }
                }
            },
            FRAME_END
        ]
    },
    {
        id: '1',
        name: '平行四边形的面积',
        totalTime: 10 * 1000,
        objects: [
            titleFrame('平行四边形的面积'),
            // 平行四边形的面积
            {
                startDuration: 1,
                frameDuration: 8,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight, progress, drawDot } = parmas

                    let myTime = progress - 0.1
                    let myTotal = 0.6
                    let myProgress = myTime / myTotal
                    if (myProgress > 1) {
                        myProgress = 1
                    }
                    let angle = 90 - 360 * myProgress
                    if (angle < 360) {
                        angle += 360
                    }


                    const COLOR_RED = '#ea4335'
                    const COLOR_YELLOW = '#fbbc05'
                    // ctx.globalAlpha = 0.2
                    // ctx.beginPath()
                    // ctx.strokeStyle = COLOR_RED
                    // ctx.lineWidth = 4
                    // let endAngle = 0.5 - 2 * myProgress
                    // ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true)
                    // ctx.stroke()
                    // ctx.globalAlpha = 1

                    ctx.fillStyle = COLOR_YELLOW
                    // drawDot(center.x, center.y)

                    // ctx.beginPath()
                    // ctx.strokeStyle = COLOR_YELLOW
                    // ctx.lineWidth = 4
                    // ctx.moveTo(center.x, center.y + radius)
                    // ctx.lineTo(center.x + length, center.y + radius)
                    // ctx.stroke()

                    ctx.fillStyle = '#09c'

                    let width = 240
                    let height = 120
                    let offset = 60
                    let pt1 = {
                        x: 100,
                        y: 100
                    }
                    let pt2 = {
                        x: pt1.x + width,
                        y: pt1.y
                    }
                    let pt3 = {
                        x: pt1.x - offset,
                        y: pt1.y + height
                    }
                    let pt4 = {
                        x: pt1.x - offset + width,
                        y: pt1.y + height
                    }
                    let ptJiao = {
                        x: pt1.x,
                        y: pt1.y + height
                    }
                    // drawDot(pt1.x, pt1.y)
                    // drawDot(pt2.x, pt2.y)
                    // drawDot(pt3.x, pt3.y)
                    // drawDot(pt4.x, pt4.y)
                    // drawDot(ptJiao.x, ptJiao.y)
                    ctx.beginPath()
                    ctx.fillStyle = COLOR_RED
                    ctx.lineWidth = 4
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(pt2.x, pt2.y)
                    ctx.lineTo(pt4.x, pt4.y)
                    ctx.lineTo(ptJiao.x, ptJiao.y)
                    ctx.closePath()
                    ctx.fill()

                    let pt11 = {
                        x: pt1.x + width * myProgress,
                        y: pt1.y
                    }
                    let pt33 = {
                        x: pt3.x + width * myProgress,
                        y: pt3.y
                    }
                    let ptJiao2 = {
                        x: ptJiao.x + width * myProgress,
                        y: ptJiao.y
                    }
                    // drawDot(pt11.x, pt11.y)
                    // drawDot(pt33.x, pt33.y)
                    // drawDot(ptJiao2.x, ptJiao2.y)
                    ctx.beginPath()
                    ctx.fillStyle = COLOR_YELLOW
                    ctx.lineWidth = 4
                    ctx.moveTo(pt11.x, pt11.y)
                    ctx.lineTo(pt33.x, pt33.y)
                    ctx.lineTo(ptJiao2.x, ptJiao2.y)
                    ctx.closePath()
                    ctx.fill()
                }
            },
            FRAME_END
        ]
    },
    {
        id: '1',
        name: '测试指示',
        totalTime: 10 * 1000,
        objects: [
            // 测试指示
            {
                startDuration: 1,
                frameDuration: 8,
                draw(parmas) {
                    let { ctx, canvasWidth, canvasHeight, progress, drawDot } = parmas

                    let myTime = progress - 0.1
                    let myTotal = 0.6
                    let myProgress = myTime / myTotal
                    if (myProgress > 1) {
                        myProgress = 1
                    }

                    const COLOR_RED = '#ea4335'
                    const COLOR_YELLOW = '#fbbc05'
                    // ctx.globalAlpha = 0.2
                    // ctx.beginPath()
                    // ctx.strokeStyle = COLOR_RED
                    // ctx.lineWidth = 4
                    // let endAngle = 0.5 - 2 * myProgress
                    // ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true)
                    // ctx.stroke()
                    // ctx.globalAlpha = 1

                    let pt1 = {
                        x: 60,
                        y: 60
                    }
                    ctx.fillStyle = '#09c'
                    drawDot(pt1.x, pt1.y)
                    let lineProgress = progress * 2
                    if (lineProgress > 1) {
                        lineProgress = 1
                    }
                    let pt2 = {
                        x: pt1.x + 40 * lineProgress * 2,
                        y:60
                    }
                    let pt3 = {
                        x: pt2.x - 20,
                        y: pt2.y
                    }
                    ctx.beginPath()
                    ctx.fillStyle = COLOR_RED
                    ctx.lineWidth = 2
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(pt2.x, pt2.y)
                    ctx.stroke()
                    if (progress > 0.5) {
                        ctx.beginPath()
                        ctx.fillStyle = COLOR_RED
                        ctx.lineWidth = 2
                        ctx.moveTo(pt2.x, pt3.y)
                        ctx.lineTo(pt2.x, pt2.y)
                        ctx.stroke()
                    }

                }

            },
        ]
    }
]

class App extends React.Component {

    state = {
        curVideoIndex: 3,
        progress: 0.3,
        time: '00:00',
        message: 'Hello Vue!',
        curTime: 0,
        totalTime: 10 * 1000
    }

    componentDidMount() {
        const { progress } = this.state
        let canvas = document.getElementById('canvas')
        console.log('canvas', canvas)
        let padding = 16
        let r = 80

        let width = 500
        let height = 300

        canvas.width = width * 2
        canvas.height = height * 2
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        let ctx = canvas.getContext('2d')
        ctx.width = width
        ctx.height = height
        this.ctx = ctx

        ctx.scale(2, 2)

        this.draw(progress)

        document.getElementById('range').addEventListener('input', e => {
            console.log('INPUT', e.target.value)
            let progress = e.target.value
            this.curTime = this.totalTime * progress
            let curSecond = this.curTime / 1000
            this.time = `${Math.floor(curSecond / 60)}:${Math.ceil(curSecond % 60)}`
            this.draw(e.target.value)
        })
    }

    draw(progress) {

        let { curVideoIndex } = this.state

        let play

        let width = 500
        let height = 300
        let ctx = this.ctx
        let padding = 16
        let r = 80
        let center = {
            x: r + padding,
            y: r + padding,
        }

        // ctx.beginPath()
        // ctx.arc(center.x, center.y, r, 0, 2 * Math.PI)
        // // ctx.rect(0, 0, 100, 100)
        // ctx.stroke()


        let x = 100
        let y = 100


        console.log('draw', progress)
        ctx.clearRect(0, 0, width, height)


        function drawDot(x, y) {
            ctx.beginPath()
            ctx.arc(x, y, 6, 0, 2 * Math.PI)
            ctx.fill()
        }

        function drawLine(x, y, x2, y2) {
            ctx.stokeStyle = '#333'
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x2, y2)
            ctx.stroke()
        }

        let radius = 80


        let objects = videos[curVideoIndex].objects


        let totalDuration = 0
        for (let i = 0; i < objects.length; i++) {
            totalDuration += objects[i].frameDuration
        }
        totalDuration = 10
        console.log('总时间', totalDuration)
        this.totalTime = totalDuration

        let durationCount = 0
        for (let i = 0; i < objects.length; i++) {
            objects[i].startProgress = objects[i].startDuration / totalDuration
            objects[i].frameLength = objects[i].frameDuration / totalDuration
            // if (objects[i].frameDuration) {
            // }
            durationCount += objects[i].frameDuration
        }
        console.log('解析后', objects)

        for (let obj of objects) {
            if (progress >= obj.startProgress && progress < obj.startProgress + obj.frameLength) {
                obj.draw({
                    ctx,
                    canvasWidth: width,
                    canvasHeight: height,
                    progress,
                    drawDot
                })
            }
        }

        console.log('asas')
    }

    render() {
        let { time, message, curTime, progress, curVideoIndex } = this.state
        // let { totalTime } = this
        let totalTime = videos[curVideoIndex].totalTime
        let _this = this

        function onInput(e) {
            // setS
            let progress = e.target.value
            _this.setState({
                progress
            })
        }


        let play = () => {
            _this.setState({
                progress: 0
            })
            this.draw(progress)

            let timer = setInterval(() => {
                console.log('setInterval', totalTime)
                if (progress > 1) {
                    clearInterval(timer)
                    return
                }
                progress += 0.01
                if (progress <= 1) {
                    this.draw(progress)
                }
            }, totalTime / 100)
        }

        function selectVideo(item, index) {
            _this.setState({
                curVideoIndex: index
            }, () => {
                _this.draw(0)
            })
        }

        const videoItem = (item, index) => {
            return (
                <li className="videoItem" key={index} onClick={e => selectVideo(item, index)}>{item.name}</li>
            )
        }
        return (
            <div className="App">
                <div className="editor">
                    <canvas id="canvas"></canvas>
                    <br />
                    <input className="range" id="range" type="range" value={progress} step="0.01" min="0" max="1" onInput={onInput} />
                    <button type="button" id="play" onClick={e => play()}>播放</button>
                    <div>{time}/{totalTime / 1000}</div>
                    <div>
                    progress: {progress}
                    </div>

                    <ul className="videoList">
                        {videos.map(videoItem)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
