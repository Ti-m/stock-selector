console.log("example with MSCI WORLD VALUE")
/*
get data from CSV to clipboard with: 
awk '{a=a colon $0; colon=":"} END {print a}' data.csv | xclip -selection c
*/

//Insert data like this
var data = "JOHNSON & JOHNSON,US,Pharmazeutika,1.908490%:JPMORGAN CHASE & CO,US,Banken,1.761526%:EXXON MOBIL CORP,US,Öl und Gas,1.754256%:MICROSOFT CORP,US,Software,1.466114%:WELLS FARGO & CO,US,Banken,1.308349%:BANK OF AMERICA CORP,US,Banken,1.296258%:PROCTER & GAMBLE CO,US,Pflegeprodukte,1.279576%:AT&T,US,Telekommunikationsdienste,1.245897%:GENERAL ELECTRIC CO,US,Industrie,1.180407%:CHEVRON CORP,US,Öl und Gas ,1.114103%:PFIZER,US,Pharmazeutika,1.095806%:VERIZON COMMUNICATIONS,US,Telekommunikationsdienste,1.056960%:HSBC HOLDINGS (GB),UK,Banken,1.054412%:CITIGROUP,US,Banken,1.020923%:NOVARTIS,CH,Pharmazeutika,1.010083%:COCA COLA (THE),US,Getränke,1.004699%:PHILIP MORRIS INTL,US,Agrarrohstoffe,0.989500%:MERCK & CO,US,Pharmazeutika,0.943967%:INTEL CORP,US,Halbleiter,0.893430%:CISCO SYSTEMS,US,Telekommunikationsdienste,0.873224%:DOWDUPONT,US,Chemie,0.847515%:TOYOTA MOTOR CORP,JP,Automobile,0.791813%:AMGEN,US,Biotechnologie,0.710592%:IBM CORP,US,Computer und Peripheriegeräte,0.695298%:ROYAL DUTCH SHELL A,NL,Öl und Gas ,0.666360%:TOTAL,US,Gewerbliche Dienste und Dienstleister,0.663645%:WAL-MART STORES,US,Einzelhandel,0.642294%:BP,UK,Öl und Gas ,0.613955%:SANOFI,FR,Pharmazeutika,0.602345%:MEDTRONIC PLC,US,Medizinische Geräte und Bedarfsartikel ,0.592484%:GILEAD SCIENCES,US,Biotechnologie,0.591723%:ROYAL BANK OF CANADA,CA,Banken,0.586065%:ROYAL DUTCH SHELL B,NL,Öl und Gas ,0.565532%:BANCO SANTANDER,ESP,Banken,0.564275%:BROADCOM,US,Halbleiter,0.548456%:SIEMENS,GER,Industrie,0.544169%:TORONTO-DOMINION BANK,CA,Banken,0.543418%:ALLIANZ,GER,Versicherungen,0.531133%:GLAXOSMITHKLINE,UK,Pharmazeutika,0.528667%:NESTLE,CH,Nahrungsmittel,0.496476%:BASF,GER,Chemie,0.486335%:UNITED TECHNOLOGIES CORP,US,Luft- und Raumfahrt und Verteidigung,0.485306%:ABBOTT LABORATORIES,US,Pharmazeutika,0.480194%:SCHLUMBERGER,US,Öl und Gas ,0.475934%:US BANCORP,US,Banken,0.470917%:BNP PARIBAS,FR,Banken,0.463860%:WESTPAC BANKING,AUS,Banken,0.453664%:PEPSICO,US,Getränke,0.447361%:GOLDMAN SACHS GROUP,US,Banken,0.432671%:CVS HEALTH,US,Einzelhandel,0.429224%:QUALCOMM,US,Halbleiter,0.415794%:ALLERGAN,IR,Pharmazeutika,0.413558%:BANK NOVA SCOTIA,CA,Banken,0.407831%:ASTRAZENECA,UK,Pharmazeutika,0.407757%:MITSUBISHI UFJ FIN GRP,JP,Banken,0.399236%:DAIMLER,GER,Automobile,0.382188%:NEXTERA ENERGY,US,Stromversorgungsbetriebe,0.380102%:CATERPILLAR,US,Maschinen,0.376740%:ANZ BANKING GROUP,AUS,Banken,0.374662%:ING GROEP,NL,Banken,0.372522%:CHUBB,US,Versicherungen,0.354684%:AMERICAN EXPRESS,US,Verschiedenartige Finanzprodukte,0.353836%:MCDONALD'S CORP,US,Einzelhandel,0.352142%:NATIONAL AUSTRALIA BANK,AUS,Banken,0.349944%:MORGAN STANLEY,US,Banken,0.346480%:PNC FINL SERVICES GROUP,US,Banken,0.331342%:DUKE ENERGY CORP,US,Stromversorgungsbetriebe,0.329566%:RIO TINTO PLC (GB),UK,Metalle und Bergbau ,0.325441%:UBS GROUP,CH,Banken,0.324699%:ABBVIE,US,Pharmazeutika,0.324506%:LLOYDS BANKING GROUP,UK,Banken,0.320597%:BBVA,ESP,Banken,0.318375%:AXA,FR,Versicherungen,0.305401%:AMERICAN INTL GROUP,US,Versicherungen,0.302638%:CONOCOPHILLIPS,US,Öl und Gas ,0.295917%:BANK NEW YORK MELLON,US,Banken,0.294226%:ANTHEM,US,Versicherungen,0.282869%:COMMONWEALTH BANK OF AUS,AUS,Banken,0.281545%:LILLY (ELI) & COMPANY,US,Pharmazeutika,0.279484%:BLACKROCK A,US,Verschiedenartige Finanzprodukte,0.276495%:GENERAL MOTORS,US,Automobile,0.274351%:SUMITOMO MITSUI FINL GRP,JP,Banken,0.271565%:ENEL,IT,Stromversorgungsbetriebe,0.268510%:SIMON PROPERTY GROUP,US,Real Estate Investment Trust,0.267025%:VODAFONE GROUP,UK,Telekommunikationsdienste,0.266456%:DOMINION ENERGY,US,Stromversorgungsbetriebe,0.266390%:TELEFONICA,ESP,Telekommunikationsdienste,0.263723%:KDDI,JP,Telekommunikationsdienste,0.262677%:SOUTHERN COMPANY (THE),US,Stromversorgungsbetriebe,0.259528%:BANK MONTREAL,CA,Banken,0.254858%:VINCI,FR,Bau- und Ingenieurswesen,0.253462%:IBERDROLA,ESP,Stromversorgungsbetriebe,0.253079%:OCCIDENTAL PETROLEUM,US,Öl und Gas ,0.247008%:ZURICH INSURANCE GROUP,CH,Versicherungen,0.244231%:PRUDENTIAL FINANCIAL,US,Versicherungen,0.239263%:METLIFE,US,Versicherungen,0.236364%:NATIONAL GRID,UK,Gasversorgungsbetriebe,0.233572%:SOCIETE GENERALE,FR,Banken,0.233559%:CME GROUP,US,Verschiedenartige Finanzprodukte,0.231947%:INTESA SANPAOLO,IT,Banken,0.231601%:FORD MOTOR CO,US,Automobile,0.228019%:MIZUHO FINANCIAL GROUP,JP,Banken,0.223770%:UNICREDIT,IT,Banken,0.222578%:NORDEA BANK,SWE,Banken,0.220164%:BHP BILLITON PLC (GB),AUS,Metalle und Bergbau ,0.219861%:ENI,IT,Öl und Gas ,0.217476%:MANULIFE FINANCIAL CORP,CA,Versicherungen,0.212803%:KINDER MORGAN P,US,Öl und Gas ,0.210318%"

