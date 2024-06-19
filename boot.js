//Powered By 飞龙K7君，侵权必究 BV13BgTetESs
$(document).ready(async function() {
    while (true) {
        for (var i = 0xE100; i <= 0xE176; ++i) {
            $("#loader").empty();
            $("#loader").html(`&#x${i.toString(16).padStart(4, "0")};`);
            await new Promise(r => setTimeout(r, (1000/38)));
        }
    }
});