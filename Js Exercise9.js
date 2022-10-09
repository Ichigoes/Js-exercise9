function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number((input[3] / 100).toFixed(3));

    let aquariumVolume = (length * width * height) / 1000;
    let neededLiters = aquariumVolume * (1 - percent)
    
    console.log(neededLiters);
}

fishTank(["85", "75", "47", "17"])