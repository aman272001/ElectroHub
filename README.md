# ElectroHub - Premium Electronics E-Commerce Website

A modern, interactive e-commerce website built with React showcasing electronics products like earpods, neckbands, headphones, and chargers.

## Features

### 🎯 Core Features
- **Product Listing**: Browse a wide variety of electronics with detailed information
- **Shopping Cart**: Add/remove items with quantity control
- **Product Filtering**: Organized by categories (Earpods, Neckband, Headphones, Chargers)
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🎡 Special Features
- **Spin the Wheel**: Interactive spin-to-win discount mechanism
- **Daily Flash Deals**: Real-time countdown timer showing limited-time offers
- **Exclusive Member Benefits**: Sign-up section for special promotions
- **Wishlist**: Mark favorite products for later

### 💎 Design Highlights
- Beautiful gradient backgrounds with modern UI
- Smooth animations and transitions
- Interactive hover effects
- Product rating system
- Discount badges and price comparisons
- Notifications for user actions

## Tech Stack
- **React 18** - UI framework
- **Vanilla CSS** - Styling with gradient effects and animations
- **JavaScript ES6+** - Interactive functionality
- **Font Awesome** - Icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd "d:\Aman Study\Earpods"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
earpods-ecommerce/
├── public/
│   └── index.html           # Main HTML file with embedded styles
├── src/
│   ├── components/
│   │   ├── Header.js        # Navigation and branding
│   │   ├── Hero.js          # Hero section with CTA
│   │   ├── PromoSection.js  # Daily deals and promotions
│   │   ├── SpinWheel.js     # Interactive spin-to-win feature
│   │   ├── ProductList.js   # Product grid container
│   │   ├── ProductCard.js   # Individual product card
│   │   ├── CartSidebar.js   # Shopping cart sidebar
│   │   └── Footer.js        # Footer with links
│   ├── App.js               # Main app component with state management
│   ├── App.css              # App-level styles
│   └── index.js             # React entry point
└── package.json             # Dependencies and scripts
```

## Key Components

### Header
- Sticky navigation with logo
- Cart icon with item count
- Navigation links

### Hero Section
- Eye-catching welcome message
- Call-to-action buttons
- Animated entrance

### Promo Section
- Daily flash deals with live countdown
- Member benefits section
- Limited-time offer announcements

### Spin Wheel
- Interactive 12-segment discount wheel
- Smooth rotation animation
- Prize display on winning

### Product Cards
- Product image with category icon
- Price comparison (original vs. current)
- Discount percentage badge
- Star rating system
- Add to cart and wishlist buttons
- Hover effects with elevation

### Shopping Cart
- Slide-out sidebar design
- Item quantity controls
- Remove item functionality
- Total price calculation
- Checkout button

### Footer
- Company information
- Customer service links
- Quick navigation
- Newsletter subscription
- Social media links

## Products Available

1. **Wireless Earpods Pro** - ₹4,999 (50% OFF)
2. **Bluetooth Neckband** - ₹1,999 (43% OFF)
3. **Over-Ear Headphones** - ₹5,999 (40% OFF)
4. **Fast Charger 65W** - ₹1,499 (40% OFF)
5. **Gaming Earpods** - ₹3,999 (43% OFF)
6. **Portable Charger 20000mAh** - ₹1,299 (35% OFF)
7. **Sports Neckband** - ₹2,499 (44% OFF)
8. **Studio Headphones** - ₹7,999 (38% OFF)

## Features Details

### Interactive Spin Wheel
- 12 different discount options
- Smooth cubic-bezier rotation
- Prize announcement
- Instant notification

### Real-time Countdown Timer
- Updates every second
- Shows hours, minutes, seconds
- Formats numbers with leading zeros
- Resets daily

### Responsive Breakpoints
- Desktop: Full product grid (4 columns)
- Tablet: 2-3 column layout
- Mobile: Single column with full-width cart

## Customization

### Adding Products
Edit the `productsData` array in [App.js](src/App.js):
```javascript
{
  id: 9,
  name: 'Product Name',
  price: 5999,
  originalPrice: 9999,
  description: 'Product description',
  category: 'Category',
  rating: 4.8,
  icon: '🎧'
}
```

### Changing Colors
Modify CSS variables in [public/index.html](public/index.html):
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #f093fb;
}
```

### Adjusting Wheel Segments
Update the `discounts` array in [SpinWheel.js](src/components/SpinWheel.js)

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Optimized CSS animations using GPU acceleration
- Smooth 60fps transitions
- Minimal re-renders with React hooks
- Lazy loading ready

## Future Enhancements
- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Product search and filters
- [ ] Customer reviews and ratings
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics dashboard

## License
MIT License - Feel free to use this project for personal or commercial purposes.

## Support
For issues or feature requests, please create an issue in the repository.

---

**ElectroHub** - Your trusted destination for premium electronics! 🚀
