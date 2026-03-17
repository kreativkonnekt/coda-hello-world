# Coda Hello World

A modern Next.js application featuring a beautiful "Hello World" typing animation with Tailwind CSS styling and Docker deployment support.

## Features

✨ **Smooth Typing Animation** - Character-by-character typing effect with blinking cursor  
🎨 **Modern Design** - Gradient background and vibrant text styling with Tailwind CSS  
📱 **Responsive** - Fully responsive design that works on all devices  
🐳 **Docker Ready** - Production-optimized multi-stage Dockerfile  
⚡ **Next.js 15** - Latest Next.js with App Router and TypeScript support  

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Docker & Docker Compose
- **Node.js:** 20+

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker & Docker Compose (for containerized deployment)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

The page will auto-update as you edit files.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t coda-hello-world .
```

### Run with Docker

```bash
docker run -p 3000:3000 coda-hello-world
```

### Run with Docker Compose

```bash
docker-compose up -d
```

View logs:
```bash
docker-compose logs -f app
```

Stop services:
```bash
docker-compose down
```

## Deployment to DockPloy

This project is configured for deployment on DockPloy via gugugaga-intern-dev server.

### Prerequisites for DockPloy

- Git repository initialized and pushed
- DockPloy account and credentials
- Access to gugugaga-intern-dev server

### Deploy Steps

1. **Ensure Git is initialized and pushed:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Use DockPloy CLI or MCP to deploy:**
   - Service name: `coda-hello-world`
   - Server: `gugugaga-intern-dev`
   - Domain: Auto-generated Traffic.me domain
   - Port: 3000

3. **Access your live app:**
   The app will be available at: `https://[auto-generated].traffic.me`

## Project Structure

```
coda-hello-world/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles & animations
│   └── components/
│       └── TypingAnimation.tsx  # Typing animation component
├── public/                  # Static assets
├── Dockerfile              # Multi-stage production build
├── docker-compose.yml      # Docker Compose configuration
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── next.config.ts         # Next.js config
└── package.json           # Dependencies & scripts
```

## Environment Variables

Create a `.env.local` file for local development (optional):

```
NODE_ENV=production
PORT=3000
```

See `.env.example` for all available variables.

## Performance

- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic with Next.js App Router
- **CSS Optimization:** Tailwind CSS purge included
- **Minification:** Production builds fully minified

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For questions or issues, please reach out to the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
