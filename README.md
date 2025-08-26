📌 URL Shortener (Next.js + MongoDB + Vercel)

A simple yet powerful URL Shortener App built with Next.js (App Router), MongoDB Atlas, and Vercel.
Users can enter long URLs and generate short custom links, which redirect to the original site.

🚀 Features

🔗 Shorten long URLs into custom short links.

💾 Store URLs in MongoDB Atlas.

⚡ Instant redirect using Next.js server functions.

🎨 Modern UI with Tailwind CSS + Framer Motion animations.

🌐 Deployed on Vercel (free hosting).

🛠️ Tech Stack

Frontend: Next.js 14 (App Router), React, Tailwind CSS, Framer Motion

Backend: Next.js API Routes

Database: MongoDB Atlas (Cloud DB)

Hosting: Vercel

📂 Folder Structure
project-root/
│── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js       # API route for creating short URLs
│   ├── [shorturl]/
│   │   └── page.js            # Dynamic redirect page
│   ├── lib/
│   │   └── mongodb.js         # MongoDB connection
│   ├── page.js                # Home page
│   └── components/
│       └── Shorten.jsx        # Shortener UI
│
├── .env.local                 # Local env vars
├── package.json
├── tailwind.config.js
└── README.md


⚙️ Setup Instructions
1️⃣ Clone the repo
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Setup MongoDB Atlas

Go to MongoDB Atlas
.

Create a free cluster and database.

Copy the connection string (mongodb+srv://...).

4️⃣ Add Environment Variables

Create a .env.local file in your root folder:

MONGODB_URI=your-mongodb-atlas-uri
HOST=http://localhost:3000


On Vercel Dashboard → Project → Settings → Environment Variables:

MONGODB_URI=your-mongodb-atlas-uri
HOST=https://your-vercel-app.vercel.app

5️⃣ Run locally
npm run dev


App will be live at http://localhost:3000
 🚀

6️⃣ Deploy on Vercel

Push your repo to GitHub.

Import the repo into Vercel
.

Add environment variables in Vercel settings.

Deploy 🎉

🔑 API Endpoints
POST /api/generate

Create a new short URL.
Request body:

{
  "url": "https://example.com",
  "shorturl": "myshort"
}


Response:

{
  "message": "Url Shortened Successfully",
  "success": true,
  "shorturl": "myshort"
}
