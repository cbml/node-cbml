{
  "type": "cbml",
  "nodes": [
    {
      "type": "comment",
      "pos": 0,
      "endpos": 25,
      "value": "<!--ok>line1\nline2</ok-->",
      "tag": "ok",
      "language": "xml",
      "attrs": {},
      "content": "line1\nline2",
      "line": 1,
      "col": 1
    },
    {
      "type": "text",
      "pos": 25,
      "endpos": 26,
      "value": "\n",
      "line": 2,
      "col": 13
    },
    {
      "type": "single",
      "pos": 26,
      "endpos": 60,
      "value": "/*<jdists import=\"6.js\" line3 />*/",
      "tag": "jdists",
      "language": "c",
      "attrs": {
        "import": "6.js",
        "line3": ""
      },
      "line": 3,
      "col": 1
    },
    {
      "type": "text",
      "pos": 60,
      "endpos": 61,
      "value": "\n",
      "line": 3,
      "col": 35
    },
    {
      "type": "block",
      "pos": 61,
      "endpos": 142,
      "value": "/*<jdists clean id='ttc' import=\"5.js\" line4>*/\nconsole.log(line5);\n/*</jdists>*/",
      "tag": "jdists",
      "language": "c",
      "attrs": {
        "clean": "",
        "id": "ttc",
        "import": "5.js",
        "line4": ""
      },
      "line": 4,
      "col": 1,
      "nodes": [
        {
          "type": "text",
          "pos": 108,
          "endpos": 129,
          "value": "\nconsole.log(line5);\n",
          "line": 4,
          "col": 48
        }
      ],
      "content": "\nconsole.log(line5);\n"
    },
    {
      "type": "text",
      "pos": 142,
      "endpos": 143,
      "value": "\n",
      "line": 6,
      "col": 14
    },
    {
      "type": "comment",
      "pos": 143,
      "endpos": 191,
      "value": "/*<remove line7>\nconsole.log(line8);\n</remove>*/",
      "tag": "remove",
      "language": "c",
      "attrs": {
        "line7": ""
      },
      "content": "\nconsole.log(line8);\n",
      "line": 7,
      "col": 1
    },
    {
      "type": "text",
      "pos": 191,
      "endpos": 192,
      "value": "\n",
      "line": 9,
      "col": 12
    },
    {
      "type": "comment",
      "pos": 192,
      "endpos": 242,
      "value": "(*<delphi line10>\nconsole.log(line11);\n</delphi>*)",
      "tag": "delphi",
      "language": "pascal",
      "attrs": {
        "line10": ""
      },
      "content": "\nconsole.log(line11);\n",
      "line": 10,
      "col": 1
    },
    {
      "type": "text",
      "pos": 242,
      "endpos": 243,
      "value": "\n",
      "line": 12,
      "col": 12
    },
    {
      "type": "block",
      "pos": 243,
      "endpos": 297,
      "value": "(*<delphi line13>*)\nconsole.log(line14);\n(*</delphi>*)",
      "tag": "delphi",
      "language": "pascal",
      "attrs": {
        "line13": ""
      },
      "line": 13,
      "col": 1,
      "nodes": [
        {
          "type": "text",
          "pos": 262,
          "endpos": 284,
          "value": "\nconsole.log(line14);\n",
          "line": 13,
          "col": 20
        }
      ],
      "content": "\nconsole.log(line14);\n"
    },
    {
      "type": "text",
      "pos": 297,
      "endpos": 298,
      "value": "\n",
      "line": 15,
      "col": 14
    },
    {
      "type": "block",
      "pos": 298,
      "endpos": 344,
      "value": "'''<release line16>'''\nline14\n'''</release>'''",
      "tag": "release",
      "language": "python",
      "attrs": {
        "line16": ""
      },
      "line": 16,
      "col": 1,
      "nodes": [
        {
          "type": "text",
          "pos": 320,
          "endpos": 328,
          "value": "\nline14\n",
          "line": 16,
          "col": 23
        }
      ],
      "content": "\nline14\n"
    },
    {
      "type": "text",
      "pos": 344,
      "endpos": 345,
      "value": "\n",
      "line": 18,
      "col": 17
    },
    {
      "type": "comment",
      "pos": 345,
      "endpos": 421,
      "value": "'''<release line19>\ntest\n/*<jdists import=\"line21.js\">*/\nline17</release>'''",
      "tag": "release",
      "language": "python",
      "attrs": {
        "line19": ""
      },
      "content": "\ntest\n/*<jdists import=\"line21.js\">*/\nline17",
      "line": 19,
      "col": 1
    },
    {
      "type": "text",
      "pos": 421,
      "endpos": 422,
      "value": "\n",
      "line": 22,
      "col": 20
    },
    {
      "type": "block",
      "pos": 422,
      "endpos": 488,
      "value": "/*<jdists import=\"line23.js\">*/\nconsole.log(line19);\n/*</jdists>*/",
      "tag": "jdists",
      "language": "c",
      "attrs": {
        "import": "line23.js"
      },
      "line": 23,
      "col": 1,
      "nodes": [
        {
          "type": "text",
          "pos": 453,
          "endpos": 475,
          "value": "\nconsole.log(line19);\n",
          "line": 23,
          "col": 32
        }
      ],
      "content": "\nconsole.log(line19);\n"
    },
    {
      "type": "text",
      "pos": 488,
      "endpos": 489,
      "value": "\n",
      "line": 25,
      "col": 14
    },
    {
      "type": "block",
      "pos": 489,
      "endpos": 743,
      "value": "/*<jdists import=\"line26.js\">*/\n  /*<jdists import=\"line27.js\">*/\n    /*<jdists import=\"line28.js\">*/console.log(4);/*</jdists>*/\n    /*<jdists import=\"line29.js\">*/console.log(5);/*</jdists>*/\n    console.log(line30);\n  /*</jdists>*/\nline32/*</jdists>*/",
      "tag": "jdists",
      "language": "c",
      "attrs": {
        "import": "line26.js"
      },
      "line": 26,
      "col": 1,
      "nodes": [
        {
          "type": "text",
          "pos": 520,
          "endpos": 523,
          "value": "\n  ",
          "line": 26,
          "col": 32
        },
        {
          "type": "block",
          "pos": 523,
          "endpos": 723,
          "value": "/*<jdists import=\"line27.js\">*/\n    /*<jdists import=\"line28.js\">*/console.log(4);/*</jdists>*/\n    /*<jdists import=\"line29.js\">*/console.log(5);/*</jdists>*/\n    console.log(line30);\n  /*</jdists>*/",
          "tag": "jdists",
          "language": "c",
          "attrs": {
            "import": "line27.js"
          },
          "line": 27,
          "col": 3,
          "nodes": [
            {
              "type": "text",
              "pos": 554,
              "endpos": 559,
              "value": "\n    ",
              "line": 27,
              "col": 34
            },
            {
              "type": "block",
              "pos": 559,
              "endpos": 618,
              "value": "/*<jdists import=\"line28.js\">*/console.log(4);/*</jdists>*/",
              "tag": "jdists",
              "language": "c",
              "attrs": {
                "import": "line28.js"
              },
              "line": 28,
              "col": 5,
              "nodes": [
                {
                  "type": "text",
                  "pos": 590,
                  "endpos": 605,
                  "value": "console.log(4);",
                  "line": 28,
                  "col": 36
                }
              ],
              "content": "console.log(4);"
            },
            {
              "type": "text",
              "pos": 618,
              "endpos": 623,
              "value": "\n    ",
              "line": 28,
              "col": 64
            },
            {
              "type": "block",
              "pos": 623,
              "endpos": 682,
              "value": "/*<jdists import=\"line29.js\">*/console.log(5);/*</jdists>*/",
              "tag": "jdists",
              "language": "c",
              "attrs": {
                "import": "line29.js"
              },
              "line": 29,
              "col": 5,
              "nodes": [
                {
                  "type": "text",
                  "pos": 654,
                  "endpos": 669,
                  "value": "console.log(5);",
                  "line": 29,
                  "col": 36
                }
              ],
              "content": "console.log(5);"
            },
            {
              "type": "text",
              "pos": 682,
              "endpos": 710,
              "value": "\n    console.log(line30);\n  ",
              "line": 29,
              "col": 64
            }
          ],
          "content": "\n    /*<jdists import=\"line28.js\">*/console.log(4);/*</jdists>*/\n    /*<jdists import=\"line29.js\">*/console.log(5);/*</jdists>*/\n    console.log(line30);\n  "
        },
        {
          "type": "text",
          "pos": 723,
          "endpos": 730,
          "value": "\nline32",
          "line": 31,
          "col": 16
        }
      ],
      "content": "\n  /*<jdists import=\"line27.js\">*/\n    /*<jdists import=\"line28.js\">*/console.log(4);/*</jdists>*/\n    /*<jdists import=\"line29.js\">*/console.log(5);/*</jdists>*/\n    console.log(line30);\n  /*</jdists>*/\nline32"
    },
    {
      "type": "text",
      "pos": 743,
      "endpos": 751,
      "value": "\nline33\n",
      "line": 32,
      "col": 20
    },
    {
      "type": "block",
      "pos": 751,
      "endpos": 787,
      "value": "--[[<lua>]]\nline35 = {}\n--[[</lua>]]",
      "tag": "lua",
      "language": "lua",
      "attrs": {},
      "line": 34,
      "col": 1,
      "nodes": [
        {
          "type": "text",
          "pos": 762,
          "endpos": 775,
          "value": "\nline35 = {}\n",
          "line": 34,
          "col": 12
        }
      ],
      "content": "\nline35 = {}\n"
    }
  ],
  "endpos": 787
}