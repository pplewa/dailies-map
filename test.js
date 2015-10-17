var dailiesMap = require('./index')

var segments = [{
  "summary": [
    {
      "distance": 5981,
      "duration": 4287,
      "calories": 344,
      "steps": 7130,
      "group": "walking",
      "activity": "walking"
    },
    {
      "distance": 2399,
      "duration": 425,
      "group": "transport",
      "activity": "train"
    }
  ],
  "segments": [
    {
      "startTime": "20151015T180117+1100",
      "lastUpdate": "20151016T010401Z",
      "place": {
        "id": 147608773,
        "location": {
          "lon": 151.213680338,
          "lat": -33.8474988074
        },
        "name": "ss",
        "type": "home"
      },
      "endTime": "20151016T085907+1100",
      "type": "place"
    },
    {
      "startTime": "20151016T085908+1100",
      "lastUpdate": "20151016T022144Z",
      "activities": [
        {
          "startTime": "20151016T085908+1100",
          "manual": false,
          "distance": 380,
          "duration": 364,
          "calories": 22,
          "trackPoints": [
            {
              "time": "20151016T085908+1100",
              "lon": 151.213680338,
              "lat": -33.8474988074
            },
            {
              "time": "20151016T085929+1100",
              "lon": 151.2137589479,
              "lat": -33.8475709627
            },
            {
              "time": "20151016T085950+1100",
              "lon": 151.2136775487,
              "lat": -33.8475472585
            },
            {
              "time": "20151016T085959+1100",
              "lon": 151.2136458949,
              "lat": -33.8475367495
            },
            {
              "time": "20151016T090000+1100",
              "lon": 151.2136458622,
              "lat": -33.8475367386
            },
            {
              "time": "20151016T090012+1100",
              "lon": 151.2136038042,
              "lat": -33.8475227755
            },
            {
              "time": "20151016T090136+1100",
              "lon": 151.213382697,
              "lat": -33.8474062978
            },
            {
              "time": "20151016T090158+1100",
              "lon": 151.2131931079,
              "lat": -33.8473824208
            },
            {
              "time": "20151016T090218+1100",
              "lon": 151.2130615206,
              "lat": -33.8473486185
            },
            {
              "time": "20151016T090236+1100",
              "lon": 151.2128651705,
              "lat": -33.8472415035
            },
            {
              "time": "20151016T090254+1100",
              "lon": 151.212776418,
              "lat": -33.8470059693
            },
            {
              "time": "20151016T090323+1100",
              "lon": 151.212660884,
              "lat": -33.8464433556
            },
            {
              "time": "20151016T090346+1100",
              "lon": 151.2125453404,
              "lat": -33.8460927427
            },
            {
              "time": "20151016T090422+1100",
              "lon": 151.2122837781,
              "lat": -33.8459334807
            },
            {
              "time": "20151016T090450+1100",
              "lon": 151.2119096131,
              "lat": -33.8461441577
            },
            {
              "time": "20151016T090511+1100",
              "lon": 151.2117979169,
              "lat": -33.8464629261
            }
          ],
          "steps": 566,
          "endTime": "20151016T090512+1100",
          "group": "walking",
          "activity": "walking"
        },
        {
          "startTime": "20151016T090511+1100",
          "manual": false,
          "distance": 2399,
          "duration": 425,
          "trackPoints": [
            {
              "time": "20151016T090511+1100",
              "lon": 151.2117979169,
              "lat": -33.8464629261
            },
            {
              "time": "20151016T091216+1100",
              "lon": 151.20645509,
              "lat": -33.864694849
            }
          ],
          "endTime": "20151016T091216+1100",
          "group": "transport",
          "activity": "train"
        },
        {
          "startTime": "20151016T091216+1100",
          "manual": false,
          "distance": 411,
          "duration": 307,
          "calories": 24,
          "trackPoints": [
            {
              "time": "20151016T091216+1100",
              "lon": 151.20645509,
              "lat": -33.864694849
            },
            {
              "time": "20151016T091443+1100",
              "lon": 151.2067024951,
              "lat": -33.8664075633
            },
            {
              "time": "20151016T091501+1100",
              "lon": 151.206584083,
              "lat": -33.8665565053
            },
            {
              "time": "20151016T091528+1100",
              "lon": 151.206423562,
              "lat": -33.8668820521
            },
            {
              "time": "20151016T091544+1100",
              "lon": 151.2061942536,
              "lat": -33.8669815722
            },
            {
              "time": "20151016T091559+1100",
              "lon": 151.2061538648,
              "lat": -33.8668604858
            },
            {
              "time": "20151016T091620+1100",
              "lon": 151.2061088897,
              "lat": -33.8668479316
            },
            {
              "time": "20151016T091642+1100",
              "lon": 151.2061055456,
              "lat": -33.8668861275
            },
            {
              "time": "20151016T091658+1100",
              "lon": 151.2061707344,
              "lat": -33.8668746121
            },
            {
              "time": "20151016T091723+1100",
              "lon": 151.2069368362,
              "lat": -33.8671818297
            }
          ],
          "steps": 582,
          "endTime": "20151016T091723+1100",
          "group": "walking",
          "activity": "walking"
        }
      ],
      "endTime": "20151016T091723+1100",
      "type": "move"
    },
    {
      "startTime": "20151016T091723+1100",
      "lastUpdate": "20151016T020641Z",
      "activities": [
        {
          "startTime": "20151016T091918+1100",
          "manual": false,
          "distance": 65,
          "duration": 90,
          "calories": 4,
          "trackPoints": [],
          "steps": 131,
          "endTime": "20151016T092048+1100",
          "group": "walking",
          "activity": "walking"
        },
        {
          "startTime": "20151016T102308+1100",
          "manual": false,
          "distance": 160,
          "duration": 210,
          "calories": 9,
          "trackPoints": [],
          "steps": 213,
          "endTime": "20151016T102638+1100",
          "group": "walking",
          "activity": "walking"
        },
        {
          "startTime": "20151016T113051+1100",
          "manual": false,
          "distance": 36,
          "duration": 60,
          "calories": 2,
          "trackPoints": [],
          "steps": 71,
          "endTime": "20151016T113151+1100",
          "group": "walking",
          "activity": "walking"
        }
      ],
      "place": {
        "id": 67511766,
        "location": {
          "lon": 151.2069368362427,
          "lat": -33.86718182966821
        },
        "name": "Atlassian",
        "foursquareCategoryIds": ["4bf58dd8d48988d125941735"],
        "type": "work"
      },
      "endTime": "20151016T120349+1100",
      "type": "place"
    },
    {
      "startTime": "20151016T120349+1100",
      "lastUpdate": "20151016T020641Z",
      "activities": [{
        "startTime": "20151016T120349+1100",
        "manual": false,
        "distance": 547,
        "duration": 522,
        "calories": 31,
        "trackPoints": [
          {
            "time": "20151016T120349+1100",
            "lon": 151.2069368362,
            "lat": -33.8671818297
          },
          {
            "time": "20151016T120404+1100",
            "lon": 151.2068221014,
            "lat": -33.8670176987
          },
          {
            "time": "20151016T120429+1100",
            "lon": 151.2068744171,
            "lat": -33.8669861403
          },
          {
            "time": "20151016T120448+1100",
            "lon": 151.2071101237,
            "lat": -33.8669267086
          },
          {
            "time": "20151016T120507+1100",
            "lon": 151.2071966418,
            "lat": -33.8668025741
          },
          {
            "time": "20151016T120531+1100",
            "lon": 151.2072980943,
            "lat": -33.866535142
          },
          {
            "time": "20151016T120552+1100",
            "lon": 151.2074577596,
            "lat": -33.8662278614
          },
          {
            "time": "20151016T120615+1100",
            "lon": 151.2076584734,
            "lat": -33.8658297947
          },
          {
            "time": "20151016T120635+1100",
            "lon": 151.2075399762,
            "lat": -33.8658983408
          },
          {
            "time": "20151016T120657+1100",
            "lon": 151.20744887,
            "lat": -33.8657110108
          },
          {
            "time": "20151016T120713+1100",
            "lon": 151.2074142429,
            "lat": -33.8655349447
          },
          {
            "time": "20151016T120731+1100",
            "lon": 151.207352787,
            "lat": -33.8653970091
          },
          {
            "time": "20151016T120754+1100",
            "lon": 151.2072569719,
            "lat": -33.8652497849
          },
          {
            "time": "20151016T120829+1100",
            "lon": 151.2071496937,
            "lat": -33.8652072496
          },
          {
            "time": "20151016T120849+1100",
            "lon": 151.207154478,
            "lat": -33.8651871415
          },
          {
            "time": "20151016T120911+1100",
            "lon": 151.2071973342,
            "lat": -33.8651140397
          },
          {
            "time": "20151016T120927+1100",
            "lon": 151.2072695461,
            "lat": -33.8649229057
          },
          {
            "time": "20151016T120948+1100",
            "lon": 151.2072881137,
            "lat": -33.8646804299
          },
          {
            "time": "20151016T121023+1100",
            "lon": 151.2073361952,
            "lat": -33.8644967266
          },
          {
            "time": "20151016T121048+1100",
            "lon": 151.2073780686,
            "lat": -33.8641702696
          },
          {
            "time": "20151016T121103+1100",
            "lon": 151.2074006853,
            "lat": -33.8640044657
          },
          {
            "time": "20151016T121128+1100",
            "lon": 151.2075654434,
            "lat": -33.8638194193
          },
          {
            "time": "20151016T121149+1100",
            "lon": 151.2078797144,
            "lat": -33.8637308476
          },
          {
            "time": "20151016T121212+1100",
            "lon": 151.2082244896,
            "lat": -33.8636707654
          },
          {
            "time": "20151016T121231+1100",
            "lon": 151.2085461617,
            "lat": -33.8637965357
          }
        ],
        "steps": 882,
        "endTime": "20151016T121231+1100",
        "group": "walking",
        "activity": "walking"
      }],
      "endTime": "20151016T121231+1100",
      "type": "move"
    },
    {
      "startTime": "20151016T121231+1100",
      "lastUpdate": "20151016T031149Z",
      "activities": [{
        "startTime": "20151016T123648+1100",
        "manual": false,
        "distance": 20,
        "duration": 30,
        "calories": 1,
        "trackPoints": [],
        "steps": 40,
        "endTime": "20151016T123718+1100",
        "group": "walking",
        "activity": "walking"
      }],
      "place": {
        "id": 178521883,
        "location": {
          "lon": 151.2085461616516,
          "lat": -33.86379653566988
        },
        "name": "Bridge St Garage",
        "foursquareId": "520184bd2fc60c28bec480c5",
        "foursquareCategoryIds": ["4bf58dd8d48988d14e941735"],
        "type": "foursquare"
      },
      "endTime": "20151016T130949+1100",
      "type": "place"
    },
    {
      "startTime": "20151016T130949+1100",
      "lastUpdate": "20151016T031149Z",
      "activities": [{
        "startTime": "20151016T130949+1100",
        "manual": false,
        "distance": 741,
        "duration": 667,
        "calories": 43,
        "trackPoints": [
          {
            "time": "20151016T130949+1100",
            "lon": 151.2085461617,
            "lat": -33.8637965357
          },
          {
            "time": "20151016T131005+1100",
            "lon": 151.2083281439,
            "lat": -33.8636453632
          },
          {
            "time": "20151016T131030+1100",
            "lon": 151.208489032,
            "lat": -33.8636028884
          },
          {
            "time": "20151016T131055+1100",
            "lon": 151.2084267698,
            "lat": -33.8636273955
          },
          {
            "time": "20151016T131120+1100",
            "lon": 151.2080767106,
            "lat": -33.8636609223
          },
          {
            "time": "20151016T131147+1100",
            "lon": 151.2075779338,
            "lat": -33.8636669935
          },
          {
            "time": "20151016T131212+1100",
            "lon": 151.2069516928,
            "lat": -33.8639789743
          },
          {
            "time": "20151016T131229+1100",
            "lon": 151.2068453533,
            "lat": -33.8639854884
          },
          {
            "time": "20151016T131248+1100",
            "lon": 151.2068793042,
            "lat": -33.8642738164
          },
          {
            "time": "20151016T131321+1100",
            "lon": 151.2070055088,
            "lat": -33.8644453254
          },
          {
            "time": "20151016T131340+1100",
            "lon": 151.2071289776,
            "lat": -33.8646590618
          },
          {
            "time": "20151016T131356+1100",
            "lon": 151.2072923573,
            "lat": -33.8649257577
          },
          {
            "time": "20151016T131414+1100",
            "lon": 151.2073493119,
            "lat": -33.8650366281
          },
          {
            "time": "20151016T131432+1100",
            "lon": 151.207357004,
            "lat": -33.8650611595
          },
          {
            "time": "20151016T131450+1100",
            "lon": 151.207366902,
            "lat": -33.8650893396
          },
          {
            "time": "20151016T131513+1100",
            "lon": 151.2073813714,
            "lat": -33.8651414101
          },
          {
            "time": "20151016T131535+1100",
            "lon": 151.2074200829,
            "lat": -33.8653194291
          },
          {
            "time": "20151016T131553+1100",
            "lon": 151.2077013648,
            "lat": -33.8653534702
          },
          {
            "time": "20151016T131609+1100",
            "lon": 151.2076235342,
            "lat": -33.8654633647
          },
          {
            "time": "20151016T131633+1100",
            "lon": 151.2075017718,
            "lat": -33.8655786773
          },
          {
            "time": "20151016T131655+1100",
            "lon": 151.207696308,
            "lat": -33.8658252738
          },
          {
            "time": "20151016T131712+1100",
            "lon": 151.2077736419,
            "lat": -33.8660204029
          },
          {
            "time": "20151016T131730+1100",
            "lon": 151.2076686001,
            "lat": -33.8662239542
          },
          {
            "time": "20151016T131758+1100",
            "lon": 151.2074543429,
            "lat": -33.8664740913
          },
          {
            "time": "20151016T131816+1100",
            "lon": 151.2072083912,
            "lat": -33.8665887925
          },
          {
            "time": "20151016T131840+1100",
            "lon": 151.2072263861,
            "lat": -33.8668678283
          },
          {
            "time": "20151016T131856+1100",
            "lon": 151.2072182583,
            "lat": -33.8669818549
          },
          {
            "time": "20151016T131912+1100",
            "lon": 151.2069057107,
            "lat": -33.8670585268
          },
          {
            "time": "20151016T131930+1100",
            "lon": 151.2067112947,
            "lat": -33.8669716575
          },
          {
            "time": "20151016T131949+1100",
            "lon": 151.2066554052,
            "lat": -33.8670619044
          },
          {
            "time": "20151016T132009+1100",
            "lon": 151.206701004,
            "lat": -33.8672058924
          },
          {
            "time": "20151016T132039+1100",
            "lon": 151.2066235132,
            "lat": -33.8670482824
          },
          {
            "time": "20151016T132056+1100",
            "lon": 151.2069368362,
            "lat": -33.8671818297
          }
        ],
        "steps": 967,
        "endTime": "20151016T132056+1100",
        "group": "walking",
        "activity": "walking"
      }],
      "endTime": "20151016T132056+1100",
      "type": "move"
    },
    {
      "startTime": "20151016T132056+1100",
      "lastUpdate": "20151016T081142Z",
      "activities": [
        {
          "startTime": "20151016T133134+1100",
          "manual": false,
          "distance": 31,
          "duration": 60,
          "calories": 2,
          "trackPoints": [],
          "steps": 61,
          "endTime": "20151016T133234+1100",
          "group": "walking",
          "activity": "walking"
        },
        {
          "startTime": "20151016T141003+1100",
          "manual": false,
          "distance": 30,
          "duration": 60,
          "calories": 2,
          "trackPoints": [],
          "steps": 51,
          "endTime": "20151016T141103+1100",
          "group": "walking",
          "activity": "walking"
        },
        {
          "startTime": "20151016T161021+1100",
          "manual": false,
          "distance": 145,
          "duration": 142,
          "calories": 8,
          "trackPoints": [],
          "steps": 194,
          "endTime": "20151016T161243+1100",
          "group": "walking",
          "activity": "walking"
        }
      ],
      "place": {
        "id": 67511766,
        "location": {
          "lon": 151.2069368362427,
          "lat": -33.86718182966821
        },
        "name": "Atlassian",
        "foursquareCategoryIds": ["4bf58dd8d48988d125941735"],
        "type": "work"
      },
      "endTime": "20151016T170500+1100",
      "type": "place"
    },
    {
      "startTime": "20151016T170500+1100",
      "lastUpdate": "20151016T081142Z",
      "activities": [{
        "startTime": "20151016T170500+1100",
        "manual": false,
        "distance": 3415,
        "duration": 1775,
        "calories": 196,
        "trackPoints": [
          {
            "time": "20151016T170500+1100",
            "lon": 151.2069368362,
            "lat": -33.8671818297
          },
          {
            "time": "20151016T170520+1100",
            "lon": 151.2063251387,
            "lat": -33.8669130546
          },
          {
            "time": "20151016T170557+1100",
            "lon": 151.2056098361,
            "lat": -33.8668198008
          },
          {
            "time": "20151016T170618+1100",
            "lon": 151.2058625399,
            "lat": -33.8667334921
          },
          {
            "time": "20151016T170642+1100",
            "lon": 151.2059452078,
            "lat": -33.8666553557
          },
          {
            "time": "20151016T170705+1100",
            "lon": 151.2059462647,
            "lat": -33.8665218183
          },
          {
            "time": "20151016T170727+1100",
            "lon": 151.205940153,
            "lat": -33.8663005645
          },
          {
            "time": "20151016T170747+1100",
            "lon": 151.2059616968,
            "lat": -33.8660254726
          },
          {
            "time": "20151016T170820+1100",
            "lon": 151.2059564087,
            "lat": -33.8655946631
          },
          {
            "time": "20151016T170838+1100",
            "lon": 151.2059082648,
            "lat": -33.8653544153
          },
          {
            "time": "20151016T170856+1100",
            "lon": 151.2057641149,
            "lat": -33.8651227035
          },
          {
            "time": "20151016T170919+1100",
            "lon": 151.2055707597,
            "lat": -33.8648771666
          },
          {
            "time": "20151016T170937+1100",
            "lon": 151.2054085386,
            "lat": -33.8646183671
          },
          {
            "time": "20151016T171012+1100",
            "lon": 151.2056805519,
            "lat": -33.8642112454
          },
          {
            "time": "20151016T171037+1100",
            "lon": 151.2057450484,
            "lat": -33.8641544416
          },
          {
            "time": "20151016T171102+1100",
            "lon": 151.2057790176,
            "lat": -33.8640008158
          },
          {
            "time": "20151016T171122+1100",
            "lon": 151.2056679722,
            "lat": -33.8638444877
          },
          {
            "time": "20151016T171154+1100",
            "lon": 151.2054573287,
            "lat": -33.8635776252
          },
          {
            "time": "20151016T171213+1100",
            "lon": 151.2052814324,
            "lat": -33.8633656166
          },
          {
            "time": "20151016T171229+1100",
            "lon": 151.2052840719,
            "lat": -33.8633044518
          },
          {
            "time": "20151016T171254+1100",
            "lon": 151.2053709755,
            "lat": -33.8630398344
          },
          {
            "time": "20151016T171320+1100",
            "lon": 151.2055048445,
            "lat": -33.8627326571
          },
          {
            "time": "20151016T171338+1100",
            "lon": 151.205600937,
            "lat": -33.8625086624
          },
          {
            "time": "20151016T171409+1100",
            "lon": 151.2058897538,
            "lat": -33.8618694278
          },
          {
            "time": "20151016T171446+1100",
            "lon": 151.2060494031,
            "lat": -33.8610543227
          },
          {
            "time": "20151016T171509+1100",
            "lon": 151.2061717853,
            "lat": -33.8608125805
          },
          {
            "time": "20151016T171524+1100",
            "lon": 151.2062400852,
            "lat": -33.8605843655
          },
          {
            "time": "20151016T171550+1100",
            "lon": 151.2062820989,
            "lat": -33.8602566109
          },
          {
            "time": "20151016T171613+1100",
            "lon": 151.2065291445,
            "lat": -33.8601372459
          },
          {
            "time": "20151016T171648+1100",
            "lon": 151.2067939327,
            "lat": -33.859697542
          },
          {
            "time": "20151016T171708+1100",
            "lon": 151.2069386667,
            "lat": -33.8594620501
          },
          {
            "time": "20151016T171731+1100",
            "lon": 151.2071143248,
            "lat": -33.8591806559
          },
          {
            "time": "20151016T171818+1100",
            "lon": 151.2072805025,
            "lat": -33.8585829531
          },
          {
            "time": "20151016T171841+1100",
            "lon": 151.2073312194,
            "lat": -33.858214068
          },
          {
            "time": "20151016T171901+1100",
            "lon": 151.2073840395,
            "lat": -33.8578673745
          },
          {
            "time": "20151016T171926+1100",
            "lon": 151.207583906,
            "lat": -33.8575379329
          },
          {
            "time": "20151016T171942+1100",
            "lon": 151.2077290055,
            "lat": -33.8574606726
          },
          {
            "time": "20151016T172027+1100",
            "lon": 151.2081355,
            "lat": -33.8573942913
          },
          {
            "time": "20151016T172107+1100",
            "lon": 151.2087501048,
            "lat": -33.8575537482
          },
          {
            "time": "20151016T172132+1100",
            "lon": 151.2092361288,
            "lat": -33.8576882663
          },
          {
            "time": "20151016T172248+1100",
            "lon": 151.2093742048,
            "lat": -33.8547795799
          },
          {
            "time": "20151016T172312+1100",
            "lon": 151.2094696218,
            "lat": -33.8545563698
          },
          {
            "time": "20151016T172333+1100",
            "lon": 151.2099271931,
            "lat": -33.855427989
          },
          {
            "time": "20151016T172657+1100",
            "lon": 151.2114902666,
            "lat": -33.8514029493
          },
          {
            "time": "20151016T172716+1100",
            "lon": 151.2116433381,
            "lat": -33.8511733856
          },
          {
            "time": "20151016T172733+1100",
            "lon": 151.2117502581,
            "lat": -33.8510162867
          },
          {
            "time": "20151016T172808+1100",
            "lon": 151.2119609464,
            "lat": -33.850766868
          },
          {
            "time": "20151016T172827+1100",
            "lon": 151.2120780725,
            "lat": -33.8505597855
          },
          {
            "time": "20151016T172852+1100",
            "lon": 151.2122181331,
            "lat": -33.8502922662
          },
          {
            "time": "20151016T173051+1100",
            "lon": 151.212866406,
            "lat": -33.8477675077
          },
          {
            "time": "20151016T173114+1100",
            "lon": 151.2127778894,
            "lat": -33.8474878354
          },
          {
            "time": "20151016T173133+1100",
            "lon": 151.2126069729,
            "lat": -33.8471970521
          },
          {
            "time": "20151016T173202+1100",
            "lon": 151.2124813536,
            "lat": -33.8468303262
          },
          {
            "time": "20151016T173220+1100",
            "lon": 151.2125741969,
            "lat": -33.8464720124
          },
          {
            "time": "20151016T173239+1100",
            "lon": 151.2126675469,
            "lat": -33.8464080665
          },
          {
            "time": "20151016T173257+1100",
            "lon": 151.2127805006,
            "lat": -33.8466591503
          },
          {
            "time": "20151016T173319+1100",
            "lon": 151.2128897194,
            "lat": -33.8469675006
          },
          {
            "time": "20151016T173335+1100",
            "lon": 151.2129618568,
            "lat": -33.8471588682
          },
          {
            "time": "20151016T173409+1100",
            "lon": 151.2133102886,
            "lat": -33.8474694188
          },
          {
            "time": "20151016T173434+1100",
            "lon": 151.213680338,
            "lat": -33.8474988074
          }
        ],
        "steps": 3372,
        "endTime": "20151016T173435+1100",
        "group": "walking",
        "activity": "walking"
      }],
      "endTime": "20151016T173434+1100",
      "type": "move"
    },
    {
      "startTime": "20151016T173434+1100",
      "lastUpdate": "20151017T070813Z",
      "place": {
        "id": 147608773,
        "location": {
          "lon": 151.213680338,
          "lat": -33.8474988074
        },
        "name": "ss",
        "type": "home"
      },
      "endTime": "20151017T180756+1100",
      "type": "place"
    }
  ],
  "lastUpdate": "20151017T070813Z",
  "date": "20151016",
  "caloriesIdle": 1655
}];

dailiesMap.convertToMap(segments).then(function(){
	console.log(arguments);
});