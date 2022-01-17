function goShopping(input) {
    const nameSeries = input[0]
    const timeEpisode = Number(input[1])
    const timeBreakAll = Number(input[2])

    let lunchTime = timeBreakAll / 8
    let timeFree = timeBreakAll / 4
    let rest = timeBreakAll - timeFree - timeEpisode - lunchTime

    if (rest >= 0) {
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(rest)} minutes free time.`)
    } else {
        rest = rest * (-1)
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(rest)} more minutes.`)
    }
}