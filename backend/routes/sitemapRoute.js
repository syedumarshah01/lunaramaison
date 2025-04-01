// backend/routes/sitemapRoute.js
import express from 'express'
const siteMapRouter = express.Router();
import productModel from '../models/productModel.js' // Import the Product model

router.get('/sitemap.xml', async (req, res) => {
  try {
    const products = await productModel.find({}, '_id').lean(); // Fetch only product IDs
    const baseUrl = 'https://lunaramaison.com'; // Your website's base URL

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc> <!-- Homepage URL -->
          <changefreq>daily</changefreq> <!-- How often the page changes -->
          <priority>1.0</priority> <!-- Priority of the page -->
        </url>
        ${products
          .map(
            (product) => `
          <url>
            <loc>${baseUrl}/product/${product._id}</loc> <!-- Product page URL -->
            <changefreq>weekly</changefreq> <!-- How often the page changes -->
            <priority>0.8</priority> <!-- Priority of the page -->
          </url>
        `
          )
          .join('')}
      </urlset>
    `;

    res.set('Content-Type', 'text/xml'); // Set response content type to XML
    res.send(sitemap); // Send the sitemap as the response
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = siteMapRouter;