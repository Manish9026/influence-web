

// important data
const allowedTokens = ['abc123', 'xyz789']; 
const secretKey = '8374whshhdsdhh63ehheh6yeyeyh';
// card data
const video1 = "assets/videos/test.mp4"
const video2 = "assets/videos/song.mp4"
const parentCategory = ["short_video", "long_video", "graphics", "script",'all']



// public Data
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

// private Data
const privateTab = [
  {
    id:"all",
    name:"All Services"
  },
  {
    id: "education",
    name: "Education"
  },
  {
    id: "fitness",
    name: "Fitness"
  },
  {
    id: "finance",
    name: "Finance & Investing"
  },
  {
    id: "branding",
    name: "Personal Branding"
  },
  {
    id: "travel",
    name: "Travel"
  },
  {
    id: "documentary",
    name: "Documentary"
  },
  {
    id: "commercial",
    name: "Commercials"
  },
  

];
// [
//   "all",
//   "education",
//   "fitness",
//   "finance",
//   "branding",
//   "travel",
//   "documentary",
//   "commercial"
// ];
const privateCardData = [

  {
    title: "Education Video",
    url: "assets/images/education.jpg",
    mimeType: "image",
    category: 'education',
    content: [{
      title: "Learn Python Basics",
      category: "Education Video",
      priceRange: { min: 1000, max: 2000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      description: "An introductory short video on Python programming for beginners.",
      videoType: "short-video",
      duration: '3:15 minutes',
      mimeType: "video"
    }]
  },

  {
    title: "Fitness Video",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbWzSqWi2RN35nC_X06M_U7ZQC8T8jyOO6Q&s",
    mimeType: "image",
    category: 'fitness',
    content: [{
      title: "HIIT at Home",
      category: "Fitness Video",
      priceRange: { min: 1200, max: 2500 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "A quick HIIT workout session you can do at home in under 5 minutes.",
      videoType: "short-video",
      duration: '4:50 minutes',
      mimeType: "video"
    }]
  },

  {
    title: "Finance & Investing Video",
    url: "assets/images/finance.jpg",
    mimeType: "image",
    category: 'finance',
    content: [{
      title: "Investing 101",
      category: "Finance Video",
      priceRange: { min: 2000, max: 4000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      description: "A simple explanation of how stock market investing works.",
      videoType: "short-video",
      duration: '2:45 minutes',
      mimeType: "video"
    }]
  },

  {
    title: "Personal Branding Video",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiaRr_fey3kS-nR8Vda95Z8SA-ZqDo8EfZA&s",
    mimeType: "image",
    category: 'branding',
    content: [{
      title: "Build Your LinkedIn Brand",
      category: "Branding Video",
      priceRange: { min: 1800, max: 2800 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      description: "Tips for improving your LinkedIn presence and building a personal brand.",
      videoType: "short-video",
      duration: '3:00 minutes',
      mimeType: "video"
    }]
  },

  {
    title: "Travel Video",
    url: "assets/images/travel.jpg",
    mimeType: "image",
    category: 'travel',
    content: [{
      title: "Thailand in 3 Minutes",
      category: "Travel Video",
      priceRange: { min: 1600, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      description: "A quick travel montage from beaches to temples across Thailand.",
      videoType: "short-video",
      duration: '3:20 minutes',
      mimeType: "video"
    }]
  },

  {
    title: "Documentary Video",
    url: "assets/images/documentary.jpg",
    mimeType: "image",
    category: 'documentary',
    content: [{
      title: "Plastic Crisis Overview",
      category: "Documentary Video",
      priceRange: { min: 2500, max: 5000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      description: "A quick documentary snapshot on ocean pollution from plastics.",
      videoType: "short-video",
      duration: '5:10 minutes',
      mimeType: "video"
    }]
  },

  {
    title: "Commercial Video",
    url: "assets/images/commercial.jpg",
    mimeType: "image",
    category: 'commercial',
    content: [{
      title: "Adidas Brand Story",
      category: "Commercial Video",
      priceRange: { min: 2000, max: 4000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
      description: "A powerful short ad by Adidas showcasing resilience through sport.",
      videoType: "short-video",
      duration: '1:30 minutes',
      mimeType: "video"
    }]
  }

];


// public functions
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


}

// private functions
function onPrivatePopup(e) {

  let { contentId, containerId } = e.target.closest('#popup').dataset;
  // console.log(containerId,contentId,);

  const {content,category:cardCategory}=privateCardData[containerId];
  const {title,category,completedAt,duration,url,description}=content[contentId];

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

const privateUpdateTabCard = (selected = "all") => {
  const cardContainer = document.getElementById("cardList");
  window.scrollTo({
    top: 200,
    behavior: 'smooth'
    ,

    // makes it smooth scrolling
  });
  cardContainer.innerHTML = "";
  if (selected === 'all') {
    privateCardData.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.category;
      cardDiv.innerHTML = `
       <div class="portfolio-card">
                          <div class="portfolio-thumb video-container">
                         ${card?.mimeType == "video" ? `<video preload="metadata"  style="width: 100%; height: auto;"  src="${card?.url}"></video>` : `<img   style="width: 100%; height: auto; position:absolute; top:0; left:0; object-fit:cover; " src="${card?.url}">`}
  
           
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
                          <div class="portfolio-info">
                              <h4>${card?.title}</h4>
                           <button  id="exploreBtn" data-filter="${card?.category}">Explore more</button>
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
        // console.log(e.target?.dataset?.filter);
        if (!selectValue) return
        filterBtns.forEach(btn => {
          // console.log(btn.getAttribute('data-filter')===selectValue);

          if (btn.getAttribute('data-filter') === selectValue) {
            btn.classList.add('active')
          }
          else {

            btn.classList.remove('active')
          }



        });
        console.log(selectValue);

        updateUrl([{key:"activeTab",value:selectValue}])
        privateUpdateTabCard(selectValue)

      })
    })
  }
  else {
    privateCardData.forEach((card, index) => {

      if (card.category === selected) {
        card.content.map((item, indx) => {

          const cardDiv = document.createElement("div");
          cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.category;
          cardDiv.innerHTML = `
           <div class="portfolio-card">
                             <div class="video-outer">
                              <div class="portfolio-thumb ${card?.category=="short_video"?'video-short':"video-container"}">
                             ${item?.mimeType == "video" ? `<video preload="metadata"  style="width: 100%; "  src="${item?.url}"></video>` : `<img preload="metadata"  style="width: 100%; "  src="${item?.url}">`}
      
               
                              <!--   <img src="assets/images/portfolio/portfolio-1.jpg" alt="Commercial Video Editing" >--> 
                                  <div class="portfolio-overlay">
                                      <div class="overlay-content">
                                          <a href="#portfolioModal1" 
                                          data-bs-toggle="modal" class="overlay-icon"
                                          id="popup"
                                          
                                          data-content-id=${indx}
                                          data-container-id=${index}
                                         >
                                          <i class="fas fa-expand"></i></a>
                                      </div>
                                  </div>
                              </div>
                             </div>
                              <div class="portfolio-info">
                                  <h4>${item?.title}</h4>
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
            link.addEventListener('click', onPrivatePopup);
          });
        })


      }
    });

  }
  // cardContainer.style.opacity=1;
  // cardContainer.style.transform="translatey(0px)"
}

