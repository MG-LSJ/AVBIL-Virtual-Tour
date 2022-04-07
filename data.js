var info_data = {
    a_desk: "Enquire about the admission to the school.",
    off_win: "Office Window",
    off_ent: "Office Entrance",
    bk_birla: "Portrait of the Founder of the school",
    prin_off: "Office of the Principal",
    recp: "Reception Desk",
    sarasvati_statue: "Statue of Maa Sarasvati",
};

var APP_DATA = {
    scenes: [
        {
            id: "0-main-entrance",
            name: "Main Entrance",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -3.131883506134077,
                pitch: -0.029487940865870144,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.5063373198554544,
                    pitch: -0.007478077939516936,
                    rotation: 0,
                    target: "1-gate",
                },
                {
                    yaw: 2.962682669300115,
                    pitch: 0.037696258002858585,
                    rotation: 0,
                    target: "22-entrance-hall",
                },
            ],
            infoHotspots: [
                {
                    yaw: 1.0823407476019238,
                    pitch: -0.030417258393548252,
                    title: "School Bus Parking",
                    text: "",
                },
            ],
        },
        {
            id: "1-gate",
            name: "Gate",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.506049440888491,
                    pitch: -0.04419390938559786,
                    rotation: 0,
                    target: "2-parking",
                },
                {
                    yaw: -1.0383132274226732,
                    pitch: -0.030968127686087144,
                    rotation: 0,
                    target: "0-main-entrance",
                },
            ],
            infoHotspots: [
                {
                    yaw: -2.5238934404292106,
                    pitch: 0.04392438361194273,
                    title: "2 Wheeler Parking",
                    text: "",
                },
                {
                    yaw: 2.5714451978784236,
                    pitch: 0.0036611393203251907,
                    title: "Generator Room",
                    text: "",
                },
                {
                    yaw: 1.6996325293879204,
                    pitch: -0.027038671592343633,
                    title: "Guard Room",
                    text: "",
                },
            ],
        },
        {
            id: "2-parking",
            name: "Parking",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -2.402461226016621,
                    pitch: -0.010146516746587508,
                    rotation: 0,
                    target: "1-gate",
                },
                {
                    yaw: 0.5984971864505457,
                    pitch: -0.04166069867230604,
                    rotation: 0,
                    target: "3-side-entrance-a1",
                },
            ],
            infoHotspots: [
                {
                    yaw: 2.2743647119525026,
                    pitch: 0.04092525629939381,
                    title: "Bycycle Parking",
                    text: "",
                },
            ],
        },
        {
            id: "3-side-entrance-a1",
            name: "Side Entrance A1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.03849402113419842,
                    pitch: 0.0015160795723261344,
                    rotation: 0,
                    target: "4-side-entrance-a2",
                },
                {
                    yaw: -1.4951697161346864,
                    pitch: -0.00810235294704853,
                    rotation: 0,
                    target: "2-parking",
                },
            ],
            infoHotspots: [
                {
                    yaw: 1.7236912949701635,
                    pitch: 0.004434298678109627,
                    title: "Playground",
                    text: "",
                },
            ],
        },
        {
            id: "4-side-entrance-a2",
            name: "Side Entrance A2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.08859500830153699,
                    pitch: -0.0028038428122663106,
                    rotation: 0,
                    target: "5-side-entrance-a3",
                },
                {
                    yaw: -3.0937073463527334,
                    pitch: 0.05098051985542362,
                    rotation: 0,
                    target: "3-side-entrance-a1",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "5-side-entrance-a3",
            name: "Side Entrance A3",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 3.0685972780985473,
                    pitch: 0.09023612217095334,
                    rotation: 0,
                    target: "4-side-entrance-a2",
                },
                {
                    yaw: -0.10343627425238111,
                    pitch: -0.0195706968182634,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "6-1st-floor-north-west",
            name: "1st Floor North West",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.15148928442134313,
                    pitch: -0.003860000961402932,
                    rotation: 0,
                    target: "7-1sr-floor-north",
                },
                {
                    yaw: 1.72879550738657,
                    pitch: 0.022806067054206736,
                    rotation: 0,
                    target: "19-1st-floor-west-b",
                },
                {
                    yaw: -2.758848737212494,
                    pitch: 0.023780048058300807,
                    rotation: 0,
                    target: "21-vp-office-area",
                },
                {
                    yaw: -0.3462101695138209,
                    pitch: 0.022932677682206304,
                    rotation: 0,
                    target: "46-library",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "7-1sr-floor-north",
            name: "1sr Floor North",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 1.6543832294870455,
                pitch: 0.14381837825813903,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.7272031316443304,
                    pitch: 0.04617833991851228,
                    rotation: 0,
                    target: "6-1st-floor-north-west",
                },
                {
                    yaw: 1.3530243025406001,
                    pitch: 0.04386211791985417,
                    rotation: 0,
                    target: "8-1st-floor-north-east",
                },
                {
                    yaw: 2.9442373463328426,
                    pitch: 0.2769833263809254,
                    rotation: 0,
                    target: "53-mid",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "8-1st-floor-north-east",
            name: "1st Floor North East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 3.0693981283772853,
                    pitch: 0.1095288164706254,
                    rotation: 0,
                    target: "9-staircase-b----1st-floor",
                },
                {
                    yaw: -1.5516216404162417,
                    pitch: 0.054643174629486424,
                    rotation: 0,
                    target: "7-1sr-floor-north",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "9-staircase-b----1st-floor",
            name: "Staircase B  - 1st Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.2998577298110785,
                pitch: -0.04315451148065108,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.615647261454388,
                    pitch: 0.09194326582893098,
                    rotation: 0,
                    target: "10-1st-floor-east",
                },
                {
                    yaw: 1.474379469492403,
                    pitch: 0.08356753935166417,
                    rotation: 0,
                    target: "8-1st-floor-north-east",
                },
                {
                    yaw: -0.13420217660723743,
                    pitch: 0.30875233532487734,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: -3.123943361700425,
                    pitch: 0.4093973771933719,
                    rotation: 0,
                    target: "63-staircase-b-g-1",
                },
                {
                    yaw: 2.941593866755081,
                    pitch: -0.1824000332061857,
                    rotation: 0,
                    target: "62-staircase-b-1-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "10-1st-floor-east",
            name: "1st Floor East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.6768357781280123,
                    pitch: 0.09428117685652637,
                    rotation: 0,
                    target: "9-staircase-b----1st-floor",
                },
                {
                    yaw: 1.3786130121179259,
                    pitch: 0.02422553836355945,
                    rotation: 0,
                    target: "11-tap-area-b---1st-floor",
                },
                {
                    yaw: -2.808188673977705,
                    pitch: 0.40306801139474757,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: 2.5395452817035107,
                    pitch: 0.40353101618604725,
                    rotation: 0,
                    target: "53-mid",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "11-tap-area-b---1st-floor",
            name: "Tap Area B - 1st Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -3.11683339793254,
                    pitch: 0.04766025322149048,
                    rotation: 0,
                    target: "18-tap-area-a---1st-floor",
                },
                {
                    yaw: -1.5720396979317393,
                    pitch: 0.0576482877825768,
                    rotation: 0,
                    target: "10-1st-floor-east",
                },
                {
                    yaw: 1.570433932402893,
                    pitch: 0.04831591227991083,
                    rotation: 0,
                    target: "12-ramp---1st-floor",
                },
                {
                    yaw: 2.3638333305638444,
                    pitch: 0.2910127856658349,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: -2.258322209636413,
                    pitch: 0.23916794526836327,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "12-ramp---1st-floor",
            name: "Ramp - 1st Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.5641845534482393,
                    pitch: 0.048081704833602856,
                    rotation: 0,
                    target: "11-tap-area-b---1st-floor",
                },
                {
                    yaw: 1.4847420394051252,
                    pitch: 0.07631137675214106,
                    rotation: 0,
                    target: "13-1st-floor-south-east",
                },
                {
                    yaw: 0.14986722400768926,
                    pitch: 0.1653487794948134,
                    rotation: 0,
                    target: "58-ramp-g-1",
                },
                {
                    yaw: -0.10896373437602946,
                    pitch: -0.07873274644603612,
                    rotation: 0,
                    target: "57-ramp-1-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "13-1st-floor-south-east",
            name: "1st Floor South East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.4980194945250034,
                    pitch: 0.0472388408844413,
                    rotation: 0,
                    target: "12-ramp---1st-floor",
                },
                {
                    yaw: -0.11228181981608998,
                    pitch: -0.0019956301800281295,
                    rotation: 0,
                    target: "14-1st-floor-south",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "14-1st-floor-south",
            name: "1st Floor South",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.564738407812345,
                    pitch: 0.07697050518197024,
                    rotation: 0,
                    target: "13-1st-floor-south-east",
                },
                {
                    yaw: -1.586487289214542,
                    pitch: 0.0355515703519238,
                    rotation: 0,
                    target: "15-1st-floor-south-west",
                },
                {
                    yaw: -0.05377117686444777,
                    pitch: 0.18964107350939585,
                    rotation: 0,
                    target: "53-mid",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "15-1st-floor-south-west",
            name: "1st Floor South West",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 0.7120193743526073,
                pitch: 0.07912136420437932,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 1.5902229945590527,
                    pitch: 0.028712990897243884,
                    rotation: 0,
                    target: "14-1st-floor-south",
                },
                {
                    yaw: -0.021437205254192904,
                    pitch: -0.0064588549690860475,
                    rotation: 0,
                    target: "16-staircase-a---1st-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "16-staircase-a---1st-floor",
            name: "Staircase A - 1st Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.0176920310404185,
                    pitch: 0.006319572459355882,
                    rotation: 0,
                    target: "17-1st-floor-west-a",
                },
                {
                    yaw: -3.0921355721047448,
                    pitch: 0.09481204065425075,
                    rotation: 0,
                    target: "15-1st-floor-south-west",
                },
                {
                    yaw: 1.4342109483405014,
                    pitch: 0.4048175329724888,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: -1.3485947460571968,
                    pitch: 0.3543936639924272,
                    rotation: 0,
                    target: "61-staircase-a-g-1",
                },
                {
                    yaw: -1.577226877780081,
                    pitch: -0.13203680992707234,
                    rotation: 0,
                    target: "60-staircase-a-1-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "17-1st-floor-west-a",
            name: "1st Floor West A",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.5739607422629867,
                    pitch: 0.0461767685069443,
                    rotation: 0,
                    target: "18-tap-area-a---1st-floor",
                },
                {
                    yaw: 1.6141640642909936,
                    pitch: 0.050427445677115657,
                    rotation: 0,
                    target: "16-staircase-a---1st-floor",
                },
                {
                    yaw: 0.4074435287690523,
                    pitch: 0.32589421927725226,
                    rotation: 0,
                    target: "55-badminton-court",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "18-tap-area-a---1st-floor",
            name: "Tap Area A - 1st Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.031955948089013475,
                    pitch: -0.024426615604443924,
                    rotation: 0,
                    target: "11-tap-area-b---1st-floor",
                },
                {
                    yaw: -1.591389271208186,
                    pitch: 0.016742002148646407,
                    rotation: 0,
                    target: "19-1st-floor-west-b",
                },
                {
                    yaw: 1.5664466388167835,
                    pitch: 0.015456332315967103,
                    rotation: 0,
                    target: "17-1st-floor-west-a",
                },
                {
                    yaw: 0.7321671819571272,
                    pitch: 0.2345044715518263,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: -0.878719696662575,
                    pitch: 0.20050314416769943,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "19-1st-floor-west-b",
            name: "1st Floor West B",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.7424224155217143,
                    pitch: 0.07085087520227162,
                    rotation: 0,
                    target: "18-tap-area-a---1st-floor",
                },
                {
                    yaw: -1.40344756202464,
                    pitch: 0.024614071059746223,
                    rotation: 0,
                    target: "6-1st-floor-north-west",
                },
                {
                    yaw: 0.05134029646923999,
                    pitch: 0.31356967146807335,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "20-vp-office-area-staircase",
            name: "VP Office Area Staircase",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.5340197505580129,
                    pitch: -0.035076179978496214,
                    rotation: 0,
                    target: "21-vp-office-area",
                },
                {
                    yaw: 1.3159044690324375,
                    pitch: 0.07976884100221682,
                    rotation: 0,
                    target: "50-sick-room",
                },
                {
                    yaw: 0.16080250662037265,
                    pitch: -0.20540913090297508,
                    rotation: 0,
                    target: "56-main-staircase-1-2",
                },
                {
                    yaw: 0.43604284424536743,
                    pitch: 0.41421253584251616,
                    rotation: 0,
                    target: "59-main-staircase-g-1",
                },
            ],
            infoHotspots: [
                {
                    yaw: -2.976149098450845,
                    pitch: 0.06596935000358073,
                    title: "Vice Principal Office",
                    text: "",
                },
            ],
        },
        {
            id: "21-vp-office-area",
            name: "VP Office Area",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.97662314168441,
                pitch: 0.05459082405439375,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 1.493060055096695,
                    pitch: 0.040072087847571325,
                    rotation: 0,
                    target: "20-vp-office-area-staircase",
                },
                {
                    yaw: -1.1850242763632615,
                    pitch: -0.011664716193330094,
                    rotation: 0,
                    target: "6-1st-floor-north-west",
                },
                {
                    yaw: -3.0223173902227263,
                    pitch: 0.5022246714895342,
                    rotation: 0,
                    target: "22-entrance-hall",
                },
            ],
            infoHotspots: [
                {
                    yaw: 2.4718374255572986,
                    pitch: 0.05389963300105194,
                    title: "Vice Principal Office",
                    text: "",
                },
            ],
        },
        {
            id: "22-entrance-hall",
            name: "Entrance Hall",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -2.963876801332111,
                    pitch: 0.09692891752782273,
                    rotation: 0,
                    target: "0-main-entrance",
                },
                {
                    yaw: 0.060885037156557686,
                    pitch: -0.014289917177936928,
                    rotation: 0,
                    target: "24-entrance-hall-sarasvati-stutue",
                },
                {
                    yaw: -0.6826475284120157,
                    pitch: -0.013138590377337778,
                    rotation: 0,
                    target: "25-ground-floor-north-west",
                },
                {
                    yaw: 0.8053034415714215,
                    pitch: 0.00766466635772467,
                    rotation: 0,
                    target: "23-entrance-hall-staircase",
                },
                {
                    yaw: 1.154762960329002,
                    pitch: 0.026204417046283623,
                    rotation: 0,
                    target: "52-visitors-room",
                },
            ],
            infoHotspots: [
                {
                    yaw: -0.47009921146819345,
                    pitch: 0.09257668026441834,
                    title: "Admission Desk",
                    text: info_data["a_desk"],
                },
                {
                    yaw: 0.5410691950787321,
                    pitch: 0.009476510999732568,
                    title: "Shri B.K. Birla",
                    text: info_data["bk_birla"],
                },
            ],
        },
        {
            id: "23-entrance-hall-staircase",
            name: "Entrance Hall Staircase",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.5258156649356973,
                pitch: 0.05790003463006599,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -2.382607404422311,
                    pitch: 0.04148591235473731,
                    rotation: 0,
                    target: "22-entrance-hall",
                },
                {
                    yaw: -1.4759778199628961,
                    pitch: 0.041480524185059764,
                    rotation: 0,
                    target: "24-entrance-hall-sarasvati-stutue",
                },
                {
                    yaw: 0.13040540272833212,
                    pitch: -0.24316263553478734,
                    rotation: 0,
                    target: "59-main-staircase-g-1",
                },
                {
                    yaw: 2.7288677030579453,
                    pitch: 0.10536007502950184,
                    rotation: 0,
                    target: "52-visitors-room",
                },
            ],
            infoHotspots: [
                {
                    yaw: -3.0168127064093966,
                    pitch: 0.0713406175710194,
                    title: "Principal Office",
                    text: info_data["prin_off"],
                },
            ],
        },
        {
            id: "24-entrance-hall-sarasvati-stutue",
            name: "Entrance Hall Sarasvati Stutue",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.04931370038300997,
                    pitch: 0.008215171127329057,
                    rotation: 0,
                    target: "22-entrance-hall",
                },
                {
                    yaw: 1.8377405466240972,
                    pitch: 0.020065153497839106,
                    rotation: 0,
                    target: "25-ground-floor-north-west",
                },
                {
                    yaw: -1.8172412215528002,
                    pitch: 0.04309442943409536,
                    rotation: 0,
                    target: "23-entrance-hall-staircase",
                },
                {
                    yaw: -1.3553291610121363,
                    pitch: -0.003937530260955668,
                    rotation: 0,
                    target: "52-visitors-room",
                },
            ],
            infoHotspots: [
                {
                    yaw: -0.762308757196438,
                    pitch: -0.012727672589976535,
                    title: "Principal Office",
                    text: info_data["prin_off"],
                },
                {
                    yaw: 0.6723094057270487,
                    pitch: 0.046546228396543654,
                    title: "Reception",
                    text: info_data["recp"],
                },
                {
                    yaw: 1.8647856609587734,
                    pitch: 0.2811716208277648,
                    title: "Admission Desk",
                    text: info_data["a_desk"],
                },
                {
                    yaw: -3.015940008021323,
                    pitch: 0.19094653697918673,
                    title: "Sarasvati Maa Statue",
                    text: info_data["sarasvati_statue"],
                },
                {
                    yaw: 0.8918520008549091,
                    pitch: 0.015744195540026595,
                    title: "Office",
                    text: info_data["off_ent"],
                },
            ],
        },
        {
            id: "25-ground-floor-north-west",
            name: "Ground Floor North West",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 2.5393906189098283,
                pitch: -0.03516021892336951,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.2336407604955006,
                    pitch: 0.018104977624901153,
                    rotation: 0,
                    target: "24-entrance-hall-sarasvati-stutue",
                },
                {
                    yaw: -0.42347196004604015,
                    pitch: -0.003896618773138627,
                    rotation: 0,
                    target: "22-entrance-hall",
                },
                {
                    yaw: -2.9148348258757935,
                    pitch: 0.04839781184015379,
                    rotation: 0,
                    target: "38-ground-floor-west-b",
                },
                {
                    yaw: 1.8097370727524336,
                    pitch: 0.03824200404628897,
                    rotation: 0,
                    target: "26-ground-floor-north",
                },
            ],
            infoHotspots: [
                {
                    yaw: -1.0826452699263527,
                    pitch: 0.44591193630754944,
                    title: "Admission Desk",
                    text: info_data["a_desk"],
                },
                {
                    yaw: 1.3613751059495751,
                    pitch: 0.02106235013693336,
                    title: "Office Window",
                    text: info_data["off_win"],
                },
                {
                    yaw: 0.14138944823017496,
                    pitch: 0.024891018191034675,
                    title: "Office",
                    text: info_data["off_ent"],
                },
            ],
        },
        {
            id: "26-ground-floor-north",
            name: "Ground Floor North",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 1.5448125587672443,
                pitch: 0.08429230752573602,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.6102712537829689,
                    pitch: 0.020768250169915348,
                    rotation: 0,
                    target: "25-ground-floor-north-west",
                },
                {
                    yaw: 1.5092916941182573,
                    pitch: 0.04431526920668105,
                    rotation: 0,
                    target: "27-ground-floor-north-east",
                },
                {
                    yaw: -3.0686123422330347,
                    pitch: 0.20324500646578336,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: 2.1451451677085673,
                    pitch: 0.03999246567238757,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
                {
                    yaw: 2.591890975386378,
                    pitch: 0.038797682841348546,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
                {
                    yaw: -2.674540532376838,
                    pitch: 0.03364297529360272,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "27-ground-floor-north-east",
            name: "Ground Floor North East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -1.250119872426902,
                pitch: 0.07479201257003609,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.77454672221252,
                    pitch: 0.014843286063182859,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
                {
                    yaw: -0.17603373560478808,
                    pitch: -0.014266701671679982,
                    rotation: 0,
                    target: "26-ground-floor-north",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "28-staircase-b---ground-floor",
            name: "Staircase B - Ground Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.5101607127242378,
                    pitch: 0.03780820713339672,
                    rotation: 0,
                    target: "29-ground-floor-east",
                },
                {
                    yaw: 1.6971946867081158,
                    pitch: 0.07470127314089936,
                    rotation: 0,
                    target: "27-ground-floor-north-east",
                },
                {
                    yaw: -0.0348556876120778,
                    pitch: 0.06543069197834228,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: -0.8541737768937647,
                    pitch: 0.01935172604084734,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: -0.49308468226088564,
                    pitch: -0.030685085078108187,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
                {
                    yaw: 0.7681532889587821,
                    pitch: 0.0056485609233192235,
                    rotation: 0,
                    target: "26-ground-floor-north",
                },
                {
                    yaw: 3.13857341577158,
                    pitch: -0.1323272770825188,
                    rotation: 0,
                    target: "63-staircase-b-g-1",
                },
                {
                    yaw: -2.988781856196935,
                    pitch: 0.13916166607710778,
                    rotation: 0,
                    target: "83-side-entrance-b-3",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "29-ground-floor-east",
            name: "Ground Floor East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 2.2223209606132404,
                pitch: 0.036101288896972505,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 1.5604831779274981,
                    pitch: 0.045205448794117586,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
                {
                    yaw: 2.6024380959908235,
                    pitch: 0.11903649378786696,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: -1.544250746523872,
                    pitch: 0.030409445357914677,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
                {
                    yaw: -2.616656798964712,
                    pitch: 0.11758351645602261,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: -2.9678709653897126,
                    pitch: 0.058420525436350346,
                    rotation: 0,
                    target: "38-ground-floor-west-b",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "30-tap-area-b---ground-floor",
            name: "Tap Area B - Ground Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.9917064084237364,
                pitch: 0.086384023197148,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -2.9508778544650944,
                    pitch: 0.23328804824881644,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: 1.7844905674023277,
                    pitch: 0.06585571882932939,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: -1.3382850400564692,
                    pitch: 0.021731850209361525,
                    rotation: 0,
                    target: "29-ground-floor-east",
                },
                {
                    yaw: -2.1425666326104214,
                    pitch: 0.11799739286093214,
                    rotation: 0,
                    target: "53-mid",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "31-ramp---ground-floor",
            name: "Ramp - Ground Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.444272515363446,
                    pitch: 0.06727050714019711,
                    rotation: 0,
                    target: "32-ground-floor-south-east",
                },
                {
                    yaw: 0.529742174824543,
                    pitch: 0.014985776168359166,
                    rotation: 0,
                    target: "40-mad-wing-2",
                },
                {
                    yaw: 2.3508821859648847,
                    pitch: 0.057885394493366604,
                    rotation: 0,
                    target: "33-ground-floor-south",
                },
                {
                    yaw: -3.0768773569448413,
                    pitch: 0.12871676534109255,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: -1.5905634284531995,
                    pitch: 0.02297229672876,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
                {
                    yaw: -0.05719213907429044,
                    pitch: -0.09905850094249402,
                    rotation: 0,
                    target: "58-ramp-g-1",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "32-ground-floor-south-east",
            name: "Ground Floor South East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.4533692146756749,
                    pitch: 0.030410776613255308,
                    rotation: 0,
                    target: "39-mad-wing-1",
                },
                {
                    yaw: -1.1352867931756556,
                    pitch: -0.013050944975654843,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: -2.7236604698887543,
                    pitch: 0.06540649595909542,
                    rotation: 0,
                    target: "33-ground-floor-south",
                },
                {
                    yaw: 3.093202749959147,
                    pitch: 0.06873670317506075,
                    rotation: 0,
                    target: "51-sports-room",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "33-ground-floor-south",
            name: "Ground Floor South",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.22891866494355995,
                    pitch: 0.013132173327349506,
                    rotation: 0,
                    target: "34-ground-floor-south-west",
                },
                {
                    yaw: -2.8834201007233524,
                    pitch: 0.043225983585275074,
                    rotation: 0,
                    target: "32-ground-floor-south-east",
                },
                {
                    yaw: 2.6949250581764286,
                    pitch: 0.08019791321637904,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: 0.772064462245309,
                    pitch: 0.03340344681687135,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
                {
                    yaw: 1.699357413691697,
                    pitch: 0.06412942394948118,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: -0.1861417206588314,
                    pitch: 0.0992459681354525,
                    rotation: 0,
                    target: "51-sports-room",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "34-ground-floor-south-west",
            name: "Ground Floor South West",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 2.340326985110316,
                pitch: 0.02715994553435408,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 1.5174500757906193,
                    pitch: 0.061119582059864896,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
                {
                    yaw: -3.1307929085050183,
                    pitch: 0.07690134802545145,
                    rotation: 0,
                    target: "33-ground-floor-south",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "35-staircase-a---ground-floor",
            name: "Staircase A - Ground Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.6139301631150982,
                    pitch: 0.05243769870659065,
                    rotation: 0,
                    target: "34-ground-floor-south-west",
                },
                {
                    yaw: -0.1666735134789601,
                    pitch: 0.0050173415173393465,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: 0.7045740442626229,
                    pitch: 0.019828575476148913,
                    rotation: 0,
                    target: "33-ground-floor-south",
                },
                {
                    yaw: -3.0668196408790482,
                    pitch: 0.17807249462364005,
                    rotation: 0,
                    target: "5-side-entrance-a3",
                },
                {
                    yaw: -1.5764682819868785,
                    pitch: 0.014752643070398364,
                    rotation: 0,
                    target: "36-ground-floor-west-a",
                },
                {
                    yaw: 3.0568014228026446,
                    pitch: -0.14607717143483967,
                    rotation: 0,
                    target: "61-staircase-a-g-1",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "36-ground-floor-west-a",
            name: "Ground Floor West A",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.616464196540603,
                    pitch: 0.044172334002350766,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
                {
                    yaw: 0.5417004209134202,
                    pitch: 0.10929093230119058,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: -1.5612112627632477,
                    pitch: 0.013258823503436545,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
                {
                    yaw: -0.5511263006221618,
                    pitch: 0.0327242661010807,
                    rotation: 0,
                    target: "53-mid",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "37-tap-area-a---ground-floor",
            name: "Tap Area A - Ground Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 3.1192726706075478,
                pitch: 0.043759862823261386,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.5217383493982393,
                    pitch: 0.03402670814355524,
                    rotation: 0,
                    target: "36-ground-floor-west-a",
                },
                {
                    yaw: -3.127454524786595,
                    pitch: 0.12635543714421438,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: -2.334131420279924,
                    pitch: 0.07457612458019547,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: 1.6095988448342737,
                    pitch: 0.050172031090651714,
                    rotation: 0,
                    target: "38-ground-floor-west-b",
                },
                {
                    yaw: 2.329068894306184,
                    pitch: 0.09313594942026526,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "38-ground-floor-west-b",
            name: "Ground Floor West B",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.17057733820088927,
                    pitch: -0.002362077201032875,
                    rotation: 0,
                    target: "25-ground-floor-north-west",
                },
                {
                    yaw: -2.964029209540783,
                    pitch: 0.07419471833689428,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
                {
                    yaw: 1.5677367704164658,
                    pitch: 0.0903015036778676,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: 0.8026533823928332,
                    pitch: 0.00987156595623162,
                    rotation: 0,
                    target: "26-ground-floor-north",
                },
                {
                    yaw: 2.543841051649382,
                    pitch: 0.12792516041895752,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: 2.1708973436728485,
                    pitch: 0.044875765096211495,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
                {
                    yaw: 1.893921999164589,
                    pitch: 0.03472520977400251,
                    rotation: 0,
                    target: "29-ground-floor-east",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "39-mad-wing-1",
            name: "MAD Wing 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.07523138033015542,
                    pitch: 0.03075018076421898,
                    rotation: 0,
                    target: "32-ground-floor-south-east",
                },
                {
                    yaw: -3.0988453198430186,
                    pitch: 0.09248367398832791,
                    rotation: 0,
                    target: "40-mad-wing-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "40-mad-wing-2",
            name: "MAD Wing 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -3.089355290322473,
                pitch: 0.13838912846712148,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 2.477086950875563,
                    pitch: 0.18145148326831162,
                    rotation: 0,
                    target: "47-music-room-1",
                },
                {
                    yaw: -2.9685951550556027,
                    pitch: 0.06610687259055226,
                    rotation: 0,
                    target: "39-mad-wing-1",
                },
                {
                    yaw: -2.511232469906407,
                    pitch: 0.040992846941314554,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: -0.5596993003522925,
                    pitch: 0.005538221363890372,
                    rotation: 0,
                    target: "85-side-entrance-b-south",
                },
            ],
            infoHotspots: [
                {
                    yaw: 0.27292392954081635,
                    pitch: 0.14817579538783576,
                    title: "Art Room",
                    text: "",
                },
            ],
        },
        {
            id: "41-av-room",
            name: "A.V. Room",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 2.10312427381937,
                    pitch: 0.06422276475995403,
                    rotation: 0,
                    target: "79-computer-lab-area",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "42-biology-lab",
            name: "Biology Lab",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.7491506803173635,
                    pitch: 0.07291557626152922,
                    rotation: 0,
                    target: "71-2nd-floor-south-east",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "43-chemistry-lab",
            name: "Chemistry Lab",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.9226529971600712,
                    pitch: 0.024983168884403995,
                    rotation: 0,
                    target: "80-science-lab-wing",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "44-computer-lab-junior",
            name: "Computer Lab (Junior)",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.1541678150370629,
                    pitch: 0.03593573115188953,
                    rotation: 0,
                    target: "79-computer-lab-area",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "45-computer-lab-senior",
            name: "Computer Lab (Senior)",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 2.41909603617611,
                    pitch: 0.09986657992176795,
                    rotation: 0,
                    target: "79-computer-lab-area",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "46-library",
            name: "Library",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.09958175691294,
                    pitch: -0.006852601653882573,
                    rotation: 0,
                    target: "6-1st-floor-north-west",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "47-music-room-1",
            name: "Music Room 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 3.095114323591188,
                    pitch: 0.07771239370361904,
                    rotation: 0,
                    target: "48-music-room-2",
                },
                {
                    yaw: 0.4880489067313061,
                    pitch: 0.0643122341307567,
                    rotation: 0,
                    target: "40-mad-wing-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "48-music-room-2",
            name: "Music Room 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.5262646866464813,
                    pitch: 0.014355295179555583,
                    rotation: 0,
                    target: "47-music-room-1",
                },
                {
                    yaw: -0.24703712982289616,
                    pitch: 0.011306040910636028,
                    rotation: 0,
                    target: "40-mad-wing-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "49-physics-lab",
            name: "Physics Lab",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.985240299977283,
                pitch: 0.036601259934403885,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -2.810123024838031,
                    pitch: 0.08442440775910498,
                    rotation: 0,
                    target: "80-science-lab-wing",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "50-sick-room",
            name: "Sick Room",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -2.3997526228593706,
                    pitch: 0.10215821498003841,
                    rotation: 0,
                    target: "20-vp-office-area-staircase",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "51-sports-room",
            name: "Sports Room",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.8207421041819991,
                    pitch: 0.0018299365834533177,
                    rotation: 0,
                    target: "32-ground-floor-south-east",
                },
                {
                    yaw: -2.635454394100403,
                    pitch: 0.0801851407503058,
                    rotation: 0,
                    target: "33-ground-floor-south",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "52-visitors-room",
            name: "Visitors' Room",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.4161634841558275,
                    pitch: -0.004255263999786152,
                    rotation: 0,
                    target: "24-entrance-hall-sarasvati-stutue",
                },
            ],
            infoHotspots: [
                {
                    yaw: -1.5656250658231414,
                    pitch: 0.1970319362284556,
                    title: "Covid19 Vaccination",
                    text: "",
                },
            ],
        },
        {
            id: "53-mid",
            name: "Mid",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.59276097169319,
                    pitch: 0.02407937107670577,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
                {
                    yaw: -1.570571053173012,
                    pitch: 0.02060713692613625,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
                {
                    yaw: -0.00010428332695155973,
                    pitch: -0.0011681651080230893,
                    rotation: 0,
                    target: "55-badminton-court",
                },
                {
                    yaw: 0.0005621531378565692,
                    pitch: -0.23701456513542496,
                    rotation: 0,
                    target: "14-1st-floor-south",
                },
                {
                    yaw: -0.6628515730721816,
                    pitch: -0.028446788558820657,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: 0.7668347888626208,
                    pitch: -0.010598235973425574,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
                {
                    yaw: 1.185516234200385,
                    pitch: 0.016612954862088358,
                    rotation: 0,
                    target: "36-ground-floor-west-a",
                },
                {
                    yaw: 3.131156451423232,
                    pitch: 0.09417517432628486,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
                {
                    yaw: 2.2953369363288534,
                    pitch: 0.027187604763678763,
                    rotation: 0,
                    target: "38-ground-floor-west-b",
                },
                {
                    yaw: -2.407294836428008,
                    pitch: 0.019776593332139214,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
                {
                    yaw: -1.9732872670159107,
                    pitch: 0.012220421997616526,
                    rotation: 0,
                    target: "29-ground-floor-east",
                },
                {
                    yaw: 3.1299898430700654,
                    pitch: -0.18399899580015422,
                    rotation: 0,
                    target: "7-1sr-floor-north",
                },
                {
                    yaw: 2.299019785876384,
                    pitch: -0.2913303042954283,
                    rotation: 0,
                    target: "19-1st-floor-west-b",
                },
                {
                    yaw: -2.42616056505676,
                    pitch: -0.26834034208572355,
                    rotation: 0,
                    target: "9-staircase-b----1st-floor",
                },
                {
                    yaw: -0.005179660565591604,
                    pitch: -0.4222012752406741,
                    rotation: 0,
                    target: "72-2nd-floor-south",
                },
                {
                    yaw: 3.127227777091144,
                    pitch: -0.36680306426541165,
                    rotation: 0,
                    target: "65-2nd-floor-north",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "54-assembly-ground",
            name: "Assembly Ground",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.033296389592090136,
                    pitch: 0.01997147717921699,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: 3.0924135889873003,
                    pitch: 0.013247596592773192,
                    rotation: 0,
                    target: "26-ground-floor-north",
                },
                {
                    yaw: -1.9600303800992975,
                    pitch: 0.015281641834951287,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
                {
                    yaw: -0.8741216570311305,
                    pitch: -0.01540145697362938,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
                {
                    yaw: -1.2398380859708809,
                    pitch: -0.01418420682689181,
                    rotation: 0,
                    target: "29-ground-floor-east",
                },
                {
                    yaw: 0.7984068119029466,
                    pitch: -0.00561564727356334,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
                {
                    yaw: 1.6206245915672648,
                    pitch: 0.002091007380894183,
                    rotation: 0,
                    target: "38-ground-floor-west-b",
                },
                {
                    yaw: 3.09292667923397,
                    pitch: -0.35143707768985166,
                    rotation: 0,
                    target: "7-1sr-floor-north",
                },
                {
                    yaw: -1.9781249691622698,
                    pitch: -0.39606846939494034,
                    rotation: 0,
                    target: "9-staircase-b----1st-floor",
                },
                {
                    yaw: 1.6253437322700428,
                    pitch: -0.3891048167976692,
                    rotation: 0,
                    target: "19-1st-floor-west-b",
                },
                {
                    yaw: -0.8733519724094414,
                    pitch: -0.3669240835639833,
                    rotation: 0,
                    target: "11-tap-area-b---1st-floor",
                },
                {
                    yaw: 0.799155240715649,
                    pitch: -0.3300291126658301,
                    rotation: 0,
                    target: "18-tap-area-a---1st-floor",
                },
                {
                    yaw: 1.6460351214811944,
                    pitch: -0.6773086965175601,
                    rotation: 0,
                    target: "77-2nd-floor-west-b",
                },
                {
                    yaw: 3.0922882750841802,
                    pitch: -0.6275532454797954,
                    rotation: 0,
                    target: "65-2nd-floor-north",
                },
                {
                    yaw: -1.9908103678269171,
                    pitch: -0.6937584120408076,
                    rotation: 0,
                    target: "67-staircase-b---2nd-floor",
                },
                {
                    yaw: -0.8937188009705856,
                    pitch: -0.624638124907019,
                    rotation: 0,
                    target: "69-tap-area-b---2nd-floor",
                },
                {
                    yaw: 0.8231203216061243,
                    pitch: -0.5689462523695479,
                    rotation: 0,
                    target: "76-tap-area-a---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "55-badminton-court",
            name: "Badminton Court",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.562815085845335,
                    pitch: 0.026155064889866964,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: 1.2960688751746456,
                    pitch: 0.026631060265565054,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
                {
                    yaw: 3.0448085570224315,
                    pitch: 0.05778956567020899,
                    rotation: 0,
                    target: "53-mid",
                },
                {
                    yaw: -0.06711591504820369,
                    pitch: -0.020072000642176846,
                    rotation: 0,
                    target: "33-ground-floor-south",
                },
                {
                    yaw: 2.247836377517107,
                    pitch: 0.018204336887354344,
                    rotation: 0,
                    target: "37-tap-area-a---ground-floor",
                },
                {
                    yaw: -0.053694863023237005,
                    pitch: -0.46425150320738773,
                    rotation: 0,
                    target: "14-1st-floor-south",
                },
                {
                    yaw: -1.582996774655431,
                    pitch: -0.4042723215188495,
                    rotation: 0,
                    target: "12-ramp---1st-floor",
                },
                {
                    yaw: 1.2971239455238326,
                    pitch: -0.41532757956298205,
                    rotation: 0,
                    target: "16-staircase-a---1st-floor",
                },
                {
                    yaw: 2.262026728099891,
                    pitch: -0.28899574011245655,
                    rotation: 0,
                    target: "18-tap-area-a---1st-floor",
                },
                {
                    yaw: -1.5873353815805604,
                    pitch: -0.7219067571973738,
                    rotation: 0,
                    target: "70-ramp---2nd-floor",
                },
                {
                    yaw: -0.04576587474885763,
                    pitch: -0.761760737526048,
                    rotation: 0,
                    target: "72-2nd-floor-south",
                },
                {
                    yaw: 1.3072493648591923,
                    pitch: -0.7102287137683323,
                    rotation: 0,
                    target: "74-staircase-a---2nd-floor",
                },
                {
                    yaw: -2.506007008949263,
                    pitch: -0.5412708442379746,
                    rotation: 0,
                    target: "69-tap-area-b---2nd-floor",
                },
                {
                    yaw: 2.2729711857653276,
                    pitch: -0.5240056855582331,
                    rotation: 0,
                    target: "76-tap-area-a---2nd-floor",
                },
                {
                    yaw: -2.5048749576872353,
                    pitch: -0.29050082619572315,
                    rotation: 0,
                    target: "11-tap-area-b---1st-floor",
                },
                {
                    yaw: -2.495066461841466,
                    pitch: 0.023532781103522638,
                    rotation: 0,
                    target: "30-tap-area-b---ground-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "56-main-staircase-1-2",
            name: "Main Staircase 1-2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.3888174930472186,
                    pitch: 0.37503008641570545,
                    rotation: 0,
                    target: "20-vp-office-area-staircase",
                },
                {
                    yaw: 0.032852963391366785,
                    pitch: -0.1790029299024649,
                    rotation: 0,
                    target: "78-computer-lab-area-staircase",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "57-ramp-1-2",
            name: "Ramp 1-2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.04438240167991658,
                    pitch: 0.13232572954196087,
                    rotation: 0,
                    target: "12-ramp---1st-floor",
                },
                {
                    yaw: -0.05545756804070834,
                    pitch: -0.10821673064281612,
                    rotation: 0,
                    target: "70-ramp---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "58-ramp-g-1",
            name: "Ramp G-1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 3.0293523354545666,
                pitch: 0.027864568288002545,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -3.004723365180485,
                    pitch: 0.18287911748786811,
                    rotation: 0,
                    target: "31-ramp---ground-floor",
                },
                {
                    yaw: 3.018257954179002,
                    pitch: -0.012083831272477141,
                    rotation: 0,
                    target: "12-ramp---1st-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "59-main-staircase-g-1",
            name: "Main Staircase G-1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -3.128965878730691,
                pitch: 0.13887915361823033,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 3.0770852204069445,
                    pitch: -0.16810134763727902,
                    rotation: 0,
                    target: "20-vp-office-area-staircase",
                },
                {
                    yaw: -2.938260861297488,
                    pitch: 0.3845812779234006,
                    rotation: 0,
                    target: "23-entrance-hall-staircase",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "60-staircase-a-1-2",
            name: "Staircase A 1-2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.32679322373592967,
                    pitch: 0.31703779502921847,
                    rotation: 0,
                    target: "16-staircase-a---1st-floor",
                },
                {
                    yaw: 0.017877501190586287,
                    pitch: -0.1302494440049884,
                    rotation: 0,
                    target: "74-staircase-a---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "61-staircase-a-g-1",
            name: "Staircase A G-1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -3.015883834056593,
                pitch: 0.3266941945532196,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -2.8683492113205133,
                    pitch: 0.47858914164220323,
                    rotation: 0,
                    target: "35-staircase-a---ground-floor",
                },
                {
                    yaw: 3.1107706868050125,
                    pitch: -0.11012053983641579,
                    rotation: 0,
                    target: "16-staircase-a---1st-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "62-staircase-b-1-2",
            name: "Staircase B 1-2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.09949911605488992,
                    pitch: 0.3987901755447183,
                    rotation: 0,
                    target: "9-staircase-b----1st-floor",
                },
                {
                    yaw: -0.2208849127246495,
                    pitch: -0.19818198383161167,
                    rotation: 0,
                    target: "67-staircase-b---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "63-staircase-b-g-1",
            name: "Staircase B G-1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.9513241137722037,
                pitch: 0.29347121067665327,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -3.0856565948875954,
                    pitch: -0.11968396081171484,
                    rotation: 0,
                    target: "9-staircase-b----1st-floor",
                },
                {
                    yaw: -2.8009142627982246,
                    pitch: 0.4561548076512807,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "64-2nd-floor-north-west",
            name: "2nd Floor North West",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.8949361887583365,
                    pitch: 0.022385363492121613,
                    rotation: 0,
                    target: "77-2nd-floor-west-b",
                },
                {
                    yaw: -0.7276925238098464,
                    pitch: -0.003957135766071929,
                    rotation: 0,
                    target: "65-2nd-floor-north",
                },
                {
                    yaw: 2.690610375375556,
                    pitch: 0.08384981840166361,
                    rotation: 0,
                    target: "79-computer-lab-area",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "65-2nd-floor-north",
            name: "2nd Floor North",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 2.495606100019298,
                    pitch: 0.06219871161139601,
                    rotation: 0,
                    target: "64-2nd-floor-north-west",
                },
                {
                    yaw: -0.7190436920018666,
                    pitch: 0.012438371656950054,
                    rotation: 0,
                    target: "66-2nd-floor-north-east",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "66-2nd-floor-north-east",
            name: "2nd Floor North East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 2.9883710070915974,
                pitch: 0.007420237302188326,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -2.764492812734602,
                    pitch: 0.03525129308926367,
                    rotation: 0,
                    target: "65-2nd-floor-north",
                },
                {
                    yaw: 1.9117118760938734,
                    pitch: 0.06761028743546049,
                    rotation: 0,
                    target: "67-staircase-b---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "67-staircase-b---2nd-floor",
            name: "Staircase B - 2nd Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -0.9026130379893882,
                pitch: 0.07882794574720009,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 2.9245078408325984,
                    pitch: 0.4153271017813829,
                    rotation: 0,
                    target: "62-staircase-b-1-2",
                },
                {
                    yaw: -1.783949933380283,
                    pitch: 0.07304459296927845,
                    rotation: 0,
                    target: "68-2nd-floor-east",
                },
                {
                    yaw: 1.3462184715112233,
                    pitch: 0.030175257220740548,
                    rotation: 0,
                    target: "66-2nd-floor-north-east",
                },
                {
                    yaw: -0.2521028455568164,
                    pitch: 0.41702565282922244,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "68-2nd-floor-east",
            name: "2nd Floor East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -1.7483127340774374,
                    pitch: 0.02807539191466546,
                    rotation: 0,
                    target: "69-tap-area-b---2nd-floor",
                },
                {
                    yaw: 1.4154439274998651,
                    pitch: 0.04149050418604716,
                    rotation: 0,
                    target: "67-staircase-b---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "69-tap-area-b---2nd-floor",
            name: "Tap Area B - 2nd Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.14041045634706784,
                    pitch: -0.0329102445598064,
                    rotation: 0,
                    target: "76-tap-area-a---2nd-floor",
                },
                {
                    yaw: 1.428688600550247,
                    pitch: 0.014299458209784177,
                    rotation: 0,
                    target: "68-2nd-floor-east",
                },
                {
                    yaw: -1.7358688670241875,
                    pitch: 0.026065950810433947,
                    rotation: 0,
                    target: "70-ramp---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "70-ramp---2nd-floor",
            name: "Ramp - 2nd Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.03767060606472228,
                    pitch: 0.09585772297214845,
                    rotation: 0,
                    target: "57-ramp-1-2",
                },
                {
                    yaw: -1.5837878169418609,
                    pitch: 0.009593258777394809,
                    rotation: 0,
                    target: "69-tap-area-b---2nd-floor",
                },
                {
                    yaw: 1.5842521307493085,
                    pitch: 0.033095791437879996,
                    rotation: 0,
                    target: "71-2nd-floor-south-east",
                },
                {
                    yaw: -3.122606634436897,
                    pitch: 0.47461047082923,
                    rotation: 0,
                    target: "55-badminton-court",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "71-2nd-floor-south-east",
            name: "2nd Floor South East",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.02061631826637722,
                    pitch: 0.011385364983755863,
                    rotation: 0,
                    target: "80-science-lab-wing",
                },
                {
                    yaw: 0.3993766551279716,
                    pitch: 0.07515728301165936,
                    rotation: 0,
                    target: "42-biology-lab",
                },
                {
                    yaw: -1.5980717502914175,
                    pitch: 0.02962844587716873,
                    rotation: 0,
                    target: "70-ramp---2nd-floor",
                },
                {
                    yaw: 3.0823641599801483,
                    pitch: 0.05818447336287136,
                    rotation: 0,
                    target: "72-2nd-floor-south",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "72-2nd-floor-south",
            name: "2nd Floor South",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.6188189895240708,
                    pitch: 0.039514685502171076,
                    rotation: 0,
                    target: "71-2nd-floor-south-east",
                },
                {
                    yaw: -1.515522169840457,
                    pitch: 0.03763297442402802,
                    rotation: 0,
                    target: "73-2nd-floor-south-west",
                },
                {
                    yaw: -0.019173008118315238,
                    pitch: 0.34405734348296413,
                    rotation: 0,
                    target: "53-mid",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "73-2nd-floor-south-west",
            name: "2nd Floor South West",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -0.9419969507465353,
                pitch: 0.026815018558110637,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -0.06930234472280894,
                    pitch: -0.0013072638345654752,
                    rotation: 0,
                    target: "72-2nd-floor-south",
                },
                {
                    yaw: -1.6541389166379137,
                    pitch: 0.0334676616260392,
                    rotation: 0,
                    target: "74-staircase-a---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "74-staircase-a---2nd-floor",
            name: "Staircase A - 2nd Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.06651911439944058,
                    pitch: 0.32882537514895205,
                    rotation: 0,
                    target: "60-staircase-a-1-2",
                },
                {
                    yaw: -1.569293879855282,
                    pitch: 0.05525769547690018,
                    rotation: 0,
                    target: "73-2nd-floor-south-west",
                },
                {
                    yaw: 1.5271338343291365,
                    pitch: 0.053735186628649956,
                    rotation: 0,
                    target: "75-2nd-floor-west-a",
                },
                {
                    yaw: 3.0511317875326203,
                    pitch: 0.49991383361719954,
                    rotation: 0,
                    target: "55-badminton-court",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "75-2nd-floor-west-a",
            name: "2nd Floor West A",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.6591186207762076,
                    pitch: 0.06256001565606262,
                    rotation: 0,
                    target: "74-staircase-a---2nd-floor",
                },
                {
                    yaw: -1.4671738906488603,
                    pitch: 0.0376395939160723,
                    rotation: 0,
                    target: "76-tap-area-a---2nd-floor",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "76-tap-area-a---2nd-floor",
            name: "Tap Area A - 2nd Floor",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -3.014746327397976,
                    pitch: 0.04549648123494876,
                    rotation: 0,
                    target: "69-tap-area-b---2nd-floor",
                },
                {
                    yaw: -1.4361919377596024,
                    pitch: 0.026624927656380137,
                    rotation: 0,
                    target: "75-2nd-floor-west-a",
                },
                {
                    yaw: 1.6911034814961088,
                    pitch: 0.028920641991687646,
                    rotation: 0,
                    target: "77-2nd-floor-west-b",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "77-2nd-floor-west-b",
            name: "2nd Floor West B",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 1.5872005129746656,
                    pitch: 0.04358411196337819,
                    rotation: 0,
                    target: "76-tap-area-a---2nd-floor",
                },
                {
                    yaw: -1.5201930681007667,
                    pitch: 0.0337246268518232,
                    rotation: 0,
                    target: "64-2nd-floor-north-west",
                },
                {
                    yaw: -0.10100818663492639,
                    pitch: 0.335485540312213,
                    rotation: 0,
                    target: "54-assembly-ground",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "78-computer-lab-area-staircase",
            name: "Computer Lab Area Staircase",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -2.1420082990342024,
                pitch: 0.03610927164134736,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -3.107601335357586,
                    pitch: 0.06796592129917656,
                    rotation: 0,
                    target: "79-computer-lab-area",
                },
                {
                    yaw: -1.299335927190663,
                    pitch: 0.40913069658476076,
                    rotation: 0,
                    target: "56-main-staircase-1-2",
                },
            ],
            infoHotspots: [
                {
                    yaw: 0.11570288484823088,
                    pitch: -0.018849251837153247,
                    title: "UPS Room",
                    text: "",
                },
                {
                    yaw: -0.40994390924015534,
                    pitch: -0.005848895675107713,
                    title: "Examination Cell",
                    text: "",
                },
            ],
        },
        {
            id: "79-computer-lab-area",
            name: "Computer Lab Area",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: 2.1531783022933606,
                pitch: 0.016134660256948763,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -1.8050135069005275,
                    pitch: 0.08930926941420836,
                    rotation: 0,
                    target: "45-computer-lab-senior",
                },
                {
                    yaw: 1.8651779526875405,
                    pitch: 0.07991639349709345,
                    rotation: 0,
                    target: "44-computer-lab-junior",
                },
                {
                    yaw: 1.4788881768629754,
                    pitch: 0.05954350977367895,
                    rotation: 0,
                    target: "78-computer-lab-area-staircase",
                },
                {
                    yaw: 2.1618539357845012,
                    pitch: 0.08392742650843488,
                    rotation: 0,
                    target: "41-av-room",
                },
                {
                    yaw: -1.3772742014359274,
                    pitch: 0.035163956896891335,
                    rotation: 0,
                    target: "64-2nd-floor-north-west",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "80-science-lab-wing",
            name: "Science Lab Wing",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -3.002154007987004,
                pitch: -0.10674705179169663,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: -0.012237238819729157,
                    pitch: 0.0009324302894242464,
                    rotation: 0,
                    target: "71-2nd-floor-south-east",
                },
                {
                    yaw: 3.095172848482223,
                    pitch: 0.08939560316327189,
                    rotation: 0,
                    target: "43-chemistry-lab",
                },
                {
                    yaw: -2.926773688588895,
                    pitch: 0.1106130651820525,
                    rotation: 0,
                    target: "49-physics-lab",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "81-side-entrance-b-1",
            name: "Side Entrance B 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.0360690310877807,
                    pitch: -0.03219252132610961,
                    rotation: 0,
                    target: "82-side-entrance-b-2",
                },
                {
                    yaw: -1.5805636068620892,
                    pitch: 0.006460740956363509,
                    rotation: 0,
                    target: "85-side-entrance-b-south",
                },
                {
                    yaw: 1.5317475630539041,
                    pitch: 0.028380685651949733,
                    rotation: 0,
                    target: "84-swings-area",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "82-side-entrance-b-2",
            name: "Side Entrance B 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 3.0568578687797157,
                    pitch: 0.1036941337652948,
                    rotation: 0,
                    target: "81-side-entrance-b-1",
                },
                {
                    yaw: -0.10739164303614501,
                    pitch: 0.02761050701522194,
                    rotation: 0,
                    target: "83-side-entrance-b-3",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "83-side-entrance-b-3",
            name: "Side Entrance B 3",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.09857707349210543,
                    pitch: -0.005360913746539353,
                    rotation: 0,
                    target: "28-staircase-b---ground-floor",
                },
                {
                    yaw: 3.098094371726349,
                    pitch: 0.09384165221402974,
                    rotation: 0,
                    target: "82-side-entrance-b-2",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "84-swings-area",
            name: "Swings Area",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                yaw: -1.7954004274373094,
                pitch: -0.029014948651248318,
                fov: 1.4612050697485615,
            },
            linkHotspots: [
                {
                    yaw: 0.06991659727587596,
                    pitch: -0.001872023537689671,
                    rotation: 0,
                    target: "81-side-entrance-b-1",
                },
            ],
            infoHotspots: [
                {
                    yaw: -2.267676642695738,
                    pitch: 0.06410900157680288,
                    title: "Swings",
                    text: "",
                },
            ],
        },
        {
            id: "85-side-entrance-b-south",
            name: "Side Entrance B South",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1520,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.4016010564683654,
                    pitch: -0.03672679915355204,
                    rotation: 0,
                    target: "40-mad-wing-2",
                },
                {
                    yaw: 2.6855156832168445,
                    pitch: 0.05440984572763874,
                    rotation: 0,
                    target: "81-side-entrance-b-1",
                },
            ],
            infoHotspots: [
                {
                    yaw: -0.6132858786738353,
                    pitch: -0.02890103863565585,
                    title: "Palyground",
                    text: "",
                },
            ],
        },
    ],
    name: "AVBIL Virtual Tour",
    settings: {
        mouseViewMode: "drag",
        autorotateEnabled: true,
        fullscreenButton: true,
        viewControlButtons: true,
    },
};
