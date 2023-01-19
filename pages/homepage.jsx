import { useRouter } from 'next/router'
import React from 'react'

let Cards1 = [{ url: "https://images-static.nykaa.com/uploads/c4f533f4-d692-45df-8371-3b9ca763a59d.jpg?tr=w-1200,cm-pad_resize" },
{ url: "https://images-static.nykaa.com/uploads/ea7f773b-1b3d-46e8-bb13-5c5f075b789b.jpg?tr=w-1200,cm-pad_resize" },
{ url: "https://images-static.nykaa.com/uploads/32e8d407-f9b5-485a-b953-a25d379dcc80.jpg?tr=w-1200,cm-pad_resize" },
{ url: "https://images-static.nykaa.com/uploads/5b7a0700-7bc0-4f3a-9716-ba7d0d03d8e3.jpg?tr=w-1200,cm-pad_resize" },
{ url: "https://images-static.nykaa.com/uploads/9813e7b1-6186-4189-a04d-e7de75104e4b.jpg?tr=w-1200,cm-pad_resize" },
{ url: "https://images-static.nykaa.com/uploads/23010b52-a7a1-4ef9-a24a-b9788312daef.jpg?tr=w-1200,cm-pad_resize" }
]


const homePage = () => {
  const router=useRouter()
  
  return (
    <div>

      <img className='sndbanner' src="https://images-static.nykaa.com/uploads/6fc4c05c-1646-4db9-9e82-ff61d6694dd5.gif?tr=w-1200,cm-pad_resize" alt="banner" />

      <div className="third-div">

        <img src="https://images-static.nykaa.com/uploads/fad4269e-a68e-4eca-9244-da27880090c7.jpg?tr=w-600,cm-pad_resize" alt="" />

        <img src="https://images-static.nykaa.com/uploads/68dfe730-1f4d-43d1-a6a2-ddd5694dc918.jpg?tr=w-600,cm-pad_resize" alt="" />
      </div>


      <img className='sndbanner' src="https://images-static.nykaa.com/uploads/2030f573-1d09-432d-aacb-24672ba9a0e1.jpg?tr=w-1200,cm-pad_resize" alt="banner" />




      {/* Top Brands */}


      <div className='top-brands' onClick={()=>router.push("/all_products")}>
        <h1>Top brands</h1>
        <div className="homepage-cards">
          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/de60c862-c495-4488-af69-d3abdcd71652.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>UP To 40% Off</h3>
              <p>Ace Your base With Lakme</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/81924016-df75-48bf-a2c3-494db075ce47.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>UP To 40% Off</h3>
              <p>Face Makeup That Fits Me As I Am!</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/e53f1ac5-0e2a-4e6c-8d30-cc30f3631aca.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>UP To 25% Off</h3>
              <p>On Entire Range</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/4adea525-7177-4d9b-91aa-4cb076224957.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>UP To 40% Off + Free Gifts</h3>
              <p>Worth ₹399 on Orders above 449 </p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/72ca6afd-b426-4519-8603-eaa9a99ecfb0.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>4 Exciting Gifts on ₹4500</h3>
              <p>Makeup For A Flawless Base</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/6e703e63-ac79-466f-aba1-a3ee19efa1b3.png?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Up To 25% Off</h3>
              <p>Kay Beauty Wedding Superstars 2023</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/dec69649-bf21-4fcb-bf41-1765936f39f7.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Up To 50% Off + Free Serum</h3>
              <p>Worth ₹799 On ₹999</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/a960cfc1-0c8f-4a64-81e6-3b5d55514e23.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>On Rs. 3000: 3 Piece Kit</h3>
              <p>On Rs. 5000: 4 Piece Kit</p>
            </div>

          </div>

          <div className="home-subcard">
            <img src="https://images-static.nykaa.com/uploads/70efffa9-d871-4fc5-8715-34f00f1480bd.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>NEW! Charlotte's Magic Gifting Universe</h3>
              <p>For EVERYONE, EVERYWHERE!</p>
            </div>

          </div>

        </div>
      </div>


      {/* Carousel */}

      <div className="crs-two">
        <div>
          <img src="https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/uploads/14dab399-cf31-4731-992e-1845321187d6.jpg?tr=w-600,cm-pad_resize" alt="" />
        </div>
      </div>

      


      <div className='pink-back'>
        <div className="top-brands" onClick={()=>router.push("/all_products")}>
        <h1>Only At Nykaa</h1>
        <div className="homepage-card last-sub">
          <div className="home-subcard last-card">
            <img src="https://images-static.nykaa.com/creatives/4823c068-c45e-4bf4-b030-a5f2f75b1d09/default.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Flat 10% Off + Exciting Gifts</h3>
              <p>On Best Of Global Beauty</p>
            </div>
          </div>

          <div className="home-subcard last-card">
            <img src="https://images-static.nykaa.com/creatives/8c0d9a97-7c88-4da8-899a-f9546375a175/default.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Upto 30% off</h3>
              <p>Comfy Panties starts at Rs.399</p>
            </div>
          </div>

          <div className="home-subcard last-card">
            <img src="https://images-static.nykaa.com/creatives/132cd70b-778f-4510-ab01-5ae956f7a442/default.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>3 Exciting Gifts On ₹3500</h3>
              <p>The Ultimate Hydration Trio</p>
            </div>
          </div>

          <div className="home-subcard last-card">
            <img src="https://images-static.nykaa.com/creatives/293fbb88-1a6e-4b3e-aa0d-7e9c5a222625/default.png?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Upto 50% Off + Serum on 799</h3>
              <p>Best Of Fragrances</p>
            </div>
          </div>

        </div>
        </div>
      </div>


      <div className="top-brands" onClick={()=>router.push("/all_products")}>
      <h1>Discover Our Favourites</h1>
      <img className='sdbanner' src="https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize" alt="img" />
      <div className="carosel">

      </div>
      </div>


    {/* Featured */}

    <div className="top-brands" onClick={()=>router.push("/all_products")}>
      <h1>Featured Brands</h1>
      <div className="featured">
        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/533cddc6-1f27-4cb6-881d-2473bc89d5ac/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Flast 10% off + </h3>
          <p>2 Gifts on ₹3000</p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/890005b6-74b6-45f2-bafc-fd5c53807a6f/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Flast 10% off + </h3>
          <p>On The Entire Range </p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/17376df9-ac03-42df-a7ad-25b7fa58a34d/default.png?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Min 20% Off</h3>
          <p>Serum of 799 on 799 </p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/9ece2199-1993-4f3d-b85d-8924e7494f60/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Upto 25% Off </h3>
          <p>On Entire Range</p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/b1c1a423-1eca-4d0e-ab9f-12c0619a48cc/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Upto 25% Off</h3>
          <p>Free ini On ₹899</p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/f1e07044-14a3-4de4-a23e-57307a7d8941/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Upto 35% Off</h3>
          <p>onEntire Range </p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/266995e4-c1a0-45c1-9c10-a43082db3f8c/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Upto 25% Off</h3>
          <p>Get Sunblock On ₹899 </p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/d439ba1f-48a3-493f-ab9d-420ac82220af/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Min 20% Off</h3>
          <p>Free Eyeliner on 699</p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/18888525-a188-4003-af9d-e778eb1e5d63/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>on $1100 </h3>
          <p>Gifts Worth ₹1050 </p>
          </div>
        </div>

        <div className="feat-sub-card">
        <img src="https://images-static.nykaa.com/creatives/b281fd98-075d-415f-b28b-148ba6184324/default.png?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3> 25% Off Combos</h3>
          <p>Haircare Bestsellers </p>
          </div>
        </div>
      </div>
    </div>



<br />
<br />
    <div className='last-sub'>
      <div className="home-subcard last-card">
            <img src="https://images-static.nykaa.com/creatives/b211ab74-f311-408c-922f-2bed0f6f1bdf/default.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Up To 40% Off! </h3>
              <p>Just In! Vitamin Rich Goji Berry</p>
            </div>
          </div>
          <div className="home-subcard last-card">
            <img src="https://images-static.nykaa.com/creatives/61f1866f-af96-452c-95b6-c4b079e99a5a/default.jpg?tr=w-400,cm-pad_resize" alt="img" />
            <div>
              <h3>Minimum 15% Off</h3>
              <p>On Bestselling Korean Skincare</p>
            </div>
          </div>
    </div>
   

   <div className="aquad">
    <div className="top-brands" onClick={()=>router.push("/all_products")}>
      <h1>Everyday Essentials</h1>
      <img className='sdbanner' src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize" alt="img" />
    </div>
     <div className="Carousel">
        <img src="https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize" alt="" />
     </div>
   </div>


    <div className="extra-brands">
      <h1>Categories In Focus</h1>
      <div className='extra-cards'>
            <img src="https://images-static.nykaa.com/uploads/b6e3595f-34bd-4b39-8873-4900fbce8504.gif?tr=w-600,cm-pad_resize" alt="img" />
            <img src="https://images-static.nykaa.com/uploads/b12f48bb-aeca-41e9-82fe-790877b62384.jpg?tr=w-600,cm-pad_resize" alt="img" />
      </div>
    </div>


      <div className="top-brands" onClick={()=>router.push("/all_products")}>
        <h1>Brands You Can't Miss</h1>
        <p>Luxe</p>
        <div className="Carosel"></div>
        <div className="Carosel"></div>
        <p>Skin</p>
      <div className='featured'>
        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/e7bb3d78-6d5e-4470-a4e6-a47abb2b8717/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up To 20% off</h3>
          <p>Free Lotion on ₹1299</p>
          </div>
        </div>

        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/0287a22c-e104-4277-9f04-e1779889b785/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Dry Oil For</h3>
          <p>Face,Body And Hair</p>
          </div>
        </div>

        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/e5ab8782-f1b0-4732-a3a8-2f2f2e089fff/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Sheet Masks</h3>
          <p>For A Radiant Glow</p>
          </div>
        </div>

        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/59223706-6530-4ec3-8d88-2acd1899a97d/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up To 53% off</h3>
          <p>On Bestsellers & Combos</p>
          </div>
        </div>
      </div>


      <p>More In Beauty</p>
      <div className="featured">
        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/c79a072e-3987-43f9-941a-a450eb31c6f5/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Healthy Hair</h3>
          <p>Real Results</p>
          </div>
        </div>
        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/2d8933d6-f17f-481c-83c4-d7bfc93e5230/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Upto 20% Off</h3>
          <p>On Entire Range</p>
          </div>
        </div>
        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/8dea939b-ddba-49b4-a88c-67f6ac31fc79/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up To 30% </h3>
          <p>Buy 2, Get Extra 5% off</p>
          </div>
        </div>
        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/2dd6699a-67f5-4a64-ae8f-8fac8d0030df/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Trusted Brand</h3>
          <p>Trusted Quality</p>
          </div>
        </div>
        <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/4ccaf8ed-9ee1-4ccf-a477-3554814451c1/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Flat 15% Off</h3>
          <p>On The Entire Range</p>
          </div>
        </div>
      </div>

      <div className="Carosel"></div>
      <p>House Of Nykaa</p>
        <div className="featured">
          <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/ed80b926-0604-4c82-8200-eb4220891283/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up to 50% off</h3>
          <p>As Good as Naked</p>
          </div>
          </div>
          <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/7043f27c-a29f-433f-9f8f-199ca08c88ec/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up to 70% off</h3>
          <p>On Entire Range</p>
          </div>
          </div>
          <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/dea1940b-569d-4038-82ff-87566ec3b85a/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up to 70% off</h3>
          <p>To match your outfit</p>
          </div>
          </div>
          <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/2041158e-ea79-418b-900e-8342e00f9441/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up to 70% off</h3>
          <p>Ethnic motifs to glam up</p>
          </div>
          </div>
          <div className="feat-sub-card">
           <img src="https://images-static.nykaa.com/creatives/a663a593-7e25-4f86-89e2-22d9f4b18d1d/default.jpg?tr=w-240,cm-pad_resize" alt="img" />
          <div>
          <h3>Up to 70% off</h3>
          <p>On Entire Range</p>
          </div>
          </div>

         </div>
    
      <div className="Carosel"></div>

    <img className='sdbanner' src="https://images-static.nykaa.com/uploads/f4c3f4d7-a236-4e7a-92f8-e5ba0417c05e.png?tr=w-1200,cm-pad_resize" alt="" />

    <div className="Carosel"></div>
      </div>


      <div className="top-brands" onClick={()=>router.push("/all_products")}>
        <h1>Game Zone</h1>
        <p>Play & Win</p>
        <img className="tp-img" src="https://images-static.nykaa.com/uploads/ea4f8daa-4cb5-484a-90f5-b0d3e2998353.png?tr=w-1200,cm-pad_resize" alt="" />
      </div>

      <div className="top-brands" onClick={()=>router.push("/all_products")}>
        <h1>Gifting At Nykaa</h1>
        <p>Give The Present of Beauty</p>
        <div className='tp-subdiv'>
          <img src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-600,cm-pad_resize" alt="img" />
          <img src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize" alt="img" />
        </div>
      </div>

      <div className="top-brands" onClick={()=>router.push("/all_products")}>
        <h1>Discover More At Nykaa</h1>
        <p>Special Offerings</p>
        <div className="Carosel"></div>
      </div>

      <div className="top-brands" onClick={()=>router.push("/all_products")}>
      <div className="discover-more">
          <div className="home-subcard discover-card">
            <img src="https://images-static.nykaa.com/uploads/25a2e412-b051-4c62-8c30-c573f911d305.jpg?tr=w-600,cm-pad_resize" alt="img" />
            <div>
              <h3>Up To 70% Off</h3>
              <p>Lingere | Jwellery | Bags | Gadgets | Footwear | Watches | Home & Kitchen Wear</p>
            </div>
          </div>
          <div className="home-subcard discover-card">
            <img src="https://images-static.nykaa.com/uploads/6bd36536-ccf7-41e2-9d76-537dff3e2325.jpg?tr=w-600,cm-pad_resize" alt="img" />
            <div>
              <h3>Up To 50% Off</h3>
              <p>Stunning Jewels to treat yourself!</p>
            </div>
          </div>
         </div>
        <div className="Carosel"></div> 
      </div>

      <div className="top-brands" onClick={()=>router.push("/all_products")}>
      <div className="discover-more">
          <div className="home-subcard discover-card">
            <img src="https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-600,cm-pad_resize" alt="img" />
            <div>
              
              <p>Catch Up On Top Trends,Expert Advice,Fresh Launches & More</p>
              <h3>Watch Now</h3>
            </div>
          </div>
          <div className="home-subcard discover-card">
            <img src="https://images-static.nykaa.com/uploads/a3720b61-fd58-40ff-90cd-72eb5b5ee3d4.jpg?tr=w-600,cm-pad_resize" alt="img" />
            <div>
              <p>Catch Up On Top Trends,Expert Advice,Fresh Launches & More</p>
              <h3>Read More</h3>
            </div>
          </div>
         </div>
        <div className="Carosel"></div> 
      </div>

      
    <div className="top-brands" onClick={()=>router.push("/all_products")}>
      <img src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize" alt="img" />
    </div>


    </div>

  )

}
export default homePage