//Remove trailling whitespace
data = data.replace(/ ,/g,",")

//Insert stocks you already got like this
var alreadyOwned = [["DAIMLER", "GER", "Automobile", "0.382188%"]];

function uniqueArray(a) {
    return a.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })  
}

//calculate different companys, sectors and countrys
var companys = data.split(":").map(function (item) { return item.split(",")[0]})

var countrys = data.split(":").map(function (item) { return item.split(",")[1]})
countrys = uniqueArray(countrys)

var sectors = data.split(":").map(function (item) { return item.split(",")[2]})
sectors = uniqueArray(sectors)

//convert to 2 dimensional array
var data2d = data.split(":").map(function (item) {
    return item.split(",");
})


function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][1] == item[1] && array[i][2] == item[2]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}

var reducedData = [];
data2d.forEach(function (item) {
    if(!isItemInArray(reducedData, item)) {
        reducedData.push(item)
    }
})

function isCountryInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}
function isSectorInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][2] == item[2]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}


var tmpData = reducedData;
var maxNumber = 0
var maxMarketPercentage = 0
for ( var i = 0; i<1000000; i=i+1) {
    shuffle(tmpData)
    var tmpResult = JSON.parse(JSON.stringify(alreadyOwned));
    tmpData.forEach(function (item) {
        if(!isCountryInArray(tmpResult, item) && !isSectorInArray(tmpResult, item)) {
            tmpResult.push(item)
        }
    })

    if (tmpResult.length >= maxNumber) {
        maxNumber = tmpResult.length;
        var marketPercentage = 0;
        tmpResult.forEach(function (item) { marketPercentage += parseFloat(item[3]) })
        
        if (marketPercentage > maxMarketPercentage) {
            maxMarketPercentage = marketPercentage
            console.log(tmpResult.sort())
            console.log(marketPercentage + "% of Index")
        }
    }
    //console.log(tmpResult.length)
}
console.log("Finnished")
