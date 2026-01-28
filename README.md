# 🚀 Portfolio & Blog - Eleazar Muñoz

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-2026-26acd0?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-2.90.1-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**A modern, full-featured portfolio and blog platform built with React, featuring authentication, dynamic content management, and stunning animations.**

[🌐 Live Demo](https://edmr.dev) • [📧 Contact](mailto:eleazardavidmr@gmail.com)

</div>

---

## ✨ Features

### 🎨 **Modern UI/UX**

- **Glassmorphism Design** - Premium glass-effect components with backdrop blur
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Smooth Animations** - Powered by Framer Motion for fluid page transitions and micro-interactions
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Custom Typography** - Inter and Google Sans Code fonts for a professional look

### 📝 **Blog System**

- **Markdown Support** - Write posts in Markdown with syntax highlighting via `react-markdown` and `react-syntax-highlighter`
- **Authentication Required** - Protected blog routes with Supabase authentication
- **Interactive Features**:
  - ❤️ Like/Unlike posts
  - 💬 Comment system with real-time updates
  - 📊 View counts and engagement metrics
- **Dynamic Routing** - SEO-friendly URLs with slug-based navigation

### 🔐 **Authentication & User Management**

- **Supabase Auth** - Secure email/password authentication
- **Protected Routes** - Role-based access control for blog and profile pages
- **User Profiles** - Customizable profiles with avatar upload and cropping
- **Session Management** - Persistent login with automatic token refresh

### 🎯 **Portfolio Sections**

- **About/Intro** - Dynamic typewriter effect introduction
- **Experience** - Timeline of professional experience
- **Projects** - Showcase of featured projects with live demos and GitHub links
- **Certificates** - Display of professional certifications
- **Contact Form** - EmailJS integration for direct messaging

### ⚡ **Performance Optimizations**

- **Lazy Loading** - Code-splitting for faster initial load times
- **Image Optimization** - WebP format for reduced file sizes
- **Path Aliases** - Clean imports with `@/` prefix
- **SEO Ready** - Meta tags, sitemap, and semantic HTML

---

## 🛠️ Tech Stack

### **Frontend**

| Technology                                                                                                      | Purpose                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------- |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat)                      | UI Library                  |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)                         | Build Tool & Dev Server     |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat)   | Utility-First CSS Framework |
| ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white&style=flat)     | Animation Library           |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white&style=flat) | Client-Side Routing         |

### **Backend & Services**

| Technology                                                                                          | Purpose                    |
| --------------------------------------------------------------------------------------------------- | -------------------------- |
| ![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?logo=supabase&logoColor=white&style=flat) | Authentication & Database  |
| ![EmailJS](https://img.shields.io/badge/-EmailJS-FF6B6B?style=flat)                                 | Contact Form Email Service |

### **Key Dependencies**

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^7.1.5",
  "@supabase/supabase-js": "^2.90.1",
  "framer-motion": "^12.0.6",
  "react-markdown": "^10.1.0",
  "react-syntax-highlighter": "^16.1.0",
  "react-hot-toast": "^2.6.0",
  "react-helmet-async": "^2.0.5",
  "@emailjs/browser": "^4.4.1"
}
```

---

## 📦 Installation

### **Prerequisites**

- Node.js 18+ and npm/yarn
- Supabase account (for backend services)
- EmailJS account (for contact form)

### **1. Clone the Repository**

```bash
git clone https://github.com/eleazardavidmr/portafolio.git
cd portafolio
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Environment Setup**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **⚠️ Important:** Never commit your `.env` file. It's already included in `.gitignore`.

### **4. Supabase Database Setup**

#### **Tables Schema**

**`posts` Table:**

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  views INTEGER DEFAULT 0
);
```

**`comments` Table:**

```sql
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**`likes` Table:**

```sql
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);
```

**`profiles` Table:**

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### **5. Run Development Server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Install Vercel CLI:**

```bash
npm i -g vercel
```

2. **Deploy:**

```bash
vercel
```

3. **Add Environment Variables** in Vercel Dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### **Build for Production**

```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 📁 Project Structure

```
portafolio/
├── public/
│   ├── img/                    # Static images
│   ├── favicon.ico
│   ├── logo.webp
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Dynamic assets
│   ├── components/             # Reusable UI components
│   │   ├── Background/         # Animated background
│   │   ├── Contact/            # Contact form
│   │   ├── Footer/
│   │   ├── Layout/             # Page layout wrapper
│   │   ├── Loader/             # Loading spinner
│   │   ├── Main/               # Homepage sections
│   │   ├── Navbar/             # Navigation bar
│   │   ├── Projects/           # Project cards
│   │   ├── ProtectedRoute/     # Auth guard
│   │   ├── SEO/                # SEO meta tags
│   │   └── SectionTitle/       # Section headers
│   ├── contexts/               # React contexts
│   │   └── AuthContext.jsx     # Authentication state
│   ├── hooks/                  # Custom React hooks
│   ├── icons/                  # Custom SVG icons
│   ├── Pages/                  # Route pages
│   │   ├── BlogPage/           # Blog listing & post pages
│   │   ├── Certificados/       # Certificates page
│   │   ├── LoginPage/          # Authentication page
│   │   ├── ProfilePage/        # User profile
│   │   └── Proyectos/          # Projects page
│   ├── services/               # API service layers
│   │   ├── api.service.js      # Posts API
│   │   ├── auth.service.js     # Authentication
│   │   ├── comments.service.js # Comments API
│   │   ├── likes.service.js    # Likes API
│   │   └── profile.service.js  # User profiles
│   ├── supabase/               # Supabase client
│   ├── utils/                  # Utility functions
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables (not committed)
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── vercel.json                 # Vercel deployment config
```

---

## 🎨 Customization

### **Color Palette**

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#26acd0",        // Main accent color
      "white-light": "rgba(255, 255, 255, 0.3)",
    },
  },
}
```

### **Fonts**

Fonts are configured in `tailwind.config.js`:

- **Inter** - Body text
- **Google Sans Code** - Code snippets

### **Content Management**

- **Projects:** Edit `src/components/Main/Projects/projectsData.js`
- **Experience:** Edit `src/components/Main/Experience/experienceData.js`
- **Certificates:** Edit `src/Pages/Certificados/certificatesData.js`

---

## 🔧 Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server with network access |
| `npm run build`   | Build for production                         |
| `npm run preview` | Preview production build                     |
| `npm run lint`    | Run ESLint                                   |

---

## 🌟 Key Features Breakdown

### **Authentication Flow**

1. User registers/logs in via Supabase Auth
2. `AuthContext` manages global auth state
3. `ProtectedRoute` guards private pages
4. Automatic session persistence with localStorage

### **Blog Post Workflow**

1. Admin creates post in Markdown
2. Post stored in Supabase with slug generation
3. Markdown rendered with syntax highlighting
4. Users can like, comment, and share

### **Performance Features**

- **Code Splitting:** Lazy-loaded routes reduce initial bundle size
- **Image Optimization:** WebP format with lazy loading
- **Caching:** Service worker ready (PWA-compatible)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Eleazar David Muñoz**

- Portfolio: [eleazarmunoz.dev](https://your-portfolio-url.vercel.app)
- GitHub: [@eleazardavidmr](https://github.com/eleazardavidmr)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Supabase](https://supabase.com/) - Backend services
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and ☕ by Eleazar Muñoz

</div>
