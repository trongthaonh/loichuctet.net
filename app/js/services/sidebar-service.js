'use strict';

function SidebarService($http, _) {
  'ngInject';

  const service = {};

  service.data = {
    activeTab : 'message',
    file: null,
    dataURI: null,
    userSelectedImage: false,
    selectingLayout: {},
    fontsList: [],
    layouts: [
      {
        background: {
          width: '800px',
          height: '400px',
          url: 'images/layout-thiep-07.png',
          zIndex: 1
        },
        imagePlaceholder: {
          top: '-3px',
          right: '0px',
          width: '380px',
          height: '406px'
        },
        messagePlaceholder: {
          top: '86px',
          left: '50px',
          width: '410px',
          height: '205px',
          fontFamily: 'Roboto Slab',
          fontSize: '24px',
          color: '#f7d433',
          zIndex: 1
        }
      },
      {
        background: {
          width: '800px',
          height: '400px',
          url: 'images/layout-thiep-08.png',
          zIndex: 1
        },
        imagePlaceholder: {
          top: '-3px',
          left: '0px',
          width: '380px',
          height: '406px'
        },
        messagePlaceholder: {
          top: '86px',
          right: '50px',
          width: '410px',
          height: '205px',
          fontFamily: 'Roboto Slab',
          fontSize: '24px',
          color: '#f7d433',
          zIndex: 1
        }
      },
      {
        background: {
          width: '800px',
          height: '555px',
          url: 'images/layout-thiep-11.jpg'
        },
        imagePlaceholder: {
          top: '75px',
          left: '559px',
          width: '129px',
          height: '129px',
          'box-shadow': '4px 4px 13px rgba(150, 150, 150, 1)'
        },
        messagePlaceholder: {
          top: '205px',
          left: '150px',
          width: '272px',
          height: '144px',
          fontSize: '20px',
          color: '#fff',
          'text-shadow': '4px 4px 13px rgba(150, 150, 150, 1)'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-05.jpg'
        },
        imagePlaceholder: {
          top: '300px',
          left: '182px',
          width: '144px',
          height: '144px'
        },
        messagePlaceholder: {
          top: '622px',
          left: '60px',
          width: '420px',
          height: '205px',
          fontFamily: 'Roboto Slab',
          fontSize: '24px',
          color: '#f7d433'
        }
      },
      {
        background: {
          width: '800px',
          height: '555px',
          url: 'images/layout-thiep-09.jpg'
        },
        imagePlaceholder: {
          top: '38px',
          left: '425px',
          width: '160px',
          height: '160px'
        },
        messagePlaceholder: {
          top: '260px',
          left: '274px',
          width: '479px',
          height: '205px',
          fontFamily: 'Roboto Slab',
          fontSize: '24px',
          color: '#f7d433'
        }
      },
      {
        background: {
          width: '800px',
          height: '555px',
          url: 'images/layout-thiep-10.jpg'
        },
        imagePlaceholder: {
          top: '76px',
          left: '225px',
          width: '160px',
          height: '160px'
        },
        messagePlaceholder: {
          top: '285px',
          left: '69px',
          width: '479px',
          height: '205px',
          fontFamily: 'Roboto Slab',
          fontSize: '24px',
          color: '#f7d433'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-12.jpg'
        },
        imagePlaceholder: {
          top: '210px',
          left: '309px',
          width: '170px',
          height: '170px',
          'box-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        },
        messagePlaceholder: {
          top: '406px',
          left: '240px',
          width: '302px',
          height: '176px',
          fontFamily: 'Roboto Slab',
          fontSize: '18px',
          color: '#c31911'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-13.jpg'
        },
        imagePlaceholder: {
          top: '27px',
          left: '327px',
          width: '146px',
          height: '146px'
        },
        messagePlaceholder: {
          top: '189px',
          left: '69px',
          width: '668px',
          height: '324px',
          fontFamily: 'Roboto Slab',
          fontSize: '18px',
          color: '#fff'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-14.jpg'
        },
        imagePlaceholder: {
          top: '499px',
          left: '104px',
          width: '189px',
          height: '189px',
          'box-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        },
        messagePlaceholder: {
          top: '499px',
          left: '339px',
          width: '392px',
          height: '195px',
          fontFamily: 'Roboto Slab',
          fontSize: '18px',
          'text-align': 'left',
          'text-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-15.jpg'
        },
        imagePlaceholder: {
          top: '357px',
          left: '573px',
          width: '149px',
          height: '149px'
        },
        messagePlaceholder: {
          top: '534px',
          left: '128px',
          width: '563px',
          height: '205px',
          fontSize: '20px',
          fontFamily: 'Roboto Slab',
          color: "#FACC3C"
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-16.jpg'
        },
        imagePlaceholder: {
          top: '265px',
          left: '344px',
          width: '145px',
          height: '145px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '427px',
          left: '231px',
          width: '369px',
          height: '130px',
          fontSize: '20px',
          fontFamily: 'Roboto Slab'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-17.jpg'
        },
        imagePlaceholder: {
          top: '27px',
          left: '290px',
          width: '229px',
          height: '229px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '286px',
          left: '71px',
          width: '662px',
          height: '123px',
          fontSize: '20px',
          fontFamily: 'Roboto Slab',
          color: "#FFF"
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-18.jpg'
        },
        imagePlaceholder: {
          top: '146px',
          left: '50px',
          width: '276px',
          height: '348px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '208px',
          left: '352px',
          width: '381px',
          height: '216px',
          fontSize: '20px',
          fontFamily: 'Roboto Slab',
          color: "#FFF"
        }
      }
    ],
    message: "Năm mới Tết đến<br>Rước hên vào nhà<br>Quà cáp bao la<br>Mọi nhà no đủ".replace(/<br *\/?>/gi, '\n'),
    sampleMessages: [
      "Chàng Mùi 2015 vui vẻ mời<br>Nàng Thân 2016 tươi trẻ tới<br>Pháo hoa rực sáng đêm giao thừa<br>Chúng ta vui mừng đón chào năm mới!",
      "Chúc mọi người hay ăn chóng béo, tiền nhiều như kẹo, tình chặt như keo, dẻo dai như mèo, mịn màng trắng trẻo, sức khỏe như voi",
      "Cung chúc tân niên một chữ nhàn<br>Chúc mừng gia quyến đặng bình an<br>Tân niên đem lại niềm hạnh phúc<br>Xuân đến rồi hưởng trọn niềm vui",
      "Năm mới năm me<br>Gia đình mạnh khỏe<br>Mọi người tươi trẻ<br>Đi chơi vui vẻ",
      "Giao thừa sắp đến<br>Chúc bạn đáng mến<br>Sự nghiệp tiến lên<br>Gặp nhiều điều hên",
      "Năm mới: Đau đầu vì nhà giàu!<br>Mệt mỏi vì học giỏi!<br>Buồn phiền vì nhiều tiền!<br>Ngang trái vì xinh gái!<br>Mệt mỏi vì đẹp giai!<br>Và mất ngủ vì không có đối thủ!",
      "Chúc các bạn có nhiều người để ý. Tỏ tình nhiều ý. Tiền nhiều nặng ký. Công việc vừa ý. Miệng cười mắt ti hí. Sống Lâu Một tí.",
      "Năm mới phát tài, phát lộc, phát tướng, phát tình nhưng đừng phát phì!",
      "Năm mới chúc nhau sức khỏe nhiều<br>Bạc tiền rủng rỉnh thoải mái tiêu<br>Happy New Year 2016 !!!",
      "Năm mới 2016: Chúc luôn hoan hỉ, sức khỏe bền bỉ, công danh hết ý, tiền vào bạc tỉ, tiền ra ri rỉ, tình yêu thỏa chí, vạn sự như ý, luôn cười hi hi, cung hỷ cung hỷ",
      "Năm cũ đi qua, năm mới lại về, kính chúc gia đạo thuận hòa, song thân đắc thọ, may đến rủi qua, đồng lòng vượt khó.",
      "Chúc bạn có 1 bầu trời sức khỏe, 1 biển cả tình thương, 1 đại dương tình bạn, 1 điệp khúc tình yêu, 1 người yêu chung thủy, 1 sự nghiệp sáng ngời, 1 gia đình thịnh vượng.",
      "Chúc một năm mới vui vẻ, 12 tháng sức khoẻ, 52 tuần thành công, 365 ngày hạnh phúc, 8.760 giờ tốt lành, 525.600 phút may mắn, 31.536.000 giây như ý.",
      "Chúc mọi người năm mới, tiền vào bạc tỉ, tiền ra rỉ rỉ, miệng cười hi hi, vạn sự như ý, cung hỉ, cung hỉ!",
      "Tân niên Tân phúc Tân tri kỷ<br>Vạn lộc Vạn tài Vạn công danh",
      "Cung chúc tân niên, Sức khỏe vô biên, Thành công liên miên, Hạnh phúc triền miên, Túi luôn đầy tiền, Sung sướng như tiên. Chúc mừng năm mới!",
      "Lộc biếc, mai vàng, xuân hạnh phúc. Đời vui, sức khỏe, Tết an khang",
      "Cung chúc tân xuân phước vĩnh cửu<br>Chúc trong gia quyến được an khương<br>Tân niên lai đáo đa phú quý<br>Xuân đến an khương vạn thọ tường.",
      "Chúc năm mới 2016 sức khỏe dẻo dai, công việc thuận lợi, thăng tiến dài dài, phi những nước đại, tiến tới thành công",
      "Đầu xuân năm mới chúc bình an<br>Chúc luôn tuổi trẻ chúc an khang<br>Chúc sang năm mới nhiều tài lộc<br>Công thành danh toại chúc vinh quang.",
      "Kính chúc mọi người một năm mới tràn đầy niềm vui và hạnh phúc: Vui trong sức khoẻ, trẻ trong tâm hồn, khôn trong lý tưởng và trưởng thành mọi lĩnh vực.",
      "Cùng chúc nhau Như ý<br>Hứng cho tròn An Khang<br>Chúc năm mới Bình An<br>Cả nhà đều Sung túc.",
      "Ra đi gặp được bạn hiền<br>Quay về gặp được người thương yêu mình<br>Sang xuân sự nghiệp hanh thông<br>Tài cao, chí lớn vẫy vùng đó đây.",
      "Năm hết tết đến kính chúc mọi người thật nhiều sức khoẻ, miệng cười vui vẻ, tiền vào mạnh mẽ, cái gì cũng được suôn sẻ, để sống tiếp một cuộc đời thật là đẹp đẽ.",
      "Năm mới chúc nhau sức khỏe nhiều<br>Bạc tiền rủng rỉnh thoải mái tiêu<br>Gia đình hạnh phúc bè bạn quý<br>Thanh thản vui chơi mọi buổi chiều.",
      "Chúc các bạn có 1 cái tết vui vẻ, hạnh phúc, vạn sự như ý. Tiền vào như nước sông Đà. Tiền ra nhỏ giọt như cà phê phin.",
      "Chúc năm mới: “Đa lộc, đa tài, đa phú quý; Đắc thời, đắc thắng, đắc nhân tâm”",
      "Năm mới chúc anh em sức khỏe vô biên, kiếm được nhiều tiền, đời sướng như tiên, chẳng ai làm phiền!",
      "Xuân này hơn hẳn mấy xuân qua<br>Phúc lộc đưa nhau đến từng nhà<br>Vài lời cung chúc tân niên mới<br>Vạn sự an khang vạn sự lành.",
      "Chúc năm Bính Thân thành công luôn tới, sức khỏe tuyệt vời, may mắn khắp nơi, làm nhiều điều mới",
      "Chúc ông bà 1 tô như ý<br>Chúc cô chú 1 chén an khang<br>Chúc anh chị 1 dĩa, 1 dĩa… tài lộc!<br>Công thành danh toại chúc VINH QUANG.",
      "Tháng năm hòa khí xuân còn mãi<br>An khang thịnh vượng phúc mãn đường.",
      "Chúc mừng năm mới<br>Xuân đến gia đình vui xum họp<br>Tết về con cháu hưởng bình an",
      "Xuân an khang đức tại như ý<br>Niên thịnh vượng phúc thọ vô biên.",
      "Tomorrow, is the first blank page of a 365 page book. Write a good one.",
      "We will open the book<br>Its pages are blank<br>We are going to put words on them ourselves. The book is called Opportunity and its first chapter is New Year’s Day",
      "May the new year bring to you warmth of love, and a light to guide your path towards a positive destination.",
      "For last year’s words belong to last year’s language. And next year’s words await another voice.",
      "The new year stands before us, like a chapter in a book, waiting to be written. We can help write that story by setting goals.",
      "In this New Year, I wish you achieve all your goals in life, And get success at every step of life, enjoy a wonderful 2016.",
      "A new year, new start and way to go.Wish you successful and glorious.",
      "Wishing you all the magic of the new year.",
      "Wishes of peace and joy from our family to yours."
    ]
  };

  service.data.selectingLayout = service.data.layouts[0];

  // Load google fonts
  service.data.fontsList = ['Roboto Slab', 'Rancho', 'Open Sans Condensed', 'Lobster', 'Noto Serif', 'Alegreya Sans SC', 'Roboto Mono', 'Open Sans', 'Noticia Text', 'Cousine'];
  WebFont.load({
    google: {
      families: service.data.fontsList
    }
  });

  return service;
}

export default [{
  name: 'SidebarService',
  fn: SidebarService
}];