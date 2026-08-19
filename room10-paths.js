// 十号房全站路径配置
// 作用：统一记录固定页面路径、本地固定素材路径和 R2 公开素材路径
// 注意：本地固定素材路径相对于 room10 根目录；R2 素材路径由公开基础域名 + 数据库相对路径拼接

window.ROOM10_PATHS = {
  pages: {
    index: "index/index.html",

    dorm: "dorm/dorm.html",
    dormBook: "dorm/book.html",

    flower: "flower/flower.html",

    game: "game/game.html",
    gameChain: "game/chain.html",
    gamePasswordMaster: "game/pwmaster.html",
    gameKnight: "game/knight.html",
    gameTime: "game/time.html",
    gameGomoku: "game/gomoku.html",

    gameBomb: "game/bomb/bomb.html",
    gameMango: "game/mango/mango.html",
    gameName: "game/name/name.html",
    gameGacha: "game/gacha/gacha.html",

    honor: "honor/honor.html",
    honorGallery: "honor/honor-gallery.html",
    honorTitles: "honor/honor-titles.html",

    living: "living/living.html",

    managerAdmin: "manager/manager-admin.html",
    managerMember: "manager/manager-member.html",
    managerOwner: "manager/manager-admin.html",
    managerVisitor: "manager/manager-visitor.html",
    managerRegister: "manager/register.html",

    pet: "pet/pets.html",

    studioOverview: "studio/studio-overview.html",
    studioProject: "studio/studio-project.html",
    studioSubmit: "studio/studio-Submit.html",
    studioTodo: "studio/studio-todo.html",
    studioWheel: "studio/studio-wheel.html",

    template: "全站通用模板.html",
    templateAchievementPreview: "全站通用模板-成就预览版.html"
  },

  assets: {
    root: {
      coin: "coin.png",
      login: "login.png",
      logoutOn: "logout-on.png",
      logoutOut: "logout-out.png"
    },

    badges: {
      badge0: "badges/0.png",
      badge1: "badges/1.png",
      badge2: "badges/2.png",
      badge3: "badges/3.png",
      badge4: "badges/4.png",
      badge5: "badges/5.png",

      B1: "badges/B1.png",
      B2: "badges/B2.png",
      B3: "badges/B3.png",
      B4: "badges/B4.png",
      B5: "badges/B5.png",

      newyear: "badges/newyear.png",
      spring: "badges/spring.png",
      lantern: "badges/lantern.png",
      valentine: "badges/valentine.png",
      duanwu: "badges/duanwu.png",
      qixi: "badges/qixi.png",
      midautumn: "badges/midautumn.png",
      national: "badges/national.png",
      independence: "badges/independence.png",
      halloween: "badges/halloween.png",
      thanksgiving: "badges/thanksgiving.png",
      christmas: "badges/christmas.png"
    },

    index: {
      homeDay: "index/home-day.png",
      homeNight: "index/home-night.png"
    },

    dorm: {
      book: "dorm/book.png",
      bookClose: "dorm/book-close.png",
      bookGacha: "dorm/book-gacha.png",
      bookNext: "dorm/book-next.png",
      bookOpen: "dorm/book-open.png",
      bookOpen2: "dorm/book-open2.png",
      bookPrev: "dorm/book-prev.png",
      gachaBall: "dorm/gacha-ball.png",
      mascotNiumaL: "dorm/mascot-niuma(L).png",
      roomDorm: "dorm/room-dorm.png"
    },

    flower: {
      bouquetDaisy: "flower/bouquet-daisy.png",
      bouquetLavender: "flower/bouquet-lavender.png",
      bouquetPeony: "flower/bouquet-peony.png",
      bouquetRose: "flower/bouquet-rose.png",
      bouquetTulip: "flower/bouquet-tulip.png",
      bouquetWithered: "flower/bouquet-withered.png",

      fert: "flower/fert.png",
      seed: "flower/seed.png",
      water: "flower/water.png",

      potBloomDaisy: "flower/pot-bloom-daisy.png",
      potBloomLavender: "flower/pot-bloom-lavender.png",
      potBloomPeony: "flower/pot-bloom-peony.png",
      potBloomRose: "flower/pot-bloom-rose.png",
      potBloomTulip: "flower/pot-bloom-tulip.png",

      potEmpty: "flower/pot-empty.png",
      potGrowing: "flower/pot-growing.png",
      potSeed: "flower/pot-seed.png",
      potSprout: "flower/pot-sprout.png",

      potWitherDaisy: "flower/pot-wither-daisy.png",
      potWitherLavender: "flower/pot-wither-lavender.png",
      potWitherPeony: "flower/pot-wither-peony.png",
      potWitherRose: "flower/pot-wither-rose.png",
      potWitherTulip: "flower/pot-wither-tulip.png",

      roomFlower: "flower/room-flower.png"
    },

    game: {
      roomGame: "game/room-game.png"
    },

    bomb: {
      boom: "game/bomb/boom.png",
      boomBoom: "game/bomb/boomboom.png"
    },

    drink: {
      drinkCoin: "game/drink/drink-coin.png",

      cup: {
        teaCup01To03: "game/drink/cup/01-03 tea.png"
      },

      finish: {
        blackTea01: "game/drink/finish/01-03.Tea-Cup/01.Black-Tea.png"
      },

      ingredient: {
        blackTeaLeaves01: "game/drink/ingredient/01-red tea.png"
      },

      store: {
        redTeaTin01: "game/drink/store/01.png",
        greenTeaTin02: "game/drink/store/02.png",
        floralTeaTin03: "game/drink/store/03.png",
        teaTins01To03: "game/drink/store/01-03.png",

        // 兼容此前预留的通用茶罐键；默认指向三个茶罐组合图。
        teaTin: "game/drink/store/01-03.png"
      }
    },

    mango: {
      gameHammer: "game/mango/game-hammer.png",
      gameMango: "game/mango/game-mango.png",
      gameMango2: "game/mango/game-mango2.png",
      gameMango3: "game/mango/game-mango3.png",
      gameMango4: "game/mango/game-mango4.png",
      gameMango5: "game/mango/game-mango5.png",
      gameMango6: "game/mango/game-mango6.png",
      gameMango7: "game/mango/game-mango7.png"
    },

    name: {
      gameName: "game/name/game-name.png"
    },

    gacha: {
      gachaBallBlue: "game/gacha/gacha-ball-blue.png",
      gachaBallBlue2: "game/gacha/gacha-ball-blue2.png",
      gachaBallGreen: "game/gacha/gacha-ball-green.png",
      gachaBallGreen2: "game/gacha/gacha-ball-green2.png",
      gachaBallPink: "game/gacha/gacha-ball-pink.png",
      gachaBallPink2: "game/gacha/gacha-ball-pink2.png",
      gachaBallPurple: "game/gacha/gacha-ball-purple.png",
      gachaBallPurple2: "game/gacha/gacha-ball-purple2.png",
      gachaBallYellow: "game/gacha/gacha-ball-yellow.png",
      gachaBallYellow2: "game/gacha/gacha-ball-yellow2.png",

      gachaHandleSpin: "game/gacha/gacha-handle-spin.png",

      gachaMachine: "game/gacha/gacha-machine.png",
      gachaMachine2: "game/gacha/gacha-machine2.png",
      gachaMachine3: "game/gacha/gacha-machine3.png",

      gachaTokenGold: "game/gacha/gacha-token-gold.png",
      gachaTokenGold2: "game/gacha/gacha-token-gold2.png",
      gachaTokenPurple: "game/gacha/gacha-token-purple.png",
      gachaTokenPurple2: "game/gacha/gacha-token-purple2.png",
      gachaTokenWhite: "game/gacha/gacha-token-white.png",
      gachaTokenWhite2: "game/gacha/gacha-token-white2.png",

      pet1: "game/gacha/pet/1.jpg",
      pet2: "game/gacha/pet/2.jpg",
      pet3: "game/gacha/pet/3.jpg",
      pet4: "game/gacha/pet/4.jpg",
      pet5: "game/gacha/pet/5.jpg",
      pet6: "game/gacha/pet/6.jpg",
      pet7: "game/gacha/pet/7.jpg",
      pet8: "game/gacha/pet/8.jpg",
      pet9: "game/gacha/pet/9.jpg",
      pet10: "game/gacha/pet/10.jpg",
      pet11: "game/gacha/pet/11.jpg",
      pet12: "game/gacha/pet/12.jpg",
      pet13: "game/gacha/pet/13.jpg",
      pet14: "game/gacha/pet/14.jpg",
      pet15: "game/gacha/pet/15.jpg",
      pet16: "game/gacha/pet/16.jpg",
      pet17: "game/gacha/pet/17.jpg",
      pet18: "game/gacha/pet/18.jpg",
      pet19: "game/gacha/pet/19.jpg",
      pet20: "game/gacha/pet/20.jpg",
      pet21: "game/gacha/pet/21.jpg",
      pet22: "game/gacha/pet/22.jpg",
      pet23: "game/gacha/pet/23.jpg",
      pet24: "game/gacha/pet/24.jpg",
      pet25: "game/gacha/pet/25.jpg",
      pet26: "game/gacha/pet/26.jpg",
      pet27: "game/gacha/pet/27.jpg",
      pet28: "game/gacha/pet/28.jpg",
      pet29: "game/gacha/pet/29.jpg",
      pet30: "game/gacha/pet/30.jpg",
      pet31: "game/gacha/pet/31.jpg",
      pet32: "game/gacha/pet/32.jpg",
      pet33: "game/gacha/pet/33.jpg",
      pet34: "game/gacha/pet/34.jpg",
      pet35: "game/gacha/pet/35.png",
      pet36: "game/gacha/pet/36.png"
    },

    honor: {
      honorTitles: "honor/honor-titles.png",
      mascotNiumaR: "honor/mascot-niuma(R).png",
      roomGallery: "honor/room-gallery.png",
      roomHonor: "honor/room-honor.png"
    },

    living: {
      roomLiving: "living/room-living.png"
    },

    manager: {
      roomCheckin: "manager/room-checkin.png",
      roomManager: "manager/room-manager.png"
    },

    pet: {
      pet: "pet/pet.png",
      medical: "pet/medical.png",
      snack: "pet/snack.png",
      can: "pet/can.png",
      kibble: "pet/kibble.png",
      clean: "pet/clean.png",
      ball: "pet/ball.png"
    },

    studio: {
      roomStudio: "studio/room-studio.png"
    }
  },

  remoteAssets: {
    r2BaseUrl: "https://pub-edd275cb52b34b3884d308696cd915b6.r2.dev",
    r2Bucket: "room10-assets",

    pet: {
      basePath: "pet/",
      fileNameRule: "pet/动物编号/图片编号.png",
      normal: "1.png",
      weak: "2.png",
      dead: "3.png",
      healing: "4.png",
      wet: "5.png",
      eating: "6.png",
      playing: "7.png"
    }
  },

  // 固定素材命名说明
  // 这里只记录容易混淆的素材含义，不参与路径计算。
  assetNotes: {
    badges: {
      fileNameRule: "badges/0.png 至 badges/5.png 分别代表成员入室年限徽章。",
      badge0: "入室当年",
      badge1: "入室 1 年",
      badge2: "入室 2 年",
      badge3: "入室 3 年",
      badge4: "入室 4 年",
      badge5: "入室 5 年",

      birthdayFileNameRule: "badges/B1.png 至 badges/B5.png 分别代表成员进入十号房后共同度过第 1 至第 5 次生日的礼包徽章。",
      B1: "第一次共同度过生日",
      B2: "第二次共同度过生日",
      B3: "第三次共同度过生日",
      B4: "第四次共同度过生日",
      B5: "第五次共同度过生日",

      holidayFileNameRule: "badges/newyear.png 至 badges/christmas.png 分别代表节日礼包或节日徽章图案。",
      newyear: "元旦：新年烟花",
      spring: "春节：新春红包",
      lantern: "元宵：团圆花灯",
      valentine: "情人节：玫瑰信笺",
      duanwu: "端午：平安香囊",
      qixi: "七夕：鹊桥双星",
      midautumn: "中秋：桂月玉兔",
      national: "国庆：华诞星章",
      independence: "美国独立日：星条礼花",
      halloween: "万圣节：南瓜糖袋",
      thanksgiving: "感恩节：节日火鸡",
      christmas: "圣诞节：圣诞树"
    },

    drink: {
      folderRule: "game/drink/ 下按 cup（空杯）、finish（成品饮料）、ingredient（原料）、store（商店入口素材）分类。",
      drinkCoin: "饮料店金币素材，文件位置：game/drink/drink-coin.png",
      teaCup01To03: "01 至 03 号纯茶共用空茶杯，文件位置：game/drink/cup/01-03 tea.png",
      blackTea01: "01 号红茶成品图，文件位置：game/drink/finish/01-03.Tea-Cup/01.Black-Tea.png",
      blackTeaLeaves01: "01 号红茶茶叶原料图，文件位置：game/drink/ingredient/01-red tea.png",
      redTeaTin01: "01 号红茶罐商店入口素材，文件位置：game/drink/store/01.png",
      greenTeaTin02: "02 号绿茶罐商店入口素材，文件位置：game/drink/store/02.png",
      floralTeaTin03: "03 号花茶罐商店入口素材，文件位置：game/drink/store/03.png",
      teaTins01To03: "01 至 03 号三个茶罐组合素材，文件位置：game/drink/store/01-03.png",
      teaTin: "兼容通用茶罐键，当前指向三个茶罐组合素材：game/drink/store/01-03.png"
    },

    mango: {
      fileNameRule: "game-mango3.png 至 game-mango7.png 分别代表芒果游戏的杯型或容量素材。",
      gameMango3: "小杯",
      gameMango4: "中杯",
      gameMango5: "大杯",
      gameMango6: "一扎",
      gameMango7: "试饮杯"
    },

    gacha: {
      petFileNameRule: "game/gacha/pet/1.jpg 至 game/gacha/pet/34.jpg 代表普通宠物收集图鉴素材；35.png 和 36.png 代表特殊宠物收集图鉴素材。",
      pet1: "宠物收集 1",
      pet2: "宠物收集 2",
      pet3: "宠物收集 3",
      pet4: "宠物收集 4",
      pet5: "宠物收集 5",
      pet6: "宠物收集 6",
      pet7: "宠物收集 7",
      pet8: "宠物收集 8",
      pet9: "宠物收集 9",
      pet10: "宠物收集 10",
      pet11: "宠物收集 11",
      pet12: "宠物收集 12",
      pet13: "宠物收集 13",
      pet14: "宠物收集 14",
      pet15: "宠物收集 15",
      pet16: "宠物收集 16",
      pet17: "宠物收集 17",
      pet18: "宠物收集 18",
      pet19: "宠物收集 19",
      pet20: "宠物收集 20",
      pet21: "宠物收集 21",
      pet22: "宠物收集 22",
      pet23: "宠物收集 23",
      pet24: "宠物收集 24",
      pet25: "宠物收集 25",
      pet26: "宠物收集 26",
      pet27: "宠物收集 27",
      pet28: "宠物收集 28",
      pet29: "宠物收集 29",
      pet30: "宠物收集 30",
      pet31: "宠物收集 31",
      pet32: "宠物收集 32",
      pet33: "宠物收集 33",
      pet34: "宠物收集 34",
      pet35: "特殊宠物收集 35：六角恐龙/早安",
      pet36: "特殊宠物收集 36：猫头鹰/王铮亮"
    },

    dorm: {
      mascotNiumaL: "宿舍装饰用牛马左向图，文件位置：dorm/mascot-niuma(L).png"
    },

    honor: {
      mascotNiumaR: "荣誉墙排行榜装饰用牛马右向图，文件位置：honor/mascot-niuma(R).png"
    },

    manager: {
      managerAdmin: "宿管室管理页；admin 和 owner 统一使用 manager/manager-admin.html"
    },

    pet: {
      pet: "宠物房主素材，文件位置：pet/pet.png",
      medical: "宠物医疗卡道具，文件位置：pet/medical.png",
      snack: "宠物零食道具，文件位置：pet/snack.png",
      can: "宠物罐头道具，文件位置：pet/can.png",
      kibble: "宠物干粮道具，文件位置：pet/kibble.png",
      clean: "宠物清洁用具道具，文件位置：pet/clean.png",
      ball: "宠物玩具球道具，文件位置：pet/ball.png",

      petImageSourceRule: "宠物状态图不在 room10-paths.js 写死；前端读取 get_pet_types_with_images(false)，再用 room10R2Asset(image_path) 拼接真实图片地址。",
      petImagePathRule: "R2 相对路径规则：pet/动物编号/图片编号.png。",
      petImage1: "1.png：正面图 normal",
      petImage2: "2.png：虚弱 weak",
      petImage3: "3.png：死亡 dead",
      petImage4: "4.png：治疗 healing",
      petImage5: "5.png：淋湿或洗澡 wet",
      petImage6: "6.png：吃东西 eating",
      petImage7: "7.png：玩耍 playing",
      specialCards: "35 六角恐龙/早安、36 猫头鹰/王铮亮为 special 特殊卡；是否展示由数据库 card_type 控制。"
    }
  }
};

