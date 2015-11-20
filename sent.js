window.onload = function Sent() {


  function dom(id) {
    return document.getElementById(id)
  }


  function resize() {
    var w = window.innerWidth,
        h = window.innerHeight,
        factor, el, elW, elH

    el = dom(activeSlide)
    el.style.display = "inline-block"
    elW = el.clientWidth
    elH = el.clientHeight

    factor = elW > elH ? w * .8 / elW : h * .8 / elH

    // TODO: meeh, that translate thing should be in the CSS definitions
    el.style.transform = "scale("+factor+") translate(-50%, -50%)"
  }


  function nextSlide() {
    var current = dom(activeSlide)
    current.style.display = "none"

    if (activeSlide + 1 >= slideCount)
      activeSlide = 0
    else
      activeSlide++

    resize()
  }


  var css = ""+
    "body, #slides { width:100%; height:100%; position:absolute; top:0; left:0; margin:0; padding:0; }" +
    "p.slide { display:none; min-width:1em; min-height:1em; transform-origin:top left; position:absolute; top:50%; left:50%; }",
    styleElement = document.createElement("style"),
    domElement = dom("slides"),
    activeSlide = slideCount = 0,
    paragraphs = []

  styleElement.innerText = css
  document.body.appendChild(styleElement)
    

  if (domElement) {
    paragraphs = domElement.textContent.split("\n\n")
    domElement.innerHTML = "" // lets reuse that node
  }


  for(var i=0; i<paragraphs.length; i++) {

    var par = paragraphs[i].trim(), slide

    if (par.length && par[0] !== "#") {
      slide = document.createElement("p")
      slide.id = slideCount
      slide.className = "slide"

      if (par[0] === "@") {
        var imgElement = document.createElement("img"),
            imgInfo = par.split("\n"),
            imgPath = imgInfo[0].replace(/^@/, ''),
            imgAlt = imgInfo.slice(1)

        imgElement.src = imgPath
        imgElement.alt = imgAlt

        slide.appendChild(imgElement)

      } else {

        // yepp, people could totally hack this *yawn*
        par = par.split("\n").map(function(line) {
          return line.replace(/^\\/, '')
        }).join("<br>")

        slide.innerHTML = par
        
      }

      domElement.appendChild(slide)
      slideCount++

    }
  }

  if (!slideCount) {
    document.body.innerHTML = ""+
      "<h1>No slides found!</h1>" +
      "<p>Slides need to be surrounded by an element with ID \"slides\"</p>" +
      "<p>For more informtion, see <a href=\"https://github.com/nkoehring/sent.js\">the github repository</a>."

  } else {
    window.onresize = resize
    window.onclick = nextSlide
    window.onkeypress = nextSlide
    resize()
  }

}

