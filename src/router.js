import avatar from './assets/avatar.svg';


//sidebar list
export const sidebarItems = [
        {
            link: '/',
            section: 'Dashboard',
            icon: <i class='bx bxs-dashboard bx-flip-horizontal' undefined ></i>,
            text: 'Dashboard'
        },
        {
            link: '/customers',
            section: 'customers',
            icon: <i className='bx bx-user'></i>,
            text: 'Customers'
        },
        {
            link: '/orders',
            section: 'orders',
            icon: <i className='bx bx-receipt' ></i>,
            text: 'Orders'
        },
        {
            link: '/stats',
            section: 'stats',
            icon: <i className='bx bx-line-chart'></i>,
            text: 'Stats'
        },
        {
            link: '/settings',
            section: 'settings',
            icon: <i className='bx bx-cog'></i>,
            text: 'Settings'
        }
]
    
//customers list
export const customersItems = [
{"id":1,"name":"Brittan Rois","email":"brois0@unicef.org","location":"Bator","total_spend":"$557248.44","total_orders":24011},
{"id":2,"name":"Matthew Junifer","email":"mjunifer1@buzzfeed.com","location":"Bromma","total_spend":"$599864.94","total_orders":60195},
{"id":3,"name":"Finlay Baylay","email":"fbaylay2@purevolume.com","location":"Atalaia","total_spend":"$171337.47","total_orders":96328},
{"id":4,"name":"Beryle Monelli","email":"bmonelli3@amazonaws.com","location":"Martin","total_spend":"$335862.78","total_orders":78768},
{"id":5,"name":"Ilario Shoppee","email":"ishoppee4@webmd.com","location":"Lincoln","total_spend":"$719845.14","total_orders":26045},
{"id":6,"name":"Guglielma Haking","email":"ghaking5@icio.us","location":"Sangzhou","total_spend":"$621446.73","total_orders":90771},
{"id":7,"name":"Celle Acum","email":"cacum6@scribd.com","location":"Huzhen","total_spend":"$640651.30","total_orders":97842},
{"id":8,"name":"Ailey Haig","email":"ahaig7@live.com","location":"Gizel’","total_spend":"$473255.45","total_orders":85298},
{"id":9,"name":"Ebonee Robardet","email":"erobardet8@google.co.jp","location":"Uyugan","total_spend":"$513918.18","total_orders":38959},
{"id":10,"name":"Nancy Hallatt","email":"nhallatt9@tamu.edu","location":"Liuhao","total_spend":"$862509.17","total_orders":48049},
{"id":11,"name":"Savina Gardener","email":"sgardenera@mozilla.com","location":"Bosanski Brod","total_spend":"$385914.28","total_orders":24961},
{"id":12,"name":"Walliw Berard","email":"wberardb@state.tx.us","location":"Athy","total_spend":"$33957.23","total_orders":24986},
{"id":13,"name":"Bernita Moniker","email":"bmonikerc@g.co","location":"Conceição da Abóboda","total_spend":"$165782.42","total_orders":38671},
{"id":14,"name":"Devlen MacGibbon","email":"dmacgibbond@mashable.com","location":"Manjakandriana","total_spend":"$733558.04","total_orders":5702},
{"id":15,"name":"Terri O'Nion","email":"tonione@msn.com","location":"Hadžići","total_spend":"$327313.11","total_orders":7145},
{"id":16,"name":"Anselm Cavilla","email":"acavillaf@live.com","location":"Redcliff","total_spend":"$533334.93","total_orders":33108},
{"id":17,"name":"Frances Wyndham","email":"fwyndhamg@nbcnews.com","location":"Hekou","total_spend":"$799425.62","total_orders":85286},
{"id":18,"name":"Bennett Skermer","email":"bskermerh@reverbnation.com","location":"Sinop","total_spend":"$251319.17","total_orders":45914},
{"id":19,"name":"Valentine Lambertazzi","email":"vlambertazzii@eepurl.com","location":"Kolodenka","total_spend":"$640365.13","total_orders":83235},
{"id":20,"name":"Tremayne Tolchar","email":"ttolcharj@auda.org.au","location":"Guofu","total_spend":"$917855.01","total_orders":51836},
{"id":21,"name":"Estevan Jahncke","email":"ejahnckek@ox.ac.uk","location":"Benešov nad Ploučnicí","total_spend":"$583555.97","total_orders":9523},
{"id":22,"name":"Inness Ranyelld","email":"iranyelldl@i2i.jp","location":"Camperdown","total_spend":"$410344.53","total_orders":96017},
{"id":23,"name":"Ann Boise","email":"aboisem@nhs.uk","location":"Esuk Oron","total_spend":"$341368.58","total_orders":83833},
{"id":24,"name":"Reynard Goodacre","email":"rgoodacren@opera.com","location":"Isoka","total_spend":"$362313.38","total_orders":15703},
{"id":25,"name":"Corrie Guerro","email":"cguerroo@ca.gov","location":"Qingxi","total_spend":"$155933.66","total_orders":67669},
{"id":26,"name":"Orelee Fonteyne","email":"ofonteynep@baidu.com","location":"Shanshi","total_spend":"$990947.36","total_orders":7629},
{"id":27,"name":"Lil Lakeman","email":"llakemanq@weather.com","location":"Juḩr ad Dīk","total_spend":"$765395.19","total_orders":41097},
{"id":28,"name":"Teddie Mapstone","email":"tmapstoner@guardian.co.uk","location":"Tunoshna","total_spend":"$279921.83","total_orders":43948},
{"id":29,"name":"Paolo Bonds","email":"pbondss@washingtonpost.com","location":"Youchou","total_spend":"$718700.08","total_orders":43674},
{"id":30,"name":"Kayla Gallafant","email":"kgallafantt@technorati.com","location":"Bi’r al ‘Abd","total_spend":"$959211.70","total_orders":37331},
{"id":31,"name":"Maisie Mikalski","email":"mmikalskiu@alexa.com","location":"Mailsi","total_spend":"$820911.51","total_orders":18534},
{"id":32,"name":"Xymenes Duggon","email":"xduggonv@seattletimes.com","location":"Heredia","total_spend":"$272870.81","total_orders":37539},
{"id":33,"name":"Jakie Colles","email":"jcollesw@ifeng.com","location":"Upernavik","total_spend":"$407794.43","total_orders":96742},
{"id":34,"name":"Lew Colton","email":"lcoltonx@wikimedia.org","location":"Toba","total_spend":"$43343.95","total_orders":74692},
{"id":35,"name":"Theodora Barstow","email":"tbarstowy@pcworld.com","location":"Ciseda","total_spend":"$661910.51","total_orders":77309},
{"id":36,"name":"Ulric Kneller","email":"uknellerz@nbcnews.com","location":"Ústí nad Orlicí","total_spend":"$376602.48","total_orders":79235},
{"id":37,"name":"Ellwood Bearward","email":"ebearward10@reference.com","location":"Nueva Requena","total_spend":"$356873.13","total_orders":78996},
{"id":38,"name":"Shalna Voss","email":"svoss11@buzzfeed.com","location":"Şanā’","total_spend":"$380768.49","total_orders":13036},
{"id":39,"name":"Holly Iacovacci","email":"hiacovacci12@vk.com","location":"Ibaraki","total_spend":"$68643.77","total_orders":9334},
{"id":40,"name":"Nicolle Haggis","email":"nhaggis13@huffingtonpost.com","location":"Kuruman","total_spend":"$292977.86","total_orders":44276},
{"id":41,"name":"Janetta Stanett","email":"jstanett14@wiley.com","location":"Memphis","total_spend":"$624477.22","total_orders":50590},
{"id":42,"name":"Welch Goodin","email":"wgoodin15@examiner.com","location":"Metsavan","total_spend":"$44240.56","total_orders":23993},
{"id":43,"name":"Dominga De Bell","email":"dde16@usatoday.com","location":"Vysotsk","total_spend":"$253636.61","total_orders":75048},
{"id":44,"name":"Elga Twamley","email":"etwamley17@nps.gov","location":"Nishishinminato","total_spend":"$8420.45","total_orders":50193},
{"id":45,"name":"Annamaria Tuison","email":"atuison18@cpanel.net","location":"Solidaridad","total_spend":"$8790.60","total_orders":67402},
{"id":46,"name":"Rutter Hatrick","email":"rhatrick19@mayoclinic.com","location":"Domampot","total_spend":"$563471.50","total_orders":90685},
{"id":47,"name":"Teddy Crannage","email":"tcrannage1a@uiuc.edu","location":"Putrajawa","total_spend":"$830225.28","total_orders":18308},
{"id":48,"name":"Gaspard Hannabus","email":"ghannabus1b@wiley.com","location":"Carvalhal","total_spend":"$333295.77","total_orders":93658},
{"id":49,"name":"Kanya Arnolds","email":"karnolds1c@sbwire.com","location":"Dolní Černilov","total_spend":"$9356.87","total_orders":25454},
{"id":50,"name":"Codi Nazer","email":"cnazer1d@rediff.com","location":"Alexandria","total_spend":"$881050.42","total_orders":65533},
{"id":51,"name":"Stacy Acom","email":"sacom1e@addtoany.com","location":"Marondera","total_spend":"$140708.36","total_orders":27138},
{"id":52,"name":"Cory Blondin","email":"cblondin1f@fema.gov","location":"Chaykovskaya","total_spend":"$115222.15","total_orders":85693},
{"id":53,"name":"Weston Shorland","email":"wshorland1g@histats.com","location":"Shanyang","total_spend":"$190855.19","total_orders":64141},
{"id":54,"name":"Tammara Mannering","email":"tmannering1h@etsy.com","location":"Colima","total_spend":"$403919.34","total_orders":24038},
{"id":55,"name":"Javier Agglio","email":"jagglio1i@slideshare.net","location":"Yinji","total_spend":"$120274.22","total_orders":82050},
{"id":56,"name":"Rosalia Schoales","email":"rschoales1j@parallels.com","location":"Jiancheng","total_spend":"$712884.86","total_orders":82839},
{"id":57,"name":"Carla Firsby","email":"cfirsby1k@xrea.com","location":"Artur Nogueira","total_spend":"$965901.20","total_orders":16879},
{"id":58,"name":"Taite Oakenford","email":"toakenford1l@sun.com","location":"La Francia","total_spend":"$408901.92","total_orders":35823},
{"id":59,"name":"Robinet Rounds","email":"rrounds1m@arizona.edu","location":"Sé","total_spend":"$794096.97","total_orders":67929},
{"id":60,"name":"Christalle Ciraldo","email":"cciraldo1n@google.com","location":"Šentvid pri Stični","total_spend":"$265441.66","total_orders":2684},
{"id":61,"name":"Valaree Stocker","email":"vstocker1o@census.gov","location":"Shazi","total_spend":"$129853.99","total_orders":49514},
{"id":62,"name":"Consuelo Sutcliff","email":"csutcliff1p@gmpg.org","location":"Kargasok","total_spend":"$854447.52","total_orders":96664},
{"id":63,"name":"Nike Lincke","email":"nlincke1q@china.com.cn","location":"Tegalbuleud","total_spend":"$978252.13","total_orders":67231},
{"id":64,"name":"Shep Quilligan","email":"squilligan1r@cnn.com","location":"Nakhon Luang","total_spend":"$205510.28","total_orders":499},
{"id":65,"name":"Wallie Erwin","email":"werwin1s@delicious.com","location":"Edsbyn","total_spend":"$410995.35","total_orders":74623},
{"id":66,"name":"Zechariah Attwood","email":"zattwood1t@nifty.com","location":"Shibushi","total_spend":"$63707.16","total_orders":86419},
{"id":67,"name":"Stevana Tebald","email":"stebald1u@house.gov","location":"Yelyzavethradka","total_spend":"$833541.06","total_orders":83677},
{"id":68,"name":"Palm BURWIN","email":"pburwin1v@ameblo.jp","location":"Kertasari","total_spend":"$331030.06","total_orders":99939},
{"id":69,"name":"Sharl Purdey","email":"spurdey1w@arstechnica.com","location":"Hīsh","total_spend":"$720913.09","total_orders":5869},
{"id":70,"name":"Aloin Pembry","email":"apembry1x@google.ru","location":"Yangji","total_spend":"$227153.85","total_orders":31960},
{"id":71,"name":"Karoline Daud","email":"kdaud1y@ted.com","location":"Palhoça","total_spend":"$852723.94","total_orders":79377},
{"id":72,"name":"Mortie Futter","email":"mfutter1z@yellowbook.com","location":"Blachownia","total_spend":"$509731.71","total_orders":37061},
{"id":73,"name":"Schuyler Hinkens","email":"shinkens20@shareasale.com","location":"Río Hondo","total_spend":"$220360.77","total_orders":9905},
{"id":74,"name":"Jozef McMurty","email":"jmcmurty21@fotki.com","location":"Dalududalu","total_spend":"$887874.81","total_orders":33691},
{"id":75,"name":"Nara McGunley","email":"nmcgunley22@qq.com","location":"Alicante/Alacant","total_spend":"$276972.46","total_orders":87254},
{"id":76,"name":"Marleah Timson","email":"mtimson23@nature.com","location":"Paniówki","total_spend":"$234963.55","total_orders":64181},
{"id":77,"name":"Ketty Blucher","email":"kblucher24@booking.com","location":"Xiangyanglu","total_spend":"$84086.90","total_orders":68525},
{"id":78,"name":"Murray Arndtsen","email":"marndtsen25@wp.com","location":"Shizuoka-shi","total_spend":"$954698.49","total_orders":95142},
{"id":79,"name":"Benson Boothby","email":"bboothby26@simplemachines.org","location":"Los Cóndores","total_spend":"$966525.39","total_orders":75052},
{"id":80,"name":"Shaylah Gerrit","email":"sgerrit27@sitemeter.com","location":"Paingar","total_spend":"$609097.00","total_orders":55581},
{"id":81,"name":"Betteann Hawyes","email":"bhawyes28@un.org","location":"Cihua","total_spend":"$8958.92","total_orders":58310},
{"id":82,"name":"Reynolds Slemming","email":"rslemming29@bloglines.com","location":"Dawu Chengguanzhen","total_spend":"$764434.83","total_orders":5454},
{"id":83,"name":"Arlen Abernethy","email":"aabernethy2a@google.nl","location":"Abbeville","total_spend":"$771130.66","total_orders":23440},
{"id":84,"name":"Bernardine Eade","email":"beade2b@columbia.edu","location":"Plato","total_spend":"$339268.83","total_orders":17501},
{"id":85,"name":"Ian Causley","email":"icausley2c@virginia.edu","location":"Acton Vale","total_spend":"$995374.27","total_orders":25553},
{"id":86,"name":"Abagail Garth","email":"agarth2d@wiley.com","location":"Melfi","total_spend":"$830054.12","total_orders":56715},
{"id":87,"name":"Tome Sessuns","email":"tsessuns2e@desdev.cn","location":"General Alvear","total_spend":"$568999.17","total_orders":52444},
{"id":88,"name":"Sly Godbold","email":"sgodbold2f@miitbeian.gov.cn","location":"Arvayheer","total_spend":"$915158.93","total_orders":55259},
{"id":89,"name":"Lane Wheatcroft","email":"lwheatcroft2g@netlog.com","location":"Terpsithéa","total_spend":"$170027.54","total_orders":63611},
{"id":90,"name":"Bard Scutchin","email":"bscutchin2h@usatoday.com","location":"Ganxi","total_spend":"$679196.04","total_orders":93350},
{"id":91,"name":"Alister Batten","email":"abatten2i@google.com.au","location":"Petaling Jaya","total_spend":"$10542.24","total_orders":7586},
{"id":92,"name":"Blanche Emery","email":"bemery2j@loc.gov","location":"Pau","total_spend":"$479717.40","total_orders":49842},
{"id":93,"name":"Kyla Bertomieu","email":"kbertomieu2k@biglobe.ne.jp","location":"Tabwakea Village","total_spend":"$536886.07","total_orders":59480},
{"id":94,"name":"Hugh Livick","email":"hlivick2l@wiley.com","location":"Phù Mỹ","total_spend":"$447424.97","total_orders":2668},
{"id":95,"name":"Emera Daintry","email":"edaintry2m@ustream.tv","location":"Sámara","total_spend":"$850767.23","total_orders":56769},
{"id":96,"name":"Arnuad Dinneen","email":"adinneen2n@sitemeter.com","location":"Llacanora","total_spend":"$361343.72","total_orders":87255},
{"id":97,"name":"Krystalle Whittlesea","email":"kwhittlesea2o@list-manage.com","location":"Bantardawa","total_spend":"$376281.52","total_orders":25818},
{"id":98,"name":"Jessie Yeudall","email":"jyeudall2p@wikimedia.org","location":"Jargalant","total_spend":"$592993.68","total_orders":39010},
{"id":99,"name":"Carlin Baden","email":"cbaden2q@shop-pro.jp","location":"Santa Fe","total_spend":"$434732.89","total_orders":49922},
{"id":100,"name":"Abagael McVrone","email":"amcvrone2r@ihg.com","location":"Dongfeng","total_spend":"$920279.19","total_orders":32514}
]

