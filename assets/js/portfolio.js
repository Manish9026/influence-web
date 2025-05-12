

// important data
const allowedTokens = ['abc123', 'xyz789']; 
const secretKey = '8374whshhdsdhh63ehheh6yeyeyh';
// card data
const video1 = "assets/videos/test.mp4"
const video2 = "assets/videos/song.mp4"
const parentCategory = ["short_video", "long_video", "graphics", "script",'all']

const publicTab=[{
  id:"all",
  name:"All Services"
},{
  id:'short_video',
  name:"Short Video"
},
{
  id:'long_video',
  name:"Long Video"
},
{
  id:'graphics_video',
  name:"Graphics"
},
{
  id:'script_video',
  name:"scripting"
},

]
const privateTab=[
  {
  id:'short_video',
  name:"Short Video"
},
{
  id:'long_video',
  name:"Long Video"
},
{
  id:'graphics_video',
  name:"Graphics"
},
{
  id:'script_video',
  name:"scripting"
},
{
  id:"all",
  name:"All Services"
}
]
const videoCategory={
  long:{
    greenScreen:"green_screen",
    gaming:"gaming",
    commercial:"commercial",
  },
  sort:{
    greenScreen:"green_screen",
    gaming:"gaming",
    commercial:"commercial",
  }
}
const newCardData = [
  // sort video
  {
  title: "Short Video",
  url: "assets/images/short.jpg",
  mimeType: "image",
  category: "short_video",
  content: [
    
    {
  title: "gaming Video",
  url: "assets/images/short.jpg",
  mimeType: "image",
  category:videoCategory?.sort?.gaming,
  content:[ {
      title: "gaming Video 1",
      category: "gaming Video",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "assets/Portfolio/Short videos/Event Video/1.mp4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes',
      mimeType: "video"
    },]
    },

    {
  title: "commertial Video",
  url: "assets/images/short.jpg",
  mimeType: "image",
  category: videoCategory?.sort.commercial,
  content:[ {
      title: "commercial Video",
      category: "commercial Video",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "assets/Portfolio/Short videos/Event Video/1.mp4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes',
      mimeType: "video"
    },]
    },


  ]
},
// long
{
  title: "long Video",
  url: "assets/images/short.jpg",
  mimeType: "image",
  category: "long_video",
  content: [
    
    {
  title: "long gaming Video",
  url: "assets/images/short.jpg",
  mimeType: "image",
  category:videoCategory?.long?.gaming,
  content:[ {
      title: "long gaming Video 1",
      category: "gaming Video",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "assets/Portfolio/Short videos/Event Video/1.mp4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes',
      mimeType: "video"
    },]
    },

    {
  title: "long commertial Video",
  url: "assets/images/short.jpg",
  mimeType: "image",
  category: videoCategory?.long.commercial,
  content:[ {
      title: "long commercial Video 1",
      category: "commercial Video",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "assets/Portfolio/Short videos/Event Video/1.mp4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes',
      mimeType: "video"
    },]
    },


  ]
},


// {
//   title: "Script Video",
//   url: "assets/images/script.jpg",
//   mimeType: "image",
//   category: "script_video",
//   content: [
//     {
//       mimeType: "video",
//       title: "Script Video Title",
//       category: "",
//       priceRange: { min: 1500, max: 3000 },
//       discountPrice: 0,
//       completedAt: new Date(),
//       url: video1,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
//       videoType: "short-video",
//       duration: '2:5 minutes'
//     },
//   ]
// },
// {
//   title: "Graphics Video",
//   url: "assets/images/design.jpg",
//   mimeType: "image",
//   category: "graphics_video",
//   content: [
//     {
//       mimeType: "video",
//       title: "Graphics Video Title",
//       category: "",
//       priceRange: { min: 1500, max: 3000 },
//       discountPrice: 0,
//       completedAt: new Date(),
//       url: video1,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
//       videoType: "short-video",
//       duration: '2:5 minutes'
//     },
//   ]
// }
]


