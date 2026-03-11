declare global {
    interface SignInFormData {
        email: string;
        password: string;
    };

    type SignUpFormData = {
        fullName: string;
        email: string;
        password: string;
        country: string;
        investmentGoals: string;
        riskTolerance: string;
        preferredIndustrys: string;
    };

    interface WelcomeEmailData {
        email: string;
        name: string;
        intro: string;
    };








    type StockWithData = {


        currentPrice?: number;
        changePercent?: number;
        changeAmount?: number;
        priceFomratted?: string;
        changeFormatted?: string;
        changeAmountFormatted?: string;
        marketCap?: string;
        peRatio?: string;
        tradingViewSymbol?: string;
    };

    type FinnhubSearchResult = {
        symbol: string;
        description: string;
        displaySymbol: string;
        type: string;
    };

}

export {};