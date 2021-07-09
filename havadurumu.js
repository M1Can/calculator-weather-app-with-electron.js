
  const url = 'https://api.openweathermap.org/data/2.5/';
  const key = '71fbeeb1161880d32b7921c5560a3cc0';

  const arama = document.getElementById("YER");
  const derece = document.getElementById("DERECE");
  const yerinadı = document.getElementById("YER-AD");
  const min_max = document.getElementById("MİNMAX");
  const durum = document.getElementById("DURUM")

  arama.addEventListener("keypress", (DİA) => {
    let harfkod = DİA.keyCode || DİA.which;

    if (harfkod == 13) {
      return Sonuçlar(arama.value);
    }
  });

  function Sonuçlar(yeradi) {
    let query = `${url}weather?q=${yeradi}&appid=${key}&units=metric&lang=tr`;
    fetch(query).then(weather => {
      return weather.json();
    }).then(sonuçlarekrana);
  }

  function sonuçlarekrana(result) {
    yerinadı.innerText = `${result.name} | ${result.sys.country}`;

    derece.innerHTML = `${Math.round(result.main.temp)}&deg;C`;

    durum.innerText = result.weather[0].description;

    min_max.innerHTML = `${Math.round(result.main.temp_min)}&deg;C ile ${Math.round(result.main.temp_max)}&deg;C arasında`;

    //DURUMA GÖRE ARKAPLAN

    let arkaplanlar_güneşli, arkaplanlar_bulutlu, arkaplanlar_yağmurlu, arkaplanlar_parçalıbulutlu, arkaplanlar_açık, arkaplanlar_kapalı, arkaplan;



    arkaplanlar_güneşli = [
      'https://images.unsplash.com/photo-1566722794360-e2e51b03d3ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1152&q=80',
      'https://images.unsplash.com/photo-1528306606980-c7b093f99f21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1603302764042-a85b5bef6588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=326&q=80'
    ];
    arkaplanlar_bulutlu = [
      'https://images.unsplash.com/photo-1481956806014-1eae8e1c579a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1561553590-267fc716698a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=769&q=80',
      'https://images.unsplash.com/photo-1463222186250-f81196e80fea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1445297983845-454043d4eef4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1482541337505-79022d671e66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    ];
    arkaplanlar_yağmurlu = [
      'https://images.unsplash.com/photo-1532280559594-e64bc3b12f8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHJhaW55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJhaW55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1607276404018-da18c4d46f15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      'https://images.unsplash.com/photo-1605172396159-330ca8d58783?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    ];
    arkaplanlar_parçalıbulutlu = [
      'https://images.unsplash.com/photo-1561623886-a571e53fb319?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxwYXJ0bHklMjBjbG91ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1565301660548-e3f96b3ef446?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxwYXJ0bHklMjBjbG91ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1613492676472-f01ce000bd33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydGx5JTIwY2xvdWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1612727470220-ab66e1ade7e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBhcnRseSUyMGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1594656994423-f7a386138a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=305&q=80'
    ];
    arkaplanlar_açık = [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1581321825690-944511645947?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=336&q=80'
    ];
    arkaplanlar_kapalı = [
      'https://images.unsplash.com/photo-1561459474-c7017a10700c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvc2UlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1611518105613-36ee73343607?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3NlJTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1614964494722-0546c3ce4b63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3NlJTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1542065029-be403c4fb94b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxjbG9zZSUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    ]

    function randomnum(min, max) {
      return Math.floor(Math.random() * max) + min;
    }

    arkaplan = document.getElementById("ID");

    switch (result.weather[0].description) {
      case 'açık': arkaplan.src = arkaplanlar_açık[randomnum(0, 4)];
        break;
      case 'az bulutlu': arkaplan.src = arkaplanlar_bulutlu[randomnum(0, 6)];
        break;
      case 'parçalı bulutlu': arkaplan.src = arkaplanlar_parçalıbulutlu[randomnum(0, 5)];
        break;
      case 'parçalı az bulutlu': arkaplan.src = arkaplanlar_parçalıbulutlu[randomnum(0, 5)];
        break;
      case 'bulutlu': arkaplan.src = arkaplanlar_bulutlu[randomnum(0, 6)];
        break;
      case 'yağmurlu': arkaplan.src = arkaplanlar_yağmurlu[randomnum(0, 4)];
        break;
      case 'hafif yağmur': arkaplan.src = arkaplanlar_yağmurlu[randomnum(0, 4)];
        break;
      case 'güneşli': arkaplan.src = arkaplanlar_güneşli[randomnum(0, 4)];
        break;
      case 'kapalı': arkaplan.src = arkaplanlar_kapalı[randomnum(0, 4)];
        break;
      default: arkaplan.src = 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
  }