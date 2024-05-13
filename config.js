const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://martins:martins@cluster0.4fzbz7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348140938040";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZDhyeE9JQ3FScXVJck9vRkxQWG0rYVlYb0VoRXFHTFd4WlBMbHdsdnlvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaHVtWS1Mel9SYk9Dank3RUhSc29NQVwiLFxuICBcInBob25lSWRcIjogXCI4ODIyNzk3Ni0xNTM5LTRhN2QtYjVhNy1iOGFkMmM2ZjU2MGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMjQ0LFxuICAgICAgMTkzLFxuICAgICAgOTcsXG4gICAgICAyMzQsXG4gICAgICAxOTcsXG4gICAgICAxNzUsXG4gICAgICAxNTgsXG4gICAgICAyMzksXG4gICAgICAxOTUsXG4gICAgICAyMDQsXG4gICAgICAxNjgsXG4gICAgICAwLFxuICAgICAgMTEyLFxuICAgICAgMTIxLFxuICAgICAgMjMwLFxuICAgICAgMTI5LFxuICAgICAgNTIsXG4gICAgICAxMTQsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICA3NCxcbiAgICAgIDEwNixcbiAgICAgIDE4OSxcbiAgICAgIDIwMSxcbiAgICAgIDE0MixcbiAgICAgIDIyNyxcbiAgICAgIDEyMSxcbiAgICAgIDE0LFxuICAgICAgMTcxLFxuICAgICAgMTQxLFxuICAgICAgMjM3LFxuICAgICAgMTg5LFxuICAgICAgMzMsXG4gICAgICA1MCxcbiAgICAgIDk5LFxuICAgICAgMjYsXG4gICAgICAxODQsXG4gICAgICAyMixcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQVDhFNTdDNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1Mjc4NTEyNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzYyMTQ2MzA5MTIyMTM6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWGN1cGlkIEJvdCDwn6SWXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NwNjdNREVLeVhpTElHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWQ3lQckxFUUxBdjEzcUFKZWZtcDJzUjhBSFlPME5aSEpXYVRRc3pkTWdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjl5MlFrWHVjTHd1emc5cUtmYmNsVVRieGZOTDRTbnQ1anBsZGo3Rk1kdVdzNjYyUmNPTWpVT1pIdk5aOFVqNlJtSlljWmJDVWM2cndMUTN5Q2JKREJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInc0NjFHcm0yR2ZWRERjQXBZeDdaMk5IWXhEY205eW9PUnBiWUQ0U0g5Z0xwY3ZTbDY5R0toeGhJaVI5b0UxTDh5bSttb090T21LdHJ2Vlk0N1c2cUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTI3ODUxMjY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTYwNDQwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF3K1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXcrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDNTWGVNeXFXVE5hamwvOW1HTWx6MWFjQmFqb2FKWUV5bGZFaGswVTljUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTQwMTk0OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Xcupidbot",
  ownername:process.env.OWNER_NAME|| "Martins",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
