function webscroll(cname) {var id = cname.replace("#", "");const el = document.getElementById(id);el.scrollIntoView({behavior: "smooth", inline: "nearest"});history.pushState(null, null, `#${id}`)}
