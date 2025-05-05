const addressParser = {
    // 省份关键词
    provinceKeywords: ["省", "自治区", "市"],
    
    // 城市关键词
    cityKeywords: ["市", "自治州", "地区"],
    
    // 区县关键词
    districtKeywords: ["区", "县", "市", "旗"],
    
    parse: function(address) {
        let result = {
            province: null,
            city: null,
            district: null
        };
        
        // 移除空格
        address = address.replace(/\s+/g, '');
        
        // 处理直辖市
        if (address.startsWith("北京") || address.startsWith("上海") || 
            address.startsWith("天津") || address.startsWith("重庆")) {
            result.province = address.substring(0, 2) + "市";
            address = address.substring(2);
        }
        
        // 提取省份
        if (!result.province) {
            for (let keyword of this.provinceKeywords) {
                let index = address.indexOf(keyword);
                if (index > 0) {
                    result.province = address.substring(0, index + keyword.length);
                    address = address.substring(index + keyword.length);
                    break;
                }
            }
        }
        
        // 提取城市
        for (let keyword of this.cityKeywords) {
            let index = address.indexOf(keyword);
            if (index > 0) {
                result.city = address.substring(0, index + keyword.length);
                address = address.substring(index + keyword.length);
                break;
            }
        }
        
        // 提取区县
        for (let keyword of this.districtKeywords) {
            let index = address.indexOf(keyword);
            if (index > 0) {
                result.district = address.substring(0, index + keyword.length);
                break;
            }
        }
        
        return result;
    }
};

export default addressParser;