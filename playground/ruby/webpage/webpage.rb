require 'webrick'

content = <<-HTML
<!DOCTYPE html>
<html>
<head>
  <title>My Ruby Webpage</title>
</head>
<body>
  <h1>Welcome to My Ruby Webpage!</h1>
  <p>This is a simple webpage created using Ruby without any framework.</p>
</body>
</html>
HTML

server = WEBrick::HTTPServer.new(Port: 8000)

server.mount_proc('/') do |req, res|
  res.body = content
  res.content_type = 'text/html'
end

puts "http://localhost:8000"

trap('INT') { server.shutdown }

server.start
