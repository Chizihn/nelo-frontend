# NELO Frontend

A modern Next.js application for seamless crypto payments and virtual card services through WhatsApp integration.

![Nelo](public/nelo-logo.png)

## 🌟 Features

- **WhatsApp Integration** - Send and receive crypto directly through WhatsApp messages
- **Virtual Cards** - Generate and manage virtual cards for online payments
- **Crypto On/Off Ramp** - Easy conversion between local currency and cryptocurrencies
- **Responsive Design** - Fully responsive UI with a modern, clean aesthetic
- **Animated UI** - Smooth animations and transitions using Framer Motion

## 🛠 Tech Stack

- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Orbitron, Bebas Neue

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chizihn/nelo-frontend.git
   cd nelo-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser.**

## 📁 Project Structure

```
nelo-frontend/
├── app/                  # Next.js app directory
│   ├── payment/         # Payment callback handling
│   ├── privacy-policy/  # Privacy policy page
│   └── terms-of-service/# Terms of service page
├── components/          # React components
│   ├── Button.tsx      # Reusable button component
│   ├── CryptoSection/  # Crypto features section
│   ├── FAQ/            # FAQ section
│   ├── Header/         # Site header
│   └── Hero/           # Hero section
└── public/             # Static assets
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=your_api_url
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

## 📱 Features Breakdown

1. **Chat-Based Payments**

   - Direct crypto transactions through WhatsApp
   - AI-powered chat interface
   - Real-time transaction updates

2. **Virtual Cards**

   - Generate virtual cards for online payments
   - Multiple currency support
   - Instant card creation

3. **Crypto Services**

   - Easy on/off ramp for crypto
   - Support for major cryptocurrencies
   - Instant conversions

4. **Security**
   - Bank-level encryption
   - Secure transaction processing
   - Protected personal information

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For support, please contact us at support@nelo.com or start a WhatsApp chat with our AI agent.
