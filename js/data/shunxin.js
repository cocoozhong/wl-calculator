// 顺心捷达/中通快运运费数据
const shunxinRates = {
    baseRates: {
        // 基础运费数据
        provinces: {
            // 一级区域
            "上海": { firstWeight: 18, price11To500: 0.95, priceAbove500: 0.9 },
            "福建省": { firstWeight: 18, price11To500: 0.95, priceAbove500: 0.9 },
            "江苏省": { firstWeight: 18, price11To500: 0.95, priceAbove500: 0.9 },
            "浙江省": { firstWeight: 18, price11To500: 0.95, priceAbove500: 0.9 },
            "广西省": { firstWeight: 18, price11To500: 0.95, priceAbove500: 0.9 },
            "江西省": { firstWeight: 18, price11To500: 0.98, priceAbove500: 0.95 },
            "湖南省": { firstWeight: 18, price11To500: 0.98, priceAbove500: 0.9 },
            "安徽省": { firstWeight: 18, price11To500: 0.98, priceAbove500: 0.9 },
            "湖北省": { firstWeight: 23, price11To500: 1.05, priceAbove500: 0.98 },
            "河南省": { firstWeight: 23, price11To500: 1.05, priceAbove500: 1 },
            "重庆市": { firstWeight: 23, price11To500: 1.3, priceAbove500: 1.25 },
            "天津市": { firstWeight: 23, price11To500: 1.3, priceAbove500: 1.15 },
            "山东省": { firstWeight: 23, price11To500: 1.15, priceAbove500: 1.05 },
            "河北省": { firstWeight: 23, price11To500: 1.3, priceAbove500: 1.2 },
            "陕西省": { firstWeight: 25, price11To500: 1.3, priceAbove500: 1.25 },
            "云南省": { firstWeight: 30, price11To500: 1.33, priceAbove500: 1.25 },
            "山西省": { firstWeight: 28, price11To500: 1.3, priceAbove500: 1.2 },
            "四川省": { firstWeight: 30, price11To500: 1.3, priceAbove500: 1.2 },
            "海南省": { firstWeight: 28, price11To500: 1.55, priceAbove500: 1.45 },
            "北京市": { firstWeight: 30, price11To500: 1.35, priceAbove500: 1.15 },
            "贵州省": { firstWeight: 28, price11To500: 1.33, priceAbove500: 1.25 },
            "吉林省": { firstWeight: 30, price11To500: 1.95, priceAbove500: 1.75 },
            "辽宁省": { firstWeight: 30, price11To500: 1.95, priceAbove500: 1.75 },
            "宁夏回族自治区": { firstWeight: 38, price11To500: 2.15, priceAbove500: 2.05 },
            "甘肃省": { firstWeight: 38, price11To500: 2.15, priceAbove500: 2.05 },
            "黑龙江省": { firstWeight: 32, price11To500: 2.05, priceAbove500: 1.85 },
            "内蒙古自治区": { firstWeight: 38, price11To500: 2.25, priceAbove500: 2.15 },
            "青海省": { firstWeight: 38, price11To500: 2.25, priceAbove500: 2.15 },
            "新疆维吾尔自治区": { firstWeight: 38, price11To500: 3.05, priceAbove500: 2.95 },
            "西藏自治区": { firstWeight: 38, price11To500: 3.05, priceAbove500: 2.95 }
        },
        // 二级区域匹配
        specialAreas: {
            "浙江省": {
                "舟山市": { firstWeight: 38, price11To500: 1.25, priceAbove500: 1.05 }
            },
            "重庆市": {
                "石柱土家族自治县": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.3 },
                "秀山土家族苗族自治县": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.3 },
                "酉阳土家族苗族自治县": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.3 },
                "彭水苗族土家族自治县": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.3 }
            },
            "云南省": {
                "楚雄彝族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "红河哈尼族彝族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "文山壮族苗族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "西双版纳傣族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "大理白族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "德宏傣族景颇族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "怒江傈僳族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "迪庆藏族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 }
            },
            "四川省": {
                "阿坝藏族羌族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "甘孜藏族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 },
                "凉山彝族自治州": { firstWeight: 30, price11To500: 1.5, priceAbove500: 1.25 }
            },
            "贵州省": {
                "毕节民族自治州": { firstWeight: 28, price11To500: 1.45, priceAbove500: 1.25 },
                "黔东南苗族侗族自治州": { firstWeight: 28, price11To500: 1.45, priceAbove500: 1.25 },
                "黔南布依族苗族自治州": { firstWeight: 28, price11To500: 1.45, priceAbove500: 1.25 }
            },
            "广东省": {
                "广州市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "东莞市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "佛山市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "中山市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "珠海市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "江门市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "阳江市": { firstWeight: 15, price11To500: 0.6, priceAbove500: 0.6 },
                "深圳市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "惠州市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "韶关市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "河源市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "肇庆市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "梅州市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "清远市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "云浮市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "汕尾市": { firstWeight: 18, price11To500: 0.65, priceAbove500: 0.65 },
                "湛江市": { firstWeight: 18, price11To500: 0.7, priceAbove500: 0.65 },
                "茂名市": { firstWeight: 18, price11To500: 0.7, priceAbove500: 0.65 },
                "潮州市": { firstWeight: 18, price11To500: 0.7, priceAbove500: 0.65 },
                "汕头市": { firstWeight: 18, price11To500: 0.7, priceAbove500: 0.65 },
                "揭阳市": { firstWeight: 18, price11To500: 0.7, priceAbove500: 0.65 }
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
        } else if (weight <= 500) {
            return rate.firstWeight + (weight - 10) * rate.price11To500;
        } else {
            return rate.firstWeight + (weight - 10) * rate.priceAbove500;
        }
    }
};

export default shunxinRates;