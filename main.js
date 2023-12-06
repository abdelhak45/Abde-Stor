
let mune = document.getElementById("mune")
let nav = document.getElementById("nav")

mune.onclick=()=>{
    if (mune.getAttribute("name") === "show") {
        mune.setAttribute("name","hide")
        mune.setAttribute("class","fa-solid fa-x")
        nav.style.cssText = "height: 220px;transition: .3s;"
    }else if(mune.getAttribute("name") === "hide"){
        mune.setAttribute("name","show")
        mune.setAttribute("class","fa-solid fa-bars")
        nav.style.cssText = "overflow: hidden;height: 60px;transition: .3s;"
    }
}


let cards =document.querySelectorAll("#img")
let watchModel = document.getElementById("watchModel")
let modelImg = document.getElementById("modelImg")
let prise = document.getElementById("prise")
let titleWatch = document.getElementById("titleWatch")


// console.log(cards);


cards.forEach(function (e) {
    e.onclick=()=>{
        watchModel.showModal()
        modelImg.src = e.src
        prise.innerHTML = e.alt
        titleWatch.innerHTML = e.title
        watchModel.style.boxShadow = "100px 100px 1000px black"
    }
})

let card = document.querySelector(".cards")
// onclick
let watch = document.getElementById("watch")
let man = document.getElementById("man")
let women = document.getElementById("women")


watch.onclick=()=>{
    card.innerHTML = `
    <div id="watchDiv">
                <h1 style="text-align: center; font-weight: 800; margin: 10px auto;"><span style="font-weight: 200;">#</span> New Modern Watch</h1>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/ruf1omis.bmp" alt="245$" title="Black Modern Watch">
                    </div>
                    <div>
                        <img id="img" src="./img/1zsckdlg.bmp" alt="155$" title="Women Modern Watch">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/4guj0egn.bmp" alt="310$" title="Yllow Modern Watch">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
                <br>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/nqwsdcmz.bmp" alt="199$" title="Class Modern Watch">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/aqaies1c.bmp" alt="201$" title="Gold Modern Watch">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/l2okfl0y.bmp" alt="169$" title="Work Modern Watch">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
                <br>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/2lurqiwj.bmp" alt="199$" title="Class Modern Watch">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/rlucljwb.bmp" alt="201$" title="Gold Modern Watch">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/68powgw7.bmp" alt="169$" title="Work Modern Watch">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
            </div>

            
        `
}
man.onclick=()=>{
    card.innerHTML = `
    <div id="manDiv">
                <h1 style="text-align: center; font-weight: 800; margin: 10px auto;"><span style="font-weight: 200;">#</span> Winter Clothes</h1>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/33pj8fb1.bmp" alt="50$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/0xug80vm.bmp" alt="120$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/us0fzly8.bmp" alt="95$" title="Boy Winter Clothes">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
                <br>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/i4z9ymzf.bmp" alt="45$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/ite9hnjc.bmp" alt="62$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/pe4vtlwj.bmp" alt="199$" title="Boy Winter Clothes">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
                <br>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/r4br9srl.bmp" alt="45$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/arhpdv6y.bmp" alt="62$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/al8fnnbr.bmp" alt="199$" title="Boy Winter Clothes">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
            </div>
    `
}
women.onclick=()=>{
    card.innerHTML = `
    <div id="womenDiv">
                <h1 style="text-align: center; font-weight: 800; margin: 10px auto;"><span style="font-weight: 200;">#</span> Winter Clothes</h1>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/14tkt2h6.bmp" alt="50$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/3hjrrskz.bmp" alt="120$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/qpms14fn.bmp" alt="95$" title="Boy Winter Clothes">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
                <br>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/kuiyq5wl.bmp" alt="45$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/ludtb0qi.bmp" alt="62$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/hkd9j372.bmp" alt="199$" title="Boy Winter Clothes">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
                <br>
                <div class="carde">
                    <div>
                        <img id="img" src="./img/6xf2z9rr.bmp" alt="45$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/huoiv1ha.bmp" alt="62$" title="Boy Winter Clothes">
                        <!-- <button class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                    <div>
                        <img id="img" src="./img/5ck0fooj.bmp" alt="199$" title="Boy Winter Clothes">
                        <!-- <button onclick="watchModel.showModal()" class="btn btn-outline-dark" >View Now</button> -->
                    </div>
                </div>
            </div>
    `
}







//   let arr =[1, 2, 3, 4, "a","d"]

// arr.c
//   console.log(arr);

// console.log(arr.reduce((e,i)=>{
//     return  +e + +i;
    
// }
// ));






























// let ar = new Set([1,1,1,2,3,"A","A"])

// // let ass = ar.keys()
// // console.log(ass.next().value);
// // console.log(ass.next().value);
// // console.log(ass.next().value);
// // console.log(ass.next().value);
// // console.log(ar);
// // console.log(ar.keys());
// // console.log(ar.keys().next());
// // type of data 
// // values +keys alias

// // size
// // forEach

// // ar.forEach((e)=>{console.log(e);})

// let ob = {user : "abdelhak",age:20}

// let arp = new WeakSet([ob])





// ar.add(5).delete(2)
// console.log(ar[0])
// console.log(arr);
// console.log(ar);
// console.log(ar.clear());

// console.log(ar);







// let arr = [
//     "kalio" ,
//     "pipi", 
//     "zero",
//     "abdelhak"
// ]



// let [a , b, ,u] = arr



// console.log([a , b, ,u]);







// for (let i = 0; i < 100; i++) {
//     const inpu = document.getElementById("#main");
//     inpu.type("wax")
//     page.keyboard.press("Enter")
// }






















// let inpu1 = document.getElementById('inpu1')
// let inpu2 = document.getElementById('inpu2')
// let btn = document.getElementById('btn')


//     let a = 0;

// btn.onclick = (el)=>{

//     if (  inpu1.value === '' || inpu2.value === '') {
//         el.preventDefault()
//     }else{
//         let p = document.getElementById('p').cloneNode(true)
//         p.style.display = "block"
//         document.body.appendChild(p)
//         p.innerHTML = `Hi mr ${inpu1.value} ${inpu2.value}`
        
//         p.id =`para${a++}`;
        
//     }

//     inpu1.value = ''
//     inpu2.value = ''
// }

// // localStorage.clear()









































