const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function generateshortURL(req, res) {
    try {
        const body = req.body;
        if (!body.url) {
            return res.status(400).json({ error: 'url is required' });
        }
    
        const shortid = nanoid(); // variable name same as schema
        await URL.create({
            shortid: shortid, // match exactly with your schema field
            redirectURL: body.url,
            clickHistory: [],
        });
        
        return res.json({ id: shortid });
    } catch (err) {
        res.status(500).send(`error message: ${err.message}`);
    }
}

module.exports = { generateshortURL };


