# 📺 Google AdSense Integration Guide

Panduan lengkap untuk monetisasi website cerita Anda dengan Google AdSense.

---

## ✅ **Requirements**

- [ ] Website sudah live (https://rivaldi.id)
- [ ] 6+ bulan domain ownership / Established website
- [ ] Original content (cerita asli, bukan copy-paste)
- [ ] Clean design, easy navigation
- [ ] Mobile friendly
- [ ] Privacy policy & Terms
- [ ] Google Account

---

## 🔑 **Step 1: Get AdSense Approval**

### 1. Apply for Google AdSense

**URL**: https://www.google.com/adsense

1. Click **Sign Up**
2. Use existing Google Account (or create new)
3. Enter website: https://rivaldi.id
4. Accept terms
5. Click **Submit**

### 2. Google Review Process

⏱️ Takes 2-4 weeks for review.

**What they check:**
- ✓ Original content
- ✓ Proper design
- ✓ No policy violations
  - No plagiarism
  - No adult content (unless 18+)
  - No misleading content
  - No keyword stuffing

### 3. After Approval

You'll receive:
- **Publisher ID**: `ca-pub-XXXXXXXXXXXXXXXX`
- **Multiple Ad Slots**: Different ad units

---

## 📝 **Step 2: Add to Website**

### Place Ad Code in index.html

**Location 1: Header** (Already present)
```html
<!-- Line 9 in index.html -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

Replace `ca-pub-XXXXXXXXXXXXXXXX` with your Publisher ID.

### Place Ad Code in Story Pages

**Location 2: Middle of stories** (Add to story1.html, story2.html, story3.html)

```html
<!-- After first 2 paragraphs -->
<div style="margin: 20px 0; text-align: center;">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="1234567890"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

### Get Ad Slot IDs

In AdSense Dashboard:
1. ads.google.com → **Ad units** (left sidebar)
2. Create new ad unit
3. Choose type:
   - **Display ads** (recommended)
   - Responsive
   - Size: 300x250 or 728x90
4. Copy the slot ID

---

## 🎨 **Step 3: Ad Placement Strategy**

### **Recommended Placements**

For story website:

```
┌─────────────────────────────────┐
│  Header Logo                    │
├─────────────────────────────────┤
│                                 │
│  [AD UNIT 1 - 728x90 Banner]   │  ← Top banner
│                                 │
├─────────────────────────────────┤
│                                 │
│  Story Title                    │
│  ---                            │
│  Paragraph 1                    │
│  Paragraph 2                    │
│                                 │
│  [AD UNIT 2 - 300x250 Square]  │  ← Middle ad
│                                 │
│  Paragraph 3                    │
│  Paragraph 4                    │
│                                 │
│  [AD UNIT 3 - 728x90 Banner]   │  ← Footer ad
│                                 │
└─────────────────────────────────┘
```

### **Best Practices**

✅ DO:
- Place ads where they're noticed
- Use 2-3 ad units per page max
- Leave space around ads
- Place 1st ad above the fold
- Test on mobile view

❌ DON'T:
- More than 3 ad units per page
- Ad covering content
- Misleading placements
- Force clicks
- Refresh ads frequently

---

## 💰 **Step 4: Optimize Earnings**

### Traffic Sources
```
Organic (65%)     ← SEO, Google search
Direct (15%)      ← Direct URL visitors
Referral (15%)    ← Links from other sites
Social (5%)       ← Social media
```

### Improve Traffic
- ✓ Write long-form content (2000+ words)
- ✓ Use SEO keywords naturally
- ✓ Internal linking between stories
- ✓ Share on social media
- ✓ Build email list
- ✓ Create series (users return)

### Increase RPM (Revenue per 1000 impressions)
- ✓ Target high-value countries (US, UK, CA, AU)
- ✓ Write about profitable niches
- ✓ High-quality content → Higher CPM
- ✓ Increase dwell time (longer reading)
- ✓ Optimize for mobile

### Monitor Performance

AdSense Dashboard:
```
Performance tab
├── Impressions    (views)
├── Clicks         (ad clicks)
├── CTR           (click rate %)
├── CPM           (cost per 1000)
├── RPM           (revenue per 1000)
└── Earnings      (total $)
```

**Target benchmarks** (vary by niche):
- CTR: 1-3%
- CPM: $5-20
- RPM: $3-15

---

## 🚀 **Step 5: Advanced Monetization**

### Multiple Networks

Don't rely on AdSense alone:

1. **AdSense** (Google) - Premium, highest quality
2. **Ezoic** (Free) - Optimizes ad placements
3. **Mediavine** (Invite-only) - Higher RPM
4. **AdThrive** (Invite-only) - Very high RPM
5. **Affiliate** - Promote products

### Implementation

```javascript
// In admin.html, add multi-network support
const enableAdSense = true;
const enableEzoic = false;  // sign up at ezoic.com
const enableAffiliates = false;

// Track earnings across networks
analytics.track('ad_impression', {
  network: 'adsense',
  page: 'story1.html',
  slot_id: '1234567890'
});
```

---

## 📊 **Step 6: Analytics**

### Google Analytics Setup

1. Visit: https://analytics.google.com
2. Create account → Website
3. Copy tracking code
4. Add to index.html & story pages:

```html
<!-- Google Analytics (at bottom before </head>) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your ID.

### What to Monitor

```
Goals:
├── Session duration target: 3+ minutes
├── Pages per session: 2+
├── Bounce rate: < 50%
└── Return users: 30%+

Conversion:
├── Ad CTR: 1%+
├── Page views: Growing trend
└── Unique visitors: Growing
```

---

## ⚠️ **Important Policies**

### AdSense Policies

**Must comply with:**

✅ No Invalid traffic
- No auto-click bots
- No click farms
- No misleading content

✅ Content policies
- Original content
- No plagiarism
- No adult content (18+)
- No violence/hate speech
- No illegal activities

✅ Technical requirements
- Proper ad.txt file
- Valid robots.txt
- Mobile friendly
- Fast loading

### If Violating

Risk: Account **BANNED** (keep earnings, but no future revenue)

Solution: Fix violations, submit appeal

---

## 📝 **CHECKLIST - Before Going Live**

- [ ] AdSense account created
- [ ] Publisher ID obtained
- [ ] Ad codes updated in HTML
- [ ] Ad units created in AdSense
- [ ] Slot IDs added
- [ ] Mobile view tested
- [ ] Ads displaying correctly
- [ ] Analytics configured
- [ ] Privacy policy page added
- [ ] Terms of service page added

---

## 🎯 **Income Projections** (Realistic)

**Months 1-3:**
- Traffic: 100-500 visitors/day
- Earnings: $0-10/month (approval period)

**Months 4-6:**
- Traffic: 500-1000 visitors/day  
- Earnings: $10-50/month

**Months 7-12:**
- Traffic: 1000-5000 visitors/day
- Earnings: $50-300/month

**Year 2+:**
- Traffic: 5000-20000 visitors/day
- Earnings: $300-2000/month (depends on niche)

**Top earners:**
- Traffic: 50000+ visitors/day
- Earnings: $2000-10000/month

---

## 💡 **Pro Tips**

1. **Write series** - Users return for next chapter
2. **Longer content** - More time = More impressions
3. **Niche focus** - Finance, tech, self-help pay more
4. **Fresh content** - Weekly updates → Consistent traffic
5. **Email list** - Recurring readers
6. **Social promotion** - Expand audience
7. **Internal links** - Keep users on site longer
8. **Mobile optimize** - 70%+ traffic is mobile
9. **Ad quality** - High-quality content → Better ads
10. **Patience** - Takes 6-12 months to earn significantly

---

## 📞 **Support**

- AdSense Help: https://support.google.com/adsense
- Policy Center: https://support.google.com/adsense/answer/48182
- Appeal Decisions: https://support.google.com/adsense/contact/adsense_appeal

---

**Ready to earn! 💰**

Good luck with your story website!
