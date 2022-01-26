function getHours(input) {
    const hour = Number(input[0])
    const weekday = input[1]

    if (weekday == 'Sunday' || hour < 10 || hour > 18) {
        console.log("closed")
    } else {
        console.log("open")
    }
}