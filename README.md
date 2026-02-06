# caitlincast  
## 🌐 Deploy on Render  
1. Go to: https://render.com  
2. Log in → New + → Web Service  
3. Choose your GitHub repo  
  
### 4. Configure:
Name: caitlincast (or whatever you want to name it)  
Language: Node  
Region: Closest to both people watching  
Build Command: npm install  
Start Command: npm start  
Instance Type: Free tier is fine  
  
5. Click Create Web Service  
Render will build and deploy your server.  
  
## 🔗 Get your WebSocket URL
After deployment, Render gives you something like:  
https://caitlincast.onrender.com  
  
WebSockets for Render work like this:  
wss://caitlincast.onrender.com  
That is the address you plug into your HTML client (the index.html file).  
  
## 📝 Update your index.html  
Find this line in your client:  
const ws = new WebSocket("wss://caitlincast.onrender.com");  
  
Replace with:  
const ws = new WebSocket("wss://[URL_FROM_RENDER_WITHOUT_HTTPS]");  
  
Save the file.  
Now both of you can open your copy of index.html locally and connect to the same sync server.
