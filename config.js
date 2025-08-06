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
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdJajVLMkJLNFN3eXF3TzkyWUpkbGx0Qm51RE5GL3U2cXhDZ1dKc01GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzgzcFYyZG40eWs5bzVtSTRRR2d5Mk0yYWxNd3djbWsvaE52RXBGQ3NCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTURqNm5UNVlycHZ2dkdzWTVXT1dpbjdieUJSZVFYK0tHV3Nhd2hBREdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSlNUS0VUTUJNS3BCbGhxVzhtS2grNUJ0L00wN3V3L21wNnQ2bis4ekNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCQkR4ZnY4NmNkOW42MWNsbmUxMG5pVFlOWmdxdEJ0bDVnbXFtOE5aMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ0ODhPRnJmWmdoSVVHdktEYTlidTYyZVJuNzZaSkV5TjcrcXhaSGxjakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBpZ0N4MjNsUlFJa0hXQXl3MHExVzY4M3RMZ1pJM010WlN2WHlqSHVIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODkrOTE2Ulc2VnVlLyt0N3NiYTg4cnM1SVFKYkVpbkY0diswL3ljblVtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZpV2xySWVIYVJMVTE5YnZEcXBieVplY1pkMDBmNXdGN0sxcFlWcDE1Sy8xRmFxUThoaTFxZkp0ekx3d0ZtVEQxTW4zcnpISDNpT1hGS3kxQ0dVYmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJORzhNMTduNCttTUV4MEJselJ1eVdvRzYxZTBvNzkyZk9oaGoxVFpJNlc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNDOURBMTIyQTM1MzRERkExOTA4RTc3RTQyMUNGOEQ1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ0NzIwOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU3NDUwNEM0QjMxNTY0NDExMjQ1QThCOTYwMjY1QUFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ0NzIwOTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk5MTcxQzk0MjNBRDkxMTdFQkU0REVCRkQ4OUJBQTk3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ0NzIxMDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZGSktTU043IiwibWUiOnsiaWQiOiIyNzgxODIzMjI2OTo3M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCYWxsYXMiLCJsaWQiOiIxNzQ1OTEwOTE2NzUzMjg6NzNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJK2Q4MEVRakwzTXhBWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqdGhXZzZkWjVzT1diTTFiTVBFN2ZCZVZZemp1Q2xsL0VDRDhTbzBLamhvPSIsImFjY291bnRTaWduYXR1cmUiOiJ2OEhoNUYrM2lXSitLa2xiS1djVGhsajdmQi82WE5ka1d5ZUNhbXAyZzJYTEJsMFk3ajZ3MWtPQW1Na1Z2Z1V6MmZEdXkzWTVVN0RVOVIyR0ZJa2lDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZHBwcWtvZko0Si9EOGltSmdNSExINGZlb3JaMlFiODI4MkNUZkdqSUFpZkpLTE9wOW04dm0xYkxsWGJOc0kxTmQ5aUNmUGlHZUFTeG45SGN3ZUQ3Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzgxODIzMjI2OTo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZN1lWb09uV2ViRGxtek5XekR4TzN3WGxXTTQ3Z3BaZnhBZy9FcU5DbzRhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0NzIwODksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJaUcifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