function onPopup(e) {

  let { contentId, containerId,subContainerId } = e.target.closest('#popup').dataset;
  // console.log(containerId,contentId,);

  const {content,category:cardCategory}=newCardData[containerId];
  const {content:subContent}=content[subContainerId]
  const {title,category,completedAt,duration,url,description}=subContent[contentId];

  const videoContain=document.getElementById('video-box');
  if(cardCategory=="short_video"){
    videoContain?.classList?.remove("video-container");
    videoContain?.classList?.add("video-short")
  }else{
    videoContain?.classList?.add("video-container");
    videoContain?.classList?.remove("video-short")
  }
  document.getElementById('prd-title').innerText =title;
  document.getElementById('prd-category').innerText = category;
  document.getElementById('prd-completed').innerText =completedAt?.toLocaleString('default', { month: 'long' }) + " " +completedAt?.getFullYear();
  document.getElementById('prd-duration').innerText = duration;
  document.getElementById('prd-videoUrl').src = url
  document.getElementById('prd-dis').innerText = description;

}





document.addEventListener('DOMContentLoaded', function () {

  initPortfolioFilters(getParam('activeTab') || 'all');
  // updateTabCard()
  document.getElementById('portfolioModal1').addEventListener('hidden.bs.modal', function () {
    const video = document.getElementById('prd-videoUrl');
    video.pause();
    video.src = '';
    video.load();
  });

  // document.getElementById('fi').addEventListener("click")
})

/**
* Portfolio Filtering functionality
*/
function initPortfolioFilters(initial="all") {

  const tabContainer=document.getElementsByClassName('portfolio-filters')[0];
  publicTab.map((item,index)=>{
 
    const button=document.createElement('button');
    button.className=`filter-btn ${(initial==item.id) && 'active'} `
    button.setAttribute('data-filter',item?.id)
    button.innerText=item.name
    tabContainer.appendChild(button)
    
    

  })
  updateTabCard(initial)


  const filterBtns = document.querySelectorAll('.filter-btn');


  // Handle filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      console.log(btn);

      // Add active class to clicked button
      const filterValue = btn.getAttribute('data-filter');
      updateUrl([{key:"activeTab",value:filterValue}])
      btn.classList.add('active');
      updateTabCard(filterValue)


    });
  });

  // Check for hash in URL for direct filtering
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // Remove the # character
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
    console.log(hash, targetBtn);

    if (targetBtn) {
      targetBtn.click();

      // Scroll to the portfolio section
      const portfolioSection = document.querySelector('.portfolio-section');
      if (portfolioSection) {
        setTimeout(() => {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }
}

const parentCard=(cardData,cardContainer,parentCard)=>{
  // cardContainer.appendChild()

  cardData.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.category;
      
      cardDiv.innerHTML = `
       <div class="portfolio-card">
                          <div class="portfolio-thumb video-container">
                         ${card?.mimeType == "video" ? `<video preload="metadata"  style="width: 100%; height: auto;"  src="./${card?.url}"></video>` : `<img   style="width: 100%; height: auto; position:absolute; top:0; left:0; object-fit:cover; " src="${card?.url}">`}
  
           
                          <!--   <img src="assets/images/portfolio/portfolio-1.jpg" alt="Commercial Video Editing" >--> 
                              <div class="portfolio-overlay">
                                  <!--<div class="overlay-content">
                                      <a href="#portfolioModal1" 
                                      data-bs-toggle="modal" class="overlay-icon"
                                      id="popup"
                                      
                                      data-tab-id=${index}
                                     >
                                      <i class="fas fa-expand"></i></a>
                                  </div>-->
                              </div> 
                          </div>
                          <div class="portfolio-info  text-capitalize">
                              <h4>${card?.title}</h4>
                           <button  id="exploreBtn" data-parent="${parentCard || card?.category }" data-filter="${card?.category}">Explore more</button>
                          </div>
                      </div>
      `;
      cardDiv.style.opacity = 0
      cardDiv.style.transform = 'translatey(10px)';

      setTimeout(() => {
        cardDiv.style.opacity = 1
        cardDiv.style.transform = 'translatex(0px)';

      }, 30)
     
      cardContainer.appendChild(cardDiv);

      // const links = document.querySelectorAll('#popup');


      // links.forEach(link => {
      //   link.addEventListener('click', onPopup);
      // });

    }

    );

    const exploreBtn = document.querySelectorAll("#exploreBtn");

    exploreBtn.forEach(btn => {

      btn.addEventListener('click', (e) => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        let selectValue = e?.target?.dataset?.filter
        let parent = e?.target?.dataset?.parent;

        // console.log(e.target?.dataset?.filter);

        console.log(selectValue,"selectedValue");
         updateUrl([{key:"activeTab",value:parent || selectValue}])
        if (!selectValue) return
        filterBtns.forEach(btn => {
          // console.log(btn.getAttribute('data-filter')===selectValue);

          if (btn.getAttribute('data-filter') === parent) {
            btn.classList.add('active')
          }
          else {

            btn.classList.remove('active')
          }



        });
        // console.log(filterBtns);

        updateTabCard(selectValue,parent)

      })
    })



}

