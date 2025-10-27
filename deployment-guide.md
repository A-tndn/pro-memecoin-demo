# Meme Coin Website - Deployment & Customization Guide

## 📦 What's Included

Your meme coin website package includes:
- `index.html` - Main website file with all content
- `styles.css` - All styling and animations (embedded in HTML)
- `script.js` - Interactive functionality (embedded in HTML)
- This deployment guide

## 🚀 Quick Start Deployment

### Option 1: GitHub Pages (FREE - Recommended for Beginners)

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a New Repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `your-coin-name-website`
   - Make it Public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop the `index.html` file
   - Commit changes

4. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

5. **Access Your Site**
   - Your site will be live at: `https://yourusername.github.io/your-coin-name-website`
   - It may take 2-5 minutes to go live

### Option 2: Netlify (FREE - Best for Custom Domains)

1. **Sign Up for Netlify**
   - Go to https://www.netlify.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy Your Site**
   - Click "Add new site" > "Deploy manually"
   - Drag and drop your `index.html` file (or the entire folder)
   - Your site goes live instantly!

3. **Custom Domain** (Optional)
   - Go to Site settings > Domain management
   - Add custom domain
   - Follow DNS configuration instructions

### Option 3: Vercel (FREE - Fastest Performance)

1. **Sign Up for Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy**
   - Click "Add New" > "Project"
   - Import from Git or drag & drop files
   - Click Deploy
   - Live in seconds!

### Option 4: Traditional Web Hosting

1. **Purchase Hosting** (GoDaddy, Namecheap, Bluehost, etc.)
2. **Access cPanel or File Manager**
3. **Upload Files**
   - Navigate to `public_html` or `www` folder
   - Upload `index.html`
4. **Access Your Site**
   - Visit your domain name

## 🎨 Customization Guide

### Step 1: Change Your Coin Name & Branding

Open `index.html` in any text editor (Notepad, VS Code, Sublime Text, etc.)

**Find and replace:**
```html
<!-- Search for "MOONSHOT" and replace with your coin name -->
MOONSHOT → YOUR_COIN_NAME

<!-- Update the tagline in the hero section -->
<h1>Welcome to MOONSHOT</h1>
→ <h1>Welcome to YOUR_COIN_NAME</h1>

<!-- Update the page title (shows in browser tab) -->
<title>MOONSHOT - Meme Coin</title>
→ <title>YOUR_COIN_NAME - Meme Coin</title>
```

### Step 2: Customize Colors

All colors are defined as CSS variables at the top of the `<style>` section:

```css
:root {
  /* Main Brand Colors */
  --primary-color: #8B5CF6;      /* Purple - change to your brand color */
  --secondary-color: #EC4899;     /* Pink - change to secondary brand color */
  --accent-color: #F59E0B;        /* Orange/Gold - for highlights */
  
  /* Background Colors */
  --bg-dark: #0F172A;            /* Dark background */
  --bg-light: #F8FAFC;           /* Light background */
  
  /* Text Colors */
  --text-dark: #1E293B;
  --text-light: #F8FAFC;
  
  /* You can change any of these hex codes to match your brand */
}
```

**Example color schemes:**

**Blue/Cyan Theme:**
```css
--primary-color: #0EA5E9;
--secondary-color: #06B6D4;
--accent-color: #14B8A6;
```

**Green/Emerald Theme:**
```css
--primary-color: #10B981;
--secondary-color: #34D399;
--accent-color: #059669;
```

**Red/Orange Theme:**
```css
--primary-color: #EF4444;
--secondary-color: #F97316;
--accent-color: #FBBF24;
```

### Step 3: Update Tokenomics

Find the tokenomics section and update:

```html
<!-- Update token details -->
<div class="token-detail">
  <h3>Total Supply</h3>
  <p>1,000,000,000</p>  <!-- Change this number -->
</div>

<div class="token-detail">
  <h3>Tax</h3>
  <p>5% (3% Marketing, 2% LP)</p>  <!-- Change tax structure -->
</div>

<div class="token-detail">
  <h3>Contract Address</h3>
  <p>0x742d35Cc6634C0532...</p>  <!-- Add your real contract -->
</div>

<div class="token-detail">
  <h3>Chain</h3>
  <p>Ethereum</p>  <!-- Change to BSC, Solana, etc. -->
</div>
```

**To update the pie chart distribution:**

Find the JavaScript section with `drawPieChart()` function:

