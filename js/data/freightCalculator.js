import addressParser from './addressParser.js';
import ztoRates from './zto.js';
import ytoRates from './yto.js';
import yundaRates from './yunda.js';
import aneRates from './ane.js';
import aneOntimeRates from './ane_ontime.js';
import sutengRates from './suteng.js';
import shunxinRates from './shunxin.js';

const freightCalculator = {
    // 所有快递公司的费率对象
    carriers: {
        "中通快递": ztoRates,
        "圆通快递": ytoRates,
        "韵达快递": yundaRates,
        "安能物流": aneRates,
        "安能定时达": aneOntimeRates,
        "速腾物流": sutengRates,
        "顺心捷达": shunxinRates
    },
    
    // 计算所有可用的快递费用
    calculate: function(weight, address) {
        // 解析地址
        const addressInfo = addressParser.parse(address);
        
        if (!addressInfo.province) {
            return {
                success: false,
                message: "无法识别省份信息，请提供更详细的地址"
            };
        }
        
        const result = {
            success: true,
            rates: []
        };
        
        // 遍历所有快递公司计算运费
        for (let [carrierName, carrier] of Object.entries(this.carriers)) {
            let fee = null;
            
            // 根据可用的地址信息调用不同的计算方法
            if (carrier.calculateFee.length === 2) {
                fee = carrier.calculateFee(weight, addressInfo.province);
            } else if (carrier.calculateFee.length === 3) {
                fee = carrier.calculateFee(weight, addressInfo.province, addressInfo.city);
            } else if (carrier.calculateFee.length === 4) {
                fee = carrier.calculateFee(weight, addressInfo.province, addressInfo.city, addressInfo.district);
            }
            
            result.rates.push({
                carrier: carrierName,
                fee: fee !== null ? fee.toFixed(2) : "无法计算",
                details: fee !== null 
                    ? `使用${carrierName}的${addressInfo.province}${addressInfo.city ? '-' + addressInfo.city : ''}${addressInfo.district ? '-' + addressInfo.district : ''}价格计算`
                    : `${carrierName}暂不支持该地区配送`,
                isValid: fee !== null
            });
        }
        
        // 找出非0最低价格
        let minFee = Infinity;
        let minIndex = -1;
        result.rates.forEach((rate, index) => {
            if (rate.isValid) {
                const fee = parseFloat(rate.fee);
                if (fee > 0 && fee < minFee) {
                    minFee = fee;
                    minIndex = index;
                }
            }
        });
        
        // 标记最低价格选项
        if (minIndex !== -1) {
            result.rates[minIndex].isLowest = true;
        }
        
        return result;
    }
};

export default freightCalculator;