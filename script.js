let checkbox = document.querySelector("#checkbox")
let container = document.querySelector(".container")
let topcontainer = document.querySelector(".top-colored-container")
let headertxt = document.querySelector(".header")
let label = document.querySelector("label")
let griditems = document.querySelector(".first-grid-items")
let firstGridItemHover = document.querySelector(".first-grid-items")
let griditems2hover = document.querySelector(".first-grid-items:nth-of-type(2)")
let griditems3hover = document.querySelector(".first-grid-items:nth-of-type(3)")
let griditems4hover = document.querySelector(".first-grid-items:nth-of-type(4)")
let griditems2 = document.querySelector(".first-grid-items:nth-of-type(2)")
let griditems3 = document.querySelector(".first-grid-items:nth-of-type(3)")
let griditems4 = document.querySelector(".first-grid-items:nth-of-type(4)")
let heading = document.querySelector(".sec-heading")
let secgriditems = document.querySelector(".sec-grid-items")
let secGridItemHover = document.querySelector(".sec-grid-items")
let secgriditems2hover = document.querySelector(".sec-grid-items:nth-of-type(2)")
let secgriditems3hover = document.querySelector(".sec-grid-items:nth-of-type(3)")
let secgriditems4hover = document.querySelector(".sec-grid-items:nth-of-type(4)")
let secgriditems5hover = document.querySelector(".sec-grid-items:nth-of-type(5)")
let secgriditems6hover = document.querySelector(".sec-grid-items:nth-of-type(6)")
let secgriditems7hover = document.querySelector(".sec-grid-items:nth-of-type(7)")
let secgriditems8hover = document.querySelector(".sec-grid-items:nth-of-type(8)")
let secgriditems2 = document.querySelector(".sec-grid-items:nth-of-type(2)")
let secgriditems3 = document.querySelector(".sec-grid-items:nth-of-type(3)")
let secgriditems4 = document.querySelector(".sec-grid-items:nth-of-type(4)")
let secgriditems5 = document.querySelector(".sec-grid-items:nth-of-type(5)")
let secgriditems6 = document.querySelector(".sec-grid-items:nth-of-type(6)")
let secgriditems7 = document.querySelector(".sec-grid-items:nth-of-type(7)")
let secgriditems8 = document.querySelector(".sec-grid-items:nth-of-type(8)")


checkbox.addEventListener("change", () => {
    container.classList.toggle("light")
    topcontainer.classList.toggle("light-bg")
    headertxt.classList.toggle("light-txt")
    label.classList.toggle("label-color")
    griditems.classList.toggle("light-grid-items")
    griditems2.classList.toggle("light-grid-items")
    griditems3.classList.toggle("light-grid-items")
    griditems4.classList.toggle("light-grid-items")
    heading.classList.toggle("light-txt")
    secgriditems.classList.toggle("light-grid-items")
    secgriditems2.classList.toggle("light-grid-items")
    secgriditems3.classList.toggle("light-grid-items")
    secgriditems4.classList.toggle("light-grid-items")
    secgriditems5.classList.toggle("light-grid-items")
    secgriditems6.classList.toggle("light-grid-items")
    secgriditems7.classList.toggle("light-grid-items")
    secgriditems8.classList.toggle("light-grid-items")
    firstGridItemHover.classList.toggle("light-hover")
    griditems2hover.classList.toggle("light-hover")
    griditems3hover.classList.toggle("light-hover")
    griditems4hover.classList.toggle("light-hover")
    secGridItemHover.classList.toggle("light-hover")
    secgriditems2hover.classList.toggle("light-hover")
    secgriditems3hover.classList.toggle("light-hover")
    secgriditems4hover.classList.toggle("light-hover")
    secgriditems5hover.classList.toggle("light-hover")
    secgriditems6hover.classList.toggle("light-hover")
    secgriditems7hover.classList.toggle("light-hover")
    secgriditems8hover.classList.toggle("light-hover")
})