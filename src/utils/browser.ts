/**
 * 设备类型
 */
interface DeviceType {
  match: Fn;
}

/**
 * 浏览器型号
 */
interface BrowserType {
  browser: string;
  version: string;
}

/**
 * Record
 */
type Recordable<T = any> = Record<string, T>;

interface Performance {
  // DNS查询耗时（单位：秒）
  dns: number;
  // TCP连接耗时（单位：秒）
  tcp: number;
  // Request请求耗时（单位：秒）
  request: number;
  // 解释DOM树耗时（单位：秒）
  dom: number;
  // 白屏时间（单位：秒）
  whiteScreen: number;
  // 首屏时间（单位：秒）
  firstScreen: number;
}

const deviceDetection = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

const getBrowserInfo = (): any => {
  const agent = navigator.userAgent.toLowerCase();
  const regStr_ie = /msie [\d.]+;/gi;
  const regStr_ff = /firefox\/[\d.]+/gi;
  const regStr_chrome = /chrome\/[\d.]+/gi;
  const regStr_saf = /safari\/[\d.]+/gi;
  const regStr_safVersion = /version\/[\d.]+/gi;
  //IE
  if (agent.indexOf("msie") > 0) {
    return regArrToObject(agent.match(regStr_ie));
  }
  //firefox
  else if (agent.indexOf("firefox") > 0) {
    return regArrToObject(agent.match(regStr_ff));
  }
  //Chrome
  else if (agent.indexOf("chrome") > 0) {
    return regArrToObject(agent.match(regStr_chrome));
  }
  //Safari
  else if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    const browser = agent.match(regStr_saf)[0].split("/")[0];
    const version = agent.match(regStr_safVersion)[0].split("/")[1];
    return {
      browser,
      version
    };
  } else {
    return {
      browser: "unknown",
      version: "unknown"
    };
  }
};

const regArrToObject = (arr: string[]) => {
  const temp = arr[0].split("/");
  return {
    browser: temp[0],
    version: temp[1]
  };
};

const isEqualObject = (
  obj: Record<string, unknown> | undefined,
  other: Record<string, unknown> | undefined
): boolean => {
  if (obj && other) {
    return Object.keys(obj).every(key => obj[key] === other[key]);
  }
  return false;
};

const isEqualArray = (
  arr: unknown[] | undefined,
  other: unknown[] | undefined
): boolean => {
  if (arr && other) {
    return arr.every(item => other.indexOf(item) > -1);
  }
  return false;
};

/**
 * @description 处理FormData传参
 * @param obj 参数，对象格式
 * @returns FormData
 */
const formDataHandler = (obj: any): FormData => {
  const formData = new FormData();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
};

/**
 * @name: 判断某值是某种类型
 * @param {unknown} val
 * @param {string} type
 * @return {boolean}
 */
const is = (val: unknown, type: string): boolean => {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
};

/**
 * @name: 是否是对象object
 * @param val
 * @return {boolean}
 */
const isObject = (val: unknown): boolean => {
  return is(val, "Object");
};

/**
 * @name: 是否是普通对象，该对象由 Object 构造函数创建，或者 `[[Prototype]]` 为 `null`
 * @param val 要检查的值
 * @return {boolean}
 */
const isPlainObject = (val: unknown): boolean => {
  return isObject(val) && Object.getPrototypeOf(val) === Object.prototype;
};

/**
 * @name: 是否是非 undefined
 * @return {boolean}
 */
const isNotUndefined = (val: unknown): boolean => {
  return val !== undefined;
};

/**
 * @name: 是否为空，针对 `数组`、`对象`、`字符串`、`new Map()`、`new Set()` 进行判断
 * @return {boolean}
 */
const isEmpty = <T = unknown>(val: T): val is T => {
  if (isPlainObject(val) || isObject(val)) {
    return Object.keys(val).length === 0;
  }
  if (Array.isArray(val)) {
    return val.length === 0;
  }
  if (!val) {
    // null 或者空字符串
    return true;
  }
};

/**
 * @name: 是否是闰年
 * @return {boolean}
 */
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * @name: 是否是合法的日期
 * @return {boolean}
 */
const isValidDate = (date: Date): boolean => {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date.getTime())
  );
};

/**
 * @name: 是否是标准的JSON 格式
 * @return {boolean}
 */
