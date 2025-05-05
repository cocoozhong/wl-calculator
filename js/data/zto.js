// 中通快递运费数据
const ztoRates = {
    baseRates: {
        // 3kg及以下的阶梯价格
        under3kg: {
            // 普通省份价格
            normal: {
                "0.3": 1.25,
                "0.5": 1.80,
                "1.0": 2.30,
                "2.0": 3.20,
                "3.0": 4.20
            },
            // 新疆维吾尔自治区和西藏自治区价格
            special: {
                "0.3": 15.00,
                "0.5": 15.00,
                "1.0": 15.00,
                "2.0": 30.00,
                "3.0": 45.00
            }
        },
        // 3kg以上的首重和续重价格
        above3kg: {
            // 一类地区（首重2.8元，续重1.5元/kg）
            "广东省": { firstWeight: 2.80, pricePerKg: 1.50 },
            
            // 二类地区（首重2.8元，续重2.5元/kg）
            "上海市": { firstWeight: 2.80, pricePerKg: 2.50 },
            "浙江省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "江苏省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "安徽省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "福建省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "湖南省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "湖北省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "江西省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "海南省": { firstWeight: 2.80, pricePerKg: 2.50 },
            "北京市": { firstWeight: 2.80, pricePerKg: 2.50 },

            // 三类地区（首重2.8元，续重3.5元/kg）
            "广西壮族自治区": { firstWeight: 2.80, pricePerKg: 3.50 },
            "河南省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "重庆市": { firstWeight: 2.80, pricePerKg: 3.50 },
            "陕西省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "贵州省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "云南省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "天津市": { firstWeight: 2.80, pricePerKg: 3.50 },
            "四川省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "山西省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "山东省": { firstWeight: 2.80, pricePerKg: 3.50 },
            "河北省": { firstWeight: 2.80, pricePerKg: 3.50 },

            // 四类地区（首重2.8元，续重4.5元/kg）
            "黑龙江省": { firstWeight: 2.80, pricePerKg: 4.50 },
            "吉林省": { firstWeight: 2.80, pricePerKg: 4.50 },
            "辽宁省": { firstWeight: 2.80, pricePerKg: 4.50 },

            // 五类地区（首重2.8元，续重7.5元/kg）
            "甘肃省": { firstWeight: 2.80, pricePerKg: 7.50 },
            "青海省": { firstWeight: 2.80, pricePerKg: 7.50 },
            "宁夏回族自治区": { firstWeight: 2.80, pricePerKg: 7.50 },
            "内蒙古自治区": { firstWeight: 2.80, pricePerKg: 7.50 },

            // 特殊地区（首重15元，续重15元/kg）
            "新疆维吾尔自治区": { firstWeight: 15.00, pricePerKg: 15.00 },
            "西藏自治区": { firstWeight: 15.00, pricePerKg: 15.00 }
        }
    },

    // 获取3kg以下的价格档位
    getWeightLevel: function(weight) {
        if (weight <= 0.3) return "0.3";
        if (weight <= 0.5) return "0.5";
        if (weight <= 1.0) return "1.0";
        if (weight <= 2.0) return "2.0";
        return "3.0";
    },

    calculateFee: function(weight, province) {
        let baseFee = 0;

        // 计算基础运费
        if (weight <= 3) {
            // 3kg及以下使用阶梯价格
            let priceTable;
            if (province === "新疆维吾尔自治区" || province === "西藏自治区") {
                priceTable = this.baseRates.under3kg.special;
            } else {
                priceTable = this.baseRates.under3kg.normal;
            }
            baseFee = priceTable[this.getWeightLevel(weight)];
        } else {
            // 3kg以上使用首重+续重计算
            const rate = this.baseRates.above3kg[province];
            if (!rate) return null;
            
            if (weight <= 30) {
                // 30kg及以下正常计算
                baseFee = rate.firstWeight + (Math.ceil(weight - 1) * rate.pricePerKg);
            } else {
                // 30kg以上部分每公斤加收0.3元
                const normalPart = rate.firstWeight + (29 * rate.pricePerKg); // 前30kg的费用
                const extraPart = (Math.ceil(weight - 30) * (rate.pricePerKg + 0.3)); // 超出部分的费用
                baseFee = normalPart + extraPart;
            }
        }

        return baseFee;
    }
};

export default ztoRates;