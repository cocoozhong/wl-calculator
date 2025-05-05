// 韵达快运运费数据
const yundaRates = {
    baseRates: {
        // 基础运费数据
        provinces: {
            "浙江省": { firstWeight: 20, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.69 },
            "福建省": { firstWeight: 20, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.69 },
            "江苏省": { firstWeight: 20, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.69 },
            "广西省": { firstWeight: 20, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.69 },
            "湖南省": { firstWeight: 20, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.75 },
            "江西省": { firstWeight: 20, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.75 },
            "安徽省": { firstWeight: 22, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.75 },
            "湖北省": { firstWeight: 22, price11To300: 0.89, price301To800: 0.83, priceAbove800: 0.75 },
            "上海市": { firstWeight: 22, price11To300: 1.1, price301To800: 0.9, priceAbove800: 0.8 },
            "河南省": { firstWeight: 22, price11To300: 1.1, price301To800: 1.0, priceAbove800: 0.9 },
            "山东省": { firstWeight: 26, price11To300: 1.3, price301To800: 1.2, priceAbove800: 1.05 },
            "山西省": { firstWeight: 26, price11To300: 1.3, price301To800: 1.2, priceAbove800: 1.05 },
            "天津市": { firstWeight: 26, price11To300: 1.3, price301To800: 1.2, priceAbove800: 1.1 },
            "陕西省": { firstWeight: 26, price11To300: 1.3, price301To800: 1.2, priceAbove800: 1.1 },
            "重庆市": { firstWeight: 26, price11To300: 1.3, price301To800: 1.2, priceAbove800: 1.1 },
            "河北省": { firstWeight: 26, price11To300: 1.3, price301To800: 1.2, priceAbove800: 1.1 },
            "四川省": { firstWeight: 30, price11To300: 1.5, price301To800: 1.3, priceAbove800: 1.2 },
            "贵州省": { firstWeight: 30, price11To300: 1.5, price301To800: 1.3, priceAbove800: 1.2 },
            "云南省": { firstWeight: 30, price11To300: 1.5, price301To800: 1.3, priceAbove800: 1.2 },
            "北京市": { firstWeight: 35, price11To300: 1.6, price301To800: 1.5, priceAbove800: 1.4 },
            "海南省": { firstWeight: 35, price11To300: 1.6, price301To800: 1.5, priceAbove800: 1.4 },
            "辽宁省": { firstWeight: 35, price11To300: 2.0, price301To800: 1.8, priceAbove800: 1.7 },
            "吉林省": { firstWeight: 35, price11To300: 2.0, price301To800: 1.8, priceAbove800: 1.7 },
            "黑龙江省": { firstWeight: 35, price11To300: 2.0, price301To800: 1.8, priceAbove800: 1.7 },
            "甘肃省": { firstWeight: 35, price11To300: 2.5, price301To800: 2.3, priceAbove800: 2.2 },
            "内蒙古自治区": { firstWeight: 35, price11To300: 2.5, price301To800: 2.3, priceAbove800: 2.2 },
            "宁夏回族自治区": { firstWeight: 35, price11To300: 2.5, price301To800: 2.3, priceAbove800: 2.2 },
            "青海省": { firstWeight: 35, price11To300: 2.5, price301To800: 2.3, priceAbove800: 2.2 },
            "新疆维吾尔自治区": { firstWeight: 50, price11To300: 4.0, price301To800: 3.8, priceAbove800: 3.6 },
            "西藏自治区": { firstWeight: 50, price11To300: 4.0, price301To800: 3.8, priceAbove800: 3.6 }
        },
        // 特殊区域价格
        specialAreas: {
            "广东省": {
                "东莞市": { firstWeight: 15, price11To300: 0.65, price301To800: 0.6, priceAbove800: 0.55 },
                "中山市": { firstWeight: 15, price11To300: 0.65, price301To800: 0.6, priceAbove800: 0.55 },
                "广州市": { firstWeight: 15, price11To300: 0.65, price301To800: 0.6, priceAbove800: 0.55 },
                "珠海市": { firstWeight: 15, price11To300: 0.65, price301To800: 0.6, priceAbove800: 0.55 },
                "佛山市": { firstWeight: 15, price11To300: 0.65, price301To800: 0.6, priceAbove800: 0.55 },
                "惠州市": { firstWeight: 15, price11To300: 0.68, price301To800: 0.63, priceAbove800: 0.6 },
                "深圳市": { firstWeight: 15, price11To300: 0.68, price301To800: 0.63, priceAbove800: 0.6 },
                "江门市": { firstWeight: 15, price11To300: 0.68, price301To800: 0.63, priceAbove800: 0.6 },
                "茂名市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "湛江市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "肇庆市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "清远市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "梅州市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "河源市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "阳江市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "潮州市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "揭阳市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "云浮市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "韶关市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "汕头市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 },
                "汕尾市": { firstWeight: 18, price11To300: 0.7, price301To800: 0.65, priceAbove800: 0.65 }
            }
        }
    },

    calculateFee: function(weight, province, city) {
        let rate;
        
        // 检查是否有特殊区域价格
        if (this.baseRates.specialAreas[province] && 
            this.baseRates.specialAreas[province][city]) {
            rate = this.baseRates.specialAreas[province][city];
        } else {
            rate = this.baseRates.provinces[province];
        }
        
        if (!rate) return null;
        
        // 计算运费
        if (weight <= 10) {
            return rate.firstWeight;
        } else if (weight <= 300) {
            return rate.firstWeight + (weight - 10) * rate.price11To300;
        } else if (weight <= 800) {
            return rate.firstWeight + (weight - 10) * rate.price301To800;
        } else {
            return rate.firstWeight + (weight - 10) * rate.priceAbove800;
        }
    }
};

export default yundaRates;