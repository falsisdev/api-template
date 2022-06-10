module.exports = {
    async get(module, url){
        return await module(url).then(json => json.json())
    },
    async firstElement(json){
        return await json[0]
    }
}