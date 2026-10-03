import os
import sys
import json
import time
import socket
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8085
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), 'uploads')
os.makedirs(UPLOAD_DIR, exist_ok=True)

def get_lan_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

class OmniQRServerHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        if parsed_path.path == '/api/upload':
            content_type = self.headers.get('Content-Type', '')
            content_length = int(self.headers.get('Content-Length', 0))

            if 'multipart/form-data' in content_type and content_length > 0:
                body = self.rfile.read(content_length)
                boundary = content_type.split('boundary=')[1].encode()
                parts = body.split(b'--' + boundary)

                filename = 'uploaded_file'
                file_data = b''

                for part in parts:
                    if b'filename="' in part:
                        headers_and_body = part.split(b'\r\n\r\n', 1)
                        if len(headers_and_body) == 2:
                            part_headers, part_body = headers_and_body
                            for line in part_headers.split(b'\r\n'):
                                if b'filename="' in line:
                                    fn_part = line.split(b'filename="')[1].split(b'"')[0]
                                    filename = fn_part.decode('utf-8', errors='ignore')
                            file_data = part_body.rstrip(b'\r\n')
                            break

                safe_name = os.path.basename(filename).replace(' ', '_')
                unique_name = f"{int(time.time())}_{safe_name}"
                save_path = os.path.join(UPLOAD_DIR, unique_name)
                with open(save_path, 'wb') as f:
                    f.write(file_data)

                lan_ip = get_lan_ip()
                file_url = f"http://{lan_ip}:{PORT}/uploads/{unique_name}"

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'url': file_url}).encode('utf-8'))
                return

        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', PORT), OmniQRServerHandler)
    lan_ip = get_lan_ip()
    print(f"OmniQR Server running on http://localhost:{PORT} and http://{lan_ip}:{PORT}")
    server.serve_forever()
