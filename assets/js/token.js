var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider());

function getTokenStats(price) {
    // TODO fill in actual abi code
    var abi = [];

    // creation of contract object
    var contract = web3.eth.contract(abi);
    // TODO fill in actual address
    var contractInstance = contract.at("");


    contractInstance.totalEthInWei(function (err, data) {
        // get eth raised
        ETHAmountRaised = data / 1000000000000000000;
        document.getElementById("ETHAmountRaised").innerHTML = ETHAmountRaised.toLocaleString();
        // calculate USD value
        document.getElementById("USDAmountRaised").innerHTML = (ETHAmountRaised * price).toFixed(2).toLocaleString();

        contractInstance.tokensIssued(function (err, data) {
            // get tokens issued
            tokensIssued = data / 1000000000000000000;
            document.getElementById("tokensIssued").innerHTML = tokensIssued.toLocaleString();
            // calculate percentage of tokens sold
            soldPercentage = (tokensIssued / availableSupply * 100).toFixed(2);
            document.getElementById("soldPercentage").innerHTML = soldPercentage;
            // set progress bar
            document.getElementById("progress-interior").style.width = soldPercentage.toString() + "%";
        });
    });
}

// gets ETH price from Etherscan <3
function getETHPrice() {
    var url = "https://api.etherscan.io/api?module=stats&action=ethprice";
    return $.ajax(url, {
        cache: false,
        dataType: "json"
    }).then(function (data) {
        if (data == null) return null;
        if (data.result == null) return null;
        if (data.result.ethusd == null) return null;

        return parseFloat(data.result.ethusd);
    });
}

// jquery page load
$(function () {
    try {
        getETHPrice().then(getTokenStats);
        // hide error message if everything worked
        $(".statsError").hide();
    } catch (err) {}
});