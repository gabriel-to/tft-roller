var percentages = [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0.75, 0.25, 0.00, 0.00, 0.00],
    [0.55, 0.30, 0.15, 0.00, 0.00],
    [0.45, 0.33, 0.20, 0.02, 0.00],
    [0.25, 0.40, 0.30, 0.05, 0.00],
    [0.19, 0.30, 0.35, 0.15, 0.01],
    [0.15, 0.20, 0.35, 0.25, 0.05],
    [0.10, 0.15, 0.30, 0.30, 0.15]
]; // roll percentages per level

var champions = [13, 13, 12, 11 ,8]; // number of types of champions per unit cost 
var numberUnits = [29, 22, 18, 12, 10]; // number of units per champion
var totalPool = [377, 286, 216, 132, 80]; // total number of units per unit cost
var rerollCost = 2;

const getPercent = function() {
    var gold = document.getElementById('gold').value;
    var unitCost = document.getElementById('cost').value;
    var unitTaken = document.getElementById('taken').value;
    var rerolls = gold/2;

    var currentPool = totalPool[unitCost - 1]; // current pool of units
    var currentUnits = numberUnits[unitCost - 1]; // current number of units
    var realPool = currentUnits - unitTaken; // pool - units taken
    var realChampions = realPool/currentPool;// percent of getting unit with removed units

    var notHit = 1 - realChampions; // percent of not hitting unit with roll
    var percent = (1 - Math.pow(notHit,rerolls)) * 100; // 1 - p ^ number of rerolls 
    return percent.toFixed(2);
}

const rollChance = function() {
    var level = document.getElementById('level').value;
    var gold = document.getElementById('gold').value;
    var unitCost = document.getElementById('cost').value;
    var unitTaken = document.getElementById('taken').value;

    if (level > 9) {
        return 0;
    } 
    else if (gold <= 0){
        return 0;
    }
    else if (unitCost > 5) {
        return 0;
    } 
    else {
    var currentShop = percentages[level - 1]; // current shop percentages

    var currentPool = totalPool[unitCost - 1]; // current pool of units

    var currentUnits = numberUnits[unitCost - 1]; // current number of units

    var realPool = currentUnits - unitTaken; // pool - units taken

    var numberRerolls = Math.floor(gold/rerollCost); // number of rerolls

    var percent = currentShop[unitCost - 1]; // select percentage of unitcost

    var realChampions = realPool/currentPool; // percent of getting unit with removed units

    return (percent*realChampions * numberRerolls * 5).toFixed(2); // return avg unit by number of rerolls 
    }

    
}
const rolljs = {
    rollChance,
    getPercent,
};
export default rolljs;
