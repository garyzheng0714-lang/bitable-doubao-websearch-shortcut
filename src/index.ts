import { basekit, FieldType, field, FieldComponent, FieldCode, AuthorizationType } from '@lark-opdev/block-basekit-server-api';
const { t } = field;

// 添加火山引擎域名白名单
basekit.addDomainList(['ark.cn-beijing.volces.com']);

basekit.addField({
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
      component: FieldComponent.SingleSelect,
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
      component: FieldComponent.Input,
      props: {
        placeholder: 'doubao-...',
      },
    },
    {
      key: 'prompt',
      label: t('prompt'),
      component: FieldComponent.Input,
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
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Text, FieldType.Url],
      },
    },
    {
      key: 'thinkingMode',
      label: t('thinkingMode'),
      component: FieldComponent.SingleSelect,
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
      component: FieldComponent.Radio,
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
      component: FieldComponent.Input,
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
    type: FieldType.Object,
    extra: {
      icon: {
        light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/eqgeh7upeubqnulog/chatbot.svg',
      },
      properties: [
        {
          key: 'groupKey',
          type: FieldType.Text,
          label: 'id',
          isGroupByKey: true,
          hidden: true,
        },
        {
          key: 'result',
          type: FieldType.Text,
          label: t('result'),
          primary: true,
        },
        {
          key: 'thinking',
          type: FieldType.Text,
          label: t('thinking'),
        },
        {
          key: 'usage',
          type: FieldType.Text,
          label: t('usage'),
        },
        {
          key: 'cost',
          type: FieldType.Number,
          label: t('cost'),
          extra: {
            formatter: '0.0000000' as any,
          },
        },
      ],
    },
  },
  // formItemParams 为运行时传入的字段参数
  execute: async (formItemParams: any, context) => {
    const { modelType, customModel, apiKey, prompt, images, webSearch, thinkingMode } = formItemParams;
    const normalizeValue = (val: any) => {
      if (val && typeof val === 'object' && 'value' in val) return (val as any).value;
      return val;
    };
    const normalizedModelType = normalizeValue(modelType);
    const normalizedCustomModel = normalizeValue(customModel);
    const normalizedWebSearch = normalizeValue(webSearch);
    const normalizedThinkingMode = normalizeValue(thinkingMode);
    const normalizedPrompt = normalizeValue(prompt);

    // 日志记录函数
    function debugLog(arg: any, showContext = false) {
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
    const fetch: <T = Object>(...arg: Parameters<typeof context.fetch>) => Promise<T | { code: number, error: any, [p: string]: any }> = async (url, init, authId) => {
      try {
        const res = await context.fetch(url, init, authId);
        const resText = await res.text();
        const safeInit = {
          ...init,
          headers: init?.headers
            ? {
                ...(init.headers as any),
                Authorization: (init.headers as any)?.Authorization ? 'Bearer ***' : (init.headers as any)?.Authorization,
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
      } catch (e) {
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
      const imageUrls: string[] = [];
      if (images) {
        // FieldSelect 返回的值可能是数组（如果是多选）或单个值
        // 这里假设 FieldSelect 绑定的字段值是字符串（URL或逗号分隔的URL）
        // 注意：basekit 传进来的 images 通常是字段的原始值
        // 如果是 Text/Url 字段，通常是 string 或 { text: string, link: string } (Url type structure)
        // 但为了通用性，我们先转成 string 处理
        let rawImageVal = '';
        if (typeof images === 'string') {
          rawImageVal = images;
        } else if (Array.isArray(images)) {
           // 如果是附件或者多行文本数组
           rawImageVal = images.map(item => item.text || item).join(',');
        } else if (typeof images === 'object' && images !== null) {
            // URL 字段结构可能包含 link 属性
             // @ts-ignore
            rawImageVal = images.link || images.text || JSON.stringify(images);
        }

        if (rawImageVal) {
          rawImageVal.split(/[,，\n]/).forEach((url: string) => {
            const cleanUrl = url.trim();
            if (cleanUrl && cleanUrl.startsWith('http')) {
              imageUrls.push(cleanUrl);
            }
          });
        }
      }

      // 2. 构造 API 请求 Body
      const apiUrl = 'https://ark.cn-beijing.volces.com/api/v3/responses'; // 使用 Responses API
      
      let input: any;
      const shouldUseWebSearch = normalizedWebSearch === 'true' || normalizedWebSearch === true;
      const shouldUseWebSearchTool = shouldUseWebSearch;
      if (imageUrls.length > 0) {
        const maxImageCount = 10;
        const limitedImageUrls = imageUrls.slice(0, maxImageCount);

        // 多模态输入
        const content: any[] = [];
        limitedImageUrls.forEach(url => {
          content.push({ type: 'input_image', image_url: url } as any);
        });
        content.push({ type: 'input_text', text: String(normalizedPrompt ?? '') });
        
        // Responses API input 格式：可以是 string 或 list of messages
        // 对于多模态，需要使用 message 格式
        input = [
            {
                role: 'user',
                content: content
            }
        ];
      } else if (shouldUseWebSearchTool) {
        input = [
          {
            role: 'user',
            content: String(normalizedPrompt ?? ''),
          },
        ];
      } else {
        // 纯文本
        input = String(normalizedPrompt ?? '');
      }

      const finalModel = normalizedModelType === 'custom'
        ? String(normalizedCustomModel ?? '').trim()
        : String(normalizedModelType ?? '').trim();

      if (!finalModel) {
        throw new Error('model 不能为空：请选择模型或填写自定义模型名称');
      }

      const requestBody: any = {
        model: finalModel,
        input: input,
      };

      // 处理联网搜索
      if (shouldUseWebSearchTool) {
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
      } else if (normalizedThinkingMode === 'disable') {
        requestBody.thinking = { type: 'disabled' };
      }
      // 'auto' 模式不传递 thinking 参数，使用默认行为

      // 3. 发起请求
      const res: any = await fetch(apiUrl, {
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
      } else if (Array.isArray(res?.output) && res.output.length > 0) {
          const outputs = res.output;
          const messageOutput = outputs.find((o: any) => o?.type === 'message' && o?.role === 'assistant') || outputs.find((o: any) => o?.type === 'message');
          const reasoningOutput = outputs.find((o: any) => o?.type === 'reasoning');

          if (reasoningOutput?.summary && Array.isArray(reasoningOutput.summary)) {
            thinkingText = reasoningOutput.summary.map((s: any) => s?.text || '').join('\n');
          }

          const messageContent = messageOutput?.content ?? messageOutput?.message?.content;
          if (typeof messageContent === 'string') {
            resultText = messageContent;
          } else if (Array.isArray(messageContent)) {
            resultText = messageContent.map((p: any) => p?.text || '').join('');
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
      const groupKey = String((context as any)?.recordID || (context as any)?.logID || Date.now());

      return {
        code: FieldCode.Success,
        data: {
          groupKey,
          result: resultText || '未获取到结果，请检查 API Key 和模型名称',
          thinking: thinkingText,
          usage: `输入：${usageInfo.input_tokens} tokens，输出：${usageInfo.output_tokens} tokens`,
          cost: totalCost,
        }
      }

    } catch (e) {
      console.log('====error', String(e));
      debugLog({
        '===999 异常错误': String(e)
      });
      const groupKey = String((context as any)?.recordID || (context as any)?.logID || Date.now());
      return {
        code: FieldCode.Success,
        data: {
            groupKey,
            result: `Error: ${String(e)}`,
            thinking: '',
            usage: '',
            cost: 0,
        }
      }
    }
  },
});
export default basekit;
