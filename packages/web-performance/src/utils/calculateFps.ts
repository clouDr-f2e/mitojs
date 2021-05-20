/*
 *  Record 3 FPS and take the average (frame/second)
 * */
import { roundByFour } from './index'

const calculateFps = (): Promise<number> => {
  return new Promise((resolve) => {
    let frame = 0
    let lastFrameTime = +new Date()
    let fpsQueue = []
    let timerId = null

    const calculate = () => {
      let now = +new Date()

      frame = frame + 1

      if (now > 1000 + lastFrameTime) {
        let fps = Math.round(frame / ((now - lastFrameTime) / 1000))
        fpsQueue.push(fps)
        frame = 0
        lastFrameTime = +new Date()

        if (fpsQueue.length > 3) {
          cancelAnimationFrame(timerId)
          resolve(
            roundByFour(
              fpsQueue.reduce((sum, fps) => {
                sum = sum + fps
                return sum
              }, 0) / fpsQueue.length,
              2
            )
          )
        } else {
          timerId = requestAnimationFrame(calculate)
        }
      } else {
        timerId = requestAnimationFrame(calculate)
      }
    }

    calculate()
  })
}

export default calculateFps