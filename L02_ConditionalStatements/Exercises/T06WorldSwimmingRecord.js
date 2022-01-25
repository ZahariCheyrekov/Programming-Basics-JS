function getRecord(input) {
    const recordInSeconds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeForOneMeter = Number(input[2]);

    const lag = Math.floor(distanceInMeters / 15) * 12.5;
    const ivanTime = distanceInMeters * timeForOneMeter + lag;
    const failRecord = ivanTime - recordInSeconds;

    if (ivanTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${failRecord.toFixed(2)} seconds slower.`);
    }
}