const updateTabCard = (selected = "all",parent) => {
  const cardContainer = document.getElementById("cardList");
  window.scrollTo({
    top: 200,
    behavior: 'smooth'
    ,

    // makes it smooth scrolling
  });
  cardContainer.innerHTML = "";
  console.log(selected,"selectfromupdateTab card");
  
  if (parentCategory?.includes(selected)) {
    if(selected=="all")
   return parentCard(newCardData,cardContainer,)
  else{
    let cardData=newCardData.find(i=>(i.category==selected))
   return parentCard(cardData.content,cardContainer,cardData?.category)
  }
  }

  else {
    newCardData.forEach((card, parentIndex) => {

      if (card.category === parent) {
        card.content.find((i,subParentIndex)=>{
          if(i.category===selected){
              const nevDiv = document.createElement("div");
  nevDiv.innerHTML=`<div class="text-capitalize breadCum"><button>${parent}</button><i class="fa-solid fa-arrow-right"></i> <button>${selected}</button></div>`
   cardContainer.appendChild(nevDiv);

           return  i.content.map((item, contentIndex) => {

          const cardDiv = document.createElement("div");
          cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.category;
          cardDiv.innerHTML = `
           <div class="portfolio-card">
                             <div class="video-outer">
                              <div class="portfolio-thumb ${card?.category=="short_video"?'video-short':"video-container"}">
                             ${item?.mimeType == "video" ? `<video preload="metadata"  style="width: 100%; "  src="./${item?.url}"></video>` : `<img preload="metadata"  style="width: 100%; "  src="./${item?.url}">`}
      
               
                              <!--   <img src="assets/images/portfolio/portfolio-1.jpg" alt="Commercial Video Editing" >--> 
                                  <div class="portfolio-overlay">
                                      <div class="overlay-content">
                                          <a href="#portfolioModal1" 
                                          data-bs-toggle="modal" class="overlay-icon"
                                          id="popup"
                                          
                                          data-content-id=${contentIndex}
                                          data-container-id=${parentIndex}
                                          data-sub-container-id=${subParentIndex}
                                         >
                                          <i class="fas fa-expand"></i></a>
                                      </div>
                                  </div>
                              </div>
                             </div>
                              <div class="portfolio-info text-capitalize">
                                  <h4 class=" text-capitalize">${item?.title}</h4>
                                <p>₹ ${(item?.priceRange?.min ? item?.priceRange?.min : 0) + (item?.priceRange?.max && " - ₹" + item?.priceRange?.max)}</p>
                              </div>
                          </div>
          `;
          cardDiv.style.opacity = 0
          cardDiv.style.transform = 'translatey(10px)';

          setTimeout(() => {
            cardDiv.style.opacity = 1
            cardDiv.style.transform = 'translatex(0px)';

          }, 30)
          cardContainer.appendChild(cardDiv);


          const links = document.querySelectorAll('#popup');

          links.forEach(link => {
            link.addEventListener('click', onPopup);
          });
        })}



        })
        



      }

    });

  }
  // cardContainer.style.opacity=1;
  // cardContainer.style.transform="translatey(0px)"
}

 // known only to admin and this page

// encryption and decryption of param Data
const encryptData=(data)=>{
try {
  if(data)
    return CryptoJS.AES.encrypt(JSON.stringify(data),secretKey).toString();
  return null
} catch (error) {
  return null
}
}
const  decryptData=(encrypted) =>{
      try {
        const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return decrypted;
      } catch (e) {
        return null;
      }
    }

const updateUrl=(paramValue=[])=>{
  const url = new URL(window.location.href);

// Add or update a param
paramValue.map((i)=>{
  url.searchParams.set(i?.key, i?.value);
})

// Update the browser URL (optional)
window.history.replaceState({}, '', url);
}    

const getParam=(key,type="normal")=>{
 const params = new URLSearchParams(window.location.search);
 if(params && type=="secure")
  return decryptData(params.get(key)) 
 if(params && type=="normal"){
  return params.get(key)
}
 return null
} 

const encrypted = encryptData(JSON.stringify({token:"abc123"}));
console.log(encrypted,"encrypted");

console.log(`http://127.0.0.1:5501/portfolio.html?data=${encodeURIComponent(encrypted)}`);


    console.log(decryptData(encrypted),"decrypt");
    


