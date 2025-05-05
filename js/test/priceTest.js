import freightCalculator from '../data/freightCalculator.js';

const priceTest = {
    runTests: function() {
        console.log('开始运行价格测试...');
        
        // 测试用例集合
        const testCases = [
            // 特殊地区测试
            {
                name: '新疆特殊价格测试',
                weight: 1,
                address: '新疆维吾尔自治区乌鲁木齐市'
            },
            {
                name: '西藏特殊价格测试',
                weight: 1,
                address: '西藏自治区拉萨市'
            },
            {
                name: '广东省深圳特殊价格测试',
                weight: 5,
                address: '广东省深圳市南山区'
            },
            {
                name: '云南少数民族自治州测试',
                weight: 5,
                address: '云南省大理白族自治州'
            },
            
            // 重量档位测试
            {
                name: '轻量包裹测试(0.3kg)',
                weight: 0.3,
                address: '广东省广州市'
            },
            {
                name: '中量包裹测试(5kg)',
                weight: 5,
                address: '广东省广州市'
            },
            {
                name: '大重量测试(35kg)',
                weight: 35,
                address: '广东省广州市'
            }
        ];
        
        // 运行测试用例
        testCases.forEach(testCase => {
            console.log(`\n执行测试: ${testCase.name}`);
            const result = freightCalculator.calculate(testCase.weight, testCase.address);
            
            if (!result.success) {
                console.error(`测试失败: ${result.message}`);
                return;
            }
            
            // 显示计算结果
            result.rates.forEach(rate => {
                if (rate.isValid) {
                    console.log(`${rate.carrier}: ￥${rate.fee}`);
                } else {
                    console.log(`${rate.carrier}: 不支持该地区`);
                }
            });
        });
        
        console.log('\n价格测试完成');
    }
};

// 运行测试
priceTest.runTests();

export default priceTest;