(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript
    ? currentScript.getAttribute("src") || ""
    : "";

  if (!window.ROOM10_ROOT) {
    window.ROOM10_ROOT = scriptSrc.replace(
      /room10-paths\.js(\?.*)?$/,
      ""
    );
  }

  function isAbsolutePath(path) {
    return /^(https?:|data:|blob:|\/)/i.test(path);
  }

  function normalizeBaseUrl(baseUrl) {
    return String(baseUrl || "").replace(/\/+$/, "");
  }

  function normalizeRemotePath(path) {
    return String(path || "").replace(/^\/+/, "");
  }

  window.room10Path = function (path) {
    if (!path) return "";

    if (isAbsolutePath(path)) {
      return path;
    }

    return (window.ROOM10_ROOT || "") + path;
  };

  window.room10Page = function (key) {
    const path =
      window.ROOM10_PATHS &&
      window.ROOM10_PATHS.pages &&
      window.ROOM10_PATHS.pages[key];

    return window.room10Path(path);
  };

  window.room10Asset = function (keyPath) {
    if (!keyPath) return "";

    const keys = keyPath.split(".");
    let value =
      window.ROOM10_PATHS &&
      window.ROOM10_PATHS.assets;

    for (const key of keys) {
      if (
        !value ||
        !Object.prototype.hasOwnProperty.call(value, key)
      ) {
        return "";
      }

      value = value[key];
    }

    return window.room10Path(value);
  };

  window.room10R2Asset = function (path) {
    if (!path) return "";

    if (isAbsolutePath(path)) {
      return path;
    }

    const remoteAssets =
      window.ROOM10_PATHS &&
      window.ROOM10_PATHS.remoteAssets;

    const baseUrl = normalizeBaseUrl(
      remoteAssets && remoteAssets.r2BaseUrl
    );

    const cleanPath = normalizeRemotePath(path);

    if (!baseUrl) {
      return window.room10Path(cleanPath);
    }

    return `${baseUrl}/${cleanPath}`;
  };

  window.room10PetImage = function (imagePath) {
    return window.room10R2Asset(imagePath);
  };
})();
