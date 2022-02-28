const ShortUrl = require('../models/ShortUrl');
const {nanoid} = require('nanoid');

const URL_LENGTH = process.env.URL_LENGTH || 5;
const BASE_URL = 'https://localhost:8000'

const decode = async (req, res) => {
    const url = await ShortUrl.findOne({
        shortUrl: `${BASE_URL}/${req.params.id}`
    });
    if(url){
        return res.redirect(url.url);
    } else {
        return res.status(404).json("URL wasn't found");
    }
}

const encode = async (req, res, next) => {
    console.log('new encode request', req);
    let {longUrl} = req.body;
    const ID = nanoid(URL_LENGTH);
    const shortenedUrl = `${BASE_URL}/${ID}`;

    try{
        const exisintUrl = await ShortUrl.findOne({url: longUrl});
        if(exisintUrl)
            return res.json(exisintUrl)

        const newShortUrl = new ShortUrl( {
            shortUrl: shortenedUrl,
            url: longUrl
        });
        const savedUrl = await newShortUrl.save();

        return res.status(200).json(savedUrl);
    }catch(e){
        return res.status(500);
    }
}

module.exports = { decode, encode } 