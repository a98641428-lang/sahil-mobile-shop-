const products=[
{name:"Sahil X Pro",price:49999,icon:"📱"},
{name:"Sahil A Series",price:32999,icon:"📱"},
{name:"Sahil Note Pro",price:59999,icon:"📱"},
{name:"Wireless Buds",price:4999,icon:"🎧"},
];
let cart=[];
const grid=document.getElementById("productsGrid");
grid.innerHTML=products.map((p,i)=>`<article class="card"><div class="pic">${p.icon}</div><div class="card-body"><h3>${p.name}</h3><div class="price">Rs. ${p.price.toLocaleString()}</div><button class="gold-btn" onclick="add(${i})">Add to Cart</button></div></article>`).join("");
function add(i){cart.push(products[i]);update();toggleCart(true)}
function update(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}</span><b>Rs. ${p.price.toLocaleString()}</b></div>`).join(""):"<p style='color:#888'>Your cart is empty.</p>";document.getElementById("total").textContent="Rs. "+cart.reduce((s,p)=>s+p.price,0).toLocaleString()}
function toggleCart(force){const c=document.getElementById("cart");if(force===true)c.classList.add("open");else c.classList.toggle("open")}
function checkout(){if(!cart.length)return alert("Cart is empty.");let text="Assalam-o-Alaikum, I want to order:%0A"+cart.map(p=>"- "+p.name+" (Rs. "+p.price+")").join("%0A");window.open("https://wa.me/923000000000?text="+text,"_blank")}
function sendOrder(e){e.preventDefault();const n=document.getElementById("name").value,p=document.getElementById("phone").value,m=document.getElementById("message").value;window.open("https://wa.me/923000000000?text="+encodeURIComponent(`Assalam-o-Alaikum, I am ${n}. Phone: ${p}. ${m}`),"_blank")}
update();
