// lib/middleware.js
export function withCors(handler) {
    return async (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }
  
      return handler(req, res);
    };
  }
  