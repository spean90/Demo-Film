var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: '首页' ,
      movies:[
          {title : '机械战警',
             _id : 1,
          poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
          },
          {title : '机械战警',
              _id : 2,
              poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
          },
          {title : '机械战警',
              _id : 3,
              poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
          },
          {title : '机械战警',
              _id : 4,
              poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
          },
          {title : '机械战警',
              _id : 5,
              poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
          }

      ]

  });
});

/* GET detail page. */
router.get('/detail/:id', function(req, res) {
    res.render('detail', {
        title: '详情页',
        movie: {
            docter : "帕迪利亚",
            country: "美国",
            title  : "机械战警",
            year   : 2014,
            poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash  : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: "sdfjsklajdfklsajdfijsakldfjklsajdfklajsklfdjslakfjsaljdflksaf"
        }
    });
});
/* GET list page. */
router.get('/list', function(req, res) {
    res.render('list', {
        title: '列表页' ,
        movies:[
            {title : '机械战警',
                _id : 1,
                doctor : "帕迪利亚",
                country: "美国",
                title  : "机械战警",
                year   : 2014,
                poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
                language: '英语',
                meta:{
                    createAt : '2014/11/3'
                },
                flash  : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
                summary: "sdfjsklajdfklsajdfijsakldfjklsajdfklajsklfdjslakfjsaljdflksaf"
            },
            {title : '机械战警',
                _id : 2,
                doctor : "帕迪利亚",
                country: "美国",
                title  : "机械战警",
                year   : 2014,
                poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
                language: '英语',
                meta:{
                    createAt : '2014/11/3'
                },
                flash  : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
                summary: "sdfjsklajdfklsajdfijsakldfjklsajdfklajsklfdjslakfjsaljdflksaf"
            },
            {title : '机械战警',
                _id : 3,
                doctor : "帕迪利亚",
                country: "美国",
                title  : "机械战警",
                year   : 2014,
                poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
                language: '英语',
                meta:{
                    createAt : '2014/11/3'
                },
                flash  : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
                summary: "sdfjsklajdfklsajdfijsakldfjklsajdfklajsklfdjslakfjsaljdflksaf"
            },
            {title : '机械战警',
                _id : 4,
                doctor : "帕迪利亚",
                country: "美国",
                title  : "机械战警",
                year   : 2014,
                poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
                language: '英语',
                meta:{
                    createAt : '2014/11/3'
                },
                flash  : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
                summary: "sdfjsklajdfklsajdfijsakldfjklsajdfklajsklfdjslakfjsaljdflksaf"
            },
            {title : '机械战警',
                _id : 5,
                doctor : "帕迪利亚",
                country: "美国",
                title  : "机械战警",
                year   : 2014,
                poster : 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
                meta:{
                    createAt : '2014/11/3'
                },
                language: '英语',
                flash  : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
                summary: "sdfjsklajdfklsajdfijsakldfjklsajdfklajsklfdjslakfjsaljdflksaf"
            }

        ]

    });
});

/* GET admin page. */
router.get('/admin', function(req, res) {
    res.render('admin', {
        title: '录入页',
        movie:{
            title:"",
            doctor:"",
            country:"",
            language:"",
            year:"",
            summary:"",
            poster:"",
            flash:""
        }
    });
});


module.exports = router;
