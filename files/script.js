//=====================Scroll Indicator===================//
window.onscroll = function () {
    myFunction();
}

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + "%";
}

//=======================Filter Tabs=====================//
function openFood(evt, foodName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(foodName).style.display = 'grid';
    document.getElementById(foodName).style.gridTemplateColumns = 'repeat(4, 1fr)';
    document.getElementById(foodName).style.gridTemplateRows = 'repeat(3, 1fr)';
    document.getElementById(foodName).style.gridGap = '30px'
    evt.currentTarget.className += 'active';

    document.getElementById('foodName').style.display = 'block';
    evt.currentTarget.className += "active";
}

// document.getElementById("defaultOpen").click();
