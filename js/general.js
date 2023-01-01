/* BLOG DATE */
const blogDate=document.getElementById("blogDate")

const newDate =new Date()

blogDate.innerText=newDate.toLocaleDateString().replaceAll(".","/")