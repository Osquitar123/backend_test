exports.searchPlayer = async (req, res) => {
    const resp = await fetch('https://www.easports.com/fifa/ultimate-team/api/fut/item?page1')
    const data = await resp.json();
    const commonName = data.items[0].commonName;
    return res.status(200).json({
        commonName
    })
}