```javascript
const data = [
  { label: 'Liquidity Pool', value: 40, color: '#8B5CF6' },
  { label: 'Marketing', value: 20, color: '#EC4899' },
  { label: 'Team', value: 15, color: '#10B981' },
  { label: 'Community Rewards', value: 15, color: '#F59E0B' },
  { label: 'Development', value: 10, color: '#3B82F6' }
];

// Change the 'value' numbers to match your tokenomics
// Make sure they add up to 100!
```

### Step 4: Update About Section

Find the about section:

```html
<section id="about">
  <p>
    MOONSHOT is more than just a meme coin...
    <!-- Replace this entire paragraph with your project description -->
  </p>
  <p>
    Our mission is to build...
    <!-- Add your mission statement -->
  </p>
</section>
```

### Step 5: Customize Roadmap

Find the roadmap section and update phases:

```html
<div class="timeline-item">
  <div class="timeline-content">
    <h3>Phase 1 - Launch</h3>
    <span class="timeline-date">Q1 2025</span>
    <ul>
      <li>✅ Website Launch</li>  <!-- ✅ = completed, 🔄 = in progress, ⭕ = upcoming -->
      <li>✅ Smart Contract Deployment</li>
      <!-- Add/remove items as needed -->
    </ul>
  </div>
</div>

<!-- Add more timeline-item divs for additional phases -->
```

### Step 6: Update Team Section

Find the team section:

```html
<div class="team-card">
  <div class="team-avatar">AT</div>  <!-- Change initials -->
  <h3>Alex Thompson</h3>  <!-- Change name -->
  <p class="team-role">Founder & CEO</p>  <!-- Change role -->
  <p class="team-bio">
    Crypto veteran with 8+ years...  <!-- Change bio -->
  </p>
  <div class="team-socials">
    <a href="https://twitter.com/yourhandle">🐦</a>  <!-- Update links -->
    <a href="https://linkedin.com/in/yourprofile">💼</a>
    <a href="https://t.me/yourhandle">📱</a>
  </div>
</div>

<!-- Duplicate this block for each team member -->
```

### Step 7: Update Social Media Links

Find all social media links (in nav, footer, team sections) and update:

```html
<!-- Header Buy Now Button -->
<a href="https://pancakeswap.finance/swap?outputCurrency=YOUR_CONTRACT" class="cta-button">
  Buy Now
</a>

<!-- Footer Social Links -->
<a href="https://twitter.com/YOUR_HANDLE">🐦 Twitter</a>
<a href="https://t.me/YOUR_CHANNEL">📱 Telegram</a>
<a href="https://discord.gg/YOUR_SERVER">💬 Discord</a>
<a href="https://reddit.com/r/YOUR_SUBREDDIT">📱 Reddit</a>
<a href="https://medium.com/@YOUR_HANDLE">📝 Medium</a>
```

### Step 8: Change Images & Icons

**Hero Section Icon:**
```html
<div class="hero-icon">🚀</div>
<!-- Change 🚀 to any emoji: 💎, 🌙, ⭐, 🔥, etc. -->
```

**Feature Icons:**
```html
<div class="feature-icon">👥</div>  <!-- Community -->
<div class="feature-icon">🔒</div>  <!-- Security -->
<div class="feature-icon">🌐</div>  <!-- Decentralized -->
<div class="feature-icon">🚀</div>  <!-- Moon Mission -->
<!-- Change to any relevant emoji -->
```

**To add custom images:**
1. Upload your images to the same folder as index.html
2. Replace emoji divs with img tags:

```html
<!-- Before -->
<div class="hero-icon">🚀</div>

<!-- After -->
<img src="your-logo.png" alt="Your Coin Logo" class="hero-icon">
```

### Step 9: Update Contact Information

Find the footer newsletter section:

```html
<form class="newsletter-form">
  <input type="email" placeholder="Enter your email">
  <button type="submit">Subscribe</button>
</form>

<!-- To make this functional, add action attribute: -->
<form class="newsletter-form" action="https://your-email-service.com/subscribe" method="POST">
```

**Popular newsletter services:**
- Mailchimp
- ConvertKit
- Sendinblue
- MailerLite

### Step 10: Add Analytics (Optional but Recommended)

Add Google Analytics to track visitors:

1. Create a Google Analytics account
2. Get your tracking code
3. Add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Advanced Customization

### Change Font

