let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


$(document).ready(()=>{
    $('.head .logo .webName').lettering();
    let tl = gsap.timeline();
    tl.from('.head .logo', {
        x:-20,
        stagger:.1,
        duration:2,
        opacity:0
    })
})


$(document).ready(()=>{
    $('.name span').lettering();
    let tl = gsap.timeline();
    tl.from('.name  span  ',  {
        x:-20,
        stagger: .1,
        duration:1,
        opacity:0
    })
})


$(document).ready(()=>{
    $('.navbar a .link  ').lettering();
    let tl = gsap.timeline();
    tl.from('.navbar   ',  {
        x:50,
        stagger: .1,
        duration:2,
        opacity:0
    })
})

$(document).ready(()=>{
    $('.bottomLeft p ').lettering();
    let tl = gsap.timeline();
    tl.from('.bottomLeft p span',  {
        x:-20,
        stagger: .1,
        duration:1,
        opacity:0
    })
})


$(document).ready(()=>{
    $('.bottomRight a i').lettering();

    let tl = gsap.timeline();
    tl.from('.bottomRight a ', {
        x:50,
        stagger:.1,
        duration:1,
        opacity:0
    })
})
 
