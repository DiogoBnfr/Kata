package main

import (
	"html/template"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Define the HTML template
		const htmlTemplate = 
		`<!DOCTYPE html>
		<html>
		<head>
			<title>My Go Webpage</title>
		</head>
		<body>
			<h1>Welcome to My Go Webpage!</h1>
			<p>This is a simple webpage created using Go.</p>
		</body>
		</html>
		`

		// Parse the HTML template
		tmpl, err := template.New("webpage").Parse(htmlTemplate)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Execute the template and write the HTML response
		if err := tmpl.Execute(w, nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	println("http://localhost:8000")

	// Start the web server on port 8000
	http.ListenAndServe(":8000", nil)
}
