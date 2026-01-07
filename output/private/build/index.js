"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const form_data_1 = __importDefault(require("form-data"));
const { t } = block_basekit_server_api_1.field;
// 添加火山引擎域名白名单
block_basekit_server_api_1.basekit.addDomainList([
    'ark.cn-beijing.volces.com',
    'open.feishu.cn',
    'open.larksuite.com',
    'internal-api-drive-stream.feishu.cn',
    'internal-api-drive-stream.larksuite.com',
    'img.alicdn.com',
    'img30.360buyimg.com',
    'thumbnail.coupangcdn.com',
    'images-eu.ssl-images-amazon.com',
    'product-files.pupumall.com',
    'sam-material-online-1302115363.file.myqcloud.com',
    'img.pddpic.com',
    'img.youpin.mi-img.com',
    'pub.ddimg.mobi',
    'p1.meituan.net',
    'f.nooncdn.com',
    'rukminim2.flixcart.com',
    'ir.ozone.ru',
    'basket-06.wbcontent.net',
    'img06.weeecdn.com',
    'cdn.yamibuy.net',
    'http2.mlstatic.com',
    'i.imgur.com',
    'imgur.com',
    'i.ibb.co',
    'ibb.co',
    'i.postimg.cc',
    'postimg.cc',
    'raw.githubusercontent.com',
    'user-images.githubusercontent.com',
    'images.unsplash.com',
    'images.pexels.com',
    'i.pinimg.com',
    'pbs.twimg.com',
    'lh3.googleusercontent.com',
    'lh4.googleusercontent.com',
    'lh5.googleusercontent.com',
    'lh6.googleusercontent.com',
    'i.redd.it',
    'preview.redd.it',
    'external-preview.redd.it',
    'cdn.discordapp.com',
    'media.discordapp.net',
]);
block_basekit_server_api_1.basekit.addField({
    // 定义捷径的i18n语言资源
    i18n: {
        messages: {
            'zh-CN': {
                'modelType': '模型选择',
                'customModel': '自定义模型名称',
                'apiKey': '自定义Key',
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
                'help_apikey': '获取 Key',
                'help_customKey': '非必填；默认已内置 Key。若捷径无法使用，可填写你自己的 Key 进行尝试',
                'help_modelType': '选择预置模型；如需使用其他模型，请选择“自定义模型”并填写下方名称',
                'help_webSearch_pricing': '查看计费规则',
            },
            'en-US': {
                'modelType': 'Model Selection',
                'customModel': 'Custom Model Name',
                'apiKey': 'Custom Key',
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
                'help_apikey': 'Get Key',
                'help_customKey': 'Optional. A default key is built-in. If it does not work, try your own key.',
                'help_modelType': 'Choose a preset model. To use another model, select “Custom Model” and fill in the name below.',
                'help_webSearch_pricing': 'Pricing rules',
            },
            'ja-JP': {
                'modelType': 'モデル選択',
                'customModel': 'カスタムモデル名',
                'apiKey': 'カスタムキー',
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
                'help_apikey': 'キーを取得',
                'help_customKey': '任意。デフォルトのキーは内蔵されています。動作しない場合は、ご自身のキーを入力してお試しください。',
                'help_modelType': 'プリセットモデルを選択します。その他のモデルを使う場合は「カスタムモデル」を選び、下の名称を入力してください。',
                'help_webSearch_pricing': '料金ルールを見る',
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
            tooltips: [
                {
                    type: 'text',
                    content: t('help_modelType'),
                },
            ],
            validator: {
                required: true,
            }
        },
        {
            key: 'customModel',
            label: t('customModel'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: '非必填，仅当选择“自定义模型”选项时生效',
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
                supportType: [block_basekit_server_api_1.FieldType.Text, block_basekit_server_api_1.FieldType.Url, block_basekit_server_api_1.FieldType.Attachment],
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
                    { label: t('close'), value: 'false' },
                    { label: t('open'), value: 'true' },
                ],
            },
            tooltips: [
                {
                    type: 'link',
                    text: t('help_webSearch_pricing'),
                    link: 'https://www.volcengine.com/docs/82379/1338550?lang=zh',
                },
            ],
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
                placeholder: '非必填；留空则使用默认 Key',
            },
            tooltips: [
                {
                    type: 'text',
                    content: t('help_customKey'),
                },
                {
                    type: 'link',
                    text: t('help_apikey'),
                    link: 'https://www.volcengine.com/docs/82379/1399008?lang=zh'
                }
            ],
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
                    extra: {
                        formatter: '0.0000000',
                    },
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
        const DEFAULT_KEY = '42613b83-f46c-468f-98b1-2036c8dc5a68';
        const normalizedApiKey = String(normalizeValue(apiKey) ?? '').trim();
        const effectiveApiKey = normalizedApiKey || DEFAULT_KEY;
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
            const safeContext = {
                logID: context?.logID,
                timeZone: context?.timeZone,
                tenantKey: context?.tenantKey,
                baseID: context?.baseID,
                tableID: context?.tableID,
                recordID: context?.recordID,
                packID: context?.packID,
                extensionID: context?.extensionID,
            };
            console.log(JSON.stringify({
                formItemParams: safeFormItemParams,
                context: safeContext,
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
            const imageInputItems = [];
            const appendImageUrl = (url) => {
                const clean = String(url ?? '').trim();
                if (/^https?:\/\//i.test(clean)) {
                    imageInputItems.push({ type: 'input_image', image_url: clean });
                }
            };
            const appendUrlsFromText = (text) => {
                String(text ?? '')
                    .split(/[,，\n]/)
                    .map(s => s.trim())
                    .filter(Boolean)
                    .forEach(appendImageUrl);
            };
            const extractUrlsFromUnknown = (val) => {
                if (typeof val === 'string') {
                    appendUrlsFromText(val);
                    return;
                }
                if (val && typeof val === 'object') {
                    const candidates = [
                        val.tmp_url,
                        val.tmpUrl,
                        val.download_url,
                        val.downloadUrl,
                        val.preview_url,
                        val.previewUrl,
                        val.link,
                        val.url,
                        val.text,
                    ];
                    candidates.forEach(candidate => {
                        if (typeof candidate === 'string')
                            appendUrlsFromText(candidate);
                    });
                }
            };
            const extractUrlsFromExtra = (extra) => {
                let raw = extra;
                if (typeof raw === 'string') {
                    try {
                        raw = JSON.parse(raw);
                    }
                    catch {
                        raw = extra;
                    }
                }
                if (typeof raw === 'string') {
                    appendUrlsFromText(raw);
                    return;
                }
                if (raw && typeof raw === 'object') {
                    const keys = ['url', 'link', 'tmp_url', 'tmpUrl', 'download_url', 'downloadUrl', 'preview_url', 'previewUrl'];
                    keys.forEach(k => {
                        if (typeof raw[k] === 'string')
                            appendImageUrl(raw[k]);
                    });
                    if (Array.isArray(raw.urls))
                        raw.urls.forEach((u) => typeof u === 'string' && appendImageUrl(u));
                    if (Array.isArray(raw.links))
                        raw.links.forEach((u) => typeof u === 'string' && appendImageUrl(u));
                }
            };
            const downloadAttachmentBuffer = async (attachmentToken) => {
                const token = String(attachmentToken ?? '').trim();
                if (!token)
                    return undefined;
                const urls = [
                    `https://open.feishu.cn/open-apis/drive/v1/medias/${token}/download`,
                    `https://open.larksuite.com/open-apis/drive/v1/medias/${token}/download`,
                ];
                for (const url of urls) {
                    try {
                        const res = await context.fetch(url, { method: 'GET' });
                        if (!res.ok)
                            continue;
                        const buf = await res.buffer();
                        if (buf && buf.length > 0)
                            return buf;
                    }
                    catch {
                    }
                }
                return undefined;
            };
            const downloadByUrlBuffer = async (url) => {
                const u = String(url ?? '').trim();
                if (!/^https?:\/\//i.test(u))
                    return { status: 0 };
                try {
                    const referer = (() => {
                        try {
                            return new URL(u).origin + '/';
                        }
                        catch {
                            return undefined;
                        }
                    })();
                    const res = await context.fetch(u, {
                        method: 'GET',
                        headers: {
                            'User-Agent': 'Mozilla/5.0',
                            Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
                            ...(referer ? { Referer: referer } : {}),
                        },
                    });
                    if (!res.ok)
                        return { status: res.status };
                    const contentType = res.headers?.get?.('content-type') || undefined;
                    const buf = await res.buffer();
                    if (buf && buf.length > 0)
                        return { status: res.status, buf: buf, contentType };
                }
                catch {
                }
                return { status: 0 };
            };
            const formatArkErrorMessage = (payload, status) => {
                const err = payload?.error ?? payload;
                const code = err?.code ?? err?.type;
                const message = err?.message ?? err?.error?.message ?? '';
                const normalized = String([code, message].filter(Boolean).join(': ')).trim();
                const lower = normalized.toLowerCase();
                const isAuth = status === 401 ||
                    status === 403 ||
                    code === 'AuthenticationError' ||
                    code === 'Unauthorized' ||
                    err?.type === 'Unauthorized' ||
                    /unauthorized|forbidden/.test(lower) ||
                    (/api key/.test(lower) && /(deleted|disable|disabled|invalid|expired)/.test(lower));
                if (isAuth) {
                    return `API Key 无效或已被禁用/删除，请更新 Key 后重试${normalized ? `（${normalized}）` : ''}`;
                }
                return normalized;
            };
            const uploadBufferToArk = async (fileBuffer, filename, mimeType) => {
                const form = new form_data_1.default();
                form.append('purpose', 'user_data');
                form.append('file', fileBuffer, {
                    filename: filename || 'image',
                    contentType: mimeType || 'application/octet-stream',
                });
                const res = await context.fetch('https://ark.cn-beijing.volces.com/api/v3/files', {
                    method: 'POST',
                    headers: {
                        ...form.getHeaders(),
                        Authorization: `Bearer ${effectiveApiKey}`,
                    },
                    body: form,
                });
                const text = await res.text();
                let json;
                try {
                    json = JSON.parse(text);
                }
                catch {
                    json = undefined;
                }
                const fileId = json?.id ?? json?.data?.id ?? json?.file?.id;
                if (!res.ok || !fileId) {
                    const errMsg = formatArkErrorMessage(json, res.status);
                    if (errMsg.startsWith('API Key'))
                        throw new Error(errMsg);
                    throw new Error(`上传图片失败：${errMsg || text.slice(0, 2000)}`);
                }
                return String(fileId);
            };
            if (images) {
                if (Array.isArray(images) &&
                    images.length > 0 &&
                    images.some((item) => {
                        if (!item || typeof item !== 'object')
                            return false;
                        if ('attachmentToken' in item)
                            return true;
                        if ('tmp_url' in item || 'tmpUrl' in item)
                            return true;
                        if ('download_url' in item || 'downloadUrl' in item)
                            return true;
                        if ('preview_url' in item || 'previewUrl' in item)
                            return true;
                        return false;
                    })) {
                    const beforeTotal = imageInputItems.length;
                    const attachmentImageCount = images.filter(item => {
                        if (!item || typeof item !== 'object')
                            return false;
                        const mimeType = item.mimeType ?? item.type;
                        if (mimeType && !String(mimeType).startsWith('image/'))
                            return false;
                        return Boolean(item.attachmentToken ||
                            item.tmp_url ||
                            item.tmpUrl ||
                            item.download_url ||
                            item.downloadUrl ||
                            item.preview_url ||
                            item.previewUrl);
                    }).length;
                    for (const item of images) {
                        if (imageInputItems.length >= 10)
                            break;
                        if (!item || typeof item !== 'object')
                            continue;
                        const mimeType = item.mimeType ?? item.type;
                        if (mimeType && !String(mimeType).startsWith('image/'))
                            continue;
                        const directUrl = item.tmp_url ||
                            item.tmpUrl ||
                            item.download_url ||
                            item.downloadUrl ||
                            item.preview_url ||
                            item.previewUrl ||
                            item.url ||
                            item.link;
                        if (directUrl) {
                            const { buf } = await downloadByUrlBuffer(String(directUrl));
                            if (buf) {
                                const fileId = await uploadBufferToArk(buf, String(item.name ?? 'image'), mimeType);
                                imageInputItems.push({ type: 'input_image', file_id: fileId });
                                continue;
                            }
                        }
                        const beforeCount = imageInputItems.length;
                        extractUrlsFromExtra(item.extra);
                        if (imageInputItems.length >= 10)
                            break;
                        if (imageInputItems.length > beforeCount)
                            continue;
                        const attachmentToken = item.attachmentToken;
                        if (attachmentToken) {
                            const buf = await downloadAttachmentBuffer(String(attachmentToken));
                            if (!buf)
                                continue;
                            const fileId = await uploadBufferToArk(buf, String(item.name ?? 'image'), mimeType);
                            imageInputItems.push({ type: 'input_image', file_id: fileId });
                        }
                    }
                    if (attachmentImageCount > 0 && imageInputItems.length === beforeTotal) {
                        throw new Error('图片附件解析失败：请确认附件为图片且当前有权限下载该附件');
                    }
                }
                else if (Array.isArray(images)) {
                    images.forEach(v => extractUrlsFromUnknown(v));
                }
                else {
                    extractUrlsFromUnknown(images);
                }
            }
            const resolveImageInputItems = async (items) => {
                const resolved = [];
                const hasImageUrl = items.some(it => it && typeof it === 'object' && typeof it.image_url === 'string');
                const urlItems = items.filter(it => it && typeof it === 'object' && typeof it.image_url === 'string');
                const urlToFilename = (url) => {
                    try {
                        const u = new URL(url);
                        const last = u.pathname.split('/').filter(Boolean).pop();
                        return last || 'image';
                    }
                    catch {
                        return 'image';
                    }
                };
                for (const it of items) {
                    if (resolved.length >= 10)
                        break;
                    if (it && typeof it === 'object' && it.file_id) {
                        resolved.push(it);
                        continue;
                    }
                    const url = it && typeof it === 'object' ? it.image_url : undefined;
                    if (typeof url !== 'string')
                        continue;
                    const { buf, contentType } = await downloadByUrlBuffer(url);
                    if (!buf)
                        continue;
                    const fileId = await uploadBufferToArk(buf, urlToFilename(url), contentType);
                    resolved.push({ type: 'input_image', file_id: fileId });
                }
                if (hasImageUrl && resolved.length === 0) {
                    const fallback = urlItems.slice(0, 10).map(it => ({ type: 'input_image', image_url: it.image_url }));
                    if (fallback.length === 0) {
                        throw new Error('图片下载失败：请检查图片链接是否可访问');
                    }
                    return fallback;
                }
                return resolved;
            };
            const resolvedImageItems = await resolveImageInputItems(imageInputItems);
            // 2. 构造 API 请求 Body
            const apiUrl = 'https://ark.cn-beijing.volces.com/api/v3/responses'; // 使用 Responses API
            let input;
            const shouldUseWebSearch = normalizedWebSearch === 'true' || normalizedWebSearch === true;
            const shouldUseWebSearchTool = shouldUseWebSearch;
            if (resolvedImageItems.length > 0) {
                const content = [...resolvedImageItems.slice(0, 10)];
                content.push({ type: 'input_text', text: String(normalizedPrompt ?? '') });
                input = [{ role: 'user', content }];
            }
            else if (shouldUseWebSearchTool) {
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
                    'Authorization': `Bearer ${effectiveApiKey}`,
                },
                body: JSON.stringify(requestBody),
            });
            if (res?.code === -1) {
                throw new Error(JSON.stringify(res.error));
            }
            if (res?.error) {
                const errMsg = formatArkErrorMessage(res);
                throw new Error(errMsg || `请求失败：${JSON.stringify(res.error).slice(0, 2000)}`);
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
            const errMsg = e instanceof Error ? e.message : String(e);
            const groupKey = String(context?.recordID || context?.logID || Date.now());
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: {
                    groupKey,
                    result: `Error: ${errMsg}`,
                    thinking: '',
                    usage: '',
                    cost: 0,
                }
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRkFBK0g7QUFDL0gsMERBQWlDO0FBQ2pDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxnQ0FBSyxDQUFDO0FBRXBCLGNBQWM7QUFDZCxrQ0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNwQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsa0RBQWtEO0lBQ2xELGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLGNBQWM7SUFDZCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixzQkFBc0I7Q0FDdkIsQ0FBQyxDQUFDO0FBRUgsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixnQkFBZ0I7SUFDaEIsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixhQUFhLEVBQUUsU0FBUztnQkFDeEIsUUFBUSxFQUFF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