const isJSON = (val: unknown): boolean => {
  if (typeof val === "string") {
    try {
      JSON.parse(val);
      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
};

/**
 * @name: 是否是window
 * @param {any} val
 * @return {boolean}
 */
const isWindow = (val: any): boolean => {
  return val !== null && val !== undefined && val === val.window;
};

/**
 * @name: 是否是 `hex`
 * @param {string} color
 * @return {boolean}
 */
const isHex = (color: string): boolean => {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color);
};

/**
 * @name: 是否是rgb
 * @param {string} color
 * @return {boolean}
 */
const isRgb = (color: string): boolean => {
  return /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color);
};

/**
 * @name: 是否是rgba
 * @param {string} color
 * @return {boolean}
 */
const isRgba = (color: string): boolean => {
  return /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),([01](\.\d+)?)\)$/.test(color);
};

/**
 * @name: 链接正则
 * @param {string} val
 * @return {boolean}
 */
const isUrl = (val: string): boolean => {
  return /^(https?|ftp|file):\/\/([\w-]+(\.[\w-]+)*)(\/?[\w-._?=]*)*$/.test(
    val
  );
};

/**
 * @name: 手机号码正则
 * @param {string} val
 * @return {boolean}
 */
const isPhone = (val: string): boolean => {
  return /^1[3456789]\d{9}$/.test(val);
};

/**
 * @name: 邮箱正则
 * @param {string} val
 * @return {boolean}
 */
const isEmail = (val: string): boolean => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val);
};

/**
 * @name: 求数字数组平均值
 * @param {Array} list
 * @param {number} precision 几位小数，默认两位
 * @return {number}
 */
const numAverage = (list: Array<number>, precision = 2): number => {
  if (!list || !list.length) return 0;
  return ~~(list.reduce((a, b) => a + b, 0) / list.length).toFixed(precision);
};

/**
 * @name: 将字节单位转化为Bytes KB MB GB TB PB
 * @param {number} byte
 * @param {number} digits
 * @return {*}
 */
const formatBytes = (byte: number, digits?: number): string => {
  const unit = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const k = 1024;
  const d = digits || 2;
  const i = Math.floor(Math.log(byte) / Math.log(k));
  return `${(byte / Math.pow(k, i)).toFixed(d)}${unit[i]}`;
};

/**
 * @name: 横线转驼峰命名
 * @param {string} str
 * @return {string} 转换后的字符串
 */
const nameCamelize = (str: string): string => {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
};

/**
 * @name: 驼峰命名转横线
 * @param {string} str
 * @return {*}
 */
const nameHyphenate = (str: string): string => {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};

/**
 * @name: 获取当前页面在加载和使用期间发生各种事件的性能计时信息
 * @return {Performance} 单位：秒
 */
const getPerformance = (): Performance => {
  const performanceTiming = window.performance.toJSON().timing;
  const {
    domainLookupEnd,
    domainLookupStart,
    connectEnd,
    connectStart,
    domComplete,
    domContentLoadedEventEnd,
    domContentLoadedEventStart,
    domLoading,
    requestStart,
    responseStart,
    domInteractive,
    navigationStart
  } = performanceTiming;
  return {
    dns: domainLookupEnd - domainLookupStart,
    tcp: connectEnd - connectStart,
    request: responseStart - requestStart,
    dom: domComplete - domLoading,
    whiteScreen: domContentLoadedEventEnd - domContentLoadedEventStart,
    firstScreen: domInteractive - navigationStart
  };
};

/**
 * @name: 时间戳转化为秒，保留两位小数
 * @return {*}
 */
// const timestampToSeconds = (timestamp: number): number => {
//   return ~~(timestamp / 1000).toFixed(2);
// };

/**
 * @name: 提取浏览器 url 中所有参数
 * @param url 超链接地址
 * @return {Object} 所有参数组成的对象
 */
const getQueryMap = (url: string): object => {
  const query = url.split("?")[1];
  const queryMap = {};
  if (query) {
    query.split("&").forEach(item => {
      const [key, value] = item.split("=");
      queryMap[key] = value;
    });
  }
  return queryMap;
};

export {
  deviceDetection,
  getBrowserInfo,
  isEqualObject,
  isEqualArray,
  formDataHandler,
  is,
  isObject,
  isPlainObject,
  isNotUndefined,
  isEmpty,
  isLeapYear,
  isValidDate,
  isJSON,
  isWindow,
  isHex,
  isRgb,
  isRgba,
  isUrl,
  isPhone,
  isEmail,
  numAverage,
  formatBytes,
  nameCamelize,
  nameHyphenate,
  getPerformance,
  getQueryMap
};
export type { DeviceType, BrowserType, Recordable };
