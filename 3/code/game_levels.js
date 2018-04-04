var GAME_LEVELS = [
  ["                                                                                  ",
   "  x                                                                               ",
   "  x                                                                  s            ",
   "  x                                                                               ",
   "  x                                                               xxxxx          x",
   "  x                                                            xx  !!!x          x",
   "  x                                                           s    !!!x          x",
   "  x                                                       o        x!xx  o    s  x",
   "  x   o                              o o                 xxxxxxxxxx!!!x  xx      x",
   "  x @                                              s   xx     xxxxxx!xx!!!!!!xxxxx",
   "  xxx           yyyyy                  s         o o  x             !!!!!!!!!x    ",
   "  x         o    yyy                                    s      s     !!!!!xxxxx   ",
   "  xxxxx           y o                  xxx                        o !!!!!!!!xx    ",
   "  x                     o o                  x   xx           s  o  !!!!!!!!!xx   ",
   "  xxxxxxx                         o          x!!!x             x    !!!!!!!!!xx   ",
   "  x            xxx  s   s        xxx         x!!!x  xxx   xxx!!!xxxxx!!!!!!!xxx   ",
   "  x              x                           x!!!x!!!!!!!!!!x!!!xxxxx!!!!!!!xxx   ",
   "  xxxxxxxxxx!!!!!xxxxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxx!!!!!!!!xxxxxxxxxxxxxxxx       ",
   "           x!!!!!x            x!!!!!!x             x!!!!!!!!x                     ",
   "           x!!!!!x            x!!!!!!x              xx!!!!!!x                     ",
   "           x!!!!!x            x!!!!!!x                x!!!!!x                     ",
   "           x!!!!!x            x!!!!!!x                 x!!!x                      ",
   "           x!!!!!x            xxxxxxxx                  xxxx                      ",
   "           xxxxxxx                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "x                                                                                  x                              ",
   "x                                                                                  x                              ",
   "x                                                                                  x                              ",
   "x                                                                                  x                              ",
   "x                         o                                                        x                              ",
   "x                                                                                  x                              ",
   "x                 o     xxxxxxx                        x                           x                              ",
   "x                    xxx!!     xxxx                    x                   o       x                              ",
   "x                 xxx!!!!!     v   xxx                 x  v                        x                              ",
   "x               xxxxx!!!!!           x            x   x                  xxxxx     x                              ",
   "x               xxxxx!!!!!           x    x    x   x   x                           x                              ",
   "x            xxx=                    x    x    x   x   x        o    x    x        x                              ",
   "x          xx                        x    x    xxxxxxxxx       xxxxxx!!!!!x        x                              ",
   "x    @     xx                                        o       xx     x!!!!!x      o x                              ",
   "!!!!xxx!!!!xx o               o                          xxxX       xxxxxxxxxxxxxxxx                              ",
   "!!!!xxx!!!!xxxxx    xx      xxx                      xxxx                                                         ",
   "!!!!!!!!!!!xx!!!!!!!xx  o                                   =                                                     ",
   "!!!!!!!!!!!xx!!!!!!!!!xxxxxxx       xxxxxxxx!!!!xxxx!!!!!!!xx                                                     ",
   "!!!!!!!!xxx!!!!!xx                   !!!!!!!!!!!xxxx!!!!!!!xx                                                     ",
   " x!!!!!!xxxxxxxxxx    xx         o   !!!!!!!!xx!!!!!!xxxxxxxx                                                     ",
   " x!!!!!!xxxxxxxxxxx!!!!xxx!!!!!xxxxxxxxxxxxxxxx!!!!!!xxxxxxxx                                                     ",
   "         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx                                                                     ",
   "             !                                                                                                    "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                              xxxx                            ",
   "                                                                                                              ",
   "                                                                   xxxx                                       ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                           xxxx                                               ",
   "  x                                                                          xxxxx                            ",
   "  x                                                                      xxxx                                 ",
   "  x                                                               xxxxxxx                                     ",
   "  x                                                         xxxxxx                                            ",
   "  x                                                     xxxxx                                                 ",
   "  x                                                xxxxxx                                                     ",
   "  x                                 xxxxxxxxxxxxxxxxxx                                                        ",
   "  x          xxxxx                                                                                            ",
   "  x                                                                                                           ",
   "  x                                 xxxxxxxxxxxxxxx                                                           ",
   "  x    xxxxx                        x              xxxx                                                       ",
   "  x          xxxxx                  x                  xxxx                                                   ",
   "  x                 xxxxx           x                      xxxxx                                              ",
   "  x                                 x                           xxxxx                                         ",
   "  x                                 x                                xxxxx                                    ",
   "  x                            xxxxx                                      xxxxx                               ",
   "  x                      xxxxx                                                 xxxxx                          ",
   "  x                xxxxxx                                                           xxxx                      ",
   "  x      @    xxxxx                                                                     xxxx                  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  x                                                                                                           ",
   "  x                                                                                                           ",
   "  x                                                                                                           ",
   "  x  @                                                                                                        ",
   "  xxxxxxx                                                                                                     ",
   "        x                                                                                                     ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                               ",
   "                                               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
