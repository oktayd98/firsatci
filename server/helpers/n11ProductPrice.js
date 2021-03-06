const cheerio = require('cheerio');
const axios = require('axios');
const CustomError = require('./CustomError');

const getProductPrice = async (req, res, next) => {
  const html = await axios.get(req.body.url);
  if (html.status !== 200) return next(new CustomError('Page not found!', 404));

  const $ = cheerio.load(html.data);
  const price = $('.newPrice').text().trim();

  return price;
};

module.exports = getProductPrice;
