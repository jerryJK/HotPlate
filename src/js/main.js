$(document).on('ready', function() {

    //menu data
    data = {
        soups: [{name:'Żurek z jajkiem',desc:'Polish soup made of fermented rye with egg',price:'4,00'},{name:'Barszcz czerwony',desc:'Red borsh stuffed with beff dumplings',price:'5,00'},{name:'Tradycyjny rosół z makaronem',desc:'Broth with Polish pasta',price:'5,00'},{name:'Zupa warzywna z ziemniakami',desc:'Vegetable soup with potatos', price:'6,00'},{name: 'Krem borowikowy z grzankami', desc:'Boletus creme with crotons', price:'4,00'}],
        mainDishes: [{name:'Pierogi z baraniną i cebulą',desc:'Polish mutton dumplings with onion',price:'11,00'},{name:'Pierogi z cielęciną, masłem i szałwią',desc:'Polish dumplings with veal, butter and sage',price:'10,00'},{name:'Bigos na dziczyźnie ze śliwkami',desc:'Traditional "bigos" with wild meat and plums',price:'10,00'},{name:'Schabowy z ziemniakami i kapustą zasmażaną',desc:'Breaded pork chop with popatoes and cabbage', price:'11,00'},{name: 'Żeberka marynowane z miodzie na purre z marchewki', desc:'Ribs marinated in honey served on carrot', price:'11,00'}],
        salads:[{name:'Sałatka meksykańska z kurczakiem',desc:'Mexican salad with chicken',price:'6,00'},{name:'Sałata rzymska z kozim serem i orzechami laskowymi', desc:'Salad with goats cheese and haselnuts', price:'5,00'}, {name:'Sałatka grecka z fetą i pomidorami', desc: 'Greek salad with feta cheese and tomatos', price: '6,00'}, {name:'Grilowana polędwica na sałatach z soczewicą', desc:'Salads with grilled bef and lentil', price: '7,00'} ],
        desserts:[{name:'Sernik tradycyjny z polewą czekoladową', desc:'traditional cheesecake with chocolate glaze',price:'4,00'},{name:'Tort czekoladowy z wiśniami',desc:'chocolate cake with cherries',price:'5,00'},{name:'Tradycyjna szarlotka z gałką lodów', desc:'apple pie with a scoop of ice cream',price:'5,00'},{name:'Beza z malinami i jagodami', desc:'meringue with raspberries and blueberries', price:'5,00'},{name:'Kopiec kreta z bananami', desc:'chocolate cake with bananas', price:'5,00'}],
        drinks: [{name:'Woda mineralna', desc:'mineral water carbonated/still', price:'2,00'},{name:'Herbata czarna', desc:'blak tea', price:'3,00'},{name:'Herbata owocowa', desc:'fruits tea', price:'3,00'}, {name:'Kawa czarna/biała', desc:'black/white coffee', price:'3,00'},{name: 'CocaCola, Pepsi, Fanta',desc:'250 ml', price:'3,00'}]
    };

    var menuList = $('.menu-list');
    var menuButtons = $('.menu-list-item')
    var menuTitle = $('.title-menu-main');
    var menuItemsList  = $('.active-menu-list');

    //fill menu list with initial soups items
    fillMenuList('soups');

    //add eventlistener to menu list
    menuList.on('click', function(event){
      event.preventDefault();
      var elem = $(event.target);
      if(elem.hasClass('item-soups')) {
        menuTitle.text('Soups');
        fillMenuList('soups');
      } else if (elem.hasClass('item-mainDishes')){
        menuTitle.text('Main Dishes');
        fillMenuList('mainDishes')
      } else if (elem.hasClass('item-salads')){
        menuTitle.text('Salads');
        fillMenuList('salads')
      } else if (elem.hasClass('item-desserts')){
        menuTitle.text('Desserts');
        fillMenuList('desserts')
      } else if (elem.hasClass('item-drinks')){
        menuTitle.text('Drinks');
        fillMenuList('drinks')
      }
    })

    //fill menu list
    function fillMenuList(name) {
      menuItemsList.text('');
      var classActive = 'a.item-' + name;
      menuButtons.find('a').removeClass('active');
      menuButtons.find(classActive).addClass('active');
      data[name].forEach(function(elem) {
          var	listElem	=	$("<li>",	{class:	"active-list-item"});
          var nameElem =  $("<p class='d-inline'>" + elem.name + "</p>");
          var priceElem =  $("<i class='dish-price float-right'>&euro; " + elem.price + "</i>");
          var descElem =  $("<i class='dish-desc'>" + elem.desc + "</i>");

          listElem.append(nameElem);
          listElem.append(priceElem);
          listElem.append(descElem);

          menuItemsList.append(listElem);
      })
    }

    //slick slider settings
    $('.center').slick({
        centerMode: true,
        easing: 'easeOutElastic',
        focusOnSelect: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

});
