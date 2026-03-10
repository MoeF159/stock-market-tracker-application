export const NAV_ITEMS = [
    {href: "/", label: "Dashboard"},
    {href: "/search", label: "Search"},
    {href: "/watchlist", label: "Watchlist"}
]

export const INVESTMENT_GOALS = [
    {value: 'Balanced', label: 'Balanced'},
    {value: 'Conservative', label: 'Conservative'},
    {value: 'Income', label: 'Income'},
    {value: 'Growth', label: 'Growth'},
];


export const RISK_TOLERANCE_OPTIONS = [
    {value: "low", label: "Low"},
    {value: "medium", label: "Medium"},
    {value: "high", label: "High"},
];

export const PREFERRED_INDUSTRIES = [
    {value: "Technology", label: "Technology"},
    {value: "Healthcare", label: "Healthcare"},
    {value: "Finance", label: "Finance"},
    {value: "Energy", label: "Energy"},
    {value: "Consumer Goods", label: "Consumer Goods"},
];

export const ALERT_TYPE_OPTIONS = [
    {value: "price", label: "Price"},
    {value: "volume", label: "Volume"},
];

export const CONDITION_OPTIONS = [
    {value: "greater", label: "Greater Than (>)"},
    {value: "less", label: "Less Than (<)"},
];


export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: "dark",
    dateRange: "12M",
    locale: "en",
    largeChartURL: "",
    isTransparent: true,
    showFloatingTooltip: true,
    plotLineColorGrowing: '#0FEDBE',
    plotLineColorFalling: '#F23645',
    gridLineColor: 'rgba(240, 243, 250, 0)',  
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',    
    belowLineFillColorFalling: 'rgba(242, 54, 69, 0.12)',   
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',    
    belowLineFillColorFallingBottom: 'rgba(242, 54, 69, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)',
    tabs: [
        {
            title: "Financial",
            symbols: [
                {s: "NYSE:JPM", d: "JPMorgan Chase"},
                {s: "NYSE:BAC", d: "Bank of America"},
                {s: "NYSE:WFC", d: "Wells Fargo"},
                {s: "NYSE:C", d: "Citigroup"},
                {s: "NYSE:HSBC", d: "HSBC Holdings Plc"},
                {s: "NYSE:MA", d: "Mastercard Incorporated"},
            ]
        },

        {
            title: "Technology",
            symbols: [
                {s: "NASDAQ:AAPL", d: "Apple Inc."},
                {s: "NASDAQ:MSFT", d: "Microsoft Corporation"},
                {s: "NASDAQ:GOOGL", d: "Alphabet Inc."},
                {s: "NASDAQ:META", d: "Meta Platforms Inc"},
                {s: "NYSE:ORCL", d: "Oracle Corp"},
                {s: "NASDAQ:INTC", d: "Intel Corporation"},
            ]
        },

        {
            title: "Services",
            symbols: [
                {s: "NASDAQ:AMZN", d: "Amazon."},
                {s: "NYSE:BABA", d: "Alibaba Group Holdings Ltd."},
                {s: "NYSE:T", d: "AT&T Inc."},
                {s: "NASDAQ:WMT", d: "Walmart Inc."},
                {s: "NYSE:V", d: "Visa Inc."},
            ]
        },

    ],

    support_host: 'https://www.tradingview.com',
    backgroundColor: "#141414",
    width: "100%",
    height: "600",
    showSymbolLogo: true,
    showChart: true,
};


        export const HEATMAP_WIDGET_CONFIG = {

            "dataSource": "SPX500",
            "blockSize": "market_cap_basic",
            "blockColor": "change",
            "grouping": "sector",
            isTransparent: true,
            "locale": "en",
            "symbolUrl": "",
            "colorTheme": "dark",
            "exchanges": [],
            "hasTopBar": false,
            "isDataSetEnabled": false,
            "isZoomEnabled": true,
            "hasSymbolTooltip": true,
            "isMonoSize": false,
            "width": "100%",
            "height": "600",
        };


        export const TOP_STORIES_WIDGET_CONFIG = {
            displayMode: 'regular',
            colorTheme: 'dark',
            feedMode: 'market',
            isTransparent: true,
            locale: 'en',
            market: 'stock',
            width: '100%',
            height: '600',

        };
        
        
        
        export const MARKET_DATA_WIDGET_CONFIG = {
            title: 'Stocks',
            width: '100%',
            height: '600',
            locale: 'en',
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: false,
            backgroundColor: "#0F0F0F",
            symbolsGroups: [
                {
                    name: 'Financial',
                    symbols: [
                        {name: 'NYSE:JPM', displayName: 'JPMorgan Chase'},
                        {name: 'NYSE:BAC', displayName: 'Bank of America'},
                        {name: 'NYSE:WFC', displayName: 'Wells Fargo'},
                        {name: 'NYSE:C', displayName: 'Citigroup'},
                        {name: 'NYSE:HSBC', displayName: 'HSBC Holdings Plc'},
                        {name: 'NYSE:MA', displayName: 'Mastercard Incorporated'},
                    ],
                },

                {
                    name: 'Technology',
                    symbols: [
                        {name: 'NASDAQ:AAPL', displayName: 'Apple Inc.'},
                        {name: 'NASDAQ:MSFT', displayName: 'Microsoft Corporation'},
                        {name: 'NASDAQ:GOOGL', displayName: 'Alphabet Inc.'},
                        {name: 'NASDAQ:META', displayName: 'Meta Platforms Inc.'},
                        {name: 'NYSE:ORCL', displayName: 'Oracle Corporation'},
                        {name: 'NASDAQ:INTC', displayName: 'Intel Corporation'},                    
                    ],
                },

                {
                    name: 'Services',
                    symbols: [
                        {name: 'NASDAQ:AMZN', displayName: 'Amazon.'},
                        {name: 'NYSE:BABA', displayName: 'Alibaba Group Holdings Ltd.'},
                        {name: 'NYSE:T', displayName: 'AT&T Inc.'},
                        {name: 'NASDAQ:WMT', displayName: 'Walmart Inc.'},
                        {name: 'NYSE:V', displayName: 'Visa Inc.'},
                    ],
                },

            ]
        }



        export const POPULAR_STOCKS_SYMBOL = [


            // Tech Giants
            'AAPL',
            'MSFT',
            'GOOGL',
            'AMZN',
            'META',
            'TSLA',
            'NVDA',
            'NFLX',
            'ORCL',
            'CRM',

            // Growing Tech Companies
            'ADBE',
            'INTC',
            'AMD',
            'PYPL',
            'UBER',
            'ZOOM',
            'SPOT',
            'SQ',
            'SHOP',
            'ROKU',

            // Newer Tech Companies
            'SNOW',
            'PLTR',
            'COIN',
            'RBLX',
            'DDOG',
            'CRWD',
            'NET',
            'ZM',
            'OKTA',
            'TWLO',

            // Consumer & Delivery Apps
            'DOCU',
            'PTON',
            'PINS',
            'SNAP',
            'LYFT',
            'DASH',
            'ABNB',
            'RIVN',
            'LCID',
            'NIO',


            // International Companies
            'XPEV',
            'LI',
            'BABA',
            'JD',
            'PDD',
            'TME',
            'BILI',
            'DIDI',
            'GRAB',
            'SE',
        ];
