const fetch = require('node-fetch');
const UTIL = require('./UTIL');

module.exports = async (kelime) =>  {
    let api = await UTIL.get(fetch, `https://sozluk.gov.tr/gts?ara=${encodeURI(kelime)}`);
    if (api.error) throw new TypeError("Sonuç Bulunamadı");
    let tdk = await UTIL.firstElement(api);
        let örnek = tdk.anlamlarListe.values().next().value.orneklerListe ? tdk.anlamlarListe.values().next().value.orneklerListe.values().next().value.ornek : 'Örnek yok';
        let lisan = tdk.lisan ? tdk.lisan : 'Lisan yok';
    let anlam = tdk.anlamlarListe[0] ? tdk.anlamlarListe[0].anlam : 'Anlamı yok';
    let ikincilanlam = tdk.anlamlarListe[1] ? tdk.anlamlarListe[1].anlam : 'Anlamı yok';
    let üçüncülanlam = tdk.anlamlarListe[2] ? tdk.anlamlarListe[2].anlam : 'Anlamı yok';
    let dördüncülanlam = tdk.anlamlarListe[3] ? tdk.anlamlarListe[3].anlam : 'Anlamı yok';
    let beşincilanlam = tdk.anlamlarListe[4] ? tdk.anlamlarListe[4].anlam : 'Anlamı yok';
        let atasözü = tdk.atasozu ? tdk.atasozu.values().next().value.madde : 'Atasözü yok';
        let cogul = tdk.cogul_mu === '0' ? 'Çoğul değil' : 'Çoğul';
    let ozel = tdk.ozel_mi === '1' ? 'Özel Bir Kelime' : 'Cins Bir Kelime';
    let booleancogul = tdk.cogul_mu === '1' ? true : false;
    let booleanozel = tdk.ozel_mi === '1' ? true : false;
    let telaffuz = tdk.telaffuz ? tdk.telaffuz : 'Telaffuzu Bulunamadı';
    let birlesikler = tdk.birlesikler === null ? 'Yok' : tdk.birlesikler;
        let KAYRO = {
            anlam: anlam,
            anlam2: ikincilanlam,
            anlam3: üçüncülanlam,
            anlam4: dördüncülanlam,
            anlam5: beşincilanlam,
            lisan: lisan,
            ornek: örnek,
            atasozu: atasözü,
            cogul : cogul,
            ozel: ozel,
            boolean_ozel: booleanozel,
            boolean_cogul: booleancogul,
            telaffuz: telaffuz,
            birlesikler: birlesikler
        }
        return KAYRO;
    }