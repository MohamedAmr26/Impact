onload = function()
{
    var dropdownARRAY = this.document.querySelectorAll("#ULDRP");
    var dp = false;

    this.setTimeout(function(){
        $('.toast').toast('show');
    }, 8000)
    
    dropdownARRAY.forEach(FunctionForDropDown);

    function FunctionForDropDown(dropdown, index)
    {
        $(dropdown).bind('DOMSubtreeModified', function () {
            if (dp == false)
            {
                const list = this.classList;
                dp = true;
                list.remove("hide");
                list.add("DROP");
            }
            else
            {
                const list = this.classList;
                dp = false;
                list.add("show");
                list.remove("DROP");
                list.add("hide");
                const timeout = setTimeout(function(){
                    list.remove("show");
                }, 100)
            }    
        });    
    }

    var nav_links = this.document.querySelectorAll(".navbar_LINK");
    nav_links.forEach(FunctionForSlideEffect);
    var dropdown = this.document.querySelector(".dropdown-toggle");
    var effectfordrop = this.document.querySelector(".for-drop");
    $(dropdown).hover(function(){
        effectfordrop.style.width = '100%';
    }, function(){
        effectfordrop.style.width = '0%';
  });

    
    function FunctionForSlideEffect(item, index)
    {
        $(item).hover(function(){
                const targetDiv = item.getElementsByClassName("effectslide")[0]
                targetDiv.style.width = '100%';
            }, function(){
                const targetDiv = item.getElementsByClassName("effectslide")[0]
                targetDiv.style.width = '0%';
          });
    }

    var header = document.querySelector("header");
    var aboutus = this.document.querySelector(".aboutusSection");
    var clients = this.document.querySelector(".clientsSection");
    let omg = false;
    let omg2 = false;
    this.document.onscroll = function()
    {
        if (document.scrollingElement.scrollTop > 20)
        {
            header.classList.add("navboxshadow");
        }
        else
        {
            header.classList.remove("navboxshadow");
        }

        if (document.scrollingElement.scrollTop > 220 && omg == false)
        {
            omg = true;
            aboutus.classList.add("showAboutusLoad");
            setTimeout(function(){
                aboutus.style.opacity = "100%";
                aboutus.style.transform = "translateY(0px)";
            }, 800);
        }

        if (document.scrollingElement.scrollTop > 1200 && omg2 == false)
        {
            omg2 = true;
            clients.classList.add("CRLOSEC");
            setTimeout(function(){
                clients.style.opacity = "100%";
                clients.style.transform = "scale(1)";
            }, 800);
        }
    };

    var cards = this.document.querySelectorAll(".cardo")
    var delay = 200;

    for (let i = 0; i < cards.length; i++)
    {
        const item = cards[i];
        item.classList.add("cardonloadwaitanim");
        delay += 100;
        setTimeout(function(){
            item.classList.add("cardonload");
        }, delay);
    }

    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

}