// Shared functions 
const encryptData=(data)=>{
try {
  if(data)
    return CryptoJS.AES.encrypt(data,secretKey).toString();
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
const isPrivate=()=>{
   const token=getParam("token",'secure');

   console.log(token,"token");
   
   if(allowedTokens?.includes(token))
    return true
  else
    return false
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

// end Shared function block




document.addEventListener('DOMContentLoaded', function () {



  // console.log(isPrivate(),"private");
  
  initPortfolioFilters(getParam('activeTab') || 'all',isPrivate());
  // updateTabCard()
  document.getElementById('portfolioModal1').addEventListener('hidden.bs.modal', function () {
    const video = document.getElementById('prd-videoUrl');
    video.pause();
    video.src = '';
    video.load();
  });

  // document.getElementById('fi').addEventListener("click")
})

/** Shared Portfolio Filtering functionality share */
function initPortfolioFilters(initial="all",privateStatus) {

  const tabContainer=document.getElementsByClassName('portfolio-filters')[0];
  const tabDetail=privateStatus?privateTab:publicTab;
  tabDetail.map((item,index)=>{
 
    const button=document.createElement('button');
    button.className=`filter-btn ${(initial==item.id) && 'active'} `
    button.setAttribute('data-filter',item?.id)
    button.innerText=item.name
    tabContainer.appendChild(button)
    
    

  })

  privateStatus?
 privateUpdateTabCard(initial): updateTabCard(initial)


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
      privateStatus?privateUpdateTabCard(filterValue):
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




    


