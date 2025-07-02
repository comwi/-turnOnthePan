let 지속시간 = 0
let 작동 = 0
basic.forever(function () {
    if (input.temperature() >= 30) {
        지속시간 = 0
        작동 = 1
    } else if (input.temperature() >= 28) {
        지속시간 = 100
        작동 = 1
    } else if (input.temperature() >= 25) {
        지속시간 = 300
        작동 = 1
    } else if (input.temperature() >= 22) {
        지속시간 = 500
        작동 = 1
    } else {
        작동 = 0
    }
})
basic.forever(function () {
    if (작동 == 1) {
        basic.showLeds(`
            . . # # .
            . . # . .
            . # # . .
            # # . # #
            . . . . #
            `)
        basic.pause(지속시간)
        basic.showLeds(`
            # . . . .
            # # . # #
            . . # # .
            . . # . .
            . # # . .
            `)
        basic.pause(지속시간)
    } else {
        basic.clearScreen()
    }
})
