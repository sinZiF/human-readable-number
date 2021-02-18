module.exports = function toReadable (number) {
    let resolve;

    const numbers = new Map([
        [100, 'hundred'],
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety']
        
    ]);

    function convertation(x) {
        let arr, str, j, arrHundred
        str = x.toString();
        arr =  str.split('');
        if (arr.length > 2 && arr.length <= 3) {
            arrHundred = arr.slice(2)
            j = arrHundred.join('');
            return parseInt(j)
        } else {
            arr.shift();
        }
        j = arr.join('');
        return parseInt(j)
    }

    function integer(n) {
        let arr, str, j, arrHundred
        str = n.toString();
        arr =  str.split('');
        j = arr.slice(1, 2);
        j.push(0);
        arrHundred = j.join('');
        return parseInt(arrHundred)
    }

    function oneNineteen(x) {
        let arr, str, j, arrHundred, oneNumber, twoNumbers;
        str = x.toString();
        arr =  str.split('');
        oneNumber = arr.slice(2);
        twoNumbers = arr.slice(1);
        let one = oneNumber.join('');
        let two = twoNumbers.join('');
        let resolve1 = parseInt(one);
        let resolve2 = parseInt(two);
        

        if (resolve2 < 10) {
            return resolve1
        } else {
            return resolve2
        }
    }



    if (number > 20 && number < 30) {
            // >= 20 
        return `${numbers.get(20)} ${numbers.get(convertation(number))}`;
    } else if (number > 30 && number < 40) {
            // >= 30
        return `${numbers.get(30)} ${numbers.get(convertation(number))}`;
    } else if (number > 40 && number < 50) {
            // >= 40
        return `${numbers.get(40)} ${numbers.get(convertation(number))}`;
    } else if (number > 50 && number < 60) {
            // >= 50
        return `${numbers.get(50)} ${numbers.get(convertation(number))}`;
    } else if (number > 60 && number < 70) {
            // >= 60
        return `${numbers.get(60)} ${numbers.get(convertation(number))}`;
    } else if (number > 70 && number < 80) {
            // >= 70
        return `${numbers.get(70)} ${numbers.get(convertation(number))}`;
    } else if (number > 80 && number < 90) {
            // >= 80
        return `${numbers.get(80)} ${numbers.get(convertation(number))}`;
    } else if (number > 90 && number < 100) {
            // >= 90
        return `${numbers.get(90)} ${numbers.get(convertation(number))}`;
    } else if (number >= 100 && number < 200) {
            // = 100
            if (number === 100) {
                return `${numbers.get(1)} ${numbers.get(100)}`;
            } else if (number > 100 && number < 120) {
                return `${numbers.get(1)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
            } else if (number === 120 || number === 130 || number === 140 || number === 150 || number === 160 || number === 170 || number === 180 || number === 190) {
                return `${numbers.get(1)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
            }
            // > 120
        return `${numbers.get(1)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 200 && number < 300) {
        // = 200
        if (number === 200) {
            return `${numbers.get(2)} ${numbers.get(100)}`;
        } else if (number > 200 && number < 220) {
            return `${numbers.get(2)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 220 || number === 230 || number === 240 || number === 250 || number === 260 || number === 270 || number === 280 || number === 290) {
            return `${numbers.get(2)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 200
        return `${numbers.get(2)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 300 && number < 400) {
        // = 300
        if (number === 300) {
            return `${numbers.get(3)} ${numbers.get(100)}`;
        } else if (number > 300 && number < 320) {
            return `${numbers.get(3)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 320 || number === 330 || number === 340 || number === 350 || number === 360 || number === 370 || number === 380 || number === 390) {
            return `${numbers.get(3)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 300
        return `${numbers.get(3)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 400 && number < 500) {
        // = 400
        if (number === 400) {
            return `${numbers.get(4)} ${numbers.get(100)}`;
        } else if (number > 400 && number < 420) {
            return `${numbers.get(4)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 420 || number === 430 || number === 440 || number === 450 || number === 460 || number === 470 || number === 480 || number === 490) {
            return `${numbers.get(4)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 400
        return `${numbers.get(4)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 500 && number < 600) {
        // = 500
        if (number === 500) {
            return `${numbers.get(5)} ${numbers.get(100)}`;
        } else if (number > 500 && number < 520) {
            return `${numbers.get(5)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 520 || number === 530 || number === 540 || number === 550 || number === 560 || number === 570 || number === 580 || number === 590) {
            return `${numbers.get(5)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 500
        return `${numbers.get(5)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 600 && number < 700) {
        // = 600
        if (number === 600) {
            return `${numbers.get(6)} ${numbers.get(100)}`;
        } else if (number > 600 && number < 620) {
            return `${numbers.get(6)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 620 || number === 630 || number === 640 || number === 650 || number === 660 || number === 670 || number === 680 || number === 690) {
            return `${numbers.get(6)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 600
        return `${numbers.get(6)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 700 && number < 800) {
        // = 700
        if (number === 700) {
            return `${numbers.get(7)} ${numbers.get(100)}`;
        } else if (number > 700 && number < 720) {
            return `${numbers.get(7)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 720 || number === 730 || number === 740 || number === 750 || number === 760 || number === 770 || number === 780 || number === 790) {
            return `${numbers.get(7)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 700
        return `${numbers.get(7)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 800 && number < 900) {
        // = 800
        if (number === 800) {
            return `${numbers.get(8)} ${numbers.get(100)}`;
        } else if (number > 800 && number < 820) {
            return `${numbers.get(8)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 820 || number === 830 || number === 840 || number === 850 || number === 860 || number === 870 || number === 880 || number === 890) {
            return `${numbers.get(8)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 800
        return `${numbers.get(8)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    } else if (number >= 900 && number < 1000) {
        // = 900
        if (number === 900) {
            return `${numbers.get(9)} ${numbers.get(100)}`;
        } else if (number > 900 && number < 920) {
            return `${numbers.get(9)} ${numbers.get(100)} ${numbers.get(oneNineteen(number))}`
        } else if (number === 920 || number === 930 || number === 940 || number === 950 || number === 960 || number === 970 || number === 980 || number === 990) {
            return `${numbers.get(9)} ${numbers.get(100)} ${numbers.get(integer(number))}`;
        }
        // > 900
        return `${numbers.get(9)} ${numbers.get(100)} ${numbers.get(integer(number))} ${numbers.get(convertation(number))}`;
    }

    resolve = numbers.get(number)
    return resolve;
  
}
