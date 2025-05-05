// 安能定时达运费数据
const aneOntimeRates = {
    baseRates: {
        // 基础运费数据
        provinces: {
            "上海市": { firstWeight: 30, priceAbove10: 1.28 },
            "福建省": { firstWeight: 30, priceAbove10: 1.28 },
            "江苏省": { firstWeight: 30, priceAbove10: 1.28 },
            "浙江省": { firstWeight: 30, priceAbove10: 1.28 },
            "广西省": { firstWeight: 30, priceAbove10: 1.35 },
            "江西省": { firstWeight: 30, priceAbove10: 1.35 },
            "湖南省": { firstWeight: 30, priceAbove10: 1.38 },
            "安徽省": { firstWeight: 30, priceAbove10: 1.38 },
            "湖北省": { firstWeight: 32, priceAbove10: 1.38 },
            "河南省": { firstWeight: 32, priceAbove10: 1.58 },
            "重庆市": { firstWeight: 32, priceAbove10: 1.68 },
            "天津市": { firstWeight: 32, priceAbove10: 1.68 },
            "山东省": { firstWeight: 32, priceAbove10: 1.68 },
            "河北省": { firstWeight: 32, priceAbove10: 1.68 },
            "陕西省": { firstWeight: 35, priceAbove10: 1.68 },
            "云南省": { firstWeight: 35, priceAbove10: 1.93 },
            "山西省": { firstWeight: 35, priceAbove10: 1.68 },
            "四川省": { firstWeight: 38, priceAbove10: 1.68 },
            "海南省": { firstWeight: 38, priceAbove10: 2.1 },
            "北京市": { firstWeight: 40, priceAbove10: 1.75 },
            "贵州省": { firstWeight: 40, priceAbove10: 1.75 },
            "吉林省": { firstWeight: 40, priceAbove10: 2.3 },
            "辽宁省": { firstWeight: 40, priceAbove10: 2.3 },
            "宁夏回族自治区": { firstWeight: 45, priceAbove10: 2.3 },
            "甘肃省": { firstWeight: 45, priceAbove10: 2.3 },
            "黑龙江省": { firstWeight: 45, priceAbove10: 2.9 },
            "内蒙古自治区": { firstWeight: 50, priceAbove10: 3.3 },
            "青海省": { firstWeight: 50, priceAbove10: 3.3 },
            "新疆维吾尔自治区": { firstWeight: 60, priceAbove10: 3.8 },
            "西藏自治区": { firstWeight: 60, priceAbove10: 4.3 }
        },
        // 特殊区域价格
        specialAreas: {
            "云南省": {
                "楚雄彝族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "红河哈尼族彝族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "文山壮族苗族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "西双版纳傣族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "大理白族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "德宏傣族景颇族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "怒江傈僳族自治州": { firstWeight: 40, priceAbove10: 2.1 },
                "迪庆藏族自治州": { firstWeight: 40, priceAbove10: 2.1 }
            },
            "四川省": {
                "阿坝藏族羌族自治州": { firstWeight: 45, priceAbove10: 2.7 },
                "甘孜藏族自治州": { firstWeight: 45, priceAbove10: 2.7 },
                "凉山彝族自治州": { firstWeight: 45, priceAbove10: 2.7 }
            },
            "广东省": {
                "广州市": { firstWeight: 25, priceAbove10: 0.75 },
                "佛山市": { firstWeight: 25, priceAbove10: 0.75 },
                "深圳市": { firstWeight: 25, priceAbove10: 0.75 },
                "江门市": { firstWeight: 25, priceAbove10: 0.75 },
                "珠海市": { firstWeight: 25, priceAbove10: 0.75 },
                "中山市": { firstWeight: 25, priceAbove10: 0.75 },
                "东莞市": { firstWeight: 25, priceAbove10: 0.75 },
                "清远市": { firstWeight: 25, priceAbove10: 0.8 },
                "河源市": { firstWeight: 25, priceAbove10: 0.8 },
                "云浮市": { firstWeight: 25, priceAbove10: 0.8 },
                "肇庆市": { firstWeight: 25, priceAbove10: 0.8 },
                "梅州市": { firstWeight: 25, priceAbove10: 0.85 },
                "惠州市": { firstWeight: 25, priceAbove10: 0.85 },
                "韶关市": { firstWeight: 25, priceAbove10: 0.85 },
                "茂名市": { firstWeight: 25, priceAbove10: 0.85 },
                "湛江市": { firstWeight: 25, priceAbove10: 0.85 },
                "汕头市": { firstWeight: 25, priceAbove10: 0.85 },
                "揭阳市": { firstWeight: 25, priceAbove10: 0.85 },
                "潮州市": { firstWeight: 25, priceAbove10: 0.85 },
                "汕尾市": { firstWeight: 25, priceAbove10: 0.85 }
            }
        },
        // 三级区域价格
        specialDistricts: {
            "广东省": {
                "深圳市": {
                    "盐田区": { firstWeight: 25, priceAbove10: 0.9 }
                },
                "广州市": {
                    "天河区": { firstWeight: 25, priceAbove10: 0.9 },
                    "黄埔区": { firstWeight: 25, priceAbove10: 0.9 },
                    "白云区": { firstWeight: 25, priceAbove10: 0.9 },
                    "越秀区": { firstWeight: 25, priceAbove10: 0.9 }
                }
            }
        }
    },

    calculateFee: function(weight, province, city, district) {
        let rate;
        
        // 检查是否有三级区域价格
        if (this.baseRates.specialDistricts[province] && 
            this.baseRates.specialDistricts[province][city] &&
            this.baseRates.specialDistricts[province][city][district]) {
            rate = this.baseRates.specialDistricts[province][city][district];
        }
        // 检查是否有特殊区域价格
        else if (this.baseRates.specialAreas[province] && 
            this.baseRates.specialAreas[province][city]) {
            rate = this.baseRates.specialAreas[province][city];
        }
        // 使用省级价格
        else {
            rate = this.baseRates.provinces[province];
        }
        
        if (!rate) return null;
        
        // 计算运费
        if (weight <= 10) {
            return rate.firstWeight;
        } else {
            return rate.firstWeight + (weight - 10) * rate.priceAbove10;
        }
    }
};

export default aneOntimeRates;