//orders list
export const ordersItems = [
  {
      id: "#1236",
      date: "1 Nov, 10:20 AM",
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      product: " Case Pink  x 2",
      price: "50,00",
      status: "Paid"
  },
  {
      id: "#1235",
      date: "1 Nov, 10:20 AM",
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      product: "Valvet T-shirt",
      price: "55,50",
      status: "Canceled"
  },
  {
      id: "#1234",
      date: "1 Nov, 10:20 AM",
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Paid"
  },
  {
      id: "#1233",
      date: "1 Nov, 10:20 AM",
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Refunded"
  },
  {
      id: "#1232",
      date: "1 Nov, 10:20 AM",
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Canceled"
  },
  {
      id: "#1231",
      date: "1 Nov, 10:20 AM",
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Paid"
  },
  {
      id: "#1236",
      date: "1 Nov, 10:20 AM",
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      product: " Case Pink  x 2",
      price: "50,00",
      status: "Paid"
  },
  {
      id: "#1235",
      date: "1 Nov, 10:20 AM",
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      product: "Valvet T-shirt",
      price: "55,50",
      status: "Canceled"
  },
  {
      id: "#1234",
      date: "1 Nov, 10:20 AM",
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Paid"
  },
  {
      id: "#1233",
      date: "1 Nov, 10:20 AM",
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Refunded"
  },
  {
      id: "#1232",
      date: "1 Nov, 10:20 AM",
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Canceled"
  },
  {
      id: "#1231",
      date: "1 Nov, 10:20 AM",
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
      product: "Nike Sport V2",
      price: "140,20",
      status: "Paid"
  }
]