Add to the `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS:

```css
:root {
  --font-main: 'Your Font Name', sans-serif;
}
```

### Add More Sections

Copy any existing section and modify:

```html
<section id="new-section" class="section">
  <div class="container">
    <h2 class="section-title">New Section Title</h2>
    <p>Your content here...</p>
  </div>
</section>
```

Don't forget to add it to navigation:

```html
<nav>
  <a href="#new-section">New Section</a>
</nav>
```

### Modify Animations

Find animation settings in CSS:

```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Change duration (0.6s) or distance (30px) */
```

## 🐛 Troubleshooting

### Issue: Changes Not Showing
- **Solution:** Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Or open in incognito/private mode

### Issue: Layout Broken on Mobile
- **Solution:** Make sure you didn't remove viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Issue: Colors Not Changing
- **Solution:** Make sure you're editing the CSS variables in `:root {}` section

### Issue: Pie Chart Not Showing
- **Solution:** Check that percentages add up to 100 in the JavaScript data array

### Issue: Links Not Working
- **Solution:** Make sure all `href` attributes are updated with your actual URLs

## 📱 Testing Your Site

Test on multiple devices and browsers:

**Browsers to test:**
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

**Responsive testing tools:**
- Browser DevTools (F12) > Device Toolbar
- http://responsivedesignchecker.com
- http://www.responsinator.com

## 🔒 Security Best Practices

1. **Never expose private keys** in your website code
2. **Use HTTPS** (most free hosts provide this automatically)
3. **Validate all user inputs** if you add forms
4. **Keep contract address accurate** - typos can lead to scams
5. **Add disclaimer** about investment risks

Example disclaimer to add:

```html
<p class="disclaimer">
  ⚠️ Disclaimer: Cryptocurrency investments are subject to high market risk. 
  Please do your own research before investing. We are not responsible for any losses.
</p>
```

## 🚀 Going Live Checklist

Before launching:

- [ ] Updated all coin names and branding
- [ ] Changed all colors to match brand
- [ ] Updated tokenomics with real data
- [ ] Added real contract address
- [ ] Updated all social media links
- [ ] Modified team section with real team members
- [ ] Tested on mobile and desktop
- [ ] Checked all links work
- [ ] Added analytics tracking
- [ ] Tested in multiple browsers
- [ ] Added disclaimer/legal text
- [ ] Set up custom domain (optional)
- [ ] Created backup of files

## 📈 Post-Launch

### Promote Your Website

1. **Social Media**
   - Share on Twitter, Reddit, Telegram
   - Create engaging posts with screenshots
   - Use relevant hashtags

2. **SEO Optimization**
   - Submit to Google Search Console
   - Add meta descriptions
   - Create backlinks

3. **Community Building**
   - Pin website link in all social channels
   - Include in whitepaper
   - Add to CoinMarketCap/CoinGecko listings

### Maintenance

- Update roadmap progress regularly
- Add news/updates section
- Monitor analytics for user behavior
- Fix any bugs reported by community
- Keep contract and social links up to date

## 💡 Need Help?

Common resources:
- **HTML/CSS Tutorial:** https://www.w3schools.com
- **Web Hosting Comparison:** https://www.hostingadvice.com
- **Free Stock Images:** https://unsplash.com
- **Color Palette Generator:** https://coolors.co
- **Emoji Reference:** https://emojipedia.org

## 📄 File Structure

```
your-website/
│
├── index.html          (Main website file - this is all you need!)
├── deployment-guide.md (This guide)
└── README.md          (Optional - for GitHub)
```

**Note:** This is a single-file website! Everything (HTML, CSS, JavaScript) is in `index.html` for easy deployment.

---

## Quick Reference: Common Changes

| What to Change | Where to Find It | Search For |
|---------------|------------------|------------|
| Coin Name | Throughout file | "MOONSHOT" |
| Colors | CSS variables | `:root {` |
| Contract Address | Tokenomics section | `<p>0x742d35...` |
| Social Links | Footer & Nav | `href="https://` |
| Team Info | Team section | `<div class="team-card">` |
| Roadmap | Roadmap section | `<div class="timeline-item">` |
| Logo/Icon | Hero section | `<div class="hero-icon">` |
| About Text | About section | `<section id="about">` |

---

**Congratulations! Your meme coin website is ready to launch! 🚀**

If you follow this guide, you'll have a professional website live in under 30 minutes. Good luck with your project!