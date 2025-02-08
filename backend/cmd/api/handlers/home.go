package handlers

import "net/http"

func hoome() {
}

func Home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`<!doctype html>
<html>
  <head>
    <title>This is the title of the webpage!</title>
  </head>
  <body>
	<h1> Also fuck you! </h1>
    <p>This is an example paragraph. Anything in the <strong>body</strong> tag will appear on the page, just like this <strong>p</strong> tag and its contents.</p>
  </body>
</html>`))
}