//top customers
export const topCustomers = [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
]

//user Data
export const userData = [
  {
      "icon": "bx bx-user",
      "content": "Profile"
  },
  {
      "icon": "bx bx-wallet-alt",
      "content": "My Wallet"
  },
  {
      "icon": "bx bx-cog",
      "content": "Settings"
  }
]

//notification Data
export const notifications = [
  {
      "icon": "bx bx-error",
      "content": "Curabitur id eros quis nunc suscipit blandit"
  },
  {
      "icon": "bx bx-package",
      "content": "Duis malesuada justo eu sapien elementum, in semper diam posuere"
  },
  {
      "icon": "bx bx-cart",
      "content": "Donec at nisi sit amet tortor commodo porttitor pretium a erat"
  },
  {
      "icon": "bx bx-error",
      "content": "Duis malesuada justo eu sapien elementum, in semper diam posuere"
  },
  {
      "icon": "bx bx-cart",
      "content": "Curabitur id eros quis nunc suscipit blandit"
  }
]

//setting Data
export const settings = {
  mode: [
    {
      id: 'light',
      content: 'Light',
      background: 'light-background',
      class: 'theme-mode-light'
  },
  {
      id: 'dark',
      content: 'Dark',
      background: 'dark-background',
      class: 'theme-mode-dark'
  }
  ],
  color: [
    {
      id: 'purple',
      content: 'purple',
      background: 'purple-color',
      class: 'theme-color-purple'
  },
  {
      id: 'red',
      content: 'Red',
      background: 'red-color',
      class: 'theme-color-red'
  },
  {
      id: 'cyan',
      content: 'Cyan',
      background: 'cyan-color',
      class: 'theme-color-cyan'
  },
  {
      id: 'green',
      content: 'Green',
      background: 'green-color',
      class: 'theme-color-green'
  },
  {
      id: 'orange',
      content: 'Orange',
      background: 'orange-color',
      class: 'theme-color-orange'
  },
]
}

