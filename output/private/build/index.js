"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
// 添加火山引擎域名白名单
block_basekit_server_api_1.basekit.addDomainList(['ark.cn-beijing.volces.com']);
block_basekit_server_api_1.basekit.addField({
    // 定义捷径的i18n语言资源
    i18n: {
        messages: {
            'zh-CN': {
                'modelType': '模型类型',
                'customModel': '自定义模型名称',
                'apiKey': 'API Key',
                'prompt': '输入指令',
                'images': '图片内容',
                'webSearch': '联网搜索',
                'thinkingMode': '深度思考',
                'thinking_auto': 'AI 自动判断',
                'thinking_enable': '进行深度思考',
                'thinking_disable': '不进行深度思考',
                'open': '开启',
                'close': '关闭',
                'result': '输出结果',
                'thinking': '思考过程',
                'usage': 'Tokens 数量',
                'cost': '模型费用(¥)',
                'help_apikey': '获取 API Key',
            },
            'en-US': {
                'modelType': 'Model Type',
                'customModel': 'Custom Model Name',
                'apiKey': 'API Key',
                'prompt': 'Instruction',
                'images': 'Images',
                'webSearch': 'Web Search',
                'thinkingMode': 'Deep Thinking',
                'thinking_auto': 'Auto',
                'thinking_enable': 'Enabled',
                'thinking_disable': 'Disabled',
                'open': 'On',
                'close': 'Off',
                'result': 'Result',
                'thinking': 'Thinking Process',
                'usage': 'Tokens Usage',
                'cost': 'Model Cost (¥)',
                'help_apikey': 'Get API Key',
            },
            'ja-JP': {
                'modelType': 'モデルタイプ',
                'customModel': 'カスタムモデル名',
                'apiKey': 'APIキー',
                'prompt': '入力指示',
                'images': '画像コンテンツ',
                'webSearch': 'Web検索',
                'thinkingMode': '深い思考',
                'thinking_auto': '自動',
                'thinking_enable': '有効',
                'thinking_disable': '無効',
                'open': 'オン',
                'close': 'オフ',
                'result': '出力結果',
                'thinking': '思考プロセス',
                'usage': 'トークン数',
                'cost': 'モデル費用(¥)',
                'help_apikey': 'APIキーを取得',
            },
        }
    },
    // 定义捷径的入参
    formItems: [
        {
            key: 'modelType',
            label: t('modelType'),
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
            props: {
                options: [
                    { label: 'doubao-seed-1-8-251228', value: 'doubao-seed-1-8-251228' },
                    { label: 'doubao-seed-1-6-251015', value: 'doubao-seed-1-6-251015' },
                    { label: 'doubao-seed-1-6-flash-250828', value: 'doubao-seed-1-6-flash-250828' },
                    { label: 'doubao-seed-1-6-lite-251015', value: 'doubao-seed-1-6-lite-251015' },
                    { label: 'doubao-seed-1-6-thinking-250715', value: 'doubao-seed-1-6-thinking-250715' },
                    { label: '自定义模型', value: 'custom' },
                ],
            },
            validator: {
                required: true,
            }
        },
        {
            key: 'customModel',
            label: t('customModel'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: 'doubao-...',
            },
        },
        {
            key: 'prompt',
            label: t('prompt'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: '',
            },
            validator: {
                required: true,
            }
        },
        {
            key: 'images',
            label: t('images'),
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Text, block_basekit_server_api_1.FieldType.Url],
            },
        },
        {
            key: 'thinkingMode',
            label: t('thinkingMode'),
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
            props: {
                options: [
                    { label: t('thinking_auto'), value: 'auto' },
                    { label: t('thinking_enable'), value: 'enable' },
                    { label: t('thinking_disable'), value: 'disable' },
                ],
            },
            defaultValue: 'auto',
            validator: {
                required: true,
            }
        },
        {
            key: 'webSearch',
            label: t('webSearch'),
            component: block_basekit_server_api_1.FieldComponent.Radio,
            props: {
                options: [
                    { label: t('open'), value: 'true' },
                    { label: t('close'), value: 'false' },
                ],
            },
            defaultValue: 'false',
            validator: {
                required: true,
            }
        },
        {
            key: 'apiKey',
            label: t('apiKey'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: 'sk-...',
            },
            tooltips: [
                {
                    type: 'link',
                    text: t('help_apikey'),
                    link: 'https://www.volcengine.com/docs/82379/1399008?lang=zh'
                }
            ],
            validator: {
                required: true,
            }
        },
    ],
    // 定义捷径的返回结果类型
    resultType: {
        type: block_basekit_server_api_1.FieldType.Object,
        extra: {
            icon: {
                light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/eqgeh7upeubqnulog/chatbot.svg',
            },
            properties: [
                {
                    key: 'groupKey',
                    type: block_basekit_server_api_1.FieldType.Text,
                    label: 'id',
                    isGroupByKey: true,
                    hidden: true,
                },
                {
                    key: 'result',
                    type: block_basekit_server_api_1.FieldType.Text,
                    label: t('result'),
                    primary: true,
                },
                {
                    key: 'thinking',
                    type: block_basekit_server_api_1.FieldType.Text,
                    label: t('thinking'),
                },
                {
                    key: 'usage',
                    type: block_basekit_server_api_1.FieldType.Text,
                    label: t('usage'),
                },
                {
                    key: 'cost',
                    type: block_basekit_server_api_1.FieldType.Number,
                    label: t('cost'),
                },
            ],
        },
    },
    // formItemParams 为运行时传入的字段参数
    execute: async (formItemParams, context) => {
        const { modelType, customModel, apiKey, prompt, images, webSearch, thinkingMode } = formItemParams;
        const normalizeValue = (val) => {
            if (val && typeof val === 'object' && 'value' in val)
                return val.value;
            return val;
        };
        const normalizedModelType = normalizeValue(modelType);
        const normalizedCustomModel = normalizeValue(customModel);
        const normalizedWebSearch = normalizeValue(webSearch);
        const normalizedThinkingMode = normalizeValue(thinkingMode);
        const normalizedPrompt = normalizeValue(prompt);
        // 日志记录函数
        function debugLog(arg, showContext = false) {
            if (!showContext) {
                // @ts-ignore
                console.log(JSON.stringify({ arg, logID: context.logID }), '\n');
                return;
            }
            const safeFormItemParams = {
                ...formItemParams,
                apiKey: apiKey ? '***' : apiKey,
            };
            console.log(JSON.stringify({
                formItemParams: safeFormItemParams,
                context,
                arg
            }), '\n');
        }
        debugLog('=====start=====v2.1', true);
        // 封装 fetch 函数
        const fetch = async (url, init, authId) => {
            try {
                const res = await context.fetch(url, init, authId);
                const resText = await res.text();
                const safeInit = {
                    ...init,
                    headers: init?.headers
                        ? {
                            ...init.headers,
                            Authorization: init.headers?.Authorization ? 'Bearer ***' : init.headers?.Authorization,
                        }
                        : init?.headers,
                };
                debugLog({
                    [`===fetch res： ${url}`]: {
                        url,
                        init: safeInit,
                        resText: resText.slice(0, 4000), // 截取日志
                    }
                });
                return JSON.parse(resText);
            }
            catch (e) {
                debugLog({
                    [`===fetch error： ${url}`]: {
                        url,
                        init,
                        error: e
                    }
                });
                return {
                    code: -1,
                    error: e
                };
            }
        };
        try {
            // 1. 处理图片输入
            const imageUrls = [];
            if (images) {
                // FieldSelect 返回的值可能是数组（如果是多选）或单个值
                // 这里假设 FieldSelect 绑定的字段值是字符串（URL或逗号分隔的URL）
                // 注意：basekit 传进来的 images 通常是字段的原始值
                // 如果是 Text/Url 字段，通常是 string 或 { text: string, link: string } (Url type structure)
                // 但为了通用性，我们先转成 string 处理
                let rawImageVal = '';
                if (typeof images === 'string') {
                    rawImageVal = images;
                }
                else if (Array.isArray(images)) {
                    // 如果是附件或者多行文本数组
                    rawImageVal = images.map(item => item.text || item).join(',');
                }
                else if (typeof images === 'object' && images !== null) {
                    // URL 字段结构可能包含 link 属性
                    // @ts-ignore
                    rawImageVal = images.link || images.text || JSON.stringify(images);
                }
                if (rawImageVal) {
                    rawImageVal.split(/[,，\n]/).forEach((url) => {
                        const cleanUrl = url.trim();
                        if (cleanUrl && cleanUrl.startsWith('http')) {
                            imageUrls.push(cleanUrl);
                        }
                    });
                }
            }
            // 2. 构造 API 请求 Body
            const apiUrl = 'https://ark.cn-beijing.volces.com/api/v3/responses'; // 使用 Responses API
            let input;
            const shouldUseWebSearch = normalizedWebSearch === 'true' || normalizedWebSearch === true;
            if (imageUrls.length > 0) {
                const maxImageCount = 10;
                const limitedImageUrls = imageUrls.slice(0, maxImageCount);
                // 多模态输入
                const content = [
                    { type: 'input_text', text: String(normalizedPrompt ?? '') }
                ];
                limitedImageUrls.forEach(url => {
                    content.push({ type: 'input_image', image_url: { url } });
                });
                // Responses API input 格式：可以是 string 或 list of messages
                // 对于多模态，需要使用 message 格式
                input = [
                    {
                        role: 'user',
                        content: content
                    }
                ];
            }
            else if (shouldUseWebSearch) {
                input = [
                    {
                        role: 'user',
                        content: String(normalizedPrompt ?? ''),
                    },
                ];
            }
            else {
                // 纯文本
                input = String(normalizedPrompt ?? '');
            }
            const finalModel = normalizedModelType === 'custom'
                ? String(normalizedCustomModel ?? '').trim()
                : String(normalizedModelType ?? '').trim();
            if (!finalModel) {
                throw new Error('model 不能为空：请选择模型或填写自定义模型名称');
            }
            const requestBody = {
                model: finalModel,
                input: input,
            };
            // 处理联网搜索
            if (shouldUseWebSearch) {
                requestBody.tools = [
                    {
                        type: 'web_search',
                        max_keyword: 2,
                    },
                ];
            }
            // 处理深度思考
            if (normalizedThinkingMode === 'enable') {
                requestBody.thinking = { type: 'enabled' };
            }
            else if (normalizedThinkingMode === 'disable') {
                requestBody.thinking = { type: 'disabled' };
            }
            // 'auto' 模式不传递 thinking 参数，使用默认行为
            // 3. 发起请求
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify(requestBody),
            });
            if (res.code === -1 || res.error) {
                throw new Error(JSON.stringify(res.error));
            }
            // 4. 解析结果
            // Responses API standard response: { output: [{ message: { content: ... } }], usage: ... }
            let resultText = '';
            let thinkingText = '';
            let usageInfo = { input_tokens: 0, output_tokens: 0 };
            if (res.choices && res.choices.length > 0) {
                // OpenAI compatible format
                resultText = res.choices[0].message.content;
                usageInfo = {
                    input_tokens: Number(res?.usage?.input_tokens ?? res?.usage?.prompt_tokens ?? 0),
                    output_tokens: Number(res?.usage?.output_tokens ?? res?.usage?.completion_tokens ?? 0),
                };
            }
            else if (Array.isArray(res?.output) && res.output.length > 0) {
                const outputs = res.output;
                const messageOutput = outputs.find((o) => o?.type === 'message' && o?.role === 'assistant') || outputs.find((o) => o?.type === 'message');
                const reasoningOutput = outputs.find((o) => o?.type === 'reasoning');
                if (reasoningOutput?.summary && Array.isArray(reasoningOutput.summary)) {
                    thinkingText = reasoningOutput.summary.map((s) => s?.text || '').join('\n');
                }
                const messageContent = messageOutput?.content ?? messageOutput?.message?.content;
                if (typeof messageContent === 'string') {
                    resultText = messageContent;
                }
                else if (Array.isArray(messageContent)) {
                    resultText = messageContent.map((p) => p?.text || '').join('');
                }
                usageInfo = {
                    input_tokens: Number(res?.usage?.input_tokens ?? 0),
                    output_tokens: Number(res?.usage?.output_tokens ?? 0),
                };
            }
            // 5. 计算费用
            // 价格 (元/百万token)
            // doubao-seed-1.8: 输入 0.8, 输出 2.0
            // doubao-seed-1.6: 输入 0.8, 输出 2.0
            // 两个模型价格一致
            const priceInput = 0.8;
            const priceOutput = 2.0;
            const inputCost = (usageInfo.input_tokens / 1000000) * priceInput;
            const outputCost = (usageInfo.output_tokens / 1000000) * priceOutput;
            const totalCost = parseFloat((inputCost + outputCost).toFixed(10));
            const groupKey = String(context?.recordID || context?.logID || Date.now());
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: {
                    groupKey,
                    result: resultText || '未获取到结果，请检查 API Key 和模型名称',
                    thinking: thinkingText,
                    usage: `输入：${usageInfo.input_tokens} tokens，输出：${usageInfo.output_tokens} tokens`,
                    cost: totalCost,
                }
            };
        }
        catch (e) {
            console.log('====error', String(e));
            debugLog({
                '===999 异常错误': String(e)
            });
            const groupKey = String(context?.recordID || context?.logID || Date.now());
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: {
                    groupKey,
                    result: `Error: ${String(e)}`,
                    thinking: '',
                    usage: '',
                    cost: 0,
                }
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBK0g7QUFDL0gsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsY0FBYztBQUNkLGtDQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0FBRXJELGtDQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2YsZ0JBQWdCO0lBQ2hCLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixjQUFjLEVBQUUsTUFBTTtnQkFDdEIsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLGlCQUFpQixFQUFFLFFBQVE7Z0JBQzNCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixhQUFhLEVBQUUsWUFBWTthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsYUFBYSxFQUFFLG1CQUFtQjtnQkFDbEMsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGNBQWMsRUFBRSxlQUFlO2dCQUMvQixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsaUJBQWlCLEVBQUUsU0FBUztnQkFDNUIsa0JBQWtCLEVBQUUsVUFBVTtnQkFDOUIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QixhQUFhLEVBQUUsYUFBYTthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxXQUFXLEVBQUUsUUFBUTtnQkFDckIsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixjQUFjLEVBQUUsTUFBTTtnQkFDdEIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixhQUFhLEVBQUUsVUFBVTthQUMxQjtTQUNGO0tBQ0Y7SUFDRCxVQUFVO0lBQ1YsU0FBUyxFQUFFO1FBQ1Q7WUFDRSxHQUFHLEVBQUUsV0FBVztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNyQixTQUFTLEVBQUUseUNBQWMsQ0FBQyxZQUFZO1lBQ3RDLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFO29CQUNwRSxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUU7b0JBQ3BFLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLEtBQUssRUFBRSw4QkFBOEIsRUFBRTtvQkFDaEYsRUFBRSxLQUFLLEVBQUUsNkJBQTZCLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFO29CQUM5RSxFQUFFLEtBQUssRUFBRSxpQ0FBaUMsRUFBRSxLQUFLLEVBQUUsaUNBQWlDLEVBQUU7b0JBQ3RGLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2lCQUNwQzthQUNGO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRjtRQUNEO1lBQ0UsR0FBRyxFQUFFLGFBQWE7WUFDbEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDdkIsU0FBUyxFQUFFLHlDQUFjLENBQUMsS0FBSztZQUMvQixLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLFlBQVk7YUFDMUI7U0FDRjtRQUNEO1lBQ0UsR0FBRyxFQUFFLFFBQVE7WUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNsQixTQUFTLEVBQUUseUNBQWMsQ0FBQyxLQUFLO1lBQy9CLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsRUFBRTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxRQUFRO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbEIsU0FBUyxFQUFFLHlDQUFjLENBQUMsV0FBVztZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLENBQUMsb0NBQVMsQ0FBQyxJQUFJLEVBQUUsb0NBQVMsQ0FBQyxHQUFHLENBQUM7YUFDN0M7U0FDRjtRQUNEO1lBQ0UsR0FBRyxFQUFFLGNBQWM7WUFDbkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDeEIsU0FBUyxFQUFFLHlDQUFjLENBQUMsWUFBWTtZQUN0QyxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFO29CQUNQLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO29CQUM1QyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO29CQUNoRCxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2lCQUNuRDthQUNGO1lBQ0QsWUFBWSxFQUFFLE1BQU07WUFDcEIsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRjtRQUNEO1lBQ0UsR0FBRyxFQUFFLFdBQVc7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDckIsU0FBUyxFQUFFLHlDQUFjLENBQUMsS0FBSztZQUMvQixLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFO29CQUNQLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO29CQUNuQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtpQkFDdEM7YUFDRjtZQUNELFlBQVksRUFBRSxPQUFPO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxRQUFRO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbEIsU0FBUyxFQUFFLHlDQUFjLENBQUMsS0FBSztZQUMvQixLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLFFBQVE7YUFDdEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7b0JBQ3RCLElBQUksRUFBRSx1REFBdUQ7aUJBQzlEO2FBQ0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGO0tBQ0Y7SUFDRCxjQUFjO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLG9DQUFTLENBQUMsTUFBTTtRQUN0QixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLDZFQUE2RTthQUNyRjtZQUNELFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxHQUFHLEVBQUUsVUFBVTtvQkFDZixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxJQUFJO29CQUNwQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsSUFBSSxFQUFFLG9DQUFTLENBQUMsSUFBSTtvQkFDcEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBQ2xCLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxVQUFVO29CQUNmLElBQUksRUFBRSxvQ0FBUyxDQUFDLElBQUk7b0JBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO2lCQUNyQjtnQkFDRDtvQkFDRSxHQUFHLEVBQUUsT0FBTztvQkFDWixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxJQUFJO29CQUNwQixLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDbEI7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLE1BQU07b0JBQ1gsSUFBSSxFQUFFLG9DQUFTLENBQUMsTUFBTTtvQkFDdEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7aUJBQ2pCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsNkJBQTZCO0lBQzdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBbUIsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM5QyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ25HLE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxHQUFHO2dCQUFFLE9BQVEsR0FBVyxDQUFDLEtBQUssQ0FBQztZQUNoRixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQztRQUNGLE1BQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0scUJBQXFCLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELE1BQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sc0JBQXNCLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhELFNBQVM7UUFDVCxTQUFTLFFBQVEsQ0FBQyxHQUFRLEVBQUUsV0FBVyxHQUFHLEtBQUs7WUFDN0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqQixhQUFhO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLE9BQU87WUFDVCxDQUFDO1lBQ0QsTUFBTSxrQkFBa0IsR0FBRztnQkFDekIsR0FBRyxjQUFjO2dCQUNqQixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07YUFDaEMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsT0FBTztnQkFDUCxHQUFHO2FBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUVELFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0QyxjQUFjO1FBQ2QsTUFBTSxLQUFLLEdBQTBILEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQy9KLElBQUksQ0FBQztnQkFDSCxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sUUFBUSxHQUFHO29CQUNmLEdBQUcsSUFBSTtvQkFDUCxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU87d0JBQ3BCLENBQUMsQ0FBQzs0QkFDRSxHQUFJLElBQUksQ0FBQyxPQUFlOzRCQUN4QixhQUFhLEVBQUcsSUFBSSxDQUFDLE9BQWUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLE9BQWUsRUFBRSxhQUFhO3lCQUMxRzt3QkFDSCxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU87aUJBQ2xCLENBQUM7Z0JBQ0YsUUFBUSxDQUFDO29CQUNQLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLEVBQUU7d0JBQ3hCLEdBQUc7d0JBQ0gsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU87cUJBQ3pDO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxDQUFDO29CQUNQLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLEVBQUU7d0JBQzFCLEdBQUc7d0JBQ0gsSUFBSTt3QkFDSixLQUFLLEVBQUUsQ0FBQztxQkFDVDtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTztvQkFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDO1lBQ0gsWUFBWTtZQUNaLE1BQU0sU0FBUyxHQUFhLEVBQUUsQ0FBQztZQUMvQixJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUNYLG1DQUFtQztnQkFDbkMsNENBQTRDO2dCQUM1QyxtQ0FBbUM7Z0JBQ25DLG1GQUFtRjtnQkFDbkYseUJBQXlCO2dCQUN6QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQy9CLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUM7cUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2hDLGdCQUFnQjtvQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakUsQ0FBQztxQkFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3ZELHVCQUF1QjtvQkFDdEIsYUFBYTtvQkFDZCxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFDaEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTt3QkFDbEQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUM1QixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7NEJBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzNCLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUM7WUFFRCxvQkFBb0I7WUFDcEIsTUFBTSxNQUFNLEdBQUcsb0RBQW9ELENBQUMsQ0FBQyxtQkFBbUI7WUFFeEYsSUFBSSxLQUFVLENBQUM7WUFDZixNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixLQUFLLE1BQU0sSUFBSSxtQkFBbUIsS0FBSyxJQUFJLENBQUM7WUFDMUYsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN6QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRTNELFFBQVE7Z0JBQ1IsTUFBTSxPQUFPLEdBQUc7b0JBQ2QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLEVBQUU7aUJBQzdELENBQUM7Z0JBQ0YsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBUyxDQUFDLENBQUM7Z0JBQ25FLENBQUMsQ0FBQyxDQUFDO2dCQUVILHVEQUF1RDtnQkFDdkQsd0JBQXdCO2dCQUN4QixLQUFLLEdBQUc7b0JBQ0o7d0JBQ0ksSUFBSSxFQUFFLE1BQU07d0JBQ1osT0FBTyxFQUFFLE9BQU87cUJBQ25CO2lCQUNKLENBQUM7WUFDSixDQUFDO2lCQUFNLElBQUksa0JBQWtCLEVBQUUsQ0FBQztnQkFDOUIsS0FBSyxHQUFHO29CQUNOO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO3FCQUN4QztpQkFDRixDQUFDO1lBQ0osQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU07Z0JBQ04sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBRUQsTUFBTSxVQUFVLEdBQUcsbUJBQW1CLEtBQUssUUFBUTtnQkFDakQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUVELE1BQU0sV0FBVyxHQUFRO2dCQUN2QixLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDO1lBRUYsU0FBUztZQUNULElBQUksa0JBQWtCLEVBQUUsQ0FBQztnQkFDdkIsV0FBVyxDQUFDLEtBQUssR0FBRztvQkFDbEI7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFdBQVcsRUFBRSxDQUFDO3FCQUNmO2lCQUNGLENBQUM7WUFDSixDQUFDO1lBRUQsU0FBUztZQUNULElBQUksc0JBQXNCLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDN0MsQ0FBQztpQkFBTSxJQUFJLHNCQUFzQixLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNoRCxXQUFXLENBQUMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQzlDLENBQUM7WUFDRCxrQ0FBa0M7WUFFbEMsVUFBVTtZQUNWLE1BQU0sR0FBRyxHQUFRLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLGVBQWUsRUFBRSxVQUFVLE1BQU0sRUFBRTtpQkFDcEM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2FBQ2xDLENBQUMsQ0FBQztZQUVILElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBRUQsVUFBVTtZQUNWLDJGQUEyRjtZQUUzRixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksU0FBUyxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFdEQsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4QywyQkFBMkI7Z0JBQzNCLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzVDLFNBQVMsR0FBRztvQkFDVixZQUFZLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsYUFBYSxJQUFJLENBQUMsQ0FBQztvQkFDaEYsYUFBYSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLGFBQWEsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixJQUFJLENBQUMsQ0FBQztpQkFDdkYsQ0FBQztZQUNOLENBQUM7aUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDN0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUNwSixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDO2dCQUUxRSxJQUFJLGVBQWUsRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDdkUsWUFBWSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFRCxNQUFNLGNBQWMsR0FBRyxhQUFhLEVBQUUsT0FBTyxJQUFJLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUNqRixJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUN2QyxVQUFVLEdBQUcsY0FBYyxDQUFDO2dCQUM5QixDQUFDO3FCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUN6QyxVQUFVLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7Z0JBRUQsU0FBUyxHQUFHO29CQUNWLFlBQVksRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxZQUFZLElBQUksQ0FBQyxDQUFDO29CQUNuRCxhQUFhLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsYUFBYSxJQUFJLENBQUMsQ0FBQztpQkFDdEQsQ0FBQztZQUNOLENBQUM7WUFFRCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGtDQUFrQztZQUNsQyxrQ0FBa0M7WUFDbEMsV0FBVztZQUNYLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN2QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFFeEIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUNsRSxNQUFNLFVBQVUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBQ3JFLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUUsT0FBZSxFQUFFLFFBQVEsSUFBSyxPQUFlLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTdGLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLG9DQUFTLENBQUMsT0FBTztnQkFDdkIsSUFBSSxFQUFFO29CQUNKLFFBQVE7b0JBQ1IsTUFBTSxFQUFFLFVBQVUsSUFBSSwwQkFBMEI7b0JBQ2hELFFBQVEsRUFBRSxZQUFZO29CQUN0QixLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUMsWUFBWSxjQUFjLFNBQVMsQ0FBQyxhQUFhLFNBQVM7b0JBQ2pGLElBQUksRUFBRSxTQUFTO2lCQUNoQjthQUNGLENBQUE7UUFFSCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQztnQkFDUCxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUN6QixDQUFDLENBQUM7WUFDSCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUUsT0FBZSxFQUFFLFFBQVEsSUFBSyxPQUFlLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzdGLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLG9DQUFTLENBQUMsT0FBTztnQkFDdkIsSUFBSSxFQUFFO29CQUNGLFFBQVE7b0JBQ1IsTUFBTSxFQUFFLFVBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM3QixRQUFRLEVBQUUsRUFBRTtvQkFDWixLQUFLLEVBQUUsRUFBRTtvQkFDVCxJQUFJLEVBQUUsQ0FBQztpQkFDVjthQUNGLENBQUE7UUFDSCxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILGtCQUFlLGtDQUFPLENBQUMifQ==