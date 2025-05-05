// 速腾物流运费数据（仅广东省内）
const sutengRates = {
    baseRates: {
        // 基础运费数据
        provinces: {
            "广东省": { firstWeight: 18, priceAbove10: 1.0 }
        },
        // 特殊区域价格
        specialAreas: {
            "广东省": {
                "东莞市": { firstWeight: 15, priceAbove10: 0.8 },
                "深圳市": { firstWeight: 15, priceAbove10: 0.8 },
                "广州市": { firstWeight: 15, priceAbove10: 0.8 },
                "珠海市": { firstWeight: 15, priceAbove10: 0.8 },
                "佛山市": { firstWeight: 15, priceAbove10: 0.8 },
                "中山市": { firstWeight: 15, priceAbove10: 0.8 },
                "惠州市": { firstWeight: 15, priceAbove10: 0.8 },
                "江门市": { firstWeight: 18, priceAbove10: 1.0 },
                "茂名市": { firstWeight: 18, priceAbove10: 1.0 },
                "湛江市": { firstWeight: 18, priceAbove10: 1.0 },
                "肇庆市": { firstWeight: 18, priceAbove10: 1.0 },
                "清远市": { firstWeight: 18, priceAbove10: 1.0 },
                "梅州市": { firstWeight: 18, priceAbove10: 1.0 },
                "河源市": { firstWeight: 18, priceAbove10: 1.0 },
                "阳江市": { firstWeight: 18, priceAbove10: 1.0 },
                "潮州市": { firstWeight: 18, priceAbove10: 1.0 },
                "揭阳市": { firstWeight: 18, priceAbove10: 1.0 },
                "云浮市": { firstWeight: 18, priceAbove10: 1.0 },
                "韶关市": { firstWeight: 18, priceAbove10: 1.0 },
                "汕头市": { firstWeight: 18, priceAbove10: 1.0 },
                "汕尾市": { firstWeight: 18, priceAbove10: 1.0 }
            }
        }
    },

    calculateFee: function(weight, province, city) {
        // 只接受广东省内的订单
        if (province !== "广东省") return null;
        
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
        } else {
            return rate.firstWeight + (weight - 10) * rate.priceAbove10;
        }
    }
};

export default sutengRates;