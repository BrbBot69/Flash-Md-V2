require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'available';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split('.').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '27767494368',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0UxUmY4NGlYSVBZa2ZVRzBTMlFpR0xPb1lkdlpObzlwSGFJUjBQNDExST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1VaZGZnbzV5M01XZVo2KzRkRXoxYkFLemR2RTBheUN4OHIwOWN0blpnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTlVRSmlDL3JMUEw5RjBnc2xyd1JFa0lXZ3lBMGQ0Y2FFL0RYMFJXcEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmbzFoRnhHSVZQL0dHbVlpUlBuczRvamMxbTIzcWZpWlVIOFRzbVFYa1RJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9PanZQRTQ4WjZEUVZoaHlLNUZrWmRYL2pQVHBFNXN3eWx1YW9OYSs5Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRtb0p3SmM4eEhBR0hxcDNSbktCOWxzNVNBZ0wzL3pZT3FNZ21wb2t1Q009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0k2Ym9GWitTVG4xa1NwWUwzL2lQZ0VXeWtZZVRDNU5Ic2U1Y0dJeFdWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDFmVVlmY0RlT0RqMEYweG0yUnErVzlwS2JtZUhJSS9lck9wcnBrR2lGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldVMWpvcDdJK0E3YWpvOEJFN2tldkZRM1VyUng0QkpoalNCditnWXNnTkg5aVpSN2lZVXJvVzlmdk92MjNlQ0plbTJWSzJnUy80ZmtMYk1VWFFSdUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiIxUTkrbTlTK0N0Y2ErcnVKa3A4eHdyd1l6N05ieEswT0hpd2Fqd1BDK1g0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjM3MDE5MTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQUIzQzhGNjRDRkE2RDRDQUY0RTAxOTM3RUI2M0I3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjAzMjQ1MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjM3MDE5MTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRTE1RDg2Q0ZGRTgzQzM1MTNBM0ZFODY1QTQ3NjNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjAzMjQ1MzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFKUkpWQUZFIiwibWUiOnsiaWQiOiIyNzYzNzAxOTE2NzoxM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE3MDAyNTU0MTQzNTQzMToxM0BsaWQiLCJuYW1lIjoia2VhZ2FuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdWxtWG9RbzlleHh3WVlCaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3UzBSMnd0Wk1VSTUydTkvS2g5aXBDQmsvYXNmWVpNYWFqVXZoVUlTdzBNPSIsImFjY291bnRTaWduYXR1cmUiOiJQZmxFVnlXM25WM1pRZjlhRjJoUjJYN0pBcDZFZ2Z1SUlWODNFNStZRmtySWpkZ0c2R1psb01LR3NHbDNyeFJKUE1oR244MVVJSWNSVjJyUmk0Mm1CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK2VGMDY1TW53Sm5ZWmxNbjJOaHlneEhIZ2c0RTZnV1k3UlNLMWErSm5jYTFIdUxXMUM5Z0F0MTlrUWMvYmI1VDh5WWkrMjJod3p0Wk9WQzV2aXc2QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYzNzAxOTE2NzoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlMHRFZHNMV1RGQ09kcnZmeW9mWXFRZ1pQMnJIMkdUR21vMUw0VkNFc05EIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjAzMjQ1MjgsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHWmUifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
