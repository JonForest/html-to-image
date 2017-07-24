# HTML-to-Image

This is a simple node service that can be passed an HTML string via a post request, and return a link to an image
hosted on this server.

## Example set-up building Docker image from local:
- `docker build -t <yournamespace>/html-to-image .`
- `docker images`
- `docker run -p 8080:8080 -d jonforest/html-to-image`

## Example usage
- `curl --data "html=<p>hello world</p>" http://localhost:8080/make-image`
`> 4118204522.png`
- Browse to `http://localhost:8080/4118204522.png` to see the image

## Important notes:
- The html sent in the data must not be multi-part, so you will almost certainly need to urlencode the string 
before sending
- The underlying library used for converting the html into an image does not support changing the size of the image, so you'll always get a 1280 x 800 image.  
  - If you're using the output to populate an <img> tag in your html, then I'd add a class with `max-width/height` and `overflow: hidden` to a surrounding div in order to make the page flow correctly.  The extra image is all transparent pixels, so the larger dimensions have minimal impact on the file size.
  - It's hacky, I'm sorry, and if I have a need I'll try to find a replacement library, the first version of this is written in a rush.