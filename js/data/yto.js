// 圆通快递运费数据
const ytoRates = {
    baseRates: {
        // 3kg及以下的阶梯价格
        under3kg: {
            // 普通省份价格
            normal: {
                "0.3": 1.40,
                "0.5": 1.70,
                "1.0": 2.20,
                "1.5": 3.10,
                "2.0": 3.30,
                "2.5": 3.60,
                "3.0": 3.80
            },
            // 新疆维吾尔自治区价格
            xinjiang: {
                "0.3": 8.00,
                "0.5": 8.00,
                "1.0": 12.00,
                "1.5": 16.00,
                "2.0": 20.00,
                "2.5": 25.00,
                "3.0": 30.00
            },
            // 西藏自治区价格
            tibet: {
                "0.3": 8.00,
                "0.5": 9.00,
                "1.0": 14.00,
                "1.5": 18.00,
                "2.0": 26.00,
                "2.5": 32.00,
                "3.0": 38.00
            }
        },
        // 3kg以上的首重和续重价格
        above3kg: {
            "上海市": { firstWeight: 4.80, pricePerKg: 1.80 },
            "广东省": { firstWeight: 3.80, pricePerKg: 1.00 },
            "浙江省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "安徽省": { firstWeight: 5.30, pricePerKg: 1.80 },
            "广西省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "福建省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "江西省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "湖北省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "湖南省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "河南省": { firstWeight: 5.30, pricePerKg: 2.40 },
            "北京市": { firstWeight: 5.30, pricePerKg: 2.40 },
            "海南省": { firstWeight: 5.30, pricePerKg: 2.40 },
            "天津市": { firstWeight: 5.30, pricePerKg: 2.40 },
            "河北省": { firstWeight: 5.30, pricePerKg: 2.40 },
            "山东省": { firstWeight: 5.80, pricePerKg: 2.80 },
            "山西省": { firstWeight: 5.80, pricePerKg: 3.20 },
            "江苏省": { firstWeight: 4.80, pricePerKg: 1.80 },
            "云南省": { firstWeight: 5.80, pricePerKg: 2.80 },
            "贵州省": { firstWeight: 5.80, pricePerKg: 2.80 },
            "四川省": { firstWeight: 5.80, pricePerKg: 2.80 },
            "陕西省": { firstWeight: 5.80, pricePerKg: 3.00 },
            "重庆市": { firstWeight: 5.80, pricePerKg: 3.10 },
            "黑龙江省": { firstWeight: 9.30, pricePerKg: 6.20 },
            "吉林省": { firstWeight: 9.30, pricePerKg: 6.20 },
            "辽宁省": { firstWeight: 9.30, pricePerKg: 6.20 },
            "甘肃省": { firstWeight: 9.30, pricePerKg: 6.20 },
            "宁夏回族自治区": { firstWeight: 9.30, pricePerKg: 6.20 },
            "青海省": { firstWeight: 9.30, pricePerKg: 6.20 },
            "内蒙古自治区": { firstWeight: 9.30, pricePerKg: 6.20 },
            "新疆维吾尔自治区": { firstWeight: 10.00, pricePerKg: 15.00 },
            "西藏自治区": { firstWeight: 12.00, pricePerKg: 17.00 }
        },
        // 附加派送费
        additionalFees: {
            "上海市": { type: "per_order", fee: 1.0 },
            "北京市": { type: "per_order", fee: 1.0 },
            "广东省": { 
                "深圳市": { type: "per_order", fee: 0.5 }
            },
            "海南省": { type: "per_kg", fee: 0.5 }
        }
    },

    // 获取3kg以下的价格档位
    getWeightLevel: function(weight) {
        if (weight <= 0.3) return "0.3";
        if (weight <= 0.5) return "0.5";
        if (weight <= 1.0) return "1.0";
        if (weight <= 1.5) return "1.5";
        if (weight <= 2.0) return "2.0";
        if (weight <= 2.5) return "2.5";
        return "3.0";
    },

    calculateFee: function(weight, province, city) {
        let baseFee = 0;
        let additionalFee = 0;

        // 计算基础运费
        if (weight <= 3) {
            // 3kg及以下使用阶梯价格
            let priceTable;
            if (province === "新疆维吾尔自治区") {
                priceTable = this.baseRates.under3kg.xinjiang;
            } else if (province === "西藏自治区") {
                priceTable = this.baseRates.under3kg.tibet;
            } else {
                priceTable = this.baseRates.under3kg.normal;
            }
            baseFee = priceTable[this.getWeightLevel(weight)];
        } else {
            // 3kg以上使用首重+续重计算
            const rate = this.baseRates.above3kg[province];
            if (!rate) return null;
            baseFee = rate.firstWeight + (Math.ceil(weight - 1) * rate.pricePerKg);
        }

        // 计算附加费
        const provinceFees = this.baseRates.additionalFees[province];
        if (provinceFees) {
            if (provinceFees.type === "per_order") {
                additionalFee = provinceFees.fee;
            } else if (provinceFees.type === "per_kg") {
                additionalFee = weight * provinceFees.fee;
            } else if (city && provinceFees[city]) {
                const cityFee = provinceFees[city];
                if (cityFee.type === "per_order") {
                    additionalFee = cityFee.fee;
                } else if (cityFee.type === "per_kg") {
                    additionalFee = weight * cityFee.fee;
                }
            }
        }

        return baseFee + additionalFee;
    }
};

export default ytoRates;