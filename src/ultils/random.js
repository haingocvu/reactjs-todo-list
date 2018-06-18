const randomString = length => {
    //62
    let src = "1234567890zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP";
    let str = "";
    for (let index = 0; index < length; index++) {
        str += src.substr(Math.floor(Math.random()*src.length), 1);
    }
    return str;
}

export {randomString};