
import csv

# Create a quick customization reference CSV
customization_data = [
    ["Component", "Location in Code", "What to Search", "How to Change", "Example"],
    ["Coin Name", "Throughout entire file", "MOONSHOT", "Replace all instances with your coin name", "MOONSHOT → DOGECOIN"],
    ["Page Title", "Inside <head> tag", "<title>MOONSHOT", "Change text between <title> tags", "<title>Your Coin Name - Meme Coin</title>"],
    ["Primary Color", "CSS :root section", "--primary-color: #8B5CF6", "Change hex code", "--primary-color: #3B82F6"],
    ["Secondary Color", "CSS :root section", "--secondary-color: #EC4899", "Change hex code", "--secondary-color: #10B981"],
    ["Hero Headline", "Hero section", "<h1>Welcome to MOONSHOT</h1>", "Change text inside h1 tags", "<h1>Welcome to YourCoin</h1>"],
    ["Hero Subheadline", "Hero section", "The Next Generation Meme Coin", "Change paragraph text", "Your custom tagline here"],
    ["Buy Now Link", "Navigation & Hero", 'href="https://pancakeswap', "Update URL to your DEX", "href=\"https://uniswap.org/...\""],
    ["About Text", "About section", "<section id=\"about\">", "Replace all paragraph text", "Write your project description"],
    ["Feature Icons", "About section", "<div class=\"feature-icon\">", "Change emoji or add <img> tag", "👥 → 💎 or <img src=\"icon.png\">"],
    ["Total Supply", "Tokenomics section", "<p>1,000,000,000</p>", "Change number", "<p>100,000,000</p>"],
    ["Tax Structure", "Tokenomics section", "<p>5% (3% Marketing, 2% LP)</p>", "Change percentages", "<p>10% (5% Rewards, 5% LP)</p>"],
    ["Contract Address", "Tokenomics section", "<p>0x742d35Cc...", "Paste your full contract address", "<p>0xYourContractAddress</p>"],
    ["Blockchain", "Tokenomics section", "<p>Ethereum</p>", "Change blockchain name", "<p>Binance Smart Chain</p>"],
    ["Pie Chart Data", "JavaScript section", "const data = [", "Change values and labels in array", "{ label: 'Staking', value: 25 }"],
    ["Pie Chart Colors", "JavaScript section", "color: '#8B5CF6'", "Change hex codes in data array", "color: '#FF6B6B'"],
    ["Roadmap Phases", "Roadmap section", "<div class=\"timeline-item\">", "Add/remove/edit timeline items", "Add new phase with <div class=\"timeline-item\">"],
    ["Phase Status Icons", "Roadmap section", "✅ Website Launch", "Change emoji (✅=done, 🔄=progress, ⭕=upcoming)", "🔄 for in-progress items"],
    ["Team Member Name", "Team section", "<h3>Alex Thompson</h3>", "Change name in h3 tag", "<h3>Your Name</h3>"],
    ["Team Member Role", "Team section", "<p class=\"team-role\">", "Change role text", "<p class=\"team-role\">CTO</p>"],
    ["Team Member Bio", "Team section", "<p class=\"team-bio\">", "Replace bio text", "Write 2-3 sentence bio"],
    ["Team Avatar", "Team section", "<div class=\"team-avatar\">AT</div>", "Change initials or add image", "<div class=\"team-avatar\">JD</div>"],
    ["Twitter Link", "Footer & Team", 'href="https://twitter.com/', "Update with your handle", "href=\"https://twitter.com/yourhandle\""],
    ["Telegram Link", "Footer & Team", 'href="https://t.me/', "Update with your channel", "href=\"https://t.me/yourchannel\""],
    ["Discord Link", "Footer", 'href="https://discord.gg/', "Update with your server invite", "href=\"https://discord.gg/yourserver\""],
    ["Footer Description", "Footer section", "Join the MOONSHOT revolution", "Change footer tagline", "Your custom footer text"],
    ["Copyright Text", "Footer section", "© 2025 MOONSHOT", "Update year and name", "© 2025 Your Coin Name"],
    ["Background Color", "CSS :root section", "--bg-dark: #0F172A", "Change hex code for dark backgrounds", "--bg-dark: #1A1A2E"],
    ["Text Color", "CSS :root section", "--text-light: #F8FAFC", "Change hex code for light text", "--text-light: #FFFFFF"],
    ["Button Hover Effect", "CSS button styles", "transform: translateY(-2px)", "Change Y value for hover lift", "transform: translateY(-5px)"],
    ["Animation Speed", "CSS animations", "transition: 0.3s", "Change duration (in seconds)", "transition: 0.5s"],
    ["Mobile Menu Icon", "Navigation", "☰", "Change hamburger icon", "Use any emoji or icon"],
    ["Hero Icon", "Hero section", "<div class=\"hero-icon\">🚀</div>", "Change rocket emoji", "💎, 🌙, ⭐, 🔥, etc."],
    ["Whitepaper Link", "Hero CTA", 'href="#"', "Add link to your whitepaper PDF", "href=\"whitepaper.pdf\""],
    ["Meta Description", "Inside <head>", '<meta name="description"', "Change description text", "Your SEO-friendly description"],
    ["Favicon", "Inside <head>", "🚀 (emoji favicon)", "Add custom favicon link", "<link rel=\"icon\" href=\"favicon.ico\">"]
]

# Save to CSV
with open('customization_reference.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerows(customization_data)

print("✅ Customization reference created: customization_reference.csv")
print(f"📊 Total customizable components: {len(customization_data) - 1}")

# Create a color scheme suggestions file
color_schemes = [
    ["Theme Name", "Primary Color", "Secondary Color", "Accent Color", "Use Case"],
    ["Purple Dream", "#8B5CF6", "#EC4899", "#F59E0B", "Default - Modern crypto look"],
    ["Ocean Blue", "#0EA5E9", "#06B6D4", "#14B8A6", "Trust and stability"],
    ["Forest Green", "#10B981", "#34D399", "#059669", "Growth and eco-friendly"],
    ["Sunset Orange", "#F97316", "#FB923C", "#FBBF24", "Energy and enthusiasm"],
    ["Royal Purple", "#7C3AED", "#A78BFA", "#C4B5FD", "Premium and luxury"],
    ["Fire Red", "#EF4444", "#F87171", "#FCA5A5", "Bold and aggressive"],
    ["Electric Cyan", "#06B6D4", "#22D3EE", "#67E8F9", "Tech and innovation"],
    ["Gold Rush", "#F59E0B", "#FBBF24", "#FDE047", "Wealth and success"],
    ["Mint Fresh", "#10B981", "#6EE7B7", "#A7F3D0", "Clean and fresh"],
    ["Deep Space", "#6366F1", "#818CF8", "#A5B4FC", "Mystery and future"],
    ["Pink Power", "#EC4899", "#F472B6", "#F9A8D4", "Fun and vibrant"],
    ["Matrix Green", "#22C55E", "#4ADE80", "#86EFAC", "Hacker aesthetic"],
    ["Bitcoin Orange", "#F7931A", "#FFB74D", "#FFA726", "Classic crypto"],
    ["Ethereum Purple", "#627EEA", "#8C9EFF", "#B39DDB", "Ethereum themed"],
    ["Solana Gradient", "#14F195", "#9945FF", "#00D4FF", "Solana inspired"]
]

with open('color_schemes.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerows(color_schemes)

print("✅ Color schemes reference created: color_schemes.csv")
print(f"🎨 Total color scheme suggestions: {len(color_schemes) - 1}")
