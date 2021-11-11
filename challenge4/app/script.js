let scheme_mode;
const scheme_object = {   
    light:{
        '--theme-name':'light',
        '--theme-body-bg-color':'#F6F8FF', 
        '--theme-main-bg-color':'#FEFEFE', 
        '--theme-font-color': '#4B6A9B', 
        '--theme-bold-color': '#2B3442'
        },
    dark :{
        '--theme-name':'dark',
        '--theme-body-bg-color': '#141D2F', 
        '--theme-main-bg-color':'#1E2A47', 
        '--theme-font-color': '#FFFFFF', 
        '--theme-bold-color': '#FFFFFF'
    }
    
}
//"url": "https://api.github.com/users/octocat",
let user_profile = {
    login: '',
    avatar_url: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    bio : '',
    twitter_username :'',
    public_repos : '',
    followers : '',
    following: '',
    created_at: ''
  }
let api_url = "https://api.github.com/users/";

window.addEventListener('DOMContentLoaded', () => {
    const scheme_change_btn = document.querySelector(".color-scheme");
    const scheme_name = document.querySelector(".scheme-name");
    const scheme_icon = document.querySelector(".scheme-name + .icons");
    const root = document.documentElement;
    const text_info = document.querySelector('.text-info');
    const user_section = document.querySelector('.user-section');
    const search_btn = document.querySelector('.search-form form > button');
    
    
    scheme_mode = getComputedStyle(document.body).getPropertyValue('--theme-name');

    initial(scheme_name,scheme_icon,scheme_mode);
    
    scheme_change_btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        changeScheme(root,scheme_name,scheme_icon,scheme_mode);
    });

    const default_url = api_url + "octocat";
    //initial load theh octocat profile
    loadingData(default_url,user_section,text_info);

    search_btn.addEventListener("click", (e) => {
        e.preventDefault();
        const query = document.querySelector('#username');
        let query_url = api_url + query.value;
        loadingData(query_url,user_section,text_info);
        query.value = ''; //clear the input 
    })

})

// load the initial scheme based on the default setting and the media prefers-color-scheme  
const initial = (name, icon, mode) => {
    if(mode == "light"){
        name.textContent = "DARK";
        icon.classList.remove('sun');
        icon.classList.add('moon');

    }else{
        name.textContent = "LIGHT";
        icon.classList.remove('moon');
        icon.classList.add('sun');
    }
}

//change the scheme based on the current scheme.
const changeScheme = (root,name,icon,mode) => {
    console.log(mode);
    //change dark theme to light
    if(mode == "dark"){
        name.textContent = "DARK";
        icon.classList.remove('sun');
        icon.classList.add('moon');
        scheme_mode = scheme_object['light']['--theme-name'];
        root.style.setProperty('--theme-name',scheme_object['light']['--theme-name']);
        // console.log(scheme_object['light']['theme-body-bg-color']);
        root.style.setProperty('--theme-body-bg-color',scheme_object['light']['--theme-body-bg-color']);
        root.style.setProperty('--theme-main-bg-color',scheme_object['light']['--theme-main-bg-color']);
        root.style.setProperty('--theme-font-color',scheme_object['light']['--theme-font-color']);
        root.style.setProperty('--theme-bold-color',scheme_object['light']['--theme-bold-color']);

    }else{
        //change light to dark
        name.textContent = "LIGHT";
        icon.classList.remove('moon');
        icon.classList.add('sun');
        scheme_mode = scheme_object['dark']['--theme-name'];
        root.style.setProperty('--theme-name',scheme_object['dark']['--theme-name']);
        root.style.setProperty('--theme-body-bg-color',scheme_object['dark']['--theme-body-bg-color']);
        root.style.setProperty('--theme-main-bg-color',scheme_object['dark']['--theme-main-bg-color']);
        root.style.setProperty('--theme-font-color',scheme_object['dark']['--theme-font-color']);
        root.style.setProperty('--theme-bold-color',scheme_object['dark']['--theme-bold-color']);
    }
}
// handle the http status
const loadingData = (url,userEle, infoEle) => {
    fetch(url).then(response => {
            return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                ok: response.ok,
                json,
            })))
        }).then(({status, json, ok}) => {
            if(ok){
                updateUI(json,userEle,infoEle);
            }else if(status == 404){
                displayNoResults(userEle,infoEle);
            }
            
        }).catch(error => {
            console.log(error);
        });
};

// const fetchData = (url) => {
//     fetch(url).then(respone => {
//         return new Promise((resolve) => respone.json()
//         .then((json) => resolve({
//             status: respone.status,
//             ok: respone.ok,
//             json,
//         })))
//     })
// }


//destructure the json data object
const updateUI = ({login,
                    avatar_url,
                    name,
                    company,
                    blog,
                    location,
                    bio ,
                    twitter_username ,
                    public_repos,
                    followers ,
                    following,
                    created_at},
                    userEle,infoEle) => {
    
    const avatar_img = userEle.querySelector('.user-avatar > img');
    const name_ele = userEle.querySelector('.name');
    const login_name_ele = userEle.querySelector('.login-name');
    const join_date_ele = userEle.querySelector('.join-date');
    const bio_ele = userEle.querySelector('.introduction');
    const repo_num = userEle.querySelector('.repos > .numbers');
    const followers_num = userEle.querySelector('.followers > .numbers');
    const following_num = userEle.querySelector('.following > .numbers');
    const location_ele = userEle.querySelector('.location + span');
    const blog_ele = userEle.querySelector('.link-ico + span');
    const twitter_ele = userEle.querySelector('.twitter + span');
    const company_ele = userEle.querySelector('.company + span');
    avatar_img.src = avatar_url;
    name_ele.textContent = name;
    login_name_ele.textContent = "@" + login;
    join_date_ele.textContent = "Jioned " + new Date(created_at).toGMTString().slice(5,16);
    
    if(!bio){
        bio_ele.textContent = 'null';
    }else{
        bio_ele.textContent = bio;
    }
    
    repo_num.textContent = public_repos;
    followers_num.textContent = followers;
    following_num.textContent = following;
    location_ele.textContent = location;
    
    if(!twitter_username){
        twitter_ele.parentNode.classList.add('unavailable');
        twitter_ele.textContent = 'No available';
    }else{
        twitter_ele.parentNode.classList.remove('unavailable');
        twitter_ele.textContent = twitter_username;
    }

    if(blog){
        blog_ele.parentNode.setAttribute('href',blog); 
        blog_ele.parentNode.classList.add('valid-link');
        blog_ele.parentNode.classList.remove('unavailable');
    }else{
        blog_ele.parentNode.classList.add('unavailable');
    }
    blog_ele.textContent = blog;
    company_ele.textContent = company;
    userEle.classList.remove('visibility-hidden');
    infoEle.classList.add('display-none');

}

const displayNoResults = (userEle,infoEle) =>{
    userEle.classList.add('visibility-hidden');
    infoEle.classList.remove('display-none');
}