//schedule Data
export const scheduleData = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      Location: 'Space Center USA',
      StartTime: '2021-01-10T04:00:00.000Z',
      EndTime: '2021-01-10T05:30:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      Location: 'Newyork City',
      StartTime: '2021-01-11T06:30:00.000Z',
      EndTime: '2021-01-11T08:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      Location: 'Space Center USA',
      StartTime: '2021-01-12T04:00:00.000Z',
      EndTime: '2021-01-12T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 4,
      Subject: 'Meteor Showers in 2021',
      Location: 'Space Center USA',
      StartTime: '2021-01-13T07:30:00.000Z',
      EndTime: '2021-01-13T09:00:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      Location: 'Space Center USA',
      StartTime: '2021-01-14T06:30:00.000Z',
      EndTime: '2021-01-14T08:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      Location: 'Bermuda',
      StartTime: '2021-01-14T04:00:00.000Z',
      EndTime: '2021-01-14T05:30:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      Location: 'Himalayas',
      StartTime: '2021-01-15T05:30:00.000Z',
      EndTime: '2021-01-15T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 8,
      Subject: 'Life on Mars',
      Location: 'Space Center USA',
      StartTime: '2021-01-16T03:30:00.000Z',
      EndTime: '2021-01-16T04:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 9,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-18T05:30:00.000Z',
      EndTime: '2021-01-18T07:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 10,
      Subject: 'Wildlife Galleries',
      Location: 'Africa',
      StartTime: '2021-01-20T05:30:00.000Z',
      EndTime: '2021-01-20T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 11,
      Subject: 'Best Photography 2021',
      Location: 'London',
      StartTime: '2021-01-21T04:00:00.000Z',
      EndTime: '2021-01-21T05:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 12,
      Subject: 'Smarter Puppies',
      Location: 'Sweden',
      StartTime: '2021-01-08T04:30:00.000Z',
      EndTime: '2021-01-08T06:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      Location: 'Space Center USA',
      StartTime: '2021-01-06T05:00:00.000Z',
      EndTime: '2021-01-06T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 14,
      Subject: 'Aliens vs Humans',
      Location: 'Research Center of USA',
      StartTime: '2021-01-05T04:30:00.000Z',
      EndTime: '2021-01-05T06:00:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2021-01-19T04:00:00.000Z',
      EndTime: '2021-01-19T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 16,
      Subject: 'Sky Gazers',
      Location: 'Alaska',
      StartTime: '2021-01-22T05:30:00.000Z',
      EndTime: '2021-01-22T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2021-01-11T00:00:00.000Z',
      EndTime: '2021-01-11T02:00:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      Location: 'Space Center USA',
      StartTime: '2021-01-11T11:30:00.000Z',
      EndTime: '2021-01-11T13:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      Location: 'San Fransisco',
      StartTime: '2021-01-14T00:30:00.000Z',
      EndTime: '2021-01-14T02:00:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 20,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-14T10:30:00.000Z',
      EndTime: '2021-01-14T12:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 21,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-10T08:30:00.000Z',
      EndTime: '2021-01-10T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 22,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2021-01-12T09:00:00.000Z',
      EndTime: '2021-01-12T10:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 23,
      Subject: 'Sky Gazers',
      Location: 'Greenland',
      StartTime: '2021-01-15T09:00:00.000Z',
      EndTime: '2021-01-15T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 24,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2021-01-16T07:00:00.000Z',
      EndTime: '2021-01-16T09:00:00.000Z',
      CategoryColor: '#7fa900',
    },
  ];

//data dashboard
export const data = {
  user: {
      name: 'hamed',
      img: avatar
  },
  summary: [
      {
          title: 'Sales',
          subtitle: 'Total sales today',
          value: '$1.000',
          percent: 70
      },
      {
          title: 'Orders',
          subtitle: 'Total orders today',
          value: '3000',
          percent: 49
      },
      {
          title: 'Revenue',
          subtitle: 'Total revenue today',
          value: '$678',
          percent: 38
      },
      {
          title: 'Visits',
          subtitle: 'Total visits today',
          value: '2345',
          percent: 55
      }
  ],
  revenueSummary: {
      title: 'Revenue',
      value: '$678',
      chartData: {
          labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
          data: [300, 300, 280, 380, 200, 300, 280, 350]
      }
  },
  overall: [
      {
          value: '300K',
          title: 'Orders'
      },
      {
          value: '9.876K',
          title: 'Customers'
      },
      {
          value: '1.234K',
          title: 'Products'
      },
      {
          value: '$5678',
          title: 'Revenue'
      }
  ],
  revenueByChannel: [
      {
          title: 'Direct',
          value: 70
      },
      {
          title: 'External search',
          value: 40
      },
      {
          title: 'Referal',
          value: 60
      },
      {
          title: 'Social',
          value: 30
      }
  ],
  revenueByMonths: {
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      data: [250, 200, 50, 280, 100, 220, 310, 190, 200, 120, 250, 350]
  }
}
