from http.server import BaseHTTPRequestHandler, HTTPServer
from io import BytesIO


class ServerHandler(BaseHTTPRequestHandler):
    def do_GET(self):
       self.send_response(200)
       # Headers for security measures
       self.send_header("Content-type", "text/plain")
       self.send_header('Access-Control-Allow-Credentials', 'true')
       self.send_header('Access-Control-Allow-Origin',str(self.headers["Origin"]))
       self.end_headers()
       path = str(self.path)
       if(path.startswith("/thingPython")):
          res = BytesIO()
          res.write(b'Hello world dafrom Python Thing!')
          self.wfile.write(res.getvalue())

#DON'T TOUCH THIS PART
server = HTTPServer(('localhost', 8002), ServerHandler)
server.serve_forever()
 
