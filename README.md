# SmartDeal India — professional static website starter

## Included
- Responsive homepage with search, category filters, sorting and retailer buttons
- Separate CSS and product catalogue files
- About, Contact, Privacy Policy and Affiliate Disclosure pages
- Favicon and mobile navigation
- No paid framework, server, database or build step required

## Before launch
1. Open `products.js` in a text editor.
2. Replace empty `amazonUrl` and `flipkartUrl` values with exact affiliate links generated from your approved affiliate dashboards.
3. Replace sample product names/descriptions with accurate selections. Don't invent live prices, discounts, ratings or availability.
4. Add a real business contact email to `contact.html`.
5. Review `privacy.html` for your actual practices and hosting provider; this template is not legal advice.
6. Keep the Amazon Associates disclosure if required for your participation and follow all current programme policies. Check link and content rules for both programmes.
7. Test every link, mobile layout, policy pages and spelling before launch.

## Professional deployment options

### Recommended starter: Cloudflare Pages (custom domain supported)
1. Create an account at https://dash.cloudflare.com/
2. Put all files and folders in a GitHub repository (e.g. `smartdeal-india`).
3. In Cloudflare dashboard, go to **Workers & Pages** (wording may change) and create a Pages project connected to the GitHub repository.
4. Choose the static/no-build setup. Use no build command and set the output directory to `/` or the repository root as the dashboard instructs.
5. Deploy and open the generated `*.pages.dev` URL to test.
6. Buy a domain from a registrar of your choice. In Cloudflare Pages project settings, add the domain as a custom domain and follow the DNS instructions exactly. If the domain is registered elsewhere, you may need to add the required DNS records there. Don't change nameservers blindly; follow the provider's current instructions.
7. Use HTTPS provided by the platform and test both the root domain and `www` variant if configured.

Official docs: https://developers.cloudflare.com/pages/ and https://developers.cloudflare.com/pages/configuration/custom-domains/

### Alternative: Netlify
1. Sign in at https://www.netlify.com/
2. Import the GitHub repository as a new site.
3. For this static site, leave the build command empty and set the publish directory to the project root, according to the current dashboard.
4. Deploy, test the generated Netlify URL, then add your custom domain in site domain settings and follow DNS guidance.
Official docs: https://docs.netlify.com/

## Domain and cost
A professional domain name normally has a recurring registration fee; price varies by extension and registrar. Hosting may be available on a free tier, but limits and terms can change. Paid email, premium support or advanced analytics may cost extra. Check the current terms before committing.

## Maintenance
- Keep affiliate links up to date and check broken links periodically.
- Use only product images/content allowed by the relevant programme or licensed for your use.
- Do not put account passwords, API keys, or other secrets into the public repository.
- Static hosting has no admin panel. Edit `products.js` and push/commit changes to publish updates.
- Consider analytics only after reviewing consent/privacy requirements applicable to your visitors.
