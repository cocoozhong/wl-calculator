// 安能物流运费数据
const aneRates = {
    baseRates: {
        // 基础运费数据
        provinces: {
            "上海市": { firstWeight: 30, priceAbove10: 1.0 },
            "福建省": { firstWeight: 30, priceAbove10: 1.0 },
            "江苏省": { firstWeight: 30, priceAbove10: 1.0 },
            "浙江省": { firstWeight: 30, priceAbove10: 1.0 },
            "广西省": { firstWeight: 30, priceAbove10: 1.1 },
            "江西省": { firstWeight: 30, priceAbove10: 1.1 },
            "湖南省": { firstWeight: 30, priceAbove10: 1.2 },
            "安徽省": { firstWeight: 30, priceAbove10: 1.2 },
            "湖北省": { firstWeight: 32, priceAbove10: 1.2 },
            "河南省": { firstWeight: 32, priceAbove10: 1.2 },
            "重庆市": { firstWeight: 32, priceAbove10: 1.48 },
            "天津市": { firstWeight: 32, priceAbove10: 1.48 },
            "山东省": { firstWeight: 32, priceAbove10: 1.48 },
            "河北省": { firstWeight: 32, priceAbove10: 1.48 },
            "陕西省": { firstWeight: 35, priceAbove10: 1.48 },
            "云南省": { firstWeight: 35, priceAbove10: 1.6 },
            "山西省": { firstWeight: 35, priceAbove10: 1.58 },
            "四川省": { firstWeight: 38, priceAbove10: 1.58 },
            "海南省": { firstWeight: 38, priceAbove10: 1.9 },
            "北京市": { firstWeight: 40, priceAbove10: 1.5 },
            "贵州省": { firstWeight: 40, priceAbove10: 1.5 },
            "吉林省": { firstWeight: 40, priceAbove10: 2.0 },
            "辽宁省": { firstWeight: 40, priceAbove10: 2.0 },
            "宁夏回族自治区": { firstWeight: 45, priceAbove10: 2.0 },
            "甘肃省": { firstWeight: 45, priceAbove10: 2.0 },
            "黑龙江省": { firstWeight: 45, priceAbove10: 2.3 },
            "内蒙古自治区": { firstWeight: 50, priceAbove10: 3.0 },
            "青海省": { firstWeight: 50, priceAbove10: 3.0 },
            "新疆维吾尔自治区": { firstWeight: 60, priceAbove10: 3.8 },
            "西藏自治区": { firstWeight: 60, priceAbove10: 4.0 }
        },
        // 特殊区域价格
        specialAreas: {
            "云南省": {
                "楚雄彝族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "红河哈尼族彝族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "文山壮族苗族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "西双版纳傣族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "大理白族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "德宏傣族景颇族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "怒江傈僳族自治州": { firstWeight: 40, priceAbove10: 1.9 },
                "迪庆藏族自治州": { firstWeight: 40, priceAbove10: 1.9 }
            },
            "四川省": {
                "阿坝藏族羌族自治州": { firstWeight: 45, priceAbove10: 2.5 },
                "甘孜藏族自治州": { firstWeight: 45, priceAbove10: 2.5 },
                "凉山彝族自治州": { firstWeight: 45, priceAbove10: 2.5 }
            },
            "广东省": {
                "广州市": { firstWeight: 25, priceAbove10: 0.68 },
                "佛山市": { firstWeight: 25, priceAbove10: 0.68 },
                "深圳市": { firstWeight: 25, priceAbove10: 0.68 },
                "江门市": { firstWeight: 25, priceAbove10: 0.68 },
                "珠海市": { firstWeight: 25, priceAbove10: 0.68 },
                "中山市": { firstWeight: 25, priceAbove10: 0.68 },
                "东莞市": { firstWeight: 25, priceAbove10: 0.68 },
                "清远市": { firstWeight: 25, priceAbove10: 0.75 },
                "河源市": { firstWeight: 25, priceAbove10: 0.75 },
                "韶关市": { firstWeight: 25, priceAbove10: 0.75 },
                "梅州市": { firstWeight: 25, priceAbove10: 0.75 },
                "惠州市": { firstWeight: 25, priceAbove10: 0.75 },
                "茂名市": { firstWeight: 25, priceAbove10: 0.75 },
                "湛江市": { firstWeight: 25, priceAbove10: 0.75 },
                "汕头市": { firstWeight: 25, priceAbove10: 0.75 },
                "揭阳市": { firstWeight: 25, priceAbove10: 0.75 },
                "潮州市": { firstWeight: 25, priceAbove10: 0.75 },
                "汕尾市": { firstWeight: 25, priceAbove10: 0.75 },
                "肇庆市": { firstWeight: 25, priceAbove10: 0.78 },
                "云浮市": { firstWeight: 25, priceAbove10: 0.78 }
            }
        },
        // 三级区域价格
        specialDistricts: {
            "广东省": {
                "深圳市": {
                    "盐田区": { firstWeight: 25, priceAbove10: 0.85 }
                },
                "广州市": {
                    "天河区": { firstWeight: 25, priceAbove10: 0.85 },
                    "黄埔区": { firstWeight: 25, priceAbove10: 0.85 },
                    "白云区": { firstWeight: 25, priceAbove10: 0.85 },
                    "越秀区": { firstWeight: 25, priceAbove10: 0.85 }
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

